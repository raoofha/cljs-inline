// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('clojurescript.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.js');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('cljs.analyzer');
cljs.core.enable_console_print_BANG_();
goog.isProvided_ = (function (){
return false;
});
clojurescript.core.compiler_state = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
clojurescript.core.root_classpath = "/.cljs/";
clojurescript.core.load = (function clojurescript$core$load(url){
return fetch(url).then((function (d){
if(cljs.core.not(d.ok)){
throw (new Error(["failed loading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('')));
} else {
return d.text();
}
}));
});
clojurescript.core.eval_str = (function clojurescript$core$eval_str(var_args){
var G__26436 = arguments.length;
switch (G__26436) {
case 1:
return clojurescript.core.eval_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojurescript.core.eval_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojurescript.core.eval_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojurescript.core.eval_str.cljs$core$IFn$_invoke$arity$1 = (function (s){
return clojurescript.core.eval_str.cljs$core$IFn$_invoke$arity$2(s,cljs.core.cst$sym$cljs$user);
});

clojurescript.core.eval_str.cljs$core$IFn$_invoke$arity$2 = (function (s,ns){
return clojurescript.core.eval_str.cljs$core$IFn$_invoke$arity$3(s,ns,eval);
});

clojurescript.core.eval_str.cljs$core$IFn$_invoke$arity$3 = (function (s,ns,js_eval){
cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5(clojurescript.core.compiler_state,s,"",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$context,cljs.core.cst$kw$statment], null),cljs.core.identity);

return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(clojurescript.core.compiler_state,s,"",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$context,cljs.core.cst$kw$statment,cljs.core.cst$kw$def_DASH_emits_DASH_var,true,cljs.core.cst$kw$eval,(function (p1__26434_SHARP_){
var G__26437 = cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(p1__26434_SHARP_);
return (js_eval.cljs$core$IFn$_invoke$arity$1 ? js_eval.cljs$core$IFn$_invoke$arity$1(G__26437) : js_eval.call(null,G__26437));
}),cljs.core.cst$kw$load,(function (p__26438,cb){
var map__26439 = p__26438;
var map__26439__$1 = ((((!((map__26439 == null)))?((((map__26439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26439):map__26439);
var opts = map__26439__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26439__$1,cljs.core.cst$kw$name);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26439__$1,cljs.core.cst$kw$path);
var macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26439__$1,cljs.core.cst$kw$macros);
var rpath = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojurescript.core.root_classpath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
var path1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rpath),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(macros)?".clj":".cljs"))].join('');
var path2 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rpath),".cljc"].join('');
var path3 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rpath),".js"].join('');
var load_cb = ((function (rpath,path1,path2,path3,map__26439,map__26439__$1,opts,n,path,macros){
return (function (s__$1){
var G__26441 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lang,cljs.core.cst$kw$clj,cljs.core.cst$kw$source,s__$1,cljs.core.cst$kw$cache,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(clojurescript.core.compiler_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,n], null))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__26441) : cb.call(null,G__26441));
});})(rpath,path1,path2,path3,map__26439,map__26439__$1,opts,n,path,macros))
;
var load_js_cb = ((function (rpath,path1,path2,path3,load_cb,map__26439,map__26439__$1,opts,n,path,macros){
return (function (s__$1){
var G__26442 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lang,cljs.core.cst$kw$js,cljs.core.cst$kw$source,s__$1,cljs.core.cst$kw$cache,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(clojurescript.core.compiler_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,n], null))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__26442) : cb.call(null,G__26442));
});})(rpath,path1,path2,path3,load_cb,map__26439,map__26439__$1,opts,n,path,macros))
;
return clojurescript.core.load(path1).then(load_cb).catch(((function (rpath,path1,path2,path3,load_cb,load_js_cb,map__26439,map__26439__$1,opts,n,path,macros){
return (function (){
return clojurescript.core.load(path2).then(load_cb).catch(((function (rpath,path1,path2,path3,load_cb,load_js_cb,map__26439,map__26439__$1,opts,n,path,macros){
return (function (){
if(cljs.core.not(macros)){
return clojurescript.core.load(path3).then(load_js_cb).catch(((function (rpath,path1,path2,path3,load_cb,load_js_cb,map__26439,map__26439__$1,opts,n,path,macros){
return (function (){
var G__26443_26445 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lang,cljs.core.cst$kw$js,cljs.core.cst$kw$source,""], null);
(cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__26443_26445) : cb.call(null,G__26443_26445));

return console.error(["path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path1)," , ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path2)," , ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path3)," not found"].join(''));
});})(rpath,path1,path2,path3,load_cb,load_js_cb,map__26439,map__26439__$1,opts,n,path,macros))
);
} else {
return console.error(["path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path1)," , ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path2)," not found"].join(''));
}
});})(rpath,path1,path2,path3,load_cb,load_js_cb,map__26439,map__26439__$1,opts,n,path,macros))
);
});})(rpath,path1,path2,path3,load_cb,load_js_cb,map__26439,map__26439__$1,opts,n,path,macros))
);
})], null),cljs.core.identity);
});

clojurescript.core.eval_str.cljs$lang$maxFixedArity = 3;

clojurescript.core.load_script = (function clojurescript$core$load_script(script){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(script.src,"")){
clojurescript.core.load(script.src).then(((function (c){
return (function (p1__26446_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,p1__26446_SHARP_);
});})(c))
);
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,script.innerHTML);
}

return c;
});
clojurescript.core.run_scripts = (function clojurescript$core$run_scripts(){
var scripts = document.getElementsByTagName("script");
var c__24488__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24488__auto__,scripts){
return (function (){
var f__24489__auto__ = (function (){var switch__24386__auto__ = ((function (c__24488__auto__,scripts){
return (function (state_26489){
var state_val_26490 = (state_26489[(1)]);
if((state_val_26490 === (7))){
var inst_26452 = (state_26489[(7)]);
var inst_26456 = clojurescript.core.load_script(inst_26452);
var state_26489__$1 = state_26489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26489__$1,(10),inst_26456);
} else {
if((state_val_26490 === (1))){
var inst_26447 = (0);
var state_26489__$1 = (function (){var statearr_26491 = state_26489;
(statearr_26491[(8)] = inst_26447);

return statearr_26491;
})();
var statearr_26492_26518 = state_26489__$1;
(statearr_26492_26518[(2)] = null);

(statearr_26492_26518[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26490 === (4))){
var inst_26447 = (state_26489[(8)]);
var inst_26452 = (state_26489[(7)]);
var inst_26452__$1 = (scripts[inst_26447]);
var inst_26453 = inst_26452__$1.type;
var inst_26454 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26453,"text/cljs");
var state_26489__$1 = (function (){var statearr_26493 = state_26489;
(statearr_26493[(7)] = inst_26452__$1);

return statearr_26493;
})();
if(inst_26454){
var statearr_26494_26519 = state_26489__$1;
(statearr_26494_26519[(1)] = (7));

} else {
var statearr_26495_26520 = state_26489__$1;
(statearr_26495_26520[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26490 === (15))){
var inst_26447 = (state_26489[(8)]);
var inst_26474 = (inst_26447 + (1));
var inst_26447__$1 = inst_26474;
var state_26489__$1 = (function (){var statearr_26496 = state_26489;
(statearr_26496[(8)] = inst_26447__$1);

return statearr_26496;
})();
var statearr_26497_26521 = state_26489__$1;
(statearr_26497_26521[(2)] = null);

(statearr_26497_26521[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26490 === (13))){
var inst_26480 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
var statearr_26498_26522 = state_26489__$1;
(statearr_26498_26522[(2)] = inst_26480);

(statearr_26498_26522[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26490 === (6))){
var inst_26485 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
var statearr_26499_26523 = state_26489__$1;
(statearr_26499_26523[(2)] = inst_26485);

(statearr_26499_26523[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26490 === (17))){
var inst_26478 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
var statearr_26500_26524 = state_26489__$1;
(statearr_26500_26524[(2)] = inst_26478);

(statearr_26500_26524[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26490 === (3))){
var inst_26487 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26489__$1,inst_26487);
} else {
if((state_val_26490 === (12))){
var state_26489__$1 = state_26489;
var statearr_26501_26525 = state_26489__$1;
(statearr_26501_26525[(1)] = (15));



return cljs.core.cst$kw$recur;
} else {
if((state_val_26490 === (2))){
var inst_26447 = (state_26489[(8)]);
var inst_26449 = scripts.length;
var inst_26450 = (inst_26447 < inst_26449);
var state_26489__$1 = state_26489;
if(cljs.core.truth_(inst_26450)){
var statearr_26503_26526 = state_26489__$1;
(statearr_26503_26526[(1)] = (4));

} else {
var statearr_26504_26527 = state_26489__$1;
(statearr_26504_26527[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26490 === (11))){
var inst_26452 = (state_26489[(7)]);
var inst_26466 = clojurescript.core.load_script(inst_26452);
var state_26489__$1 = state_26489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26489__$1,(14),inst_26466);
} else {
if((state_val_26490 === (9))){
var inst_26482 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
var statearr_26505_26528 = state_26489__$1;
(statearr_26505_26528[(2)] = inst_26482);

(statearr_26505_26528[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26490 === (5))){
var state_26489__$1 = state_26489;
var statearr_26506_26529 = state_26489__$1;
(statearr_26506_26529[(2)] = null);

(statearr_26506_26529[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26490 === (14))){
var inst_26447 = (state_26489[(8)]);
var inst_26468 = (state_26489[(2)]);
var inst_26469 = eval(inst_26468);
var inst_26470 = (inst_26447 + (1));
var inst_26447__$1 = inst_26470;
var state_26489__$1 = (function (){var statearr_26507 = state_26489;
(statearr_26507[(9)] = inst_26469);

(statearr_26507[(8)] = inst_26447__$1);

return statearr_26507;
})();
var statearr_26508_26530 = state_26489__$1;
(statearr_26508_26530[(2)] = null);

(statearr_26508_26530[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26490 === (16))){
var state_26489__$1 = state_26489;
var statearr_26509_26531 = state_26489__$1;
(statearr_26509_26531[(2)] = null);

(statearr_26509_26531[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26490 === (10))){
var inst_26447 = (state_26489[(8)]);
var inst_26458 = (state_26489[(2)]);
var inst_26459 = clojurescript.core.eval_str.cljs$core$IFn$_invoke$arity$1(inst_26458);
var inst_26460 = (inst_26447 + (1));
var inst_26447__$1 = inst_26460;
var state_26489__$1 = (function (){var statearr_26510 = state_26489;
(statearr_26510[(8)] = inst_26447__$1);

(statearr_26510[(10)] = inst_26459);

return statearr_26510;
})();
var statearr_26511_26532 = state_26489__$1;
(statearr_26511_26532[(2)] = null);

(statearr_26511_26532[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26490 === (8))){
var inst_26452 = (state_26489[(7)]);
var inst_26463 = inst_26452.type;
var inst_26464 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26463,"text/js");
var state_26489__$1 = state_26489;
if(inst_26464){
var statearr_26512_26533 = state_26489__$1;
(statearr_26512_26533[(1)] = (11));

} else {
var statearr_26513_26534 = state_26489__$1;
(statearr_26513_26534[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24488__auto__,scripts))
;
return ((function (switch__24386__auto__,c__24488__auto__,scripts){
return (function() {
var clojurescript$core$run_scripts_$_state_machine__24387__auto__ = null;
var clojurescript$core$run_scripts_$_state_machine__24387__auto____0 = (function (){
var statearr_26514 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26514[(0)] = clojurescript$core$run_scripts_$_state_machine__24387__auto__);

(statearr_26514[(1)] = (1));

return statearr_26514;
});
var clojurescript$core$run_scripts_$_state_machine__24387__auto____1 = (function (state_26489){
while(true){
var ret_value__24388__auto__ = (function (){try{while(true){
var result__24389__auto__ = switch__24386__auto__(state_26489);
if(cljs.core.keyword_identical_QMARK_(result__24389__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24389__auto__;
}
break;
}
}catch (e26515){if((e26515 instanceof Object)){
var ex__24390__auto__ = e26515;
var statearr_26516_26535 = state_26489;
(statearr_26516_26535[(5)] = ex__24390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26489);

return cljs.core.cst$kw$recur;
} else {
throw e26515;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24388__auto__,cljs.core.cst$kw$recur)){
var G__26536 = state_26489;
state_26489 = G__26536;
continue;
} else {
return ret_value__24388__auto__;
}
break;
}
});
clojurescript$core$run_scripts_$_state_machine__24387__auto__ = function(state_26489){
switch(arguments.length){
case 0:
return clojurescript$core$run_scripts_$_state_machine__24387__auto____0.call(this);
case 1:
return clojurescript$core$run_scripts_$_state_machine__24387__auto____1.call(this,state_26489);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
clojurescript$core$run_scripts_$_state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$0 = clojurescript$core$run_scripts_$_state_machine__24387__auto____0;
clojurescript$core$run_scripts_$_state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$1 = clojurescript$core$run_scripts_$_state_machine__24387__auto____1;
return clojurescript$core$run_scripts_$_state_machine__24387__auto__;
})()
;})(switch__24386__auto__,c__24488__auto__,scripts))
})();
var state__24490__auto__ = (function (){var statearr_26517 = (f__24489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24489__auto__.cljs$core$IFn$_invoke$arity$0() : f__24489__auto__.call(null));
(statearr_26517[(6)] = c__24488__auto__);

return statearr_26517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24490__auto__);
});})(c__24488__auto__,scripts))
);

return c__24488__auto__;
});
addEventListener("DOMContentLoaded",clojurescript.core.run_scripts,false);
var G__26537_26540 = window;
var G__26538_26541 = "e";
var G__26539_26542 = ((function (G__26537_26540,G__26538_26541){
return (function (strings){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(clojurescript.core.eval_str.cljs$core$IFn$_invoke$arity$1(strings.join("")));
});})(G__26537_26540,G__26538_26541))
;
goog.object.set(G__26537_26540,G__26538_26541,G__26539_26542);
