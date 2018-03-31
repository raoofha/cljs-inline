let ws = new WebSocket("ws://" + location.host + "/hotreload");
ws.onmessage = (m)=> {
  let data = JSON.parse(m.data);
  //console.log(data);
  if(!data.cmd){
    if(data.path.endsWith(".html")){
      data.cmd = "reload"
    }else if(data.path.endsWith(".js")){
      data.cmd = "eval-js"
    }else if(data.path.endsWith(".cljs")){
      data.cmd = "eval-cljs"
    }
  }

  switch(data.cmd){
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
  }
}
