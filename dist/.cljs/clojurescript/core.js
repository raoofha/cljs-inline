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
clojurescript.core.load = (function clojurescript$core$load(url,cb){
return fetch(url).then((function (d){
return d.text();
})).then(cb);
});
clojurescript.core.eval_str = (function clojurescript$core$eval_str(var_args){
var G__26433 = arguments.length;
switch (G__26433) {
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

return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(clojurescript.core.compiler_state,s,"",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$context,cljs.core.cst$kw$statment,cljs.core.cst$kw$def_DASH_emits_DASH_var,true,cljs.core.cst$kw$eval,(function (p1__26429_SHARP_){
var G__26434 = cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(p1__26429_SHARP_);
return (js_eval.cljs$core$IFn$_invoke$arity$1 ? js_eval.cljs$core$IFn$_invoke$arity$1(G__26434) : js_eval.call(null,G__26434));
}),cljs.core.cst$kw$load,(function (p__26435,cb){
var map__26436 = p__26435;
var map__26436__$1 = ((((!((map__26436 == null)))?((((map__26436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26436.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26436):map__26436);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26436__$1,cljs.core.cst$kw$name);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26436__$1,cljs.core.cst$kw$path);
var macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26436__$1,cljs.core.cst$kw$macros);
var paths = (cljs.core.truth_(macros)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojurescript.core.root_classpath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),".clj"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojurescript.core.root_classpath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),".cljc"].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojurescript.core.root_classpath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),".cljs"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojurescript.core.root_classpath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),".cljc"].join('')], null));
return clojurescript.core.load(cljs.core.first(paths),((function (paths,map__26436,map__26436__$1,n,path,macros){
return (function (p1__26430_SHARP_){
var G__26438 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lang,cljs.core.cst$kw$clj,cljs.core.cst$kw$source,p1__26430_SHARP_,cljs.core.cst$kw$cache,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(clojurescript.core.compiler_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,n], null))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__26438) : cb.call(null,G__26438));
});})(paths,map__26436,map__26436__$1,n,path,macros))
).catch(((function (paths,map__26436,map__26436__$1,n,path,macros){
return (function (){
return clojurescript.core.load(cljs.core.second(paths),((function (paths,map__26436,map__26436__$1,n,path,macros){
return (function (p1__26431_SHARP_){
var G__26439 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lang,cljs.core.cst$kw$clj,cljs.core.cst$kw$source,p1__26431_SHARP_,cljs.core.cst$kw$cache,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(clojurescript.core.compiler_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,n], null))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__26439) : cb.call(null,G__26439));
});})(paths,map__26436,map__26436__$1,n,path,macros))
);
});})(paths,map__26436,map__26436__$1,n,path,macros))
).catch(((function (paths,map__26436,map__26436__$1,n,path,macros){
return (function (){
throw (new Error(["path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(paths)," not found"].join('')));
});})(paths,map__26436,map__26436__$1,n,path,macros))
);
})], null),cljs.core.identity);
});

clojurescript.core.eval_str.cljs$lang$maxFixedArity = 3;

clojurescript.core.load_script = (function clojurescript$core$load_script(script){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(script.src,"")){
clojurescript.core.load(script.src,((function (c){
return (function (p1__26441_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,p1__26441_SHARP_);
});})(c))
);
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,script.innerHTML);
}

return c;
});
clojurescript.core.run_scripts = (function clojurescript$core$run_scripts(){
var scripts = document.getElementsByTagName("script");
var c__24483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24483__auto__,scripts){
return (function (){
var f__24484__auto__ = (function (){var switch__24381__auto__ = ((function (c__24483__auto__,scripts){
return (function (state_26484){
var state_val_26485 = (state_26484[(1)]);
if((state_val_26485 === (7))){
var inst_26447 = (state_26484[(7)]);
var inst_26451 = clojurescript.core.load_script(inst_26447);
var state_26484__$1 = state_26484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26484__$1,(10),inst_26451);
} else {
if((state_val_26485 === (1))){
var inst_26442 = (0);
var state_26484__$1 = (function (){var statearr_26486 = state_26484;
(statearr_26486[(8)] = inst_26442);

return statearr_26486;
})();
var statearr_26487_26513 = state_26484__$1;
(statearr_26487_26513[(2)] = null);

(statearr_26487_26513[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26485 === (4))){
var inst_26447 = (state_26484[(7)]);
var inst_26442 = (state_26484[(8)]);
var inst_26447__$1 = (scripts[inst_26442]);
var inst_26448 = inst_26447__$1.type;
var inst_26449 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26448,"text/cljs");
var state_26484__$1 = (function (){var statearr_26488 = state_26484;
(statearr_26488[(7)] = inst_26447__$1);

return statearr_26488;
})();
if(inst_26449){
var statearr_26489_26514 = state_26484__$1;
(statearr_26489_26514[(1)] = (7));

} else {
var statearr_26490_26515 = state_26484__$1;
(statearr_26490_26515[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26485 === (15))){
var inst_26442 = (state_26484[(8)]);
var inst_26469 = (inst_26442 + (1));
var inst_26442__$1 = inst_26469;
var state_26484__$1 = (function (){var statearr_26491 = state_26484;
(statearr_26491[(8)] = inst_26442__$1);

return statearr_26491;
})();
var statearr_26492_26516 = state_26484__$1;
(statearr_26492_26516[(2)] = null);

(statearr_26492_26516[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26485 === (13))){
var inst_26475 = (state_26484[(2)]);
var state_26484__$1 = state_26484;
var statearr_26493_26517 = state_26484__$1;
(statearr_26493_26517[(2)] = inst_26475);

(statearr_26493_26517[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26485 === (6))){
var inst_26480 = (state_26484[(2)]);
var state_26484__$1 = state_26484;
var statearr_26494_26518 = state_26484__$1;
(statearr_26494_26518[(2)] = inst_26480);

(statearr_26494_26518[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26485 === (17))){
var inst_26473 = (state_26484[(2)]);
var state_26484__$1 = state_26484;
var statearr_26495_26519 = state_26484__$1;
(statearr_26495_26519[(2)] = inst_26473);

(statearr_26495_26519[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26485 === (3))){
var inst_26482 = (state_26484[(2)]);
var state_26484__$1 = state_26484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26484__$1,inst_26482);
} else {
if((state_val_26485 === (12))){
var state_26484__$1 = state_26484;
var statearr_26496_26520 = state_26484__$1;
(statearr_26496_26520[(1)] = (15));



return cljs.core.cst$kw$recur;
} else {
if((state_val_26485 === (2))){
var inst_26442 = (state_26484[(8)]);
var inst_26444 = scripts.length;
var inst_26445 = (inst_26442 < inst_26444);
var state_26484__$1 = state_26484;
if(cljs.core.truth_(inst_26445)){
var statearr_26498_26521 = state_26484__$1;
(statearr_26498_26521[(1)] = (4));

} else {
var statearr_26499_26522 = state_26484__$1;
(statearr_26499_26522[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26485 === (11))){
var inst_26447 = (state_26484[(7)]);
var inst_26461 = clojurescript.core.load_script(inst_26447);
var state_26484__$1 = state_26484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26484__$1,(14),inst_26461);
} else {
if((state_val_26485 === (9))){
var inst_26477 = (state_26484[(2)]);
var state_26484__$1 = state_26484;
var statearr_26500_26523 = state_26484__$1;
(statearr_26500_26523[(2)] = inst_26477);

(statearr_26500_26523[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26485 === (5))){
var state_26484__$1 = state_26484;
var statearr_26501_26524 = state_26484__$1;
(statearr_26501_26524[(2)] = null);

(statearr_26501_26524[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26485 === (14))){
var inst_26442 = (state_26484[(8)]);
var inst_26463 = (state_26484[(2)]);
var inst_26464 = eval(inst_26463);
var inst_26465 = (inst_26442 + (1));
var inst_26442__$1 = inst_26465;
var state_26484__$1 = (function (){var statearr_26502 = state_26484;
(statearr_26502[(9)] = inst_26464);

(statearr_26502[(8)] = inst_26442__$1);

return statearr_26502;
})();
var statearr_26503_26525 = state_26484__$1;
(statearr_26503_26525[(2)] = null);

(statearr_26503_26525[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26485 === (16))){
var state_26484__$1 = state_26484;
var statearr_26504_26526 = state_26484__$1;
(statearr_26504_26526[(2)] = null);

(statearr_26504_26526[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26485 === (10))){
var inst_26442 = (state_26484[(8)]);
var inst_26453 = (state_26484[(2)]);
var inst_26454 = clojurescript.core.eval_str.cljs$core$IFn$_invoke$arity$1(inst_26453);
var inst_26455 = (inst_26442 + (1));
var inst_26442__$1 = inst_26455;
var state_26484__$1 = (function (){var statearr_26505 = state_26484;
(statearr_26505[(10)] = inst_26454);

(statearr_26505[(8)] = inst_26442__$1);

return statearr_26505;
})();
var statearr_26506_26527 = state_26484__$1;
(statearr_26506_26527[(2)] = null);

(statearr_26506_26527[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26485 === (8))){
var inst_26447 = (state_26484[(7)]);
var inst_26458 = inst_26447.type;
var inst_26459 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26458,"text/js");
var state_26484__$1 = state_26484;
if(inst_26459){
var statearr_26507_26528 = state_26484__$1;
(statearr_26507_26528[(1)] = (11));

} else {
var statearr_26508_26529 = state_26484__$1;
(statearr_26508_26529[(1)] = (12));

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
});})(c__24483__auto__,scripts))
;
return ((function (switch__24381__auto__,c__24483__auto__,scripts){
return (function() {
var clojurescript$core$run_scripts_$_state_machine__24382__auto__ = null;
var clojurescript$core$run_scripts_$_state_machine__24382__auto____0 = (function (){
var statearr_26509 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26509[(0)] = clojurescript$core$run_scripts_$_state_machine__24382__auto__);

(statearr_26509[(1)] = (1));

return statearr_26509;
});
var clojurescript$core$run_scripts_$_state_machine__24382__auto____1 = (function (state_26484){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__(state_26484);
if(cljs.core.keyword_identical_QMARK_(result__24384__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e26510){if((e26510 instanceof Object)){
var ex__24385__auto__ = e26510;
var statearr_26511_26530 = state_26484;
(statearr_26511_26530[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26484);

return cljs.core.cst$kw$recur;
} else {
throw e26510;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24383__auto__,cljs.core.cst$kw$recur)){
var G__26531 = state_26484;
state_26484 = G__26531;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
clojurescript$core$run_scripts_$_state_machine__24382__auto__ = function(state_26484){
switch(arguments.length){
case 0:
return clojurescript$core$run_scripts_$_state_machine__24382__auto____0.call(this);
case 1:
return clojurescript$core$run_scripts_$_state_machine__24382__auto____1.call(this,state_26484);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
clojurescript$core$run_scripts_$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = clojurescript$core$run_scripts_$_state_machine__24382__auto____0;
clojurescript$core$run_scripts_$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = clojurescript$core$run_scripts_$_state_machine__24382__auto____1;
return clojurescript$core$run_scripts_$_state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24483__auto__,scripts))
})();
var state__24485__auto__ = (function (){var statearr_26512 = (f__24484__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24484__auto__.cljs$core$IFn$_invoke$arity$0() : f__24484__auto__.call(null));
(statearr_26512[(6)] = c__24483__auto__);

return statearr_26512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24485__auto__);
});})(c__24483__auto__,scripts))
);

return c__24483__auto__;
});
addEventListener("DOMContentLoaded",clojurescript.core.run_scripts,false);
var G__26532_26535 = window;
var G__26533_26536 = "e";
var G__26534_26537 = ((function (G__26532_26535,G__26533_26536){
return (function (strings){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(clojurescript.core.eval_str.cljs$core$IFn$_invoke$arity$1(strings.join("")));
});})(G__26532_26535,G__26533_26536))
;
goog.object.set(G__26532_26535,G__26533_26536,G__26534_26537);
