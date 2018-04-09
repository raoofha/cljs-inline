// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.with_meta(cljs.core.cst$sym$cached,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17480 = arguments.length;
var i__13023__auto___17481 = (0);
while(true){
if((i__13023__auto___17481 < len__13022__auto___17480)){
args__13029__auto__.push((arguments[i__13023__auto___17481]));

var G__17482 = (i__13023__auto___17481 + (1));
i__13023__auto___17481 = G__17482;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq17479){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17479));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17484 = arguments.length;
var i__13023__auto___17485 = (0);
while(true){
if((i__13023__auto___17485 < len__13022__auto___17484)){
args__13029__auto__.push((arguments[i__13023__auto___17485]));

var G__17486 = (i__13023__auto___17485 + (1));
i__13023__auto___17485 = G__17486;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq17483){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17483));
});

var g_QMARK__17490 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_))," never required"].join('')));
}
}),null));
var g_17491 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__17490){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate))," never required"].join('')));
}
});})(g_QMARK__17490))
,null));
var mkg_17492 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__17490,g_17491){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator))," never required"].join('')));
}
});})(g_QMARK__17490,g_17491))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__17490,g_17491,mkg_17492){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
var fexpr__17487 = cljs.core.deref(g_QMARK__17490);
return (fexpr__17487.cljs$core$IFn$_invoke$arity$1 ? fexpr__17487.cljs$core$IFn$_invoke$arity$1(x) : fexpr__17487.call(null,x));
});})(g_QMARK__17490,g_17491,mkg_17492))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__17490,g_17491,mkg_17492){
return (function cljs$spec$gen$alpha$generator(gfn){
var fexpr__17488 = cljs.core.deref(mkg_17492);
return (fexpr__17488.cljs$core$IFn$_invoke$arity$1 ? fexpr__17488.cljs$core$IFn$_invoke$arity$1(gfn) : fexpr__17488.call(null,gfn));
});})(g_QMARK__17490,g_17491,mkg_17492))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__17490,g_17491,mkg_17492){
return (function cljs$spec$gen$alpha$generate(generator){
var fexpr__17489 = cljs.core.deref(g_17491);
return (fexpr__17489.cljs$core$IFn$_invoke$arity$1 ? fexpr__17489.cljs$core$IFn$_invoke$arity$1(generator) : fexpr__17489.call(null,generator));
});})(g_QMARK__17490,g_17491,mkg_17492))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator((function (rnd,size){
var fexpr__17493 = cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gfnd));
return (fexpr__17493.cljs$core$IFn$_invoke$arity$2 ? fexpr__17493.cljs$core$IFn$_invoke$arity$2(rnd,size) : fexpr__17493.call(null,rnd,size));
}));
});
var g__17451__auto___17513 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__17451__auto___17513){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17514 = arguments.length;
var i__13023__auto___17515 = (0);
while(true){
if((i__13023__auto___17515 < len__13022__auto___17514)){
args__13029__auto__.push((arguments[i__13023__auto___17515]));

var G__17516 = (i__13023__auto___17515 + (1));
i__13023__auto___17515 = G__17516;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17451__auto___17513))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17451__auto___17513){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17451__auto___17513),args);
});})(g__17451__auto___17513))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__17451__auto___17513){
return (function (seq17494){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17494));
});})(g__17451__auto___17513))
;


var g__17451__auto___17517 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__17451__auto___17517){
return (function cljs$spec$gen$alpha$list(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17518 = arguments.length;
var i__13023__auto___17519 = (0);
while(true){
if((i__13023__auto___17519 < len__13022__auto___17518)){
args__13029__auto__.push((arguments[i__13023__auto___17519]));

var G__17520 = (i__13023__auto___17519 + (1));
i__13023__auto___17519 = G__17520;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17451__auto___17517))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17451__auto___17517){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17451__auto___17517),args);
});})(g__17451__auto___17517))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__17451__auto___17517){
return (function (seq17495){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17495));
});})(g__17451__auto___17517))
;


var g__17451__auto___17521 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__17451__auto___17521){
return (function cljs$spec$gen$alpha$map(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17522 = arguments.length;
var i__13023__auto___17523 = (0);
while(true){
if((i__13023__auto___17523 < len__13022__auto___17522)){
args__13029__auto__.push((arguments[i__13023__auto___17523]));

var G__17524 = (i__13023__auto___17523 + (1));
i__13023__auto___17523 = G__17524;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17451__auto___17521))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17451__auto___17521){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17451__auto___17521),args);
});})(g__17451__auto___17521))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__17451__auto___17521){
return (function (seq17496){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17496));
});})(g__17451__auto___17521))
;


var g__17451__auto___17525 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__17451__auto___17525){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17526 = arguments.length;
var i__13023__auto___17527 = (0);
while(true){
if((i__13023__auto___17527 < len__13022__auto___17526)){
args__13029__auto__.push((arguments[i__13023__auto___17527]));

var G__17528 = (i__13023__auto___17527 + (1));
i__13023__auto___17527 = G__17528;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17451__auto___17525))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17451__auto___17525){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17451__auto___17525),args);
});})(g__17451__auto___17525))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__17451__auto___17525){
return (function (seq17497){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17497));
});})(g__17451__auto___17525))
;


var g__17451__auto___17529 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__17451__auto___17529){
return (function cljs$spec$gen$alpha$set(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17530 = arguments.length;
var i__13023__auto___17531 = (0);
while(true){
if((i__13023__auto___17531 < len__13022__auto___17530)){
args__13029__auto__.push((arguments[i__13023__auto___17531]));

var G__17532 = (i__13023__auto___17531 + (1));
i__13023__auto___17531 = G__17532;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17451__auto___17529))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17451__auto___17529){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17451__auto___17529),args);
});})(g__17451__auto___17529))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__17451__auto___17529){
return (function (seq17498){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17498));
});})(g__17451__auto___17529))
;


var g__17451__auto___17533 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__17451__auto___17533){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17534 = arguments.length;
var i__13023__auto___17535 = (0);
while(true){
if((i__13023__auto___17535 < len__13022__auto___17534)){
args__13029__auto__.push((arguments[i__13023__auto___17535]));

var G__17536 = (i__13023__auto___17535 + (1));
i__13023__auto___17535 = G__17536;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17451__auto___17533))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17451__auto___17533){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17451__auto___17533),args);
});})(g__17451__auto___17533))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__17451__auto___17533){
return (function (seq17499){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17499));
});})(g__17451__auto___17533))
;


var g__17451__auto___17537 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__17451__auto___17537){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17538 = arguments.length;
var i__13023__auto___17539 = (0);
while(true){
if((i__13023__auto___17539 < len__13022__auto___17538)){
args__13029__auto__.push((arguments[i__13023__auto___17539]));

var G__17540 = (i__13023__auto___17539 + (1));
i__13023__auto___17539 = G__17540;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17451__auto___17537))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17451__auto___17537){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17451__auto___17537),args);
});})(g__17451__auto___17537))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__17451__auto___17537){
return (function (seq17500){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17500));
});})(g__17451__auto___17537))
;


var g__17451__auto___17541 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__17451__auto___17541){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17542 = arguments.length;
var i__13023__auto___17543 = (0);
while(true){
if((i__13023__auto___17543 < len__13022__auto___17542)){
args__13029__auto__.push((arguments[i__13023__auto___17543]));

var G__17544 = (i__13023__auto___17543 + (1));
i__13023__auto___17543 = G__17544;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17451__auto___17541))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17451__auto___17541){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17451__auto___17541),args);
});})(g__17451__auto___17541))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__17451__auto___17541){
return (function (seq17501){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17501));
});})(g__17451__auto___17541))
;


var g__17451__auto___17545 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__17451__auto___17545){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17546 = arguments.length;
var i__13023__auto___17547 = (0);
while(true){
if((i__13023__auto___17547 < len__13022__auto___17546)){
args__13029__auto__.push((arguments[i__13023__auto___17547]));

var G__17548 = (i__13023__auto___17547 + (1));
i__13023__auto___17547 = G__17548;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17451__auto___17545))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17451__auto___17545){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17451__auto___17545),args);
});})(g__17451__auto___17545))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__17451__auto___17545){
return (function (seq17502){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17502));
});})(g__17451__auto___17545))
;


var g__17451__auto___17549 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__17451__auto___17549){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17550 = arguments.length;
var i__13023__auto___17551 = (0);
while(true){
if((i__13023__auto___17551 < len__13022__auto___17550)){
args__13029__auto__.push((arguments[i__13023__auto___17551]));

var G__17552 = (i__13023__auto___17551 + (1));
i__13023__auto___17551 = G__17552;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17451__auto___17549))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17451__auto___17549){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17451__auto___17549),args);
});})(g__17451__auto___17549))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__17451__auto___17549){
return (function (seq17503){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17503));
});})(g__17451__auto___17549))
;


var g__17451__auto___17553 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__17451__auto___17553){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17554 = arguments.length;
var i__13023__auto___17555 = (0);
while(true){
if((i__13023__auto___17555 < len__13022__auto___17554)){
args__13029__auto__.push((arguments[i__13023__auto___17555]));

var G__17556 = (i__13023__auto___17555 + (1));
i__13023__auto___17555 = G__17556;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17451__auto___17553))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17451__auto___17553){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17451__auto___17553),args);
});})(g__17451__auto___17553))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__17451__auto___17553){
return (function (seq17504){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17504));
});})(g__17451__auto___17553))
;


var g__17451__auto___17557 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__17451__auto___17557){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17558 = arguments.length;
var i__13023__auto___17559 = (0);
while(true){
if((i__13023__auto___17559 < len__13022__auto___17558)){
args__13029__auto__.push((arguments[i__13023__auto___17559]));

var G__17560 = (i__13023__auto___17559 + (1));
i__13023__auto___17559 = G__17560;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17451__auto___17557))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17451__auto___17557){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17451__auto___17557),args);
});})(g__17451__auto___17557))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__17451__auto___17557){
return (function (seq17505){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17505));
});})(g__17451__auto___17557))
;


var g__17451__auto___17561 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__17451__auto___17561){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17562 = arguments.length;
var i__13023__auto___17563 = (0);
while(true){
if((i__13023__auto___17563 < len__13022__auto___17562)){
args__13029__auto__.push((arguments[i__13023__auto___17563]));

var G__17564 = (i__13023__auto___17563 + (1));
i__13023__auto___17563 = G__17564;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17451__auto___17561))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17451__auto___17561){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17451__auto___17561),args);
});})(g__17451__auto___17561))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__17451__auto___17561){
return (function (seq17506){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17506));
});})(g__17451__auto___17561))
;


var g__17451__auto___17565 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__17451__auto___17565){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17566 = arguments.length;
var i__13023__auto___17567 = (0);
while(true){
if((i__13023__auto___17567 < len__13022__auto___17566)){
args__13029__auto__.push((arguments[i__13023__auto___17567]));

var G__17568 = (i__13023__auto___17567 + (1));
i__13023__auto___17567 = G__17568;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17451__auto___17565))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17451__auto___17565){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17451__auto___17565),args);
});})(g__17451__auto___17565))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__17451__auto___17565){
return (function (seq17507){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17507));
});})(g__17451__auto___17565))
;


var g__17451__auto___17569 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__17451__auto___17569){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17570 = arguments.length;
var i__13023__auto___17571 = (0);
while(true){
if((i__13023__auto___17571 < len__13022__auto___17570)){
args__13029__auto__.push((arguments[i__13023__auto___17571]));

var G__17572 = (i__13023__auto___17571 + (1));
i__13023__auto___17571 = G__17572;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17451__auto___17569))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17451__auto___17569){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17451__auto___17569),args);
});})(g__17451__auto___17569))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__17451__auto___17569){
return (function (seq17508){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17508));
});})(g__17451__auto___17569))
;


var g__17451__auto___17573 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__17451__auto___17573){
return (function cljs$spec$gen$alpha$return(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17574 = arguments.length;
var i__13023__auto___17575 = (0);
while(true){
if((i__13023__auto___17575 < len__13022__auto___17574)){
args__13029__auto__.push((arguments[i__13023__auto___17575]));

var G__17576 = (i__13023__auto___17575 + (1));
i__13023__auto___17575 = G__17576;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17451__auto___17573))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17451__auto___17573){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17451__auto___17573),args);
});})(g__17451__auto___17573))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__17451__auto___17573){
return (function (seq17509){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17509));
});})(g__17451__auto___17573))
;


var g__17451__auto___17577 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__17451__auto___17577){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17578 = arguments.length;
var i__13023__auto___17579 = (0);
while(true){
if((i__13023__auto___17579 < len__13022__auto___17578)){
args__13029__auto__.push((arguments[i__13023__auto___17579]));

var G__17580 = (i__13023__auto___17579 + (1));
i__13023__auto___17579 = G__17580;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17451__auto___17577))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17451__auto___17577){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17451__auto___17577),args);
});})(g__17451__auto___17577))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__17451__auto___17577){
return (function (seq17510){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17510));
});})(g__17451__auto___17577))
;


var g__17451__auto___17581 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__17451__auto___17581){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17582 = arguments.length;
var i__13023__auto___17583 = (0);
while(true){
if((i__13023__auto___17583 < len__13022__auto___17582)){
args__13029__auto__.push((arguments[i__13023__auto___17583]));

var G__17584 = (i__13023__auto___17583 + (1));
i__13023__auto___17583 = G__17584;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17451__auto___17581))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17451__auto___17581){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17451__auto___17581),args);
});})(g__17451__auto___17581))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__17451__auto___17581){
return (function (seq17511){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17511));
});})(g__17451__auto___17581))
;


var g__17451__auto___17585 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__17451__auto___17585){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17586 = arguments.length;
var i__13023__auto___17587 = (0);
while(true){
if((i__13023__auto___17587 < len__13022__auto___17586)){
args__13029__auto__.push((arguments[i__13023__auto___17587]));

var G__17588 = (i__13023__auto___17587 + (1));
i__13023__auto___17587 = G__17588;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17451__auto___17585))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17451__auto___17585){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17451__auto___17585),args);
});})(g__17451__auto___17585))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__17451__auto___17585){
return (function (seq17512){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17512));
});})(g__17451__auto___17585))
;

var g__17464__auto___17610 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__17464__auto___17610){
return (function cljs$spec$gen$alpha$any(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17611 = arguments.length;
var i__13023__auto___17612 = (0);
while(true){
if((i__13023__auto___17612 < len__13022__auto___17611)){
args__13029__auto__.push((arguments[i__13023__auto___17612]));

var G__17613 = (i__13023__auto___17612 + (1));
i__13023__auto___17612 = G__17613;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17464__auto___17610))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17464__auto___17610){
return (function (args){
return cljs.core.deref(g__17464__auto___17610);
});})(g__17464__auto___17610))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__17464__auto___17610){
return (function (seq17589){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17589));
});})(g__17464__auto___17610))
;


var g__17464__auto___17614 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__17464__auto___17614){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17615 = arguments.length;
var i__13023__auto___17616 = (0);
while(true){
if((i__13023__auto___17616 < len__13022__auto___17615)){
args__13029__auto__.push((arguments[i__13023__auto___17616]));

var G__17617 = (i__13023__auto___17616 + (1));
i__13023__auto___17616 = G__17617;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17464__auto___17614))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17464__auto___17614){
return (function (args){
return cljs.core.deref(g__17464__auto___17614);
});})(g__17464__auto___17614))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__17464__auto___17614){
return (function (seq17590){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17590));
});})(g__17464__auto___17614))
;


var g__17464__auto___17618 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__17464__auto___17618){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17619 = arguments.length;
var i__13023__auto___17620 = (0);
while(true){
if((i__13023__auto___17620 < len__13022__auto___17619)){
args__13029__auto__.push((arguments[i__13023__auto___17620]));

var G__17621 = (i__13023__auto___17620 + (1));
i__13023__auto___17620 = G__17621;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17464__auto___17618))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17464__auto___17618){
return (function (args){
return cljs.core.deref(g__17464__auto___17618);
});})(g__17464__auto___17618))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__17464__auto___17618){
return (function (seq17591){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17591));
});})(g__17464__auto___17618))
;


var g__17464__auto___17622 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__17464__auto___17622){
return (function cljs$spec$gen$alpha$char(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17623 = arguments.length;
var i__13023__auto___17624 = (0);
while(true){
if((i__13023__auto___17624 < len__13022__auto___17623)){
args__13029__auto__.push((arguments[i__13023__auto___17624]));

var G__17625 = (i__13023__auto___17624 + (1));
i__13023__auto___17624 = G__17625;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17464__auto___17622))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17464__auto___17622){
return (function (args){
return cljs.core.deref(g__17464__auto___17622);
});})(g__17464__auto___17622))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__17464__auto___17622){
return (function (seq17592){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17592));
});})(g__17464__auto___17622))
;


var g__17464__auto___17626 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__17464__auto___17626){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17627 = arguments.length;
var i__13023__auto___17628 = (0);
while(true){
if((i__13023__auto___17628 < len__13022__auto___17627)){
args__13029__auto__.push((arguments[i__13023__auto___17628]));

var G__17629 = (i__13023__auto___17628 + (1));
i__13023__auto___17628 = G__17629;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17464__auto___17626))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17464__auto___17626){
return (function (args){
return cljs.core.deref(g__17464__auto___17626);
});})(g__17464__auto___17626))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__17464__auto___17626){
return (function (seq17593){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17593));
});})(g__17464__auto___17626))
;


var g__17464__auto___17630 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__17464__auto___17630){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17631 = arguments.length;
var i__13023__auto___17632 = (0);
while(true){
if((i__13023__auto___17632 < len__13022__auto___17631)){
args__13029__auto__.push((arguments[i__13023__auto___17632]));

var G__17633 = (i__13023__auto___17632 + (1));
i__13023__auto___17632 = G__17633;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17464__auto___17630))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17464__auto___17630){
return (function (args){
return cljs.core.deref(g__17464__auto___17630);
});})(g__17464__auto___17630))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__17464__auto___17630){
return (function (seq17594){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17594));
});})(g__17464__auto___17630))
;


var g__17464__auto___17634 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__17464__auto___17634){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17635 = arguments.length;
var i__13023__auto___17636 = (0);
while(true){
if((i__13023__auto___17636 < len__13022__auto___17635)){
args__13029__auto__.push((arguments[i__13023__auto___17636]));

var G__17637 = (i__13023__auto___17636 + (1));
i__13023__auto___17636 = G__17637;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17464__auto___17634))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17464__auto___17634){
return (function (args){
return cljs.core.deref(g__17464__auto___17634);
});})(g__17464__auto___17634))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__17464__auto___17634){
return (function (seq17595){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17595));
});})(g__17464__auto___17634))
;


var g__17464__auto___17638 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__17464__auto___17638){
return (function cljs$spec$gen$alpha$double(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17639 = arguments.length;
var i__13023__auto___17640 = (0);
while(true){
if((i__13023__auto___17640 < len__13022__auto___17639)){
args__13029__auto__.push((arguments[i__13023__auto___17640]));

var G__17641 = (i__13023__auto___17640 + (1));
i__13023__auto___17640 = G__17641;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17464__auto___17638))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17464__auto___17638){
return (function (args){
return cljs.core.deref(g__17464__auto___17638);
});})(g__17464__auto___17638))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__17464__auto___17638){
return (function (seq17596){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17596));
});})(g__17464__auto___17638))
;


var g__17464__auto___17642 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__17464__auto___17642){
return (function cljs$spec$gen$alpha$int(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17643 = arguments.length;
var i__13023__auto___17644 = (0);
while(true){
if((i__13023__auto___17644 < len__13022__auto___17643)){
args__13029__auto__.push((arguments[i__13023__auto___17644]));

var G__17645 = (i__13023__auto___17644 + (1));
i__13023__auto___17644 = G__17645;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17464__auto___17642))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17464__auto___17642){
return (function (args){
return cljs.core.deref(g__17464__auto___17642);
});})(g__17464__auto___17642))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__17464__auto___17642){
return (function (seq17597){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17597));
});})(g__17464__auto___17642))
;


var g__17464__auto___17646 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__17464__auto___17646){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17647 = arguments.length;
var i__13023__auto___17648 = (0);
while(true){
if((i__13023__auto___17648 < len__13022__auto___17647)){
args__13029__auto__.push((arguments[i__13023__auto___17648]));

var G__17649 = (i__13023__auto___17648 + (1));
i__13023__auto___17648 = G__17649;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17464__auto___17646))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17464__auto___17646){
return (function (args){
return cljs.core.deref(g__17464__auto___17646);
});})(g__17464__auto___17646))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__17464__auto___17646){
return (function (seq17598){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17598));
});})(g__17464__auto___17646))
;


var g__17464__auto___17650 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__17464__auto___17650){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17651 = arguments.length;
var i__13023__auto___17652 = (0);
while(true){
if((i__13023__auto___17652 < len__13022__auto___17651)){
args__13029__auto__.push((arguments[i__13023__auto___17652]));

var G__17653 = (i__13023__auto___17652 + (1));
i__13023__auto___17652 = G__17653;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17464__auto___17650))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17464__auto___17650){
return (function (args){
return cljs.core.deref(g__17464__auto___17650);
});})(g__17464__auto___17650))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__17464__auto___17650){
return (function (seq17599){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17599));
});})(g__17464__auto___17650))
;


var g__17464__auto___17654 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__17464__auto___17654){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17655 = arguments.length;
var i__13023__auto___17656 = (0);
while(true){
if((i__13023__auto___17656 < len__13022__auto___17655)){
args__13029__auto__.push((arguments[i__13023__auto___17656]));

var G__17657 = (i__13023__auto___17656 + (1));
i__13023__auto___17656 = G__17657;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17464__auto___17654))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17464__auto___17654){
return (function (args){
return cljs.core.deref(g__17464__auto___17654);
});})(g__17464__auto___17654))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__17464__auto___17654){
return (function (seq17600){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17600));
});})(g__17464__auto___17654))
;


var g__17464__auto___17658 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__17464__auto___17658){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17659 = arguments.length;
var i__13023__auto___17660 = (0);
while(true){
if((i__13023__auto___17660 < len__13022__auto___17659)){
args__13029__auto__.push((arguments[i__13023__auto___17660]));

var G__17661 = (i__13023__auto___17660 + (1));
i__13023__auto___17660 = G__17661;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17464__auto___17658))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17464__auto___17658){
return (function (args){
return cljs.core.deref(g__17464__auto___17658);
});})(g__17464__auto___17658))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__17464__auto___17658){
return (function (seq17601){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17601));
});})(g__17464__auto___17658))
;


var g__17464__auto___17662 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__17464__auto___17662){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17663 = arguments.length;
var i__13023__auto___17664 = (0);
while(true){
if((i__13023__auto___17664 < len__13022__auto___17663)){
args__13029__auto__.push((arguments[i__13023__auto___17664]));

var G__17665 = (i__13023__auto___17664 + (1));
i__13023__auto___17664 = G__17665;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17464__auto___17662))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17464__auto___17662){
return (function (args){
return cljs.core.deref(g__17464__auto___17662);
});})(g__17464__auto___17662))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__17464__auto___17662){
return (function (seq17602){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17602));
});})(g__17464__auto___17662))
;


var g__17464__auto___17666 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__17464__auto___17666){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17667 = arguments.length;
var i__13023__auto___17668 = (0);
while(true){
if((i__13023__auto___17668 < len__13022__auto___17667)){
args__13029__auto__.push((arguments[i__13023__auto___17668]));

var G__17669 = (i__13023__auto___17668 + (1));
i__13023__auto___17668 = G__17669;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17464__auto___17666))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17464__auto___17666){
return (function (args){
return cljs.core.deref(g__17464__auto___17666);
});})(g__17464__auto___17666))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__17464__auto___17666){
return (function (seq17603){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17603));
});})(g__17464__auto___17666))
;


var g__17464__auto___17670 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__17464__auto___17670){
return (function cljs$spec$gen$alpha$string(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17671 = arguments.length;
var i__13023__auto___17672 = (0);
while(true){
if((i__13023__auto___17672 < len__13022__auto___17671)){
args__13029__auto__.push((arguments[i__13023__auto___17672]));

var G__17673 = (i__13023__auto___17672 + (1));
i__13023__auto___17672 = G__17673;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17464__auto___17670))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17464__auto___17670){
return (function (args){
return cljs.core.deref(g__17464__auto___17670);
});})(g__17464__auto___17670))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__17464__auto___17670){
return (function (seq17604){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17604));
});})(g__17464__auto___17670))
;


var g__17464__auto___17674 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__17464__auto___17674){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17675 = arguments.length;
var i__13023__auto___17676 = (0);
while(true){
if((i__13023__auto___17676 < len__13022__auto___17675)){
args__13029__auto__.push((arguments[i__13023__auto___17676]));

var G__17677 = (i__13023__auto___17676 + (1));
i__13023__auto___17676 = G__17677;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17464__auto___17674))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17464__auto___17674){
return (function (args){
return cljs.core.deref(g__17464__auto___17674);
});})(g__17464__auto___17674))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__17464__auto___17674){
return (function (seq17605){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17605));
});})(g__17464__auto___17674))
;


var g__17464__auto___17678 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__17464__auto___17678){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17679 = arguments.length;
var i__13023__auto___17680 = (0);
while(true){
if((i__13023__auto___17680 < len__13022__auto___17679)){
args__13029__auto__.push((arguments[i__13023__auto___17680]));

var G__17681 = (i__13023__auto___17680 + (1));
i__13023__auto___17680 = G__17681;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17464__auto___17678))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17464__auto___17678){
return (function (args){
return cljs.core.deref(g__17464__auto___17678);
});})(g__17464__auto___17678))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__17464__auto___17678){
return (function (seq17606){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17606));
});})(g__17464__auto___17678))
;


var g__17464__auto___17682 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__17464__auto___17682){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17683 = arguments.length;
var i__13023__auto___17684 = (0);
while(true){
if((i__13023__auto___17684 < len__13022__auto___17683)){
args__13029__auto__.push((arguments[i__13023__auto___17684]));

var G__17685 = (i__13023__auto___17684 + (1));
i__13023__auto___17684 = G__17685;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17464__auto___17682))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17464__auto___17682){
return (function (args){
return cljs.core.deref(g__17464__auto___17682);
});})(g__17464__auto___17682))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__17464__auto___17682){
return (function (seq17607){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17607));
});})(g__17464__auto___17682))
;


var g__17464__auto___17686 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__17464__auto___17686){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17687 = arguments.length;
var i__13023__auto___17688 = (0);
while(true){
if((i__13023__auto___17688 < len__13022__auto___17687)){
args__13029__auto__.push((arguments[i__13023__auto___17688]));

var G__17689 = (i__13023__auto___17688 + (1));
i__13023__auto___17688 = G__17689;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17464__auto___17686))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17464__auto___17686){
return (function (args){
return cljs.core.deref(g__17464__auto___17686);
});})(g__17464__auto___17686))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__17464__auto___17686){
return (function (seq17608){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17608));
});})(g__17464__auto___17686))
;


var g__17464__auto___17690 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__17464__auto___17690){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17691 = arguments.length;
var i__13023__auto___17692 = (0);
while(true){
if((i__13023__auto___17692 < len__13022__auto___17691)){
args__13029__auto__.push((arguments[i__13023__auto___17692]));

var G__17693 = (i__13023__auto___17692 + (1));
i__13023__auto___17692 = G__17693;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});})(g__17464__auto___17690))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17464__auto___17690){
return (function (args){
return cljs.core.deref(g__17464__auto___17690);
});})(g__17464__auto___17690))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__17464__auto___17690){
return (function (seq17609){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17609));
});})(g__17464__auto___17690))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__13029__auto__ = [];
var len__13022__auto___17696 = arguments.length;
var i__13023__auto___17697 = (0);
while(true){
if((i__13023__auto___17697 < len__13022__auto___17696)){
args__13029__auto__.push((arguments[i__13023__auto___17697]));

var G__17698 = (i__13023__auto___17697 + (1));
i__13023__auto___17697 = G__17698;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__17694_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__17694_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gens)], 0));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq17695){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17695));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns()], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.any_printable()], null)], 0)),cljs.spec.gen.alpha.boolean$(),cljs.spec.gen.alpha.char$(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
return (function (p1__17699_SHARP_){
return (new Date(p1__17699_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer()], 0)),cljs.spec.gen.alpha.symbol(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.gen.alpha.string_alphanumeric(),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)),cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max,(-1)], null)], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0))], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(0)], null)], 0)),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(1)], null)], 0)),cljs.spec.gen.alpha.uuid(),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.symbol()], null)], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.double$()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns()], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.string_alphanumeric()], null)], 0)),cljs.spec.gen.alpha.symbol_ns(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.gen_builtins),pred);
}
});
