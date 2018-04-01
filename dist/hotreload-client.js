(function hotreload() {
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
    }
  }
  ws.onopen = () => {
    console.info("Hotreload Websocket connected.");
  }
  //ws.onerror = (e) => console.warn(e);
  ws.onclose = () => {
    console.warn("Hotreload Websocket closed.");
    setTimeout(hotreload, 3000);
  }
})();
