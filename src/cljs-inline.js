(()=>{
  cljs.core.enable_console_print_BANG_();
  let load = (url)=> fetch(url).then((d)=>d.text());
  let compiler_state = cljs.js.empty_state();
  let cljs_inline = {};
  goog.isProvided_ = ()=>false;
  //window.cljs_eval = (s, ns = "cljs.user")=>{
  cljs_inline.eval = (s, ns = cljs.core.symbol("cljs.user"))=> {
    cljs.js.analyze_str(
      compiler_state,
      s,
      "", 
      cljs.core.hash_map(
        cljs.core.keyword("ns"), ns
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
        cljs.core.keyword("context"), cljs.core.keyword("expr"),
        cljs.core.keyword("eval"), cljs.js.js_eval,
        //cljs.core.keyword("eval"), cljs.core.prn,
        cljs.core.keyword("load"), (opts,cb)=>{
          let name = cljs.core.get(opts,cljs.core.keyword("name"));
          cb(cljs.core.hash_map(
            cljs.core.keyword("source"), s,
            cljs.core.keyword("lang"), cljs.core.keyword("js"),
            cljs.core.keyword("cache"), cljs.core.get_in(cljs.core.deref(compiler_state),cljs.core.vector(cljs.core.keyword("cljs.analyzer/namespaces"), name))
            //cljs.core.keyword("cache"), cljs.core.hash_map()
          ));
        },
      ),
      cljs.core.identity
    );
  }
  cljs_inline.compile_str = (s, ns = cljs.core.symbol("cljs.user"))=> {
    cljs.js.analyze_str(
      compiler_state,
      s,
      "", 
      cljs.core.hash_map(
        cljs.core.keyword("ns"), ns
      ),
      cljs.core.identity
    );
    return cljs.js.compile_str(
      compiler_state,
      s,
      "", 
      cljs.core.hash_map(
        cljs.core.keyword("ns"), ns,
        cljs.core.keyword("def-emits-var"), true,
        //cljs.core.keyword("context"), cljs.core.keyword("expr"),
        //cljs.core.keyword("eval"), cljs.js.js_eval,
        cljs.core.keyword("eval"), cljs.core.prn,
        cljs.core.keyword("load"), (opts,cb)=>{
          let name = cljs.core.get(opts,cljs.core.keyword("name"));
          cb(cljs.core.hash_map(
            cljs.core.keyword("source"), s,
            cljs.core.keyword("lang"), cljs.core.keyword("js"),
            cljs.core.keyword("cache"), cljs.core.get_in(cljs.core.deref(compiler_state),cljs.core.vector(cljs.core.keyword("cljs.analyzer/namespaces"), name))
          ));
        },
      ),
      //cljs.core.identity
      (opts)=> {
        let value = cljs.core.get(opts, cljs.core.keyword("value"));
        console.log(value);
        return eval(value);
      }
    );
  }

  window.e = (strings)=> {
    let e = cljs_inline.eval(strings.join(""));
    let value = cljs.core.get(e, cljs.core.keyword("value"));
    let error = cljs.core.get(e, cljs.core.keyword("error"));
    if (error){
      console.error(cljs.core.pr_str(e));
      return value;
    }
    //return cljs.core.pr_str(value);
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
  async function run_scripts(){
    let scripts = document.getElementsByTagName("script");
    for(let i = 0; i < scripts.length; i++){
      let script = scripts[i];
      if(script.type === "text/cljs"){
        cljs_inline.eval(await load_script(script));
      }
    }
  }

  addEventListener("DOMContentLoaded", run_scripts, false);
  window.cljs_inline = cljs_inline;
})();
