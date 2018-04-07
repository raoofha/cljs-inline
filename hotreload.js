#! /usr/bin/env node
var express = require("express");
var fs = require("fs");
var path = require("path");
var chokidar = require('chokidar');
const chalk = require('chalk');
const WebSocket = require("ws");
const bodyParser = require("body-parser");
const execSync = require('child_process').execSync;
const http = require("http");
const rlv = require('readline-vim')
const readline = require('readline');
const exec = require("child_process").exec;

var wd = process.cwd();
var opts = require('minimist')(process.argv.slice(2),{
  default:{
    port : 3000,
  }
});

var app = express();
let server = http.createServer(app);
let wss = new WebSocket.Server({server});
var indexFileLoc;
var cached = {};
let lastNS = "cljs.user";

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
app.use(bodyParser.text());

indexFileLoc = path.join(wd, "index.html");

if(opts.w){
  var watcher = chokidar.watch(wd, { ignored: [/(^|[\/\\])\./, /node_modules$/] })
  var lastmtime = null;
  watcher.on("ready", ()=> {
    watcher
      .on("add", p => {
        console.log(chalk.blue("add "+p));
        changeHandler(p);
      })
      .on("change", (p,stat)=> {
        let cond = lastmtime !== stat.mtime.toString();
        console.log();
        if(cond){
          console.log(chalk.blue("change "+p));
          changeHandler(p);
        }else{
          console.log("change "+p,chalk.red("this shouldn't happen. probably you are using vim."));
        }
        lastmtime = stat.mtime.toString();
        rl.prompt();
      })
  });
}

wss.on("connection", (ws)=>{
  //console.log();
  //console.log(chalk.green("connected: ready to repl."));
  rl.prompt();
  ws.on("message", (m)=>{
    try{
      let data = JSON.parse(m);
      switch(data.cmd){
        case "console.log":
          console.log.apply(null,data.args);
          break;
        case "console.error":
          console.error.apply(null,data.args);
          break;
        case "console.info":
          console.error.apply(null,data.args);
          break;
        case "console.warn":
          console.warn.apply(null,data.args);
          break;
        case "cljs-eval-result":
          if(data.error){
            console.log(chalk.red(data.error));
          }else{
            console.log(data.value);
            lastNS = data.ns || lastNS;
            rl.setPrompt(lastNS +"=> ");
          }
          rl.prompt();
          break;
        case "connected":
          ws.send(JSON.stringify({cmd:"connected"}));
          //console.log("connected");
          break;
        case "process.exit":
          process.exit(0);
          break; }
    }catch(e){
    }
  });
});


var changeHandler = (p)=> {
  cached[p] = false;
  buildClient();
  wss.clients.forEach((ws)=>{
    if(p.endsWith(".html")){
      ws.send(JSON.stringify({cmd:"reload"}));
    }else if(p.endsWith(".js")){
      ws.send(JSON.stringify({cmd:"eval-js",path:p,file:fs.readFileSync(p,"utf8")}));
    }else if(p.endsWith(".cljs")){
      ws.send(JSON.stringify({cmd:"eval-cljs-repl",path:p,file:fs.readFileSync(p,"utf8"),ns:lastNS}));
    }
  });
}

const buildClient = (dev = true)=>{
  let $;
  if(!cached[indexFileLoc]){
    if (!fs.existsSync(indexFileLoc)){
      cached[indexFileLoc] = fs.readFileSync(__dirname + "/src/index.html","utf8");
    }else{
      cached[indexFileLoc] = fs.readFileSync(
        indexFileLoc,"utf8") + 
        `<script src="/cljs.js"></script><script src="/cljs-inline.js"></script><script src="/hotreload-client.js"></script>`
    }
  }
  return cached[indexFileLoc];
};

app.get("/", (req, res, next)=>{
  res.send(buildClient());
});

app.post("/hotreload/*", (req, res, next)=>{
  if(!path.relative(wd,req.params[0]).startsWith("..")){
    wss.clients.forEach((ws)=>{
        ws.send(JSON.stringify({path:req.params[0],file:req.body,ns:lastNS}));
      //console.log("hotreload send");
    });
    console.log();
  }
  //console.log("path:", req.params[0]);
  res.send("")
});

app.use(express.static(wd));
app.use(express.static(__dirname + "/dist"));
app.use(express.static(__dirname + "/src"));
server.listen( opts.port , ()=>{
  //console.log(chalk.green(`serving at http://localhost:${ opts.port }`));
  //exec(`/usr/bin/env xdg-open http://localhost:${ opts.port }`);
  changeHandler(indexFileLoc);
  //setTimeout(()=> changeHandler(indexFileLoc), 1000);
  //rl.prompt();
});


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var vim = rlv(rl);

rl.setPrompt(lastNS + "=> ");
rl.on('line', (line) => {
  if(line === "") {
    rl.prompt();
  }else if (line.startsWith(":node ")){
    console.log(eval(line.substring(6)));
    rl.prompt();
  }else{
    wss.clients.forEach((ws)=>{
      ws.send(JSON.stringify({cmd:"eval-cljs-repl",file:line, ns:lastNS}));
    });
  }
}).on('close', () => {
  //wss.clients.forEach((ws)=>{
    //ws.send(JSON.stringify({cmd:"close"}));
  //});
  process.exit(0);
});
