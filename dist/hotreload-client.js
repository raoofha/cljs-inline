(function hotreload(firstLoad) {
  let url = "ws://" + location.host + "/hotreload";
  let ws;
  ws = new WebSocket(url);
  ws.onmessage = (m) => {
    let data = JSON.parse(m.data);
    //console.info("Hotreload", data.path);
    //console.log(data);
    if (!data.cmd) {
      if (data.path.endsWith(".html")) {
        data.cmd = "reload"
      } else if (data.path.endsWith(".js")) {
        data.cmd = "eval-js"
      } else if (data.path.endsWith(".cljs")) {
        data.cmd = "eval-cljs"
      }
    }

    switch (data.cmd) {
      case "reload":
        location.reload();
        break;
      case "reload-cache":
        location.reload(true);
        break;
      case "eval-js":
        eval(data.file);
        break;
      case "eval-cljs":
        cljs_inline.client.eval(data.file);
        break;
      case "eval-cljs-repl":
        let r = cljs.core.clj__GT_js(cljs_inline.client.eval(data.file));
        ws.send(JSON.stringify({cmd:"cljs-eval-result", value: cljs.core.pr_str(r.value),ns:r.ns}));
        break;
    }
  }
  ws.onopen = () => {
    //ws.send({cmd:"connected"});
  }
  //ws.onerror = (e) => console.warn(e);
  ws.onclose = () => {
    //console.warn("Hotreload Websocket closed.");
    setTimeout(hotreload, 3000);
  }

  if(firstLoad){
    window._o = {};
    window._o.console = {};
    _o.console.log = console.log;
    _o.console.error = console.error;
    _o.console.info = console.info;
    _o.console.warn = console.warn;
  }
  console.log = (...args)=>{
    if(ws.readyState === 1) ws.send(JSON.stringify({cmd:"console.log", args}));
    _o.console.log.apply(null,args);
  }
  console.error = (...args)=>{
    if(ws.readyState === 1) ws.send(JSON.stringify({cmd:"console.error", args}));
    _o.console.error.apply(null,args);
  }
  console.info = (...args)=>{
    if(ws.readyState === 1) ws.send(JSON.stringify({cmd:"console.info", args}));
    _o.console.info.apply(null,args);
  }
  console.warn = (...args)=>{
    if(ws.readyState === 1) ws.send(JSON.stringify({cmd:"console.warn", args}));
    _o.console.warn.apply(null,args);
  }
})(true);
