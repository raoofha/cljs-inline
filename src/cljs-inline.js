(()=>{
  cljs.core.enable_console_print_BANG_();
  let load = (url)=> fetch(url).then((d)=>d.text());
  let compiler_state = cljs.js.empty_state();
  let cljs_inline = {};
  goog.isProvided_ = ()=>false;
  cljs_inline.eval = (f, ns = cljs.core.symbol("cljs.user"))=> {
    cljs.analyzer.analyze(
      compiler_state,
      f,
      null, 
      cljs.core.hash_map(
        cljs.core.keyword("ns"), ns
      )
    );
    return cljs.js.eval(
      compiler_state,
      f,
      cljs.core.hash_map(
        cljs.core.keyword("ns"), ns,
        cljs.core.keyword("def-emits-var"), true,
        cljs.core.keyword("context"), cljs.core.keyword("expr"),
        cljs.core.keyword("eval"), cljs.js.js_eval,
        //cljs.core.keyword("eval"), cljs.core.prn,
        cljs.core.keyword("load"), (opts,cb)=>{
          let name = cljs.core.get(opts,cljs.core.keyword("name"));
          cb(cljs.core.hash_map(
            cljs.core.keyword("source"), f,
            cljs.core.keyword("lang"), cljs.core.keyword("js"),
            //cljs.core.keyword("cache"), cljs.core.get_in(cljs.core.deref(compiler_state),cljs.core.vector(cljs.core.keyword("cljs.analyzer/namespaces"), name))
            //cljs.core.keyword("cache"), cljs.core.hash_map()
            cljs.core.keyword("cache"), cljs.analyzer.get_namespace(compiler_state, name)
          ));
        },
      ),
      cljs.core.identity
    );
  }
  cljs_inline.eval_str = (s, ns = cljs.core.symbol("cljs.user"))=> {
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
        cljs.core.keyword("eval"), cljs.js.js_eval,
        //cljs.core.keyword("eval"), cljs.core.prn,
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
        cljs.core.keyword("context"), cljs.core.keyword("statment"),
        //cljs.core.keyword("eval"), cljs.js.js_eval,
        cljs.core.keyword("eval"), cljs.core.prn,
        cljs.core.keyword("load"), (opts,cb)=>{
          let name = cljs.core.get(opts,cljs.core.keyword("name"));
          cb(cljs.core.hash_map(
            cljs.core.keyword("source"), s,
            cljs.core.keyword("lang"), cljs.core.keyword("js"),
            //cljs.core.keyword("cache"), cljs.core.get_in(cljs.core.deref(compiler_state),cljs.core.vector(cljs.core.keyword("cljs.analyzer/namespaces"), name))
            cljs.core.keyword("cache"), cljs.analyzer.get_namespace(compiler_state, name)
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

  cljs_inline.eval_all = (s, ns = cljs.core.symbol("cljs.user"))=> {
    let forms = cljs.reader.read_string("(" + s + "\n)");
    let l = cljs.core.count(forms);
    let r;
    for(let i = 0; i < l ; i++){
      let form = cljs.core.get(forms, i);
      r = cljs_inline.eval(form, ns);
      ns = cljs.core.get(r, cljs.core.keyword("ns"));
    }
    return r;
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
