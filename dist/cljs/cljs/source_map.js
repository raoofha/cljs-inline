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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__20371){
var vec__20372 = p__20371;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20372,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20372,(1),null);
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
var vec__20375 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20375,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20375,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20375,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20375,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20375,(4),null);
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
var vec__20378 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20378,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20378,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20378,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20378,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20378,(4),null);
var vec__20381 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20381,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20381,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20381,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20381,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20381,(4),null);
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
var map__20384 = segmap;
var map__20384__$1 = ((((!((map__20384 == null)))?((((map__20384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20384):map__20384);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20384__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20384__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20384__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20384__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20384__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gline,gline,cljs.core.cst$kw$gcol,gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__20384,map__20384__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__20384,map__20384__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__20384,map__20384__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__20384,map__20384__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__20384,map__20384__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__20384,map__20384__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__20387 = arguments.length;
switch (G__20387) {
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
var vec__20388 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__20392 = cljs.core.next(segs__$1);
var G__20393 = nrelseg;
var G__20394 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__20392;
relseg__$1 = G__20393;
result__$1 = G__20394;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20388,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20388,(1),null);
var G__20395 = (gline + (1));
var G__20396 = cljs.core.next(lines__$1);
var G__20397 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__20398 = result__$1;
gline = G__20395;
lines__$1 = G__20396;
relseg = G__20397;
result = G__20398;
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
var map__20400 = segmap;
var map__20400__$1 = ((((!((map__20400 == null)))?((((map__20400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20400):map__20400);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20400__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20400__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20400__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20400__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20400__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$source,source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__20400,map__20400__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__20400,map__20400__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__20399_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__20399_SHARP_,d__$1);
});})(map__20400,map__20400__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__20400,map__20400__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__20403 = arguments.length;
switch (G__20403) {
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
var vec__20404 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__20408 = cljs.core.next(segs__$1);
var G__20409 = nrelseg;
var G__20410 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__20408;
relseg__$1 = G__20409;
result__$1 = G__20410;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20404,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20404,(1),null);
var G__20411 = (gline + (1));
var G__20412 = cljs.core.next(lines__$1);
var G__20413 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__20414 = result__$1;
gline = G__20411;
lines__$1 = G__20412;
relseg = G__20413;
result = G__20414;
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
return (function (p__20415){
var vec__20416 = p__20415;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20416,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20416,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20416,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20416,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20416,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__20419){
var vec__20420 = p__20419;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20420,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20420,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20420,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20420,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20420,(4),null);
var seg = vec__20420;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__20420,gcol,sidx,line,col,name,seg,relseg){
return (function (p__20423){
var vec__20424 = p__20423;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20424,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20424,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20424,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20424,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20424,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__11743__auto__ = name;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__20420,gcol,sidx,line,col,name,seg,relseg))
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
var seq__20430 = cljs.core.seq(infos);
var chunk__20431 = null;
var count__20432 = (0);
var i__20433 = (0);
while(true){
if((i__20433 < count__20432)){
var info = chunk__20431.cljs$core$IIndexed$_nth$arity$2(null,i__20433);
var segv_20515 = info__GT_segv(info,source_idx,line,col);
var gline_20516 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_20517 = cljs.core.count(cljs.core.deref(lines));
if((gline_20516 > (lc_20517 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__20430,chunk__20431,count__20432,i__20433,segv_20515,gline_20516,lc_20517,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_20516 - (lc_20517 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_20515], null));
});})(seq__20430,chunk__20431,count__20432,i__20433,segv_20515,gline_20516,lc_20517,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__20430,chunk__20431,count__20432,i__20433,segv_20515,gline_20516,lc_20517,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20516], null),cljs.core.conj,segv_20515);
});})(seq__20430,chunk__20431,count__20432,i__20433,segv_20515,gline_20516,lc_20517,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__20518 = seq__20430;
var G__20519 = chunk__20431;
var G__20520 = count__20432;
var G__20521 = (i__20433 + (1));
seq__20430 = G__20518;
chunk__20431 = G__20519;
count__20432 = G__20520;
i__20433 = G__20521;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20430);
if(temp__5457__auto__){
var seq__20430__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20430__$1)){
var c__12674__auto__ = cljs.core.chunk_first(seq__20430__$1);
var G__20522 = cljs.core.chunk_rest(seq__20430__$1);
var G__20523 = c__12674__auto__;
var G__20524 = cljs.core.count(c__12674__auto__);
var G__20525 = (0);
seq__20430 = G__20522;
chunk__20431 = G__20523;
count__20432 = G__20524;
i__20433 = G__20525;
continue;
} else {
var info = cljs.core.first(seq__20430__$1);
var segv_20526 = info__GT_segv(info,source_idx,line,col);
var gline_20527 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_20528 = cljs.core.count(cljs.core.deref(lines));
if((gline_20527 > (lc_20528 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__20430,chunk__20431,count__20432,i__20433,segv_20526,gline_20527,lc_20528,info,seq__20430__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_20527 - (lc_20528 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_20526], null));
});})(seq__20430,chunk__20431,count__20432,i__20433,segv_20526,gline_20527,lc_20528,info,seq__20430__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__20430,chunk__20431,count__20432,i__20433,segv_20526,gline_20527,lc_20528,info,seq__20430__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20527], null),cljs.core.conj,segv_20526);
});})(seq__20430,chunk__20431,count__20432,i__20433,segv_20526,gline_20527,lc_20528,info,seq__20430__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__20529 = cljs.core.next(seq__20430__$1);
var G__20530 = null;
var G__20531 = (0);
var G__20532 = (0);
seq__20430 = G__20529;
chunk__20431 = G__20530;
count__20432 = G__20531;
i__20433 = G__20532;
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
var seq__20434_20533 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__20435_20534 = null;
var count__20436_20535 = (0);
var i__20437_20536 = (0);
while(true){
if((i__20437_20536 < count__20436_20535)){
var vec__20438_20537 = chunk__20435_20534.cljs$core$IIndexed$_nth$arity$2(null,i__20437_20536);
var source_idx_20538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20438_20537,(0),null);
var vec__20441_20539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20438_20537,(1),null);
var __20540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20441_20539,(0),null);
var lines_20541__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20441_20539,(1),null);
var seq__20444_20542 = cljs.core.seq(lines_20541__$1);
var chunk__20445_20543 = null;
var count__20446_20544 = (0);
var i__20447_20545 = (0);
while(true){
if((i__20447_20545 < count__20446_20544)){
var vec__20448_20546 = chunk__20445_20543.cljs$core$IIndexed$_nth$arity$2(null,i__20447_20545);
var line_20547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20448_20546,(0),null);
var cols_20548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20448_20546,(1),null);
var seq__20451_20549 = cljs.core.seq(cols_20548);
var chunk__20452_20550 = null;
var count__20453_20551 = (0);
var i__20454_20552 = (0);
while(true){
if((i__20454_20552 < count__20453_20551)){
var vec__20455_20553 = chunk__20452_20550.cljs$core$IIndexed$_nth$arity$2(null,i__20454_20552);
var col_20554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20455_20553,(0),null);
var infos_20555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20455_20553,(1),null);
encode_cols(infos_20555,source_idx_20538,line_20547,col_20554);

var G__20556 = seq__20451_20549;
var G__20557 = chunk__20452_20550;
var G__20558 = count__20453_20551;
var G__20559 = (i__20454_20552 + (1));
seq__20451_20549 = G__20556;
chunk__20452_20550 = G__20557;
count__20453_20551 = G__20558;
i__20454_20552 = G__20559;
continue;
} else {
var temp__5457__auto___20560 = cljs.core.seq(seq__20451_20549);
if(temp__5457__auto___20560){
var seq__20451_20561__$1 = temp__5457__auto___20560;
if(cljs.core.chunked_seq_QMARK_(seq__20451_20561__$1)){
var c__12674__auto___20562 = cljs.core.chunk_first(seq__20451_20561__$1);
var G__20563 = cljs.core.chunk_rest(seq__20451_20561__$1);
var G__20564 = c__12674__auto___20562;
var G__20565 = cljs.core.count(c__12674__auto___20562);
var G__20566 = (0);
seq__20451_20549 = G__20563;
chunk__20452_20550 = G__20564;
count__20453_20551 = G__20565;
i__20454_20552 = G__20566;
continue;
} else {
var vec__20458_20567 = cljs.core.first(seq__20451_20561__$1);
var col_20568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20458_20567,(0),null);
var infos_20569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20458_20567,(1),null);
encode_cols(infos_20569,source_idx_20538,line_20547,col_20568);

var G__20570 = cljs.core.next(seq__20451_20561__$1);
var G__20571 = null;
var G__20572 = (0);
var G__20573 = (0);
seq__20451_20549 = G__20570;
chunk__20452_20550 = G__20571;
count__20453_20551 = G__20572;
i__20454_20552 = G__20573;
continue;
}
} else {
}
}
break;
}

var G__20574 = seq__20444_20542;
var G__20575 = chunk__20445_20543;
var G__20576 = count__20446_20544;
var G__20577 = (i__20447_20545 + (1));
seq__20444_20542 = G__20574;
chunk__20445_20543 = G__20575;
count__20446_20544 = G__20576;
i__20447_20545 = G__20577;
continue;
} else {
var temp__5457__auto___20578 = cljs.core.seq(seq__20444_20542);
if(temp__5457__auto___20578){
var seq__20444_20579__$1 = temp__5457__auto___20578;
if(cljs.core.chunked_seq_QMARK_(seq__20444_20579__$1)){
var c__12674__auto___20580 = cljs.core.chunk_first(seq__20444_20579__$1);
var G__20581 = cljs.core.chunk_rest(seq__20444_20579__$1);
var G__20582 = c__12674__auto___20580;
var G__20583 = cljs.core.count(c__12674__auto___20580);
var G__20584 = (0);
seq__20444_20542 = G__20581;
chunk__20445_20543 = G__20582;
count__20446_20544 = G__20583;
i__20447_20545 = G__20584;
continue;
} else {
var vec__20461_20585 = cljs.core.first(seq__20444_20579__$1);
var line_20586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20461_20585,(0),null);
var cols_20587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20461_20585,(1),null);
var seq__20464_20588 = cljs.core.seq(cols_20587);
var chunk__20465_20589 = null;
var count__20466_20590 = (0);
var i__20467_20591 = (0);
while(true){
if((i__20467_20591 < count__20466_20590)){
var vec__20468_20592 = chunk__20465_20589.cljs$core$IIndexed$_nth$arity$2(null,i__20467_20591);
var col_20593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20468_20592,(0),null);
var infos_20594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20468_20592,(1),null);
encode_cols(infos_20594,source_idx_20538,line_20586,col_20593);

var G__20595 = seq__20464_20588;
var G__20596 = chunk__20465_20589;
var G__20597 = count__20466_20590;
var G__20598 = (i__20467_20591 + (1));
seq__20464_20588 = G__20595;
chunk__20465_20589 = G__20596;
count__20466_20590 = G__20597;
i__20467_20591 = G__20598;
continue;
} else {
var temp__5457__auto___20599__$1 = cljs.core.seq(seq__20464_20588);
if(temp__5457__auto___20599__$1){
var seq__20464_20600__$1 = temp__5457__auto___20599__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20464_20600__$1)){
var c__12674__auto___20601 = cljs.core.chunk_first(seq__20464_20600__$1);
var G__20602 = cljs.core.chunk_rest(seq__20464_20600__$1);
var G__20603 = c__12674__auto___20601;
var G__20604 = cljs.core.count(c__12674__auto___20601);
var G__20605 = (0);
seq__20464_20588 = G__20602;
chunk__20465_20589 = G__20603;
count__20466_20590 = G__20604;
i__20467_20591 = G__20605;
continue;
} else {
var vec__20471_20606 = cljs.core.first(seq__20464_20600__$1);
var col_20607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20471_20606,(0),null);
var infos_20608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20471_20606,(1),null);
encode_cols(infos_20608,source_idx_20538,line_20586,col_20607);

var G__20609 = cljs.core.next(seq__20464_20600__$1);
var G__20610 = null;
var G__20611 = (0);
var G__20612 = (0);
seq__20464_20588 = G__20609;
chunk__20465_20589 = G__20610;
count__20466_20590 = G__20611;
i__20467_20591 = G__20612;
continue;
}
} else {
}
}
break;
}

var G__20613 = cljs.core.next(seq__20444_20579__$1);
var G__20614 = null;
var G__20615 = (0);
var G__20616 = (0);
seq__20444_20542 = G__20613;
chunk__20445_20543 = G__20614;
count__20446_20544 = G__20615;
i__20447_20545 = G__20616;
continue;
}
} else {
}
}
break;
}

var G__20617 = seq__20434_20533;
var G__20618 = chunk__20435_20534;
var G__20619 = count__20436_20535;
var G__20620 = (i__20437_20536 + (1));
seq__20434_20533 = G__20617;
chunk__20435_20534 = G__20618;
count__20436_20535 = G__20619;
i__20437_20536 = G__20620;
continue;
} else {
var temp__5457__auto___20621 = cljs.core.seq(seq__20434_20533);
if(temp__5457__auto___20621){
var seq__20434_20622__$1 = temp__5457__auto___20621;
if(cljs.core.chunked_seq_QMARK_(seq__20434_20622__$1)){
var c__12674__auto___20623 = cljs.core.chunk_first(seq__20434_20622__$1);
var G__20624 = cljs.core.chunk_rest(seq__20434_20622__$1);
var G__20625 = c__12674__auto___20623;
var G__20626 = cljs.core.count(c__12674__auto___20623);
var G__20627 = (0);
seq__20434_20533 = G__20624;
chunk__20435_20534 = G__20625;
count__20436_20535 = G__20626;
i__20437_20536 = G__20627;
continue;
} else {
var vec__20474_20628 = cljs.core.first(seq__20434_20622__$1);
var source_idx_20629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20474_20628,(0),null);
var vec__20477_20630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20474_20628,(1),null);
var __20631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20477_20630,(0),null);
var lines_20632__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20477_20630,(1),null);
var seq__20480_20633 = cljs.core.seq(lines_20632__$1);
var chunk__20481_20634 = null;
var count__20482_20635 = (0);
var i__20483_20636 = (0);
while(true){
if((i__20483_20636 < count__20482_20635)){
var vec__20484_20637 = chunk__20481_20634.cljs$core$IIndexed$_nth$arity$2(null,i__20483_20636);
var line_20638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20484_20637,(0),null);
var cols_20639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20484_20637,(1),null);
var seq__20487_20640 = cljs.core.seq(cols_20639);
var chunk__20488_20641 = null;
var count__20489_20642 = (0);
var i__20490_20643 = (0);
while(true){
if((i__20490_20643 < count__20489_20642)){
var vec__20491_20644 = chunk__20488_20641.cljs$core$IIndexed$_nth$arity$2(null,i__20490_20643);
var col_20645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20491_20644,(0),null);
var infos_20646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20491_20644,(1),null);
encode_cols(infos_20646,source_idx_20629,line_20638,col_20645);

var G__20647 = seq__20487_20640;
var G__20648 = chunk__20488_20641;
var G__20649 = count__20489_20642;
var G__20650 = (i__20490_20643 + (1));
seq__20487_20640 = G__20647;
chunk__20488_20641 = G__20648;
count__20489_20642 = G__20649;
i__20490_20643 = G__20650;
continue;
} else {
var temp__5457__auto___20651__$1 = cljs.core.seq(seq__20487_20640);
if(temp__5457__auto___20651__$1){
var seq__20487_20652__$1 = temp__5457__auto___20651__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20487_20652__$1)){
var c__12674__auto___20653 = cljs.core.chunk_first(seq__20487_20652__$1);
var G__20654 = cljs.core.chunk_rest(seq__20487_20652__$1);
var G__20655 = c__12674__auto___20653;
var G__20656 = cljs.core.count(c__12674__auto___20653);
var G__20657 = (0);
seq__20487_20640 = G__20654;
chunk__20488_20641 = G__20655;
count__20489_20642 = G__20656;
i__20490_20643 = G__20657;
continue;
} else {
var vec__20494_20658 = cljs.core.first(seq__20487_20652__$1);
var col_20659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20494_20658,(0),null);
var infos_20660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20494_20658,(1),null);
encode_cols(infos_20660,source_idx_20629,line_20638,col_20659);

var G__20661 = cljs.core.next(seq__20487_20652__$1);
var G__20662 = null;
var G__20663 = (0);
var G__20664 = (0);
seq__20487_20640 = G__20661;
chunk__20488_20641 = G__20662;
count__20489_20642 = G__20663;
i__20490_20643 = G__20664;
continue;
}
} else {
}
}
break;
}

var G__20665 = seq__20480_20633;
var G__20666 = chunk__20481_20634;
var G__20667 = count__20482_20635;
var G__20668 = (i__20483_20636 + (1));
seq__20480_20633 = G__20665;
chunk__20481_20634 = G__20666;
count__20482_20635 = G__20667;
i__20483_20636 = G__20668;
continue;
} else {
var temp__5457__auto___20669__$1 = cljs.core.seq(seq__20480_20633);
if(temp__5457__auto___20669__$1){
var seq__20480_20670__$1 = temp__5457__auto___20669__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20480_20670__$1)){
var c__12674__auto___20671 = cljs.core.chunk_first(seq__20480_20670__$1);
var G__20672 = cljs.core.chunk_rest(seq__20480_20670__$1);
var G__20673 = c__12674__auto___20671;
var G__20674 = cljs.core.count(c__12674__auto___20671);
var G__20675 = (0);
seq__20480_20633 = G__20672;
chunk__20481_20634 = G__20673;
count__20482_20635 = G__20674;
i__20483_20636 = G__20675;
continue;
} else {
var vec__20497_20676 = cljs.core.first(seq__20480_20670__$1);
var line_20677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20497_20676,(0),null);
var cols_20678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20497_20676,(1),null);
var seq__20500_20679 = cljs.core.seq(cols_20678);
var chunk__20501_20680 = null;
var count__20502_20681 = (0);
var i__20503_20682 = (0);
while(true){
if((i__20503_20682 < count__20502_20681)){
var vec__20504_20683 = chunk__20501_20680.cljs$core$IIndexed$_nth$arity$2(null,i__20503_20682);
var col_20684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20504_20683,(0),null);
var infos_20685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20504_20683,(1),null);
encode_cols(infos_20685,source_idx_20629,line_20677,col_20684);

var G__20686 = seq__20500_20679;
var G__20687 = chunk__20501_20680;
var G__20688 = count__20502_20681;
var G__20689 = (i__20503_20682 + (1));
seq__20500_20679 = G__20686;
chunk__20501_20680 = G__20687;
count__20502_20681 = G__20688;
i__20503_20682 = G__20689;
continue;
} else {
var temp__5457__auto___20690__$2 = cljs.core.seq(seq__20500_20679);
if(temp__5457__auto___20690__$2){
var seq__20500_20691__$1 = temp__5457__auto___20690__$2;
if(cljs.core.chunked_seq_QMARK_(seq__20500_20691__$1)){
var c__12674__auto___20692 = cljs.core.chunk_first(seq__20500_20691__$1);
var G__20693 = cljs.core.chunk_rest(seq__20500_20691__$1);
var G__20694 = c__12674__auto___20692;
var G__20695 = cljs.core.count(c__12674__auto___20692);
var G__20696 = (0);
seq__20500_20679 = G__20693;
chunk__20501_20680 = G__20694;
count__20502_20681 = G__20695;
i__20503_20682 = G__20696;
continue;
} else {
var vec__20507_20697 = cljs.core.first(seq__20500_20691__$1);
var col_20698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20507_20697,(0),null);
var infos_20699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20507_20697,(1),null);
encode_cols(infos_20699,source_idx_20629,line_20677,col_20698);

var G__20700 = cljs.core.next(seq__20500_20691__$1);
var G__20701 = null;
var G__20702 = (0);
var G__20703 = (0);
seq__20500_20679 = G__20700;
chunk__20501_20680 = G__20701;
count__20502_20681 = G__20702;
i__20503_20682 = G__20703;
continue;
}
} else {
}
}
break;
}

var G__20704 = cljs.core.next(seq__20480_20670__$1);
var G__20705 = null;
var G__20706 = (0);
var G__20707 = (0);
seq__20480_20633 = G__20704;
chunk__20481_20634 = G__20705;
count__20482_20635 = G__20706;
i__20483_20636 = G__20707;
continue;
}
} else {
}
}
break;
}

var G__20708 = cljs.core.next(seq__20434_20622__$1);
var G__20709 = null;
var G__20710 = (0);
var G__20711 = (0);
seq__20434_20533 = G__20708;
chunk__20435_20534 = G__20709;
count__20436_20535 = G__20710;
i__20437_20536 = G__20711;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__20510 = ({"version": (3), "file": cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((cljs.core.cst$kw$source_DASH_map_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__20427_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20427_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__20428_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__20428_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__20429_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__20429_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts))){
var G__20511 = G__20510;
var G__20512_20712 = G__20511;
var G__20513_20713 = "sourcesContent";
var G__20514_20714 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__20512_20712,G__20513_20713,G__20514_20714);

return G__20511;
} else {
return G__20510;
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
var vec__20715 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20715,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20715,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__20718 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20718,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20718,(1),null);
var G__20724 = cljs.core.next(col_map_seq);
var G__20725 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__20718,col,infos,vec__20715,line,col_map){
return (function (v,p__20721){
var map__20722 = p__20721;
var map__20722__$1 = ((((!((map__20722 == null)))?((((map__20722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20722.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20722):map__20722);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20722__$1,cljs.core.cst$kw$gline);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20722__$1,cljs.core.cst$kw$gcol);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__20718,col,infos,vec__20715,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__20724;
new_cols = G__20725;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__20726 = cljs.core.next(line_map_seq);
var G__20727 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__20726;
new_lines = G__20727;
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
var seq__20728_20790 = cljs.core.seq(reverse_map);
var chunk__20729_20791 = null;
var count__20730_20792 = (0);
var i__20731_20793 = (0);
while(true){
if((i__20731_20793 < count__20730_20792)){
var vec__20732_20794 = chunk__20729_20791.cljs$core$IIndexed$_nth$arity$2(null,i__20731_20793);
var line_20795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20732_20794,(0),null);
var columns_20796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20732_20794,(1),null);
var seq__20735_20797 = cljs.core.seq(columns_20796);
var chunk__20736_20798 = null;
var count__20737_20799 = (0);
var i__20738_20800 = (0);
while(true){
if((i__20738_20800 < count__20737_20799)){
var vec__20739_20801 = chunk__20736_20798.cljs$core$IIndexed$_nth$arity$2(null,i__20738_20800);
var column_20802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20739_20801,(0),null);
var column_info_20803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20739_20801,(1),null);
var seq__20742_20804 = cljs.core.seq(column_info_20803);
var chunk__20743_20805 = null;
var count__20744_20806 = (0);
var i__20745_20807 = (0);
while(true){
if((i__20745_20807 < count__20744_20806)){
var map__20746_20808 = chunk__20743_20805.cljs$core$IIndexed$_nth$arity$2(null,i__20745_20807);
var map__20746_20809__$1 = ((((!((map__20746_20808 == null)))?((((map__20746_20808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20746_20808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20746_20808):map__20746_20808);
var gline_20810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20746_20809__$1,cljs.core.cst$kw$gline);
var gcol_20811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20746_20809__$1,cljs.core.cst$kw$gcol);
var name_20812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20746_20809__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20810], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20742_20804,chunk__20743_20805,count__20744_20806,i__20745_20807,seq__20735_20797,chunk__20736_20798,count__20737_20799,i__20738_20800,seq__20728_20790,chunk__20729_20791,count__20730_20792,i__20731_20793,map__20746_20808,map__20746_20809__$1,gline_20810,gcol_20811,name_20812,vec__20739_20801,column_20802,column_info_20803,vec__20732_20794,line_20795,columns_20796,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20811], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20795,cljs.core.cst$kw$col,column_20802,cljs.core.cst$kw$name,name_20812], null));
});})(seq__20742_20804,chunk__20743_20805,count__20744_20806,i__20745_20807,seq__20735_20797,chunk__20736_20798,count__20737_20799,i__20738_20800,seq__20728_20790,chunk__20729_20791,count__20730_20792,i__20731_20793,map__20746_20808,map__20746_20809__$1,gline_20810,gcol_20811,name_20812,vec__20739_20801,column_20802,column_info_20803,vec__20732_20794,line_20795,columns_20796,inverted))
,cljs.core.sorted_map()));

var G__20813 = seq__20742_20804;
var G__20814 = chunk__20743_20805;
var G__20815 = count__20744_20806;
var G__20816 = (i__20745_20807 + (1));
seq__20742_20804 = G__20813;
chunk__20743_20805 = G__20814;
count__20744_20806 = G__20815;
i__20745_20807 = G__20816;
continue;
} else {
var temp__5457__auto___20817 = cljs.core.seq(seq__20742_20804);
if(temp__5457__auto___20817){
var seq__20742_20818__$1 = temp__5457__auto___20817;
if(cljs.core.chunked_seq_QMARK_(seq__20742_20818__$1)){
var c__12674__auto___20819 = cljs.core.chunk_first(seq__20742_20818__$1);
var G__20820 = cljs.core.chunk_rest(seq__20742_20818__$1);
var G__20821 = c__12674__auto___20819;
var G__20822 = cljs.core.count(c__12674__auto___20819);
var G__20823 = (0);
seq__20742_20804 = G__20820;
chunk__20743_20805 = G__20821;
count__20744_20806 = G__20822;
i__20745_20807 = G__20823;
continue;
} else {
var map__20748_20824 = cljs.core.first(seq__20742_20818__$1);
var map__20748_20825__$1 = ((((!((map__20748_20824 == null)))?((((map__20748_20824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20748_20824.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20748_20824):map__20748_20824);
var gline_20826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20748_20825__$1,cljs.core.cst$kw$gline);
var gcol_20827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20748_20825__$1,cljs.core.cst$kw$gcol);
var name_20828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20748_20825__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20826], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20742_20804,chunk__20743_20805,count__20744_20806,i__20745_20807,seq__20735_20797,chunk__20736_20798,count__20737_20799,i__20738_20800,seq__20728_20790,chunk__20729_20791,count__20730_20792,i__20731_20793,map__20748_20824,map__20748_20825__$1,gline_20826,gcol_20827,name_20828,seq__20742_20818__$1,temp__5457__auto___20817,vec__20739_20801,column_20802,column_info_20803,vec__20732_20794,line_20795,columns_20796,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20827], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20795,cljs.core.cst$kw$col,column_20802,cljs.core.cst$kw$name,name_20828], null));
});})(seq__20742_20804,chunk__20743_20805,count__20744_20806,i__20745_20807,seq__20735_20797,chunk__20736_20798,count__20737_20799,i__20738_20800,seq__20728_20790,chunk__20729_20791,count__20730_20792,i__20731_20793,map__20748_20824,map__20748_20825__$1,gline_20826,gcol_20827,name_20828,seq__20742_20818__$1,temp__5457__auto___20817,vec__20739_20801,column_20802,column_info_20803,vec__20732_20794,line_20795,columns_20796,inverted))
,cljs.core.sorted_map()));

var G__20829 = cljs.core.next(seq__20742_20818__$1);
var G__20830 = null;
var G__20831 = (0);
var G__20832 = (0);
seq__20742_20804 = G__20829;
chunk__20743_20805 = G__20830;
count__20744_20806 = G__20831;
i__20745_20807 = G__20832;
continue;
}
} else {
}
}
break;
}

var G__20833 = seq__20735_20797;
var G__20834 = chunk__20736_20798;
var G__20835 = count__20737_20799;
var G__20836 = (i__20738_20800 + (1));
seq__20735_20797 = G__20833;
chunk__20736_20798 = G__20834;
count__20737_20799 = G__20835;
i__20738_20800 = G__20836;
continue;
} else {
var temp__5457__auto___20837 = cljs.core.seq(seq__20735_20797);
if(temp__5457__auto___20837){
var seq__20735_20838__$1 = temp__5457__auto___20837;
if(cljs.core.chunked_seq_QMARK_(seq__20735_20838__$1)){
var c__12674__auto___20839 = cljs.core.chunk_first(seq__20735_20838__$1);
var G__20840 = cljs.core.chunk_rest(seq__20735_20838__$1);
var G__20841 = c__12674__auto___20839;
var G__20842 = cljs.core.count(c__12674__auto___20839);
var G__20843 = (0);
seq__20735_20797 = G__20840;
chunk__20736_20798 = G__20841;
count__20737_20799 = G__20842;
i__20738_20800 = G__20843;
continue;
} else {
var vec__20750_20844 = cljs.core.first(seq__20735_20838__$1);
var column_20845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20750_20844,(0),null);
var column_info_20846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20750_20844,(1),null);
var seq__20753_20847 = cljs.core.seq(column_info_20846);
var chunk__20754_20848 = null;
var count__20755_20849 = (0);
var i__20756_20850 = (0);
while(true){
if((i__20756_20850 < count__20755_20849)){
var map__20757_20851 = chunk__20754_20848.cljs$core$IIndexed$_nth$arity$2(null,i__20756_20850);
var map__20757_20852__$1 = ((((!((map__20757_20851 == null)))?((((map__20757_20851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20757_20851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20757_20851):map__20757_20851);
var gline_20853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20757_20852__$1,cljs.core.cst$kw$gline);
var gcol_20854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20757_20852__$1,cljs.core.cst$kw$gcol);
var name_20855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20757_20852__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20853], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20753_20847,chunk__20754_20848,count__20755_20849,i__20756_20850,seq__20735_20797,chunk__20736_20798,count__20737_20799,i__20738_20800,seq__20728_20790,chunk__20729_20791,count__20730_20792,i__20731_20793,map__20757_20851,map__20757_20852__$1,gline_20853,gcol_20854,name_20855,vec__20750_20844,column_20845,column_info_20846,seq__20735_20838__$1,temp__5457__auto___20837,vec__20732_20794,line_20795,columns_20796,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20854], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20795,cljs.core.cst$kw$col,column_20845,cljs.core.cst$kw$name,name_20855], null));
});})(seq__20753_20847,chunk__20754_20848,count__20755_20849,i__20756_20850,seq__20735_20797,chunk__20736_20798,count__20737_20799,i__20738_20800,seq__20728_20790,chunk__20729_20791,count__20730_20792,i__20731_20793,map__20757_20851,map__20757_20852__$1,gline_20853,gcol_20854,name_20855,vec__20750_20844,column_20845,column_info_20846,seq__20735_20838__$1,temp__5457__auto___20837,vec__20732_20794,line_20795,columns_20796,inverted))
,cljs.core.sorted_map()));

var G__20856 = seq__20753_20847;
var G__20857 = chunk__20754_20848;
var G__20858 = count__20755_20849;
var G__20859 = (i__20756_20850 + (1));
seq__20753_20847 = G__20856;
chunk__20754_20848 = G__20857;
count__20755_20849 = G__20858;
i__20756_20850 = G__20859;
continue;
} else {
var temp__5457__auto___20860__$1 = cljs.core.seq(seq__20753_20847);
if(temp__5457__auto___20860__$1){
var seq__20753_20861__$1 = temp__5457__auto___20860__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20753_20861__$1)){
var c__12674__auto___20862 = cljs.core.chunk_first(seq__20753_20861__$1);
var G__20863 = cljs.core.chunk_rest(seq__20753_20861__$1);
var G__20864 = c__12674__auto___20862;
var G__20865 = cljs.core.count(c__12674__auto___20862);
var G__20866 = (0);
seq__20753_20847 = G__20863;
chunk__20754_20848 = G__20864;
count__20755_20849 = G__20865;
i__20756_20850 = G__20866;
continue;
} else {
var map__20759_20867 = cljs.core.first(seq__20753_20861__$1);
var map__20759_20868__$1 = ((((!((map__20759_20867 == null)))?((((map__20759_20867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20759_20867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20759_20867):map__20759_20867);
var gline_20869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20759_20868__$1,cljs.core.cst$kw$gline);
var gcol_20870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20759_20868__$1,cljs.core.cst$kw$gcol);
var name_20871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20759_20868__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20869], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20753_20847,chunk__20754_20848,count__20755_20849,i__20756_20850,seq__20735_20797,chunk__20736_20798,count__20737_20799,i__20738_20800,seq__20728_20790,chunk__20729_20791,count__20730_20792,i__20731_20793,map__20759_20867,map__20759_20868__$1,gline_20869,gcol_20870,name_20871,seq__20753_20861__$1,temp__5457__auto___20860__$1,vec__20750_20844,column_20845,column_info_20846,seq__20735_20838__$1,temp__5457__auto___20837,vec__20732_20794,line_20795,columns_20796,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20870], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20795,cljs.core.cst$kw$col,column_20845,cljs.core.cst$kw$name,name_20871], null));
});})(seq__20753_20847,chunk__20754_20848,count__20755_20849,i__20756_20850,seq__20735_20797,chunk__20736_20798,count__20737_20799,i__20738_20800,seq__20728_20790,chunk__20729_20791,count__20730_20792,i__20731_20793,map__20759_20867,map__20759_20868__$1,gline_20869,gcol_20870,name_20871,seq__20753_20861__$1,temp__5457__auto___20860__$1,vec__20750_20844,column_20845,column_info_20846,seq__20735_20838__$1,temp__5457__auto___20837,vec__20732_20794,line_20795,columns_20796,inverted))
,cljs.core.sorted_map()));

var G__20872 = cljs.core.next(seq__20753_20861__$1);
var G__20873 = null;
var G__20874 = (0);
var G__20875 = (0);
seq__20753_20847 = G__20872;
chunk__20754_20848 = G__20873;
count__20755_20849 = G__20874;
i__20756_20850 = G__20875;
continue;
}
} else {
}
}
break;
}

var G__20876 = cljs.core.next(seq__20735_20838__$1);
var G__20877 = null;
var G__20878 = (0);
var G__20879 = (0);
seq__20735_20797 = G__20876;
chunk__20736_20798 = G__20877;
count__20737_20799 = G__20878;
i__20738_20800 = G__20879;
continue;
}
} else {
}
}
break;
}

var G__20880 = seq__20728_20790;
var G__20881 = chunk__20729_20791;
var G__20882 = count__20730_20792;
var G__20883 = (i__20731_20793 + (1));
seq__20728_20790 = G__20880;
chunk__20729_20791 = G__20881;
count__20730_20792 = G__20882;
i__20731_20793 = G__20883;
continue;
} else {
var temp__5457__auto___20884 = cljs.core.seq(seq__20728_20790);
if(temp__5457__auto___20884){
var seq__20728_20885__$1 = temp__5457__auto___20884;
if(cljs.core.chunked_seq_QMARK_(seq__20728_20885__$1)){
var c__12674__auto___20886 = cljs.core.chunk_first(seq__20728_20885__$1);
var G__20887 = cljs.core.chunk_rest(seq__20728_20885__$1);
var G__20888 = c__12674__auto___20886;
var G__20889 = cljs.core.count(c__12674__auto___20886);
var G__20890 = (0);
seq__20728_20790 = G__20887;
chunk__20729_20791 = G__20888;
count__20730_20792 = G__20889;
i__20731_20793 = G__20890;
continue;
} else {
var vec__20761_20891 = cljs.core.first(seq__20728_20885__$1);
var line_20892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20761_20891,(0),null);
var columns_20893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20761_20891,(1),null);
var seq__20764_20894 = cljs.core.seq(columns_20893);
var chunk__20765_20895 = null;
var count__20766_20896 = (0);
var i__20767_20897 = (0);
while(true){
if((i__20767_20897 < count__20766_20896)){
var vec__20768_20898 = chunk__20765_20895.cljs$core$IIndexed$_nth$arity$2(null,i__20767_20897);
var column_20899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20768_20898,(0),null);
var column_info_20900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20768_20898,(1),null);
var seq__20771_20901 = cljs.core.seq(column_info_20900);
var chunk__20772_20902 = null;
var count__20773_20903 = (0);
var i__20774_20904 = (0);
while(true){
if((i__20774_20904 < count__20773_20903)){
var map__20775_20905 = chunk__20772_20902.cljs$core$IIndexed$_nth$arity$2(null,i__20774_20904);
var map__20775_20906__$1 = ((((!((map__20775_20905 == null)))?((((map__20775_20905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20775_20905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20775_20905):map__20775_20905);
var gline_20907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20775_20906__$1,cljs.core.cst$kw$gline);
var gcol_20908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20775_20906__$1,cljs.core.cst$kw$gcol);
var name_20909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20775_20906__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20907], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20771_20901,chunk__20772_20902,count__20773_20903,i__20774_20904,seq__20764_20894,chunk__20765_20895,count__20766_20896,i__20767_20897,seq__20728_20790,chunk__20729_20791,count__20730_20792,i__20731_20793,map__20775_20905,map__20775_20906__$1,gline_20907,gcol_20908,name_20909,vec__20768_20898,column_20899,column_info_20900,vec__20761_20891,line_20892,columns_20893,seq__20728_20885__$1,temp__5457__auto___20884,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20908], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20892,cljs.core.cst$kw$col,column_20899,cljs.core.cst$kw$name,name_20909], null));
});})(seq__20771_20901,chunk__20772_20902,count__20773_20903,i__20774_20904,seq__20764_20894,chunk__20765_20895,count__20766_20896,i__20767_20897,seq__20728_20790,chunk__20729_20791,count__20730_20792,i__20731_20793,map__20775_20905,map__20775_20906__$1,gline_20907,gcol_20908,name_20909,vec__20768_20898,column_20899,column_info_20900,vec__20761_20891,line_20892,columns_20893,seq__20728_20885__$1,temp__5457__auto___20884,inverted))
,cljs.core.sorted_map()));

var G__20910 = seq__20771_20901;
var G__20911 = chunk__20772_20902;
var G__20912 = count__20773_20903;
var G__20913 = (i__20774_20904 + (1));
seq__20771_20901 = G__20910;
chunk__20772_20902 = G__20911;
count__20773_20903 = G__20912;
i__20774_20904 = G__20913;
continue;
} else {
var temp__5457__auto___20914__$1 = cljs.core.seq(seq__20771_20901);
if(temp__5457__auto___20914__$1){
var seq__20771_20915__$1 = temp__5457__auto___20914__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20771_20915__$1)){
var c__12674__auto___20916 = cljs.core.chunk_first(seq__20771_20915__$1);
var G__20917 = cljs.core.chunk_rest(seq__20771_20915__$1);
var G__20918 = c__12674__auto___20916;
var G__20919 = cljs.core.count(c__12674__auto___20916);
var G__20920 = (0);
seq__20771_20901 = G__20917;
chunk__20772_20902 = G__20918;
count__20773_20903 = G__20919;
i__20774_20904 = G__20920;
continue;
} else {
var map__20777_20921 = cljs.core.first(seq__20771_20915__$1);
var map__20777_20922__$1 = ((((!((map__20777_20921 == null)))?((((map__20777_20921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20777_20921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20777_20921):map__20777_20921);
var gline_20923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20777_20922__$1,cljs.core.cst$kw$gline);
var gcol_20924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20777_20922__$1,cljs.core.cst$kw$gcol);
var name_20925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20777_20922__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20923], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20771_20901,chunk__20772_20902,count__20773_20903,i__20774_20904,seq__20764_20894,chunk__20765_20895,count__20766_20896,i__20767_20897,seq__20728_20790,chunk__20729_20791,count__20730_20792,i__20731_20793,map__20777_20921,map__20777_20922__$1,gline_20923,gcol_20924,name_20925,seq__20771_20915__$1,temp__5457__auto___20914__$1,vec__20768_20898,column_20899,column_info_20900,vec__20761_20891,line_20892,columns_20893,seq__20728_20885__$1,temp__5457__auto___20884,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20924], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20892,cljs.core.cst$kw$col,column_20899,cljs.core.cst$kw$name,name_20925], null));
});})(seq__20771_20901,chunk__20772_20902,count__20773_20903,i__20774_20904,seq__20764_20894,chunk__20765_20895,count__20766_20896,i__20767_20897,seq__20728_20790,chunk__20729_20791,count__20730_20792,i__20731_20793,map__20777_20921,map__20777_20922__$1,gline_20923,gcol_20924,name_20925,seq__20771_20915__$1,temp__5457__auto___20914__$1,vec__20768_20898,column_20899,column_info_20900,vec__20761_20891,line_20892,columns_20893,seq__20728_20885__$1,temp__5457__auto___20884,inverted))
,cljs.core.sorted_map()));

var G__20926 = cljs.core.next(seq__20771_20915__$1);
var G__20927 = null;
var G__20928 = (0);
var G__20929 = (0);
seq__20771_20901 = G__20926;
chunk__20772_20902 = G__20927;
count__20773_20903 = G__20928;
i__20774_20904 = G__20929;
continue;
}
} else {
}
}
break;
}

var G__20930 = seq__20764_20894;
var G__20931 = chunk__20765_20895;
var G__20932 = count__20766_20896;
var G__20933 = (i__20767_20897 + (1));
seq__20764_20894 = G__20930;
chunk__20765_20895 = G__20931;
count__20766_20896 = G__20932;
i__20767_20897 = G__20933;
continue;
} else {
var temp__5457__auto___20934__$1 = cljs.core.seq(seq__20764_20894);
if(temp__5457__auto___20934__$1){
var seq__20764_20935__$1 = temp__5457__auto___20934__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20764_20935__$1)){
var c__12674__auto___20936 = cljs.core.chunk_first(seq__20764_20935__$1);
var G__20937 = cljs.core.chunk_rest(seq__20764_20935__$1);
var G__20938 = c__12674__auto___20936;
var G__20939 = cljs.core.count(c__12674__auto___20936);
var G__20940 = (0);
seq__20764_20894 = G__20937;
chunk__20765_20895 = G__20938;
count__20766_20896 = G__20939;
i__20767_20897 = G__20940;
continue;
} else {
var vec__20779_20941 = cljs.core.first(seq__20764_20935__$1);
var column_20942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20779_20941,(0),null);
var column_info_20943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20779_20941,(1),null);
var seq__20782_20944 = cljs.core.seq(column_info_20943);
var chunk__20783_20945 = null;
var count__20784_20946 = (0);
var i__20785_20947 = (0);
while(true){
if((i__20785_20947 < count__20784_20946)){
var map__20786_20948 = chunk__20783_20945.cljs$core$IIndexed$_nth$arity$2(null,i__20785_20947);
var map__20786_20949__$1 = ((((!((map__20786_20948 == null)))?((((map__20786_20948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20786_20948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20786_20948):map__20786_20948);
var gline_20950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20786_20949__$1,cljs.core.cst$kw$gline);
var gcol_20951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20786_20949__$1,cljs.core.cst$kw$gcol);
var name_20952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20786_20949__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20950], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20782_20944,chunk__20783_20945,count__20784_20946,i__20785_20947,seq__20764_20894,chunk__20765_20895,count__20766_20896,i__20767_20897,seq__20728_20790,chunk__20729_20791,count__20730_20792,i__20731_20793,map__20786_20948,map__20786_20949__$1,gline_20950,gcol_20951,name_20952,vec__20779_20941,column_20942,column_info_20943,seq__20764_20935__$1,temp__5457__auto___20934__$1,vec__20761_20891,line_20892,columns_20893,seq__20728_20885__$1,temp__5457__auto___20884,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20951], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20892,cljs.core.cst$kw$col,column_20942,cljs.core.cst$kw$name,name_20952], null));
});})(seq__20782_20944,chunk__20783_20945,count__20784_20946,i__20785_20947,seq__20764_20894,chunk__20765_20895,count__20766_20896,i__20767_20897,seq__20728_20790,chunk__20729_20791,count__20730_20792,i__20731_20793,map__20786_20948,map__20786_20949__$1,gline_20950,gcol_20951,name_20952,vec__20779_20941,column_20942,column_info_20943,seq__20764_20935__$1,temp__5457__auto___20934__$1,vec__20761_20891,line_20892,columns_20893,seq__20728_20885__$1,temp__5457__auto___20884,inverted))
,cljs.core.sorted_map()));

var G__20953 = seq__20782_20944;
var G__20954 = chunk__20783_20945;
var G__20955 = count__20784_20946;
var G__20956 = (i__20785_20947 + (1));
seq__20782_20944 = G__20953;
chunk__20783_20945 = G__20954;
count__20784_20946 = G__20955;
i__20785_20947 = G__20956;
continue;
} else {
var temp__5457__auto___20957__$2 = cljs.core.seq(seq__20782_20944);
if(temp__5457__auto___20957__$2){
var seq__20782_20958__$1 = temp__5457__auto___20957__$2;
if(cljs.core.chunked_seq_QMARK_(seq__20782_20958__$1)){
var c__12674__auto___20959 = cljs.core.chunk_first(seq__20782_20958__$1);
var G__20960 = cljs.core.chunk_rest(seq__20782_20958__$1);
var G__20961 = c__12674__auto___20959;
var G__20962 = cljs.core.count(c__12674__auto___20959);
var G__20963 = (0);
seq__20782_20944 = G__20960;
chunk__20783_20945 = G__20961;
count__20784_20946 = G__20962;
i__20785_20947 = G__20963;
continue;
} else {
var map__20788_20964 = cljs.core.first(seq__20782_20958__$1);
var map__20788_20965__$1 = ((((!((map__20788_20964 == null)))?((((map__20788_20964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20788_20964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20788_20964):map__20788_20964);
var gline_20966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20788_20965__$1,cljs.core.cst$kw$gline);
var gcol_20967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20788_20965__$1,cljs.core.cst$kw$gcol);
var name_20968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20788_20965__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20966], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20782_20944,chunk__20783_20945,count__20784_20946,i__20785_20947,seq__20764_20894,chunk__20765_20895,count__20766_20896,i__20767_20897,seq__20728_20790,chunk__20729_20791,count__20730_20792,i__20731_20793,map__20788_20964,map__20788_20965__$1,gline_20966,gcol_20967,name_20968,seq__20782_20958__$1,temp__5457__auto___20957__$2,vec__20779_20941,column_20942,column_info_20943,seq__20764_20935__$1,temp__5457__auto___20934__$1,vec__20761_20891,line_20892,columns_20893,seq__20728_20885__$1,temp__5457__auto___20884,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20967], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20892,cljs.core.cst$kw$col,column_20942,cljs.core.cst$kw$name,name_20968], null));
});})(seq__20782_20944,chunk__20783_20945,count__20784_20946,i__20785_20947,seq__20764_20894,chunk__20765_20895,count__20766_20896,i__20767_20897,seq__20728_20790,chunk__20729_20791,count__20730_20792,i__20731_20793,map__20788_20964,map__20788_20965__$1,gline_20966,gcol_20967,name_20968,seq__20782_20958__$1,temp__5457__auto___20957__$2,vec__20779_20941,column_20942,column_info_20943,seq__20764_20935__$1,temp__5457__auto___20934__$1,vec__20761_20891,line_20892,columns_20893,seq__20728_20885__$1,temp__5457__auto___20884,inverted))
,cljs.core.sorted_map()));

var G__20969 = cljs.core.next(seq__20782_20958__$1);
var G__20970 = null;
var G__20971 = (0);
var G__20972 = (0);
seq__20782_20944 = G__20969;
chunk__20783_20945 = G__20970;
count__20784_20946 = G__20971;
i__20785_20947 = G__20972;
continue;
}
} else {
}
}
break;
}

var G__20973 = cljs.core.next(seq__20764_20935__$1);
var G__20974 = null;
var G__20975 = (0);
var G__20976 = (0);
seq__20764_20894 = G__20973;
chunk__20765_20895 = G__20974;
count__20766_20896 = G__20975;
i__20767_20897 = G__20976;
continue;
}
} else {
}
}
break;
}

var G__20977 = cljs.core.next(seq__20728_20885__$1);
var G__20978 = null;
var G__20979 = (0);
var G__20980 = (0);
seq__20728_20790 = G__20977;
chunk__20729_20791 = G__20978;
count__20730_20792 = G__20979;
i__20731_20793 = G__20980;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
