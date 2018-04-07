(()=>{
  cljs.core.enable_console_print_BANG_();
  let load = (url)=> fetch(url).then((d)=>d.text());
  let compiler_state = cljs.js.empty_state();
  let cljs_inline = {};
  goog.isProvided_ = ()=>false;
  cljs_inline.eval_str = (s, ns = cljs.core.symbol("cljs.user"), js_eval = window.eval)=> {
    cljs.js.analyze_str(
      compiler_state,
      s,
      "", 
      cljs.core.hash_map(
        cljs.core.keyword("ns"), ns,
        cljs.core.keyword("context"), cljs.core.keyword("statment"),
        //cljs.core.keyword("verbose"), true,
      ),
      cljs.core.identity
    );
    return cljs.js.eval_str(
      compiler_state,
      s,
      "", 
      cljs.core.hash_map(
        cljs.core.keyword("ns"), ns,
        cljs.core.keyword("def-emits-var"), true,
        //cljs.core.keyword("context"), cljs.core.keyword("expr"),
        cljs.core.keyword("context"), cljs.core.keyword("statment"),
        //cljs.core.keyword("eval"), cljs.js.js_eval,
        //cljs.core.keyword("eval"), cljs.core.prn,
        cljs.core.keyword("eval"), (opts)=> js_eval(cljs.core.get(opts,cljs.core.keyword("source"))),
        //cljs.core.keyword("verbose"), true,
        cljs.core.keyword("load"), (opts,cb)=>{
          let name = cljs.core.get(opts,cljs.core.keyword("name"));
          cb(cljs.core.hash_map(
            //cljs.core.keyword("source"), s,
            cljs.core.keyword("source"), "",
            cljs.core.keyword("lang"), cljs.core.keyword("js"),
            //cljs.core.keyword("lang"), cljs.core.keyword("clj"),
            //cljs.core.keyword("cache"), cljs.core.get_in(cljs.core.deref(compiler_state),cljs.core.vector(cljs.core.keyword("cljs.analyzer/namespaces"), name))
            //cljs.core.keyword("cache"), cljs.core.hash_map()
            cljs.core.keyword("cache"), cljs.analyzer.get_namespace(compiler_state, name)
          ));
        },
      ),
      cljs.core.identity
    );
  }

  window.e = (strings)=> {
    let e = cljs_inline.eval_str(strings.join(""));
    //let e = cljs_inline.eval_all(strings.join(""));
    //let e = clojure.browser.repl.evaluate_javascript(null, cljs_inline.compile_str(strings.join("")));
    //cljs.core.prn(e);
    let value = cljs.core.get(e, cljs.core.keyword("value"));
    let error = cljs.core.get(e, cljs.core.keyword("error"));
    if (error){
      console.error(cljs.core.pr_str(e));
    }
    return value;
  }
  window.e `(ns cljs.user)`;

  async function load_script(script){
    if (script.src) {
      return await load(script.src);
    }else{
      return script.innerHTML;
    }
  }
  cljs_inline.run_scripts = async function (){
    let scripts = document.getElementsByTagName("script");
    //let scripts = document.querySelectorAll("script[type='text/cljs']");
    for(let i = 0; i < scripts.length; i++){
      let script = scripts[i];
      if(script.type === "text/cljs"){
        cljs_inline.eval_str(await load_script(script));
      }else if(script.type === "text/js"){
        eval(await load_script(script));
      }
    }
  }

  addEventListener("DOMContentLoaded", cljs_inline.run_scripts, false);
  window.cljs_inline = cljs_inline;
})();
