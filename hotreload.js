#! /usr/bin/env node
var express = require("express");
var fs = require("fs");
var path = require("path");
var chokidar = require('chokidar');
const chalk = require('chalk');
const WebSocket = require("ws");
const bodyParser = require("body-parser");
const execSync = require('child_process').execSync;
const cheerio = require('cheerio')
const http = require("http");

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
var cached = {}

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
app.use(bodyParser.text());

indexFileLoc = path.join(wd, "index.html");

if(opts.w){
  var watcher = chokidar.watch(wd, { ignored: [/(^|[\/\\])\./, /node_modules$/] })
  var lastmtime = null;
  watcher.on("ready", ()=> {
    //console.log(chalk.green(`open http://localhost:${ opts.port }`));
    console.log(chalk.green("watching "+ wd));
    watcher
      .on("add", p => {
        console.log(chalk.blue("add "+p));
        changeHandler(p);
      })
      .on("change", (p,stat)=> {
        let cond = lastmtime !== stat.mtime.toString();
        if(cond){
          console.log(chalk.blue("change "+p));
          changeHandler(p);
        }else{
          console.log("change "+p,chalk.red("this shouldn't happen. probably you are using vim."));
        }
        lastmtime = stat.mtime.toString();
      })
  });
}

wss.on("connection", (w)=>{
  //console.log("websocket connected.");
})

var changeHandler = (p)=> {
  cached[p] = false;
  if(p === indexFileLoc) cached[indexFileLoc] = false;
  buildClient();
  wss.clients.forEach((ws)=>{
    if(p.endsWith(".html")){
      ws.send(JSON.stringify({cmd:"reload"}));
    }else if(p.endsWith(".js")){
      ws.send(JSON.stringify({cmd:"eval-js",path:p,file:fs.readFileSync(p,"utf8")}));
    }else if(p.endsWith(".cljs")){
      ws.send(JSON.stringify({cmd:"eval-cljs",path:p,file:fs.readFileSync(p,"utf8")}));
    }
  });
}

const buildClient = (dev = true)=>{
  let $;
  if(!cached[indexFileLoc]){
    if (!fs.existsSync(indexFileLoc)){
      //$ = fs.readFileSync(indexFileLoc,"utf8");
      $ = `<html>
<head>
  <style> body { margin: 0; color: gray; background-color: black; } #root { position: absolute;} </style>
</head>
<body>
  <div id="root"></div>
  <canvas id="canvas"></canvas>
  <script src="http://localhost:${ opts.port }/cljs-inline.js"></script>
  <script src="http://localhost:${ opts.port }/hotreload-client.js"></script>
  <script type="text/cljs" src="cg/core.cljs"></script>
</body>
</html>`;
      cached[indexFileLoc] = $;
    }else{
      $ = cheerio.load(fs.readFileSync(indexFileLoc,"utf8"))
      if(dev){
        $("body").append(`<script src="http://localhost:${ opts.port }/cljs-inline.js"></script>`)
        $("body").append(`<script src="http://localhost:${ opts.port }/hotreload-client.js"></script>`)
      }
      cached[indexFileLoc] = $.html();
    }
  }
  return cached[indexFileLoc];
};

app.get("/", (req, res, next)=>{
  res.send(buildClient());
});

app.post("/hotreload/*", (req, res, next)=>{
  wss.clients.forEach((ws)=>{
    ws.send(JSON.stringify({path:req.params[0],file:req.body}));
    //console.log("hotreload send");
  });
  //console.log("path:", req.params[0]);
  res.send("")
});

app.use(express.static(wd));
app.use(express.static(__dirname + "/dist"));
app.use(express.static(__dirname + "/src"));
server.listen( opts.port , ()=>{
  console.log(chalk.green(`serving at http://localhost:${ opts.port }`));
  changeHandler(indexFileLoc);
  //setTimeout(()=> changeHandler(indexFileLoc), 1000);
});
