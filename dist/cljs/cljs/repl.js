// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19339){
var map__19340 = p__19339;
var map__19340__$1 = ((((!((map__19340 == null)))?((((map__19340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19340):map__19340);
var m = map__19340__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19340__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19340__$1,cljs.core.cst$kw$name);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__19342_19364 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__19343_19365 = null;
var count__19344_19366 = (0);
var i__19345_19367 = (0);
while(true){
if((i__19345_19367 < count__19344_19366)){
var f_19368 = chunk__19343_19365.cljs$core$IIndexed$_nth$arity$2(null,i__19345_19367);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19368], 0));

var G__19369 = seq__19342_19364;
var G__19370 = chunk__19343_19365;
var G__19371 = count__19344_19366;
var G__19372 = (i__19345_19367 + (1));
seq__19342_19364 = G__19369;
chunk__19343_19365 = G__19370;
count__19344_19366 = G__19371;
i__19345_19367 = G__19372;
continue;
} else {
var temp__5457__auto___19373 = cljs.core.seq(seq__19342_19364);
if(temp__5457__auto___19373){
var seq__19342_19374__$1 = temp__5457__auto___19373;
if(cljs.core.chunked_seq_QMARK_(seq__19342_19374__$1)){
var c__12674__auto___19375 = cljs.core.chunk_first(seq__19342_19374__$1);
var G__19376 = cljs.core.chunk_rest(seq__19342_19374__$1);
var G__19377 = c__12674__auto___19375;
var G__19378 = cljs.core.count(c__12674__auto___19375);
var G__19379 = (0);
seq__19342_19364 = G__19376;
chunk__19343_19365 = G__19377;
count__19344_19366 = G__19378;
i__19345_19367 = G__19379;
continue;
} else {
var f_19380 = cljs.core.first(seq__19342_19374__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19380], 0));

var G__19381 = cljs.core.next(seq__19342_19374__$1);
var G__19382 = null;
var G__19383 = (0);
var G__19384 = (0);
seq__19342_19364 = G__19381;
chunk__19343_19365 = G__19382;
count__19344_19366 = G__19383;
i__19345_19367 = G__19384;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19385 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__11743__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19385], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_19385)))?cljs.core.second(arglists_19385):arglists_19385)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__19346_19386 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__19347_19387 = null;
var count__19348_19388 = (0);
var i__19349_19389 = (0);
while(true){
if((i__19349_19389 < count__19348_19388)){
var vec__19350_19390 = chunk__19347_19387.cljs$core$IIndexed$_nth$arity$2(null,i__19349_19389);
var name_19391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19350_19390,(0),null);
var map__19353_19392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19350_19390,(1),null);
var map__19353_19393__$1 = ((((!((map__19353_19392 == null)))?((((map__19353_19392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19353_19392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19353_19392):map__19353_19392);
var doc_19394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19353_19393__$1,cljs.core.cst$kw$doc);
var arglists_19395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19353_19393__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19391], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19395], 0));

if(cljs.core.truth_(doc_19394)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19394], 0));
} else {
}

var G__19396 = seq__19346_19386;
var G__19397 = chunk__19347_19387;
var G__19398 = count__19348_19388;
var G__19399 = (i__19349_19389 + (1));
seq__19346_19386 = G__19396;
chunk__19347_19387 = G__19397;
count__19348_19388 = G__19398;
i__19349_19389 = G__19399;
continue;
} else {
var temp__5457__auto___19400 = cljs.core.seq(seq__19346_19386);
if(temp__5457__auto___19400){
var seq__19346_19401__$1 = temp__5457__auto___19400;
if(cljs.core.chunked_seq_QMARK_(seq__19346_19401__$1)){
var c__12674__auto___19402 = cljs.core.chunk_first(seq__19346_19401__$1);
var G__19403 = cljs.core.chunk_rest(seq__19346_19401__$1);
var G__19404 = c__12674__auto___19402;
var G__19405 = cljs.core.count(c__12674__auto___19402);
var G__19406 = (0);
seq__19346_19386 = G__19403;
chunk__19347_19387 = G__19404;
count__19348_19388 = G__19405;
i__19349_19389 = G__19406;
continue;
} else {
var vec__19355_19407 = cljs.core.first(seq__19346_19401__$1);
var name_19408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19355_19407,(0),null);
var map__19358_19409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19355_19407,(1),null);
var map__19358_19410__$1 = ((((!((map__19358_19409 == null)))?((((map__19358_19409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19358_19409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19358_19409):map__19358_19409);
var doc_19411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19358_19410__$1,cljs.core.cst$kw$doc);
var arglists_19412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19358_19410__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19408], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19412], 0));

if(cljs.core.truth_(doc_19411)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19411], 0));
} else {
}

var G__19413 = cljs.core.next(seq__19346_19401__$1);
var G__19414 = null;
var G__19415 = (0);
var G__19416 = (0);
seq__19346_19386 = G__19413;
chunk__19347_19387 = G__19414;
count__19348_19388 = G__19415;
i__19349_19389 = G__19416;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19360 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__19361 = null;
var count__19362 = (0);
var i__19363 = (0);
while(true){
if((i__19363 < count__19362)){
var role = chunk__19361.cljs$core$IIndexed$_nth$arity$2(null,i__19363);
var temp__5457__auto___19417__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___19417__$1)){
var spec_19418 = temp__5457__auto___19417__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_19418)], 0));
} else {
}

var G__19419 = seq__19360;
var G__19420 = chunk__19361;
var G__19421 = count__19362;
var G__19422 = (i__19363 + (1));
seq__19360 = G__19419;
chunk__19361 = G__19420;
count__19362 = G__19421;
i__19363 = G__19422;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__19360);
if(temp__5457__auto____$1){
var seq__19360__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19360__$1)){
var c__12674__auto__ = cljs.core.chunk_first(seq__19360__$1);
var G__19423 = cljs.core.chunk_rest(seq__19360__$1);
var G__19424 = c__12674__auto__;
var G__19425 = cljs.core.count(c__12674__auto__);
var G__19426 = (0);
seq__19360 = G__19423;
chunk__19361 = G__19424;
count__19362 = G__19425;
i__19363 = G__19426;
continue;
} else {
var role = cljs.core.first(seq__19360__$1);
var temp__5457__auto___19427__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___19427__$2)){
var spec_19428 = temp__5457__auto___19427__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_19428)], 0));
} else {
}

var G__19429 = cljs.core.next(seq__19360__$1);
var G__19430 = null;
var G__19431 = (0);
var G__19432 = (0);
seq__19360 = G__19429;
chunk__19361 = G__19430;
count__19362 = G__19431;
i__19363 = G__19432;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
