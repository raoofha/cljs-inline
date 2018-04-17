// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__20426){
var vec__20427 = p__20426;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20427,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20427,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__20430 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20430,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20430,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20430,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20430,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20430,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$gcol,gcol,cljs.core.cst$kw$source,(goog.object.get(source_map,"sources")[source]),cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$name,(function (){var temp__5457__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5457__auto__)){
var name__$1 = temp__5457__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__20433 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20433,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20433,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20433,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20433,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20433,(4),null);
var vec__20436 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20436,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20436,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20436,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20436,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20436,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__11743__auto__ = source;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__11743__auto__ = line;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__11743__auto__ = col;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__11743__auto__ = name;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__20439 = segmap;
var map__20439__$1 = ((((!((map__20439 == null)))?((((map__20439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20439):map__20439);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20439__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20439__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20439__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20439__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20439__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gline,gline,cljs.core.cst$kw$gcol,gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__20439,map__20439__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__20439,map__20439__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__20439,map__20439__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__20439,map__20439__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__20439,map__20439__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__20439,map__20439__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__20442 = arguments.length;
switch (G__20442) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__20443 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__20447 = cljs.core.next(segs__$1);
var G__20448 = nrelseg;
var G__20449 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__20447;
relseg__$1 = G__20448;
result__$1 = G__20449;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20443,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20443,(1),null);
var G__20450 = (gline + (1));
var G__20451 = cljs.core.next(lines__$1);
var G__20452 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__20453 = result__$1;
gline = G__20450;
lines__$1 = G__20451;
relseg = G__20452;
result = G__20453;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__20455 = segmap;
var map__20455__$1 = ((((!((map__20455 == null)))?((((map__20455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20455.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20455):map__20455);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20455__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20455__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20455__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20455__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20455__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$source,source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__20455,map__20455__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__20455,map__20455__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__20454_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__20454_SHARP_,d__$1);
});})(map__20455,map__20455__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__20455,map__20455__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__20458 = arguments.length;
switch (G__20458) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__20459 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__20463 = cljs.core.next(segs__$1);
var G__20464 = nrelseg;
var G__20465 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__20463;
relseg__$1 = G__20464;
result__$1 = G__20465;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20459,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20459,(1),null);
var G__20466 = (gline + (1));
var G__20467 = cljs.core.next(lines__$1);
var G__20468 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__20469 = result__$1;
gline = G__20466;
lines__$1 = G__20467;
relseg = G__20468;
result = G__20469;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__20470){
var vec__20471 = p__20470;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20471,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20471,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20471,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20471,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20471,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__20474){
var vec__20475 = p__20474;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20475,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20475,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20475,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20475,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20475,(4),null);
var seg = vec__20475;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__20475,gcol,sidx,line,col,name,seg,relseg){
return (function (p__20478){
var vec__20479 = p__20478;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20479,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20479,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20479,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20479,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20479,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__11743__auto__ = name;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__20475,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__11743__auto__ = cljs.core.cst$kw$preamble_DASH_line_DASH_count.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gcol.cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5455__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
var idx = (function (){var temp__5455__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5455__auto____$1)){
var idx = temp__5455__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__20485 = cljs.core.seq(infos);
var chunk__20486 = null;
var count__20487 = (0);
var i__20488 = (0);
while(true){
if((i__20488 < count__20487)){
var info = chunk__20486.cljs$core$IIndexed$_nth$arity$2(null,i__20488);
var segv_20570 = info__GT_segv(info,source_idx,line,col);
var gline_20571 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_20572 = cljs.core.count(cljs.core.deref(lines));
if((gline_20571 > (lc_20572 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__20485,chunk__20486,count__20487,i__20488,segv_20570,gline_20571,lc_20572,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_20571 - (lc_20572 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_20570], null));
});})(seq__20485,chunk__20486,count__20487,i__20488,segv_20570,gline_20571,lc_20572,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__20485,chunk__20486,count__20487,i__20488,segv_20570,gline_20571,lc_20572,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20571], null),cljs.core.conj,segv_20570);
});})(seq__20485,chunk__20486,count__20487,i__20488,segv_20570,gline_20571,lc_20572,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__20573 = seq__20485;
var G__20574 = chunk__20486;
var G__20575 = count__20487;
var G__20576 = (i__20488 + (1));
seq__20485 = G__20573;
chunk__20486 = G__20574;
count__20487 = G__20575;
i__20488 = G__20576;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20485);
if(temp__5457__auto__){
var seq__20485__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20485__$1)){
var c__12674__auto__ = cljs.core.chunk_first(seq__20485__$1);
var G__20577 = cljs.core.chunk_rest(seq__20485__$1);
var G__20578 = c__12674__auto__;
var G__20579 = cljs.core.count(c__12674__auto__);
var G__20580 = (0);
seq__20485 = G__20577;
chunk__20486 = G__20578;
count__20487 = G__20579;
i__20488 = G__20580;
continue;
} else {
var info = cljs.core.first(seq__20485__$1);
var segv_20581 = info__GT_segv(info,source_idx,line,col);
var gline_20582 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_20583 = cljs.core.count(cljs.core.deref(lines));
if((gline_20582 > (lc_20583 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__20485,chunk__20486,count__20487,i__20488,segv_20581,gline_20582,lc_20583,info,seq__20485__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_20582 - (lc_20583 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_20581], null));
});})(seq__20485,chunk__20486,count__20487,i__20488,segv_20581,gline_20582,lc_20583,info,seq__20485__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__20485,chunk__20486,count__20487,i__20488,segv_20581,gline_20582,lc_20583,info,seq__20485__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20582], null),cljs.core.conj,segv_20581);
});})(seq__20485,chunk__20486,count__20487,i__20488,segv_20581,gline_20582,lc_20583,info,seq__20485__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__20584 = cljs.core.next(seq__20485__$1);
var G__20585 = null;
var G__20586 = (0);
var G__20587 = (0);
seq__20485 = G__20584;
chunk__20486 = G__20585;
count__20487 = G__20586;
i__20488 = G__20587;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__20489_20588 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__20490_20589 = null;
var count__20491_20590 = (0);
var i__20492_20591 = (0);
while(true){
if((i__20492_20591 < count__20491_20590)){
var vec__20493_20592 = chunk__20490_20589.cljs$core$IIndexed$_nth$arity$2(null,i__20492_20591);
var source_idx_20593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20493_20592,(0),null);
var vec__20496_20594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20493_20592,(1),null);
var __20595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20496_20594,(0),null);
var lines_20596__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20496_20594,(1),null);
var seq__20499_20597 = cljs.core.seq(lines_20596__$1);
var chunk__20500_20598 = null;
var count__20501_20599 = (0);
var i__20502_20600 = (0);
while(true){
if((i__20502_20600 < count__20501_20599)){
var vec__20503_20601 = chunk__20500_20598.cljs$core$IIndexed$_nth$arity$2(null,i__20502_20600);
var line_20602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20503_20601,(0),null);
var cols_20603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20503_20601,(1),null);
var seq__20506_20604 = cljs.core.seq(cols_20603);
var chunk__20507_20605 = null;
var count__20508_20606 = (0);
var i__20509_20607 = (0);
while(true){
if((i__20509_20607 < count__20508_20606)){
var vec__20510_20608 = chunk__20507_20605.cljs$core$IIndexed$_nth$arity$2(null,i__20509_20607);
var col_20609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20510_20608,(0),null);
var infos_20610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20510_20608,(1),null);
encode_cols(infos_20610,source_idx_20593,line_20602,col_20609);

var G__20611 = seq__20506_20604;
var G__20612 = chunk__20507_20605;
var G__20613 = count__20508_20606;
var G__20614 = (i__20509_20607 + (1));
seq__20506_20604 = G__20611;
chunk__20507_20605 = G__20612;
count__20508_20606 = G__20613;
i__20509_20607 = G__20614;
continue;
} else {
var temp__5457__auto___20615 = cljs.core.seq(seq__20506_20604);
if(temp__5457__auto___20615){
var seq__20506_20616__$1 = temp__5457__auto___20615;
if(cljs.core.chunked_seq_QMARK_(seq__20506_20616__$1)){
var c__12674__auto___20617 = cljs.core.chunk_first(seq__20506_20616__$1);
var G__20618 = cljs.core.chunk_rest(seq__20506_20616__$1);
var G__20619 = c__12674__auto___20617;
var G__20620 = cljs.core.count(c__12674__auto___20617);
var G__20621 = (0);
seq__20506_20604 = G__20618;
chunk__20507_20605 = G__20619;
count__20508_20606 = G__20620;
i__20509_20607 = G__20621;
continue;
} else {
var vec__20513_20622 = cljs.core.first(seq__20506_20616__$1);
var col_20623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20513_20622,(0),null);
var infos_20624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20513_20622,(1),null);
encode_cols(infos_20624,source_idx_20593,line_20602,col_20623);

var G__20625 = cljs.core.next(seq__20506_20616__$1);
var G__20626 = null;
var G__20627 = (0);
var G__20628 = (0);
seq__20506_20604 = G__20625;
chunk__20507_20605 = G__20626;
count__20508_20606 = G__20627;
i__20509_20607 = G__20628;
continue;
}
} else {
}
}
break;
}

var G__20629 = seq__20499_20597;
var G__20630 = chunk__20500_20598;
var G__20631 = count__20501_20599;
var G__20632 = (i__20502_20600 + (1));
seq__20499_20597 = G__20629;
chunk__20500_20598 = G__20630;
count__20501_20599 = G__20631;
i__20502_20600 = G__20632;
continue;
} else {
var temp__5457__auto___20633 = cljs.core.seq(seq__20499_20597);
if(temp__5457__auto___20633){
var seq__20499_20634__$1 = temp__5457__auto___20633;
if(cljs.core.chunked_seq_QMARK_(seq__20499_20634__$1)){
var c__12674__auto___20635 = cljs.core.chunk_first(seq__20499_20634__$1);
var G__20636 = cljs.core.chunk_rest(seq__20499_20634__$1);
var G__20637 = c__12674__auto___20635;
var G__20638 = cljs.core.count(c__12674__auto___20635);
var G__20639 = (0);
seq__20499_20597 = G__20636;
chunk__20500_20598 = G__20637;
count__20501_20599 = G__20638;
i__20502_20600 = G__20639;
continue;
} else {
var vec__20516_20640 = cljs.core.first(seq__20499_20634__$1);
var line_20641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20516_20640,(0),null);
var cols_20642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20516_20640,(1),null);
var seq__20519_20643 = cljs.core.seq(cols_20642);
var chunk__20520_20644 = null;
var count__20521_20645 = (0);
var i__20522_20646 = (0);
while(true){
if((i__20522_20646 < count__20521_20645)){
var vec__20523_20647 = chunk__20520_20644.cljs$core$IIndexed$_nth$arity$2(null,i__20522_20646);
var col_20648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20523_20647,(0),null);
var infos_20649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20523_20647,(1),null);
encode_cols(infos_20649,source_idx_20593,line_20641,col_20648);

var G__20650 = seq__20519_20643;
var G__20651 = chunk__20520_20644;
var G__20652 = count__20521_20645;
var G__20653 = (i__20522_20646 + (1));
seq__20519_20643 = G__20650;
chunk__20520_20644 = G__20651;
count__20521_20645 = G__20652;
i__20522_20646 = G__20653;
continue;
} else {
var temp__5457__auto___20654__$1 = cljs.core.seq(seq__20519_20643);
if(temp__5457__auto___20654__$1){
var seq__20519_20655__$1 = temp__5457__auto___20654__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20519_20655__$1)){
var c__12674__auto___20656 = cljs.core.chunk_first(seq__20519_20655__$1);
var G__20657 = cljs.core.chunk_rest(seq__20519_20655__$1);
var G__20658 = c__12674__auto___20656;
var G__20659 = cljs.core.count(c__12674__auto___20656);
var G__20660 = (0);
seq__20519_20643 = G__20657;
chunk__20520_20644 = G__20658;
count__20521_20645 = G__20659;
i__20522_20646 = G__20660;
continue;
} else {
var vec__20526_20661 = cljs.core.first(seq__20519_20655__$1);
var col_20662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20526_20661,(0),null);
var infos_20663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20526_20661,(1),null);
encode_cols(infos_20663,source_idx_20593,line_20641,col_20662);

var G__20664 = cljs.core.next(seq__20519_20655__$1);
var G__20665 = null;
var G__20666 = (0);
var G__20667 = (0);
seq__20519_20643 = G__20664;
chunk__20520_20644 = G__20665;
count__20521_20645 = G__20666;
i__20522_20646 = G__20667;
continue;
}
} else {
}
}
break;
}

var G__20668 = cljs.core.next(seq__20499_20634__$1);
var G__20669 = null;
var G__20670 = (0);
var G__20671 = (0);
seq__20499_20597 = G__20668;
chunk__20500_20598 = G__20669;
count__20501_20599 = G__20670;
i__20502_20600 = G__20671;
continue;
}
} else {
}
}
break;
}

var G__20672 = seq__20489_20588;
var G__20673 = chunk__20490_20589;
var G__20674 = count__20491_20590;
var G__20675 = (i__20492_20591 + (1));
seq__20489_20588 = G__20672;
chunk__20490_20589 = G__20673;
count__20491_20590 = G__20674;
i__20492_20591 = G__20675;
continue;
} else {
var temp__5457__auto___20676 = cljs.core.seq(seq__20489_20588);
if(temp__5457__auto___20676){
var seq__20489_20677__$1 = temp__5457__auto___20676;
if(cljs.core.chunked_seq_QMARK_(seq__20489_20677__$1)){
var c__12674__auto___20678 = cljs.core.chunk_first(seq__20489_20677__$1);
var G__20679 = cljs.core.chunk_rest(seq__20489_20677__$1);
var G__20680 = c__12674__auto___20678;
var G__20681 = cljs.core.count(c__12674__auto___20678);
var G__20682 = (0);
seq__20489_20588 = G__20679;
chunk__20490_20589 = G__20680;
count__20491_20590 = G__20681;
i__20492_20591 = G__20682;
continue;
} else {
var vec__20529_20683 = cljs.core.first(seq__20489_20677__$1);
var source_idx_20684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20529_20683,(0),null);
var vec__20532_20685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20529_20683,(1),null);
var __20686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20532_20685,(0),null);
var lines_20687__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20532_20685,(1),null);
var seq__20535_20688 = cljs.core.seq(lines_20687__$1);
var chunk__20536_20689 = null;
var count__20537_20690 = (0);
var i__20538_20691 = (0);
while(true){
if((i__20538_20691 < count__20537_20690)){
var vec__20539_20692 = chunk__20536_20689.cljs$core$IIndexed$_nth$arity$2(null,i__20538_20691);
var line_20693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20539_20692,(0),null);
var cols_20694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20539_20692,(1),null);
var seq__20542_20695 = cljs.core.seq(cols_20694);
var chunk__20543_20696 = null;
var count__20544_20697 = (0);
var i__20545_20698 = (0);
while(true){
if((i__20545_20698 < count__20544_20697)){
var vec__20546_20699 = chunk__20543_20696.cljs$core$IIndexed$_nth$arity$2(null,i__20545_20698);
var col_20700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20546_20699,(0),null);
var infos_20701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20546_20699,(1),null);
encode_cols(infos_20701,source_idx_20684,line_20693,col_20700);

var G__20702 = seq__20542_20695;
var G__20703 = chunk__20543_20696;
var G__20704 = count__20544_20697;
var G__20705 = (i__20545_20698 + (1));
seq__20542_20695 = G__20702;
chunk__20543_20696 = G__20703;
count__20544_20697 = G__20704;
i__20545_20698 = G__20705;
continue;
} else {
var temp__5457__auto___20706__$1 = cljs.core.seq(seq__20542_20695);
if(temp__5457__auto___20706__$1){
var seq__20542_20707__$1 = temp__5457__auto___20706__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20542_20707__$1)){
var c__12674__auto___20708 = cljs.core.chunk_first(seq__20542_20707__$1);
var G__20709 = cljs.core.chunk_rest(seq__20542_20707__$1);
var G__20710 = c__12674__auto___20708;
var G__20711 = cljs.core.count(c__12674__auto___20708);
var G__20712 = (0);
seq__20542_20695 = G__20709;
chunk__20543_20696 = G__20710;
count__20544_20697 = G__20711;
i__20545_20698 = G__20712;
continue;
} else {
var vec__20549_20713 = cljs.core.first(seq__20542_20707__$1);
var col_20714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20549_20713,(0),null);
var infos_20715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20549_20713,(1),null);
encode_cols(infos_20715,source_idx_20684,line_20693,col_20714);

var G__20716 = cljs.core.next(seq__20542_20707__$1);
var G__20717 = null;
var G__20718 = (0);
var G__20719 = (0);
seq__20542_20695 = G__20716;
chunk__20543_20696 = G__20717;
count__20544_20697 = G__20718;
i__20545_20698 = G__20719;
continue;
}
} else {
}
}
break;
}

var G__20720 = seq__20535_20688;
var G__20721 = chunk__20536_20689;
var G__20722 = count__20537_20690;
var G__20723 = (i__20538_20691 + (1));
seq__20535_20688 = G__20720;
chunk__20536_20689 = G__20721;
count__20537_20690 = G__20722;
i__20538_20691 = G__20723;
continue;
} else {
var temp__5457__auto___20724__$1 = cljs.core.seq(seq__20535_20688);
if(temp__5457__auto___20724__$1){
var seq__20535_20725__$1 = temp__5457__auto___20724__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20535_20725__$1)){
var c__12674__auto___20726 = cljs.core.chunk_first(seq__20535_20725__$1);
var G__20727 = cljs.core.chunk_rest(seq__20535_20725__$1);
var G__20728 = c__12674__auto___20726;
var G__20729 = cljs.core.count(c__12674__auto___20726);
var G__20730 = (0);
seq__20535_20688 = G__20727;
chunk__20536_20689 = G__20728;
count__20537_20690 = G__20729;
i__20538_20691 = G__20730;
continue;
} else {
var vec__20552_20731 = cljs.core.first(seq__20535_20725__$1);
var line_20732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20552_20731,(0),null);
var cols_20733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20552_20731,(1),null);
var seq__20555_20734 = cljs.core.seq(cols_20733);
var chunk__20556_20735 = null;
var count__20557_20736 = (0);
var i__20558_20737 = (0);
while(true){
if((i__20558_20737 < count__20557_20736)){
var vec__20559_20738 = chunk__20556_20735.cljs$core$IIndexed$_nth$arity$2(null,i__20558_20737);
var col_20739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20559_20738,(0),null);
var infos_20740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20559_20738,(1),null);
encode_cols(infos_20740,source_idx_20684,line_20732,col_20739);

var G__20741 = seq__20555_20734;
var G__20742 = chunk__20556_20735;
var G__20743 = count__20557_20736;
var G__20744 = (i__20558_20737 + (1));
seq__20555_20734 = G__20741;
chunk__20556_20735 = G__20742;
count__20557_20736 = G__20743;
i__20558_20737 = G__20744;
continue;
} else {
var temp__5457__auto___20745__$2 = cljs.core.seq(seq__20555_20734);
if(temp__5457__auto___20745__$2){
var seq__20555_20746__$1 = temp__5457__auto___20745__$2;
if(cljs.core.chunked_seq_QMARK_(seq__20555_20746__$1)){
var c__12674__auto___20747 = cljs.core.chunk_first(seq__20555_20746__$1);
var G__20748 = cljs.core.chunk_rest(seq__20555_20746__$1);
var G__20749 = c__12674__auto___20747;
var G__20750 = cljs.core.count(c__12674__auto___20747);
var G__20751 = (0);
seq__20555_20734 = G__20748;
chunk__20556_20735 = G__20749;
count__20557_20736 = G__20750;
i__20558_20737 = G__20751;
continue;
} else {
var vec__20562_20752 = cljs.core.first(seq__20555_20746__$1);
var col_20753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20562_20752,(0),null);
var infos_20754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20562_20752,(1),null);
encode_cols(infos_20754,source_idx_20684,line_20732,col_20753);

var G__20755 = cljs.core.next(seq__20555_20746__$1);
var G__20756 = null;
var G__20757 = (0);
var G__20758 = (0);
seq__20555_20734 = G__20755;
chunk__20556_20735 = G__20756;
count__20557_20736 = G__20757;
i__20558_20737 = G__20758;
continue;
}
} else {
}
}
break;
}

var G__20759 = cljs.core.next(seq__20535_20725__$1);
var G__20760 = null;
var G__20761 = (0);
var G__20762 = (0);
seq__20535_20688 = G__20759;
chunk__20536_20689 = G__20760;
count__20537_20690 = G__20761;
i__20538_20691 = G__20762;
continue;
}
} else {
}
}
break;
}

var G__20763 = cljs.core.next(seq__20489_20677__$1);
var G__20764 = null;
var G__20765 = (0);
var G__20766 = (0);
seq__20489_20588 = G__20763;
chunk__20490_20589 = G__20764;
count__20491_20590 = G__20765;
i__20492_20591 = G__20766;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__20565 = ({"version": (3), "file": cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((cljs.core.cst$kw$source_DASH_map_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__20482_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20482_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__20483_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__20483_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__20484_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__20484_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts))){
var G__20566 = G__20565;
var G__20567_20767 = G__20566;
var G__20568_20768 = "sourcesContent";
var G__20569_20769 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__20567_20767,G__20568_20768,G__20569_20769);

return G__20566;
} else {
return G__20565;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__20770 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20770,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20770,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__20773 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20773,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20773,(1),null);
var G__20779 = cljs.core.next(col_map_seq);
var G__20780 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__20773,col,infos,vec__20770,line,col_map){
return (function (v,p__20776){
var map__20777 = p__20776;
var map__20777__$1 = ((((!((map__20777 == null)))?((((map__20777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20777):map__20777);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20777__$1,cljs.core.cst$kw$gline);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20777__$1,cljs.core.cst$kw$gcol);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__20773,col,infos,vec__20770,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__20779;
new_cols = G__20780;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__20781 = cljs.core.next(line_map_seq);
var G__20782 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__20781;
new_lines = G__20782;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__20783_20845 = cljs.core.seq(reverse_map);
var chunk__20784_20846 = null;
var count__20785_20847 = (0);
var i__20786_20848 = (0);
while(true){
if((i__20786_20848 < count__20785_20847)){
var vec__20787_20849 = chunk__20784_20846.cljs$core$IIndexed$_nth$arity$2(null,i__20786_20848);
var line_20850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20787_20849,(0),null);
var columns_20851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20787_20849,(1),null);
var seq__20790_20852 = cljs.core.seq(columns_20851);
var chunk__20791_20853 = null;
var count__20792_20854 = (0);
var i__20793_20855 = (0);
while(true){
if((i__20793_20855 < count__20792_20854)){
var vec__20794_20856 = chunk__20791_20853.cljs$core$IIndexed$_nth$arity$2(null,i__20793_20855);
var column_20857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20794_20856,(0),null);
var column_info_20858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20794_20856,(1),null);
var seq__20797_20859 = cljs.core.seq(column_info_20858);
var chunk__20798_20860 = null;
var count__20799_20861 = (0);
var i__20800_20862 = (0);
while(true){
if((i__20800_20862 < count__20799_20861)){
var map__20801_20863 = chunk__20798_20860.cljs$core$IIndexed$_nth$arity$2(null,i__20800_20862);
var map__20801_20864__$1 = ((((!((map__20801_20863 == null)))?((((map__20801_20863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20801_20863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20801_20863):map__20801_20863);
var gline_20865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20801_20864__$1,cljs.core.cst$kw$gline);
var gcol_20866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20801_20864__$1,cljs.core.cst$kw$gcol);
var name_20867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20801_20864__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20865], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20797_20859,chunk__20798_20860,count__20799_20861,i__20800_20862,seq__20790_20852,chunk__20791_20853,count__20792_20854,i__20793_20855,seq__20783_20845,chunk__20784_20846,count__20785_20847,i__20786_20848,map__20801_20863,map__20801_20864__$1,gline_20865,gcol_20866,name_20867,vec__20794_20856,column_20857,column_info_20858,vec__20787_20849,line_20850,columns_20851,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20866], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20850,cljs.core.cst$kw$col,column_20857,cljs.core.cst$kw$name,name_20867], null));
});})(seq__20797_20859,chunk__20798_20860,count__20799_20861,i__20800_20862,seq__20790_20852,chunk__20791_20853,count__20792_20854,i__20793_20855,seq__20783_20845,chunk__20784_20846,count__20785_20847,i__20786_20848,map__20801_20863,map__20801_20864__$1,gline_20865,gcol_20866,name_20867,vec__20794_20856,column_20857,column_info_20858,vec__20787_20849,line_20850,columns_20851,inverted))
,cljs.core.sorted_map()));

var G__20868 = seq__20797_20859;
var G__20869 = chunk__20798_20860;
var G__20870 = count__20799_20861;
var G__20871 = (i__20800_20862 + (1));
seq__20797_20859 = G__20868;
chunk__20798_20860 = G__20869;
count__20799_20861 = G__20870;
i__20800_20862 = G__20871;
continue;
} else {
var temp__5457__auto___20872 = cljs.core.seq(seq__20797_20859);
if(temp__5457__auto___20872){
var seq__20797_20873__$1 = temp__5457__auto___20872;
if(cljs.core.chunked_seq_QMARK_(seq__20797_20873__$1)){
var c__12674__auto___20874 = cljs.core.chunk_first(seq__20797_20873__$1);
var G__20875 = cljs.core.chunk_rest(seq__20797_20873__$1);
var G__20876 = c__12674__auto___20874;
var G__20877 = cljs.core.count(c__12674__auto___20874);
var G__20878 = (0);
seq__20797_20859 = G__20875;
chunk__20798_20860 = G__20876;
count__20799_20861 = G__20877;
i__20800_20862 = G__20878;
continue;
} else {
var map__20803_20879 = cljs.core.first(seq__20797_20873__$1);
var map__20803_20880__$1 = ((((!((map__20803_20879 == null)))?((((map__20803_20879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20803_20879.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20803_20879):map__20803_20879);
var gline_20881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20803_20880__$1,cljs.core.cst$kw$gline);
var gcol_20882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20803_20880__$1,cljs.core.cst$kw$gcol);
var name_20883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20803_20880__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20881], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20797_20859,chunk__20798_20860,count__20799_20861,i__20800_20862,seq__20790_20852,chunk__20791_20853,count__20792_20854,i__20793_20855,seq__20783_20845,chunk__20784_20846,count__20785_20847,i__20786_20848,map__20803_20879,map__20803_20880__$1,gline_20881,gcol_20882,name_20883,seq__20797_20873__$1,temp__5457__auto___20872,vec__20794_20856,column_20857,column_info_20858,vec__20787_20849,line_20850,columns_20851,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20882], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20850,cljs.core.cst$kw$col,column_20857,cljs.core.cst$kw$name,name_20883], null));
});})(seq__20797_20859,chunk__20798_20860,count__20799_20861,i__20800_20862,seq__20790_20852,chunk__20791_20853,count__20792_20854,i__20793_20855,seq__20783_20845,chunk__20784_20846,count__20785_20847,i__20786_20848,map__20803_20879,map__20803_20880__$1,gline_20881,gcol_20882,name_20883,seq__20797_20873__$1,temp__5457__auto___20872,vec__20794_20856,column_20857,column_info_20858,vec__20787_20849,line_20850,columns_20851,inverted))
,cljs.core.sorted_map()));

var G__20884 = cljs.core.next(seq__20797_20873__$1);
var G__20885 = null;
var G__20886 = (0);
var G__20887 = (0);
seq__20797_20859 = G__20884;
chunk__20798_20860 = G__20885;
count__20799_20861 = G__20886;
i__20800_20862 = G__20887;
continue;
}
} else {
}
}
break;
}

var G__20888 = seq__20790_20852;
var G__20889 = chunk__20791_20853;
var G__20890 = count__20792_20854;
var G__20891 = (i__20793_20855 + (1));
seq__20790_20852 = G__20888;
chunk__20791_20853 = G__20889;
count__20792_20854 = G__20890;
i__20793_20855 = G__20891;
continue;
} else {
var temp__5457__auto___20892 = cljs.core.seq(seq__20790_20852);
if(temp__5457__auto___20892){
var seq__20790_20893__$1 = temp__5457__auto___20892;
if(cljs.core.chunked_seq_QMARK_(seq__20790_20893__$1)){
var c__12674__auto___20894 = cljs.core.chunk_first(seq__20790_20893__$1);
var G__20895 = cljs.core.chunk_rest(seq__20790_20893__$1);
var G__20896 = c__12674__auto___20894;
var G__20897 = cljs.core.count(c__12674__auto___20894);
var G__20898 = (0);
seq__20790_20852 = G__20895;
chunk__20791_20853 = G__20896;
count__20792_20854 = G__20897;
i__20793_20855 = G__20898;
continue;
} else {
var vec__20805_20899 = cljs.core.first(seq__20790_20893__$1);
var column_20900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20805_20899,(0),null);
var column_info_20901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20805_20899,(1),null);
var seq__20808_20902 = cljs.core.seq(column_info_20901);
var chunk__20809_20903 = null;
var count__20810_20904 = (0);
var i__20811_20905 = (0);
while(true){
if((i__20811_20905 < count__20810_20904)){
var map__20812_20906 = chunk__20809_20903.cljs$core$IIndexed$_nth$arity$2(null,i__20811_20905);
var map__20812_20907__$1 = ((((!((map__20812_20906 == null)))?((((map__20812_20906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20812_20906.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20812_20906):map__20812_20906);
var gline_20908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20812_20907__$1,cljs.core.cst$kw$gline);
var gcol_20909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20812_20907__$1,cljs.core.cst$kw$gcol);
var name_20910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20812_20907__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20908], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20808_20902,chunk__20809_20903,count__20810_20904,i__20811_20905,seq__20790_20852,chunk__20791_20853,count__20792_20854,i__20793_20855,seq__20783_20845,chunk__20784_20846,count__20785_20847,i__20786_20848,map__20812_20906,map__20812_20907__$1,gline_20908,gcol_20909,name_20910,vec__20805_20899,column_20900,column_info_20901,seq__20790_20893__$1,temp__5457__auto___20892,vec__20787_20849,line_20850,columns_20851,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20909], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20850,cljs.core.cst$kw$col,column_20900,cljs.core.cst$kw$name,name_20910], null));
});})(seq__20808_20902,chunk__20809_20903,count__20810_20904,i__20811_20905,seq__20790_20852,chunk__20791_20853,count__20792_20854,i__20793_20855,seq__20783_20845,chunk__20784_20846,count__20785_20847,i__20786_20848,map__20812_20906,map__20812_20907__$1,gline_20908,gcol_20909,name_20910,vec__20805_20899,column_20900,column_info_20901,seq__20790_20893__$1,temp__5457__auto___20892,vec__20787_20849,line_20850,columns_20851,inverted))
,cljs.core.sorted_map()));

var G__20911 = seq__20808_20902;
var G__20912 = chunk__20809_20903;
var G__20913 = count__20810_20904;
var G__20914 = (i__20811_20905 + (1));
seq__20808_20902 = G__20911;
chunk__20809_20903 = G__20912;
count__20810_20904 = G__20913;
i__20811_20905 = G__20914;
continue;
} else {
var temp__5457__auto___20915__$1 = cljs.core.seq(seq__20808_20902);
if(temp__5457__auto___20915__$1){
var seq__20808_20916__$1 = temp__5457__auto___20915__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20808_20916__$1)){
var c__12674__auto___20917 = cljs.core.chunk_first(seq__20808_20916__$1);
var G__20918 = cljs.core.chunk_rest(seq__20808_20916__$1);
var G__20919 = c__12674__auto___20917;
var G__20920 = cljs.core.count(c__12674__auto___20917);
var G__20921 = (0);
seq__20808_20902 = G__20918;
chunk__20809_20903 = G__20919;
count__20810_20904 = G__20920;
i__20811_20905 = G__20921;
continue;
} else {
var map__20814_20922 = cljs.core.first(seq__20808_20916__$1);
var map__20814_20923__$1 = ((((!((map__20814_20922 == null)))?((((map__20814_20922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20814_20922.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20814_20922):map__20814_20922);
var gline_20924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20814_20923__$1,cljs.core.cst$kw$gline);
var gcol_20925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20814_20923__$1,cljs.core.cst$kw$gcol);
var name_20926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20814_20923__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20924], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20808_20902,chunk__20809_20903,count__20810_20904,i__20811_20905,seq__20790_20852,chunk__20791_20853,count__20792_20854,i__20793_20855,seq__20783_20845,chunk__20784_20846,count__20785_20847,i__20786_20848,map__20814_20922,map__20814_20923__$1,gline_20924,gcol_20925,name_20926,seq__20808_20916__$1,temp__5457__auto___20915__$1,vec__20805_20899,column_20900,column_info_20901,seq__20790_20893__$1,temp__5457__auto___20892,vec__20787_20849,line_20850,columns_20851,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20925], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20850,cljs.core.cst$kw$col,column_20900,cljs.core.cst$kw$name,name_20926], null));
});})(seq__20808_20902,chunk__20809_20903,count__20810_20904,i__20811_20905,seq__20790_20852,chunk__20791_20853,count__20792_20854,i__20793_20855,seq__20783_20845,chunk__20784_20846,count__20785_20847,i__20786_20848,map__20814_20922,map__20814_20923__$1,gline_20924,gcol_20925,name_20926,seq__20808_20916__$1,temp__5457__auto___20915__$1,vec__20805_20899,column_20900,column_info_20901,seq__20790_20893__$1,temp__5457__auto___20892,vec__20787_20849,line_20850,columns_20851,inverted))
,cljs.core.sorted_map()));

var G__20927 = cljs.core.next(seq__20808_20916__$1);
var G__20928 = null;
var G__20929 = (0);
var G__20930 = (0);
seq__20808_20902 = G__20927;
chunk__20809_20903 = G__20928;
count__20810_20904 = G__20929;
i__20811_20905 = G__20930;
continue;
}
} else {
}
}
break;
}

var G__20931 = cljs.core.next(seq__20790_20893__$1);
var G__20932 = null;
var G__20933 = (0);
var G__20934 = (0);
seq__20790_20852 = G__20931;
chunk__20791_20853 = G__20932;
count__20792_20854 = G__20933;
i__20793_20855 = G__20934;
continue;
}
} else {
}
}
break;
}

var G__20935 = seq__20783_20845;
var G__20936 = chunk__20784_20846;
var G__20937 = count__20785_20847;
var G__20938 = (i__20786_20848 + (1));
seq__20783_20845 = G__20935;
chunk__20784_20846 = G__20936;
count__20785_20847 = G__20937;
i__20786_20848 = G__20938;
continue;
} else {
var temp__5457__auto___20939 = cljs.core.seq(seq__20783_20845);
if(temp__5457__auto___20939){
var seq__20783_20940__$1 = temp__5457__auto___20939;
if(cljs.core.chunked_seq_QMARK_(seq__20783_20940__$1)){
var c__12674__auto___20941 = cljs.core.chunk_first(seq__20783_20940__$1);
var G__20942 = cljs.core.chunk_rest(seq__20783_20940__$1);
var G__20943 = c__12674__auto___20941;
var G__20944 = cljs.core.count(c__12674__auto___20941);
var G__20945 = (0);
seq__20783_20845 = G__20942;
chunk__20784_20846 = G__20943;
count__20785_20847 = G__20944;
i__20786_20848 = G__20945;
continue;
} else {
var vec__20816_20946 = cljs.core.first(seq__20783_20940__$1);
var line_20947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20816_20946,(0),null);
var columns_20948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20816_20946,(1),null);
var seq__20819_20949 = cljs.core.seq(columns_20948);
var chunk__20820_20950 = null;
var count__20821_20951 = (0);
var i__20822_20952 = (0);
while(true){
if((i__20822_20952 < count__20821_20951)){
var vec__20823_20953 = chunk__20820_20950.cljs$core$IIndexed$_nth$arity$2(null,i__20822_20952);
var column_20954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20823_20953,(0),null);
var column_info_20955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20823_20953,(1),null);
var seq__20826_20956 = cljs.core.seq(column_info_20955);
var chunk__20827_20957 = null;
var count__20828_20958 = (0);
var i__20829_20959 = (0);
while(true){
if((i__20829_20959 < count__20828_20958)){
var map__20830_20960 = chunk__20827_20957.cljs$core$IIndexed$_nth$arity$2(null,i__20829_20959);
var map__20830_20961__$1 = ((((!((map__20830_20960 == null)))?((((map__20830_20960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20830_20960.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20830_20960):map__20830_20960);
var gline_20962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20830_20961__$1,cljs.core.cst$kw$gline);
var gcol_20963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20830_20961__$1,cljs.core.cst$kw$gcol);
var name_20964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20830_20961__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20962], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20826_20956,chunk__20827_20957,count__20828_20958,i__20829_20959,seq__20819_20949,chunk__20820_20950,count__20821_20951,i__20822_20952,seq__20783_20845,chunk__20784_20846,count__20785_20847,i__20786_20848,map__20830_20960,map__20830_20961__$1,gline_20962,gcol_20963,name_20964,vec__20823_20953,column_20954,column_info_20955,vec__20816_20946,line_20947,columns_20948,seq__20783_20940__$1,temp__5457__auto___20939,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20963], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20947,cljs.core.cst$kw$col,column_20954,cljs.core.cst$kw$name,name_20964], null));
});})(seq__20826_20956,chunk__20827_20957,count__20828_20958,i__20829_20959,seq__20819_20949,chunk__20820_20950,count__20821_20951,i__20822_20952,seq__20783_20845,chunk__20784_20846,count__20785_20847,i__20786_20848,map__20830_20960,map__20830_20961__$1,gline_20962,gcol_20963,name_20964,vec__20823_20953,column_20954,column_info_20955,vec__20816_20946,line_20947,columns_20948,seq__20783_20940__$1,temp__5457__auto___20939,inverted))
,cljs.core.sorted_map()));

var G__20965 = seq__20826_20956;
var G__20966 = chunk__20827_20957;
var G__20967 = count__20828_20958;
var G__20968 = (i__20829_20959 + (1));
seq__20826_20956 = G__20965;
chunk__20827_20957 = G__20966;
count__20828_20958 = G__20967;
i__20829_20959 = G__20968;
continue;
} else {
var temp__5457__auto___20969__$1 = cljs.core.seq(seq__20826_20956);
if(temp__5457__auto___20969__$1){
var seq__20826_20970__$1 = temp__5457__auto___20969__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20826_20970__$1)){
var c__12674__auto___20971 = cljs.core.chunk_first(seq__20826_20970__$1);
var G__20972 = cljs.core.chunk_rest(seq__20826_20970__$1);
var G__20973 = c__12674__auto___20971;
var G__20974 = cljs.core.count(c__12674__auto___20971);
var G__20975 = (0);
seq__20826_20956 = G__20972;
chunk__20827_20957 = G__20973;
count__20828_20958 = G__20974;
i__20829_20959 = G__20975;
continue;
} else {
var map__20832_20976 = cljs.core.first(seq__20826_20970__$1);
var map__20832_20977__$1 = ((((!((map__20832_20976 == null)))?((((map__20832_20976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20832_20976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20832_20976):map__20832_20976);
var gline_20978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832_20977__$1,cljs.core.cst$kw$gline);
var gcol_20979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832_20977__$1,cljs.core.cst$kw$gcol);
var name_20980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832_20977__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20978], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20826_20956,chunk__20827_20957,count__20828_20958,i__20829_20959,seq__20819_20949,chunk__20820_20950,count__20821_20951,i__20822_20952,seq__20783_20845,chunk__20784_20846,count__20785_20847,i__20786_20848,map__20832_20976,map__20832_20977__$1,gline_20978,gcol_20979,name_20980,seq__20826_20970__$1,temp__5457__auto___20969__$1,vec__20823_20953,column_20954,column_info_20955,vec__20816_20946,line_20947,columns_20948,seq__20783_20940__$1,temp__5457__auto___20939,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20979], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20947,cljs.core.cst$kw$col,column_20954,cljs.core.cst$kw$name,name_20980], null));
});})(seq__20826_20956,chunk__20827_20957,count__20828_20958,i__20829_20959,seq__20819_20949,chunk__20820_20950,count__20821_20951,i__20822_20952,seq__20783_20845,chunk__20784_20846,count__20785_20847,i__20786_20848,map__20832_20976,map__20832_20977__$1,gline_20978,gcol_20979,name_20980,seq__20826_20970__$1,temp__5457__auto___20969__$1,vec__20823_20953,column_20954,column_info_20955,vec__20816_20946,line_20947,columns_20948,seq__20783_20940__$1,temp__5457__auto___20939,inverted))
,cljs.core.sorted_map()));

var G__20981 = cljs.core.next(seq__20826_20970__$1);
var G__20982 = null;
var G__20983 = (0);
var G__20984 = (0);
seq__20826_20956 = G__20981;
chunk__20827_20957 = G__20982;
count__20828_20958 = G__20983;
i__20829_20959 = G__20984;
continue;
}
} else {
}
}
break;
}

var G__20985 = seq__20819_20949;
var G__20986 = chunk__20820_20950;
var G__20987 = count__20821_20951;
var G__20988 = (i__20822_20952 + (1));
seq__20819_20949 = G__20985;
chunk__20820_20950 = G__20986;
count__20821_20951 = G__20987;
i__20822_20952 = G__20988;
continue;
} else {
var temp__5457__auto___20989__$1 = cljs.core.seq(seq__20819_20949);
if(temp__5457__auto___20989__$1){
var seq__20819_20990__$1 = temp__5457__auto___20989__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20819_20990__$1)){
var c__12674__auto___20991 = cljs.core.chunk_first(seq__20819_20990__$1);
var G__20992 = cljs.core.chunk_rest(seq__20819_20990__$1);
var G__20993 = c__12674__auto___20991;
var G__20994 = cljs.core.count(c__12674__auto___20991);
var G__20995 = (0);
seq__20819_20949 = G__20992;
chunk__20820_20950 = G__20993;
count__20821_20951 = G__20994;
i__20822_20952 = G__20995;
continue;
} else {
var vec__20834_20996 = cljs.core.first(seq__20819_20990__$1);
var column_20997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20834_20996,(0),null);
var column_info_20998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20834_20996,(1),null);
var seq__20837_20999 = cljs.core.seq(column_info_20998);
var chunk__20838_21000 = null;
var count__20839_21001 = (0);
var i__20840_21002 = (0);
while(true){
if((i__20840_21002 < count__20839_21001)){
var map__20841_21003 = chunk__20838_21000.cljs$core$IIndexed$_nth$arity$2(null,i__20840_21002);
var map__20841_21004__$1 = ((((!((map__20841_21003 == null)))?((((map__20841_21003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20841_21003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20841_21003):map__20841_21003);
var gline_21005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20841_21004__$1,cljs.core.cst$kw$gline);
var gcol_21006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20841_21004__$1,cljs.core.cst$kw$gcol);
var name_21007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20841_21004__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_21005], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20837_20999,chunk__20838_21000,count__20839_21001,i__20840_21002,seq__20819_20949,chunk__20820_20950,count__20821_20951,i__20822_20952,seq__20783_20845,chunk__20784_20846,count__20785_20847,i__20786_20848,map__20841_21003,map__20841_21004__$1,gline_21005,gcol_21006,name_21007,vec__20834_20996,column_20997,column_info_20998,seq__20819_20990__$1,temp__5457__auto___20989__$1,vec__20816_20946,line_20947,columns_20948,seq__20783_20940__$1,temp__5457__auto___20939,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_21006], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20947,cljs.core.cst$kw$col,column_20997,cljs.core.cst$kw$name,name_21007], null));
});})(seq__20837_20999,chunk__20838_21000,count__20839_21001,i__20840_21002,seq__20819_20949,chunk__20820_20950,count__20821_20951,i__20822_20952,seq__20783_20845,chunk__20784_20846,count__20785_20847,i__20786_20848,map__20841_21003,map__20841_21004__$1,gline_21005,gcol_21006,name_21007,vec__20834_20996,column_20997,column_info_20998,seq__20819_20990__$1,temp__5457__auto___20989__$1,vec__20816_20946,line_20947,columns_20948,seq__20783_20940__$1,temp__5457__auto___20939,inverted))
,cljs.core.sorted_map()));

var G__21008 = seq__20837_20999;
var G__21009 = chunk__20838_21000;
var G__21010 = count__20839_21001;
var G__21011 = (i__20840_21002 + (1));
seq__20837_20999 = G__21008;
chunk__20838_21000 = G__21009;
count__20839_21001 = G__21010;
i__20840_21002 = G__21011;
continue;
} else {
var temp__5457__auto___21012__$2 = cljs.core.seq(seq__20837_20999);
if(temp__5457__auto___21012__$2){
var seq__20837_21013__$1 = temp__5457__auto___21012__$2;
if(cljs.core.chunked_seq_QMARK_(seq__20837_21013__$1)){
var c__12674__auto___21014 = cljs.core.chunk_first(seq__20837_21013__$1);
var G__21015 = cljs.core.chunk_rest(seq__20837_21013__$1);
var G__21016 = c__12674__auto___21014;
var G__21017 = cljs.core.count(c__12674__auto___21014);
var G__21018 = (0);
seq__20837_20999 = G__21015;
chunk__20838_21000 = G__21016;
count__20839_21001 = G__21017;
i__20840_21002 = G__21018;
continue;
} else {
var map__20843_21019 = cljs.core.first(seq__20837_21013__$1);
var map__20843_21020__$1 = ((((!((map__20843_21019 == null)))?((((map__20843_21019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20843_21019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20843_21019):map__20843_21019);
var gline_21021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20843_21020__$1,cljs.core.cst$kw$gline);
var gcol_21022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20843_21020__$1,cljs.core.cst$kw$gcol);
var name_21023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20843_21020__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_21021], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20837_20999,chunk__20838_21000,count__20839_21001,i__20840_21002,seq__20819_20949,chunk__20820_20950,count__20821_20951,i__20822_20952,seq__20783_20845,chunk__20784_20846,count__20785_20847,i__20786_20848,map__20843_21019,map__20843_21020__$1,gline_21021,gcol_21022,name_21023,seq__20837_21013__$1,temp__5457__auto___21012__$2,vec__20834_20996,column_20997,column_info_20998,seq__20819_20990__$1,temp__5457__auto___20989__$1,vec__20816_20946,line_20947,columns_20948,seq__20783_20940__$1,temp__5457__auto___20939,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_21022], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20947,cljs.core.cst$kw$col,column_20997,cljs.core.cst$kw$name,name_21023], null));
});})(seq__20837_20999,chunk__20838_21000,count__20839_21001,i__20840_21002,seq__20819_20949,chunk__20820_20950,count__20821_20951,i__20822_20952,seq__20783_20845,chunk__20784_20846,count__20785_20847,i__20786_20848,map__20843_21019,map__20843_21020__$1,gline_21021,gcol_21022,name_21023,seq__20837_21013__$1,temp__5457__auto___21012__$2,vec__20834_20996,column_20997,column_info_20998,seq__20819_20990__$1,temp__5457__auto___20989__$1,vec__20816_20946,line_20947,columns_20948,seq__20783_20940__$1,temp__5457__auto___20939,inverted))
,cljs.core.sorted_map()));

var G__21024 = cljs.core.next(seq__20837_21013__$1);
var G__21025 = null;
var G__21026 = (0);
var G__21027 = (0);
seq__20837_20999 = G__21024;
chunk__20838_21000 = G__21025;
count__20839_21001 = G__21026;
i__20840_21002 = G__21027;
continue;
}
} else {
}
}
break;
}

var G__21028 = cljs.core.next(seq__20819_20990__$1);
var G__21029 = null;
var G__21030 = (0);
var G__21031 = (0);
seq__20819_20949 = G__21028;
chunk__20820_20950 = G__21029;
count__20821_20951 = G__21030;
i__20822_20952 = G__21031;
continue;
}
} else {
}
}
break;
}

var G__21032 = cljs.core.next(seq__20783_20940__$1);
var G__21033 = null;
var G__21034 = (0);
var G__21035 = (0);
seq__20783_20845 = G__21032;
chunk__20784_20846 = G__21033;
count__20785_20847 = G__21034;
i__20786_20848 = G__21035;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
