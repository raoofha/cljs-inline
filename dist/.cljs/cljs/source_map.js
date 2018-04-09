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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__20421){
var vec__20422 = p__20421;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20422,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20422,(1),null);
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
var vec__20425 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20425,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20425,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20425,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20425,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20425,(4),null);
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
var vec__20428 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20428,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20428,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20428,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20428,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20428,(4),null);
var vec__20431 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20431,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20431,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20431,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20431,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20431,(4),null);
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
var map__20434 = segmap;
var map__20434__$1 = ((((!((map__20434 == null)))?((((map__20434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20434.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20434):map__20434);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20434__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20434__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20434__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20434__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20434__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gline,gline,cljs.core.cst$kw$gcol,gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__20434,map__20434__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__20434,map__20434__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__20434,map__20434__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__20434,map__20434__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__20434,map__20434__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__20434,map__20434__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__20437 = arguments.length;
switch (G__20437) {
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
var vec__20438 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__20442 = cljs.core.next(segs__$1);
var G__20443 = nrelseg;
var G__20444 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__20442;
relseg__$1 = G__20443;
result__$1 = G__20444;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20438,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20438,(1),null);
var G__20445 = (gline + (1));
var G__20446 = cljs.core.next(lines__$1);
var G__20447 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__20448 = result__$1;
gline = G__20445;
lines__$1 = G__20446;
relseg = G__20447;
result = G__20448;
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
var map__20450 = segmap;
var map__20450__$1 = ((((!((map__20450 == null)))?((((map__20450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20450):map__20450);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20450__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20450__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20450__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20450__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20450__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$source,source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__20450,map__20450__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__20450,map__20450__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__20449_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__20449_SHARP_,d__$1);
});})(map__20450,map__20450__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__20450,map__20450__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__20453 = arguments.length;
switch (G__20453) {
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
var vec__20454 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__20458 = cljs.core.next(segs__$1);
var G__20459 = nrelseg;
var G__20460 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__20458;
relseg__$1 = G__20459;
result__$1 = G__20460;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20454,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20454,(1),null);
var G__20461 = (gline + (1));
var G__20462 = cljs.core.next(lines__$1);
var G__20463 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__20464 = result__$1;
gline = G__20461;
lines__$1 = G__20462;
relseg = G__20463;
result = G__20464;
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
return (function (p__20465){
var vec__20466 = p__20465;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20466,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20466,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20466,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20466,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20466,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__20469){
var vec__20470 = p__20469;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20470,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20470,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20470,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20470,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20470,(4),null);
var seg = vec__20470;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__20470,gcol,sidx,line,col,name,seg,relseg){
return (function (p__20473){
var vec__20474 = p__20473;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20474,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20474,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20474,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20474,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20474,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__11743__auto__ = name;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__20470,gcol,sidx,line,col,name,seg,relseg))
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
var seq__20480 = cljs.core.seq(infos);
var chunk__20481 = null;
var count__20482 = (0);
var i__20483 = (0);
while(true){
if((i__20483 < count__20482)){
var info = chunk__20481.cljs$core$IIndexed$_nth$arity$2(null,i__20483);
var segv_20565 = info__GT_segv(info,source_idx,line,col);
var gline_20566 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_20567 = cljs.core.count(cljs.core.deref(lines));
if((gline_20566 > (lc_20567 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__20480,chunk__20481,count__20482,i__20483,segv_20565,gline_20566,lc_20567,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_20566 - (lc_20567 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_20565], null));
});})(seq__20480,chunk__20481,count__20482,i__20483,segv_20565,gline_20566,lc_20567,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__20480,chunk__20481,count__20482,i__20483,segv_20565,gline_20566,lc_20567,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20566], null),cljs.core.conj,segv_20565);
});})(seq__20480,chunk__20481,count__20482,i__20483,segv_20565,gline_20566,lc_20567,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__20568 = seq__20480;
var G__20569 = chunk__20481;
var G__20570 = count__20482;
var G__20571 = (i__20483 + (1));
seq__20480 = G__20568;
chunk__20481 = G__20569;
count__20482 = G__20570;
i__20483 = G__20571;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20480);
if(temp__5457__auto__){
var seq__20480__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20480__$1)){
var c__12674__auto__ = cljs.core.chunk_first(seq__20480__$1);
var G__20572 = cljs.core.chunk_rest(seq__20480__$1);
var G__20573 = c__12674__auto__;
var G__20574 = cljs.core.count(c__12674__auto__);
var G__20575 = (0);
seq__20480 = G__20572;
chunk__20481 = G__20573;
count__20482 = G__20574;
i__20483 = G__20575;
continue;
} else {
var info = cljs.core.first(seq__20480__$1);
var segv_20576 = info__GT_segv(info,source_idx,line,col);
var gline_20577 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_20578 = cljs.core.count(cljs.core.deref(lines));
if((gline_20577 > (lc_20578 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__20480,chunk__20481,count__20482,i__20483,segv_20576,gline_20577,lc_20578,info,seq__20480__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_20577 - (lc_20578 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_20576], null));
});})(seq__20480,chunk__20481,count__20482,i__20483,segv_20576,gline_20577,lc_20578,info,seq__20480__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__20480,chunk__20481,count__20482,i__20483,segv_20576,gline_20577,lc_20578,info,seq__20480__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20577], null),cljs.core.conj,segv_20576);
});})(seq__20480,chunk__20481,count__20482,i__20483,segv_20576,gline_20577,lc_20578,info,seq__20480__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__20579 = cljs.core.next(seq__20480__$1);
var G__20580 = null;
var G__20581 = (0);
var G__20582 = (0);
seq__20480 = G__20579;
chunk__20481 = G__20580;
count__20482 = G__20581;
i__20483 = G__20582;
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
var seq__20484_20583 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__20485_20584 = null;
var count__20486_20585 = (0);
var i__20487_20586 = (0);
while(true){
if((i__20487_20586 < count__20486_20585)){
var vec__20488_20587 = chunk__20485_20584.cljs$core$IIndexed$_nth$arity$2(null,i__20487_20586);
var source_idx_20588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20488_20587,(0),null);
var vec__20491_20589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20488_20587,(1),null);
var __20590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20491_20589,(0),null);
var lines_20591__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20491_20589,(1),null);
var seq__20494_20592 = cljs.core.seq(lines_20591__$1);
var chunk__20495_20593 = null;
var count__20496_20594 = (0);
var i__20497_20595 = (0);
while(true){
if((i__20497_20595 < count__20496_20594)){
var vec__20498_20596 = chunk__20495_20593.cljs$core$IIndexed$_nth$arity$2(null,i__20497_20595);
var line_20597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20498_20596,(0),null);
var cols_20598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20498_20596,(1),null);
var seq__20501_20599 = cljs.core.seq(cols_20598);
var chunk__20502_20600 = null;
var count__20503_20601 = (0);
var i__20504_20602 = (0);
while(true){
if((i__20504_20602 < count__20503_20601)){
var vec__20505_20603 = chunk__20502_20600.cljs$core$IIndexed$_nth$arity$2(null,i__20504_20602);
var col_20604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20505_20603,(0),null);
var infos_20605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20505_20603,(1),null);
encode_cols(infos_20605,source_idx_20588,line_20597,col_20604);

var G__20606 = seq__20501_20599;
var G__20607 = chunk__20502_20600;
var G__20608 = count__20503_20601;
var G__20609 = (i__20504_20602 + (1));
seq__20501_20599 = G__20606;
chunk__20502_20600 = G__20607;
count__20503_20601 = G__20608;
i__20504_20602 = G__20609;
continue;
} else {
var temp__5457__auto___20610 = cljs.core.seq(seq__20501_20599);
if(temp__5457__auto___20610){
var seq__20501_20611__$1 = temp__5457__auto___20610;
if(cljs.core.chunked_seq_QMARK_(seq__20501_20611__$1)){
var c__12674__auto___20612 = cljs.core.chunk_first(seq__20501_20611__$1);
var G__20613 = cljs.core.chunk_rest(seq__20501_20611__$1);
var G__20614 = c__12674__auto___20612;
var G__20615 = cljs.core.count(c__12674__auto___20612);
var G__20616 = (0);
seq__20501_20599 = G__20613;
chunk__20502_20600 = G__20614;
count__20503_20601 = G__20615;
i__20504_20602 = G__20616;
continue;
} else {
var vec__20508_20617 = cljs.core.first(seq__20501_20611__$1);
var col_20618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20508_20617,(0),null);
var infos_20619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20508_20617,(1),null);
encode_cols(infos_20619,source_idx_20588,line_20597,col_20618);

var G__20620 = cljs.core.next(seq__20501_20611__$1);
var G__20621 = null;
var G__20622 = (0);
var G__20623 = (0);
seq__20501_20599 = G__20620;
chunk__20502_20600 = G__20621;
count__20503_20601 = G__20622;
i__20504_20602 = G__20623;
continue;
}
} else {
}
}
break;
}

var G__20624 = seq__20494_20592;
var G__20625 = chunk__20495_20593;
var G__20626 = count__20496_20594;
var G__20627 = (i__20497_20595 + (1));
seq__20494_20592 = G__20624;
chunk__20495_20593 = G__20625;
count__20496_20594 = G__20626;
i__20497_20595 = G__20627;
continue;
} else {
var temp__5457__auto___20628 = cljs.core.seq(seq__20494_20592);
if(temp__5457__auto___20628){
var seq__20494_20629__$1 = temp__5457__auto___20628;
if(cljs.core.chunked_seq_QMARK_(seq__20494_20629__$1)){
var c__12674__auto___20630 = cljs.core.chunk_first(seq__20494_20629__$1);
var G__20631 = cljs.core.chunk_rest(seq__20494_20629__$1);
var G__20632 = c__12674__auto___20630;
var G__20633 = cljs.core.count(c__12674__auto___20630);
var G__20634 = (0);
seq__20494_20592 = G__20631;
chunk__20495_20593 = G__20632;
count__20496_20594 = G__20633;
i__20497_20595 = G__20634;
continue;
} else {
var vec__20511_20635 = cljs.core.first(seq__20494_20629__$1);
var line_20636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20511_20635,(0),null);
var cols_20637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20511_20635,(1),null);
var seq__20514_20638 = cljs.core.seq(cols_20637);
var chunk__20515_20639 = null;
var count__20516_20640 = (0);
var i__20517_20641 = (0);
while(true){
if((i__20517_20641 < count__20516_20640)){
var vec__20518_20642 = chunk__20515_20639.cljs$core$IIndexed$_nth$arity$2(null,i__20517_20641);
var col_20643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20518_20642,(0),null);
var infos_20644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20518_20642,(1),null);
encode_cols(infos_20644,source_idx_20588,line_20636,col_20643);

var G__20645 = seq__20514_20638;
var G__20646 = chunk__20515_20639;
var G__20647 = count__20516_20640;
var G__20648 = (i__20517_20641 + (1));
seq__20514_20638 = G__20645;
chunk__20515_20639 = G__20646;
count__20516_20640 = G__20647;
i__20517_20641 = G__20648;
continue;
} else {
var temp__5457__auto___20649__$1 = cljs.core.seq(seq__20514_20638);
if(temp__5457__auto___20649__$1){
var seq__20514_20650__$1 = temp__5457__auto___20649__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20514_20650__$1)){
var c__12674__auto___20651 = cljs.core.chunk_first(seq__20514_20650__$1);
var G__20652 = cljs.core.chunk_rest(seq__20514_20650__$1);
var G__20653 = c__12674__auto___20651;
var G__20654 = cljs.core.count(c__12674__auto___20651);
var G__20655 = (0);
seq__20514_20638 = G__20652;
chunk__20515_20639 = G__20653;
count__20516_20640 = G__20654;
i__20517_20641 = G__20655;
continue;
} else {
var vec__20521_20656 = cljs.core.first(seq__20514_20650__$1);
var col_20657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20521_20656,(0),null);
var infos_20658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20521_20656,(1),null);
encode_cols(infos_20658,source_idx_20588,line_20636,col_20657);

var G__20659 = cljs.core.next(seq__20514_20650__$1);
var G__20660 = null;
var G__20661 = (0);
var G__20662 = (0);
seq__20514_20638 = G__20659;
chunk__20515_20639 = G__20660;
count__20516_20640 = G__20661;
i__20517_20641 = G__20662;
continue;
}
} else {
}
}
break;
}

var G__20663 = cljs.core.next(seq__20494_20629__$1);
var G__20664 = null;
var G__20665 = (0);
var G__20666 = (0);
seq__20494_20592 = G__20663;
chunk__20495_20593 = G__20664;
count__20496_20594 = G__20665;
i__20497_20595 = G__20666;
continue;
}
} else {
}
}
break;
}

var G__20667 = seq__20484_20583;
var G__20668 = chunk__20485_20584;
var G__20669 = count__20486_20585;
var G__20670 = (i__20487_20586 + (1));
seq__20484_20583 = G__20667;
chunk__20485_20584 = G__20668;
count__20486_20585 = G__20669;
i__20487_20586 = G__20670;
continue;
} else {
var temp__5457__auto___20671 = cljs.core.seq(seq__20484_20583);
if(temp__5457__auto___20671){
var seq__20484_20672__$1 = temp__5457__auto___20671;
if(cljs.core.chunked_seq_QMARK_(seq__20484_20672__$1)){
var c__12674__auto___20673 = cljs.core.chunk_first(seq__20484_20672__$1);
var G__20674 = cljs.core.chunk_rest(seq__20484_20672__$1);
var G__20675 = c__12674__auto___20673;
var G__20676 = cljs.core.count(c__12674__auto___20673);
var G__20677 = (0);
seq__20484_20583 = G__20674;
chunk__20485_20584 = G__20675;
count__20486_20585 = G__20676;
i__20487_20586 = G__20677;
continue;
} else {
var vec__20524_20678 = cljs.core.first(seq__20484_20672__$1);
var source_idx_20679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20524_20678,(0),null);
var vec__20527_20680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20524_20678,(1),null);
var __20681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20527_20680,(0),null);
var lines_20682__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20527_20680,(1),null);
var seq__20530_20683 = cljs.core.seq(lines_20682__$1);
var chunk__20531_20684 = null;
var count__20532_20685 = (0);
var i__20533_20686 = (0);
while(true){
if((i__20533_20686 < count__20532_20685)){
var vec__20534_20687 = chunk__20531_20684.cljs$core$IIndexed$_nth$arity$2(null,i__20533_20686);
var line_20688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20534_20687,(0),null);
var cols_20689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20534_20687,(1),null);
var seq__20537_20690 = cljs.core.seq(cols_20689);
var chunk__20538_20691 = null;
var count__20539_20692 = (0);
var i__20540_20693 = (0);
while(true){
if((i__20540_20693 < count__20539_20692)){
var vec__20541_20694 = chunk__20538_20691.cljs$core$IIndexed$_nth$arity$2(null,i__20540_20693);
var col_20695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20541_20694,(0),null);
var infos_20696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20541_20694,(1),null);
encode_cols(infos_20696,source_idx_20679,line_20688,col_20695);

var G__20697 = seq__20537_20690;
var G__20698 = chunk__20538_20691;
var G__20699 = count__20539_20692;
var G__20700 = (i__20540_20693 + (1));
seq__20537_20690 = G__20697;
chunk__20538_20691 = G__20698;
count__20539_20692 = G__20699;
i__20540_20693 = G__20700;
continue;
} else {
var temp__5457__auto___20701__$1 = cljs.core.seq(seq__20537_20690);
if(temp__5457__auto___20701__$1){
var seq__20537_20702__$1 = temp__5457__auto___20701__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20537_20702__$1)){
var c__12674__auto___20703 = cljs.core.chunk_first(seq__20537_20702__$1);
var G__20704 = cljs.core.chunk_rest(seq__20537_20702__$1);
var G__20705 = c__12674__auto___20703;
var G__20706 = cljs.core.count(c__12674__auto___20703);
var G__20707 = (0);
seq__20537_20690 = G__20704;
chunk__20538_20691 = G__20705;
count__20539_20692 = G__20706;
i__20540_20693 = G__20707;
continue;
} else {
var vec__20544_20708 = cljs.core.first(seq__20537_20702__$1);
var col_20709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20544_20708,(0),null);
var infos_20710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20544_20708,(1),null);
encode_cols(infos_20710,source_idx_20679,line_20688,col_20709);

var G__20711 = cljs.core.next(seq__20537_20702__$1);
var G__20712 = null;
var G__20713 = (0);
var G__20714 = (0);
seq__20537_20690 = G__20711;
chunk__20538_20691 = G__20712;
count__20539_20692 = G__20713;
i__20540_20693 = G__20714;
continue;
}
} else {
}
}
break;
}

var G__20715 = seq__20530_20683;
var G__20716 = chunk__20531_20684;
var G__20717 = count__20532_20685;
var G__20718 = (i__20533_20686 + (1));
seq__20530_20683 = G__20715;
chunk__20531_20684 = G__20716;
count__20532_20685 = G__20717;
i__20533_20686 = G__20718;
continue;
} else {
var temp__5457__auto___20719__$1 = cljs.core.seq(seq__20530_20683);
if(temp__5457__auto___20719__$1){
var seq__20530_20720__$1 = temp__5457__auto___20719__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20530_20720__$1)){
var c__12674__auto___20721 = cljs.core.chunk_first(seq__20530_20720__$1);
var G__20722 = cljs.core.chunk_rest(seq__20530_20720__$1);
var G__20723 = c__12674__auto___20721;
var G__20724 = cljs.core.count(c__12674__auto___20721);
var G__20725 = (0);
seq__20530_20683 = G__20722;
chunk__20531_20684 = G__20723;
count__20532_20685 = G__20724;
i__20533_20686 = G__20725;
continue;
} else {
var vec__20547_20726 = cljs.core.first(seq__20530_20720__$1);
var line_20727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20547_20726,(0),null);
var cols_20728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20547_20726,(1),null);
var seq__20550_20729 = cljs.core.seq(cols_20728);
var chunk__20551_20730 = null;
var count__20552_20731 = (0);
var i__20553_20732 = (0);
while(true){
if((i__20553_20732 < count__20552_20731)){
var vec__20554_20733 = chunk__20551_20730.cljs$core$IIndexed$_nth$arity$2(null,i__20553_20732);
var col_20734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20554_20733,(0),null);
var infos_20735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20554_20733,(1),null);
encode_cols(infos_20735,source_idx_20679,line_20727,col_20734);

var G__20736 = seq__20550_20729;
var G__20737 = chunk__20551_20730;
var G__20738 = count__20552_20731;
var G__20739 = (i__20553_20732 + (1));
seq__20550_20729 = G__20736;
chunk__20551_20730 = G__20737;
count__20552_20731 = G__20738;
i__20553_20732 = G__20739;
continue;
} else {
var temp__5457__auto___20740__$2 = cljs.core.seq(seq__20550_20729);
if(temp__5457__auto___20740__$2){
var seq__20550_20741__$1 = temp__5457__auto___20740__$2;
if(cljs.core.chunked_seq_QMARK_(seq__20550_20741__$1)){
var c__12674__auto___20742 = cljs.core.chunk_first(seq__20550_20741__$1);
var G__20743 = cljs.core.chunk_rest(seq__20550_20741__$1);
var G__20744 = c__12674__auto___20742;
var G__20745 = cljs.core.count(c__12674__auto___20742);
var G__20746 = (0);
seq__20550_20729 = G__20743;
chunk__20551_20730 = G__20744;
count__20552_20731 = G__20745;
i__20553_20732 = G__20746;
continue;
} else {
var vec__20557_20747 = cljs.core.first(seq__20550_20741__$1);
var col_20748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20557_20747,(0),null);
var infos_20749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20557_20747,(1),null);
encode_cols(infos_20749,source_idx_20679,line_20727,col_20748);

var G__20750 = cljs.core.next(seq__20550_20741__$1);
var G__20751 = null;
var G__20752 = (0);
var G__20753 = (0);
seq__20550_20729 = G__20750;
chunk__20551_20730 = G__20751;
count__20552_20731 = G__20752;
i__20553_20732 = G__20753;
continue;
}
} else {
}
}
break;
}

var G__20754 = cljs.core.next(seq__20530_20720__$1);
var G__20755 = null;
var G__20756 = (0);
var G__20757 = (0);
seq__20530_20683 = G__20754;
chunk__20531_20684 = G__20755;
count__20532_20685 = G__20756;
i__20533_20686 = G__20757;
continue;
}
} else {
}
}
break;
}

var G__20758 = cljs.core.next(seq__20484_20672__$1);
var G__20759 = null;
var G__20760 = (0);
var G__20761 = (0);
seq__20484_20583 = G__20758;
chunk__20485_20584 = G__20759;
count__20486_20585 = G__20760;
i__20487_20586 = G__20761;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__20560 = ({"version": (3), "file": cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((cljs.core.cst$kw$source_DASH_map_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__20477_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20477_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__20478_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__20478_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__20479_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__20479_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts))){
var G__20561 = G__20560;
var G__20562_20762 = G__20561;
var G__20563_20763 = "sourcesContent";
var G__20564_20764 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__20562_20762,G__20563_20763,G__20564_20764);

return G__20561;
} else {
return G__20560;
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
var vec__20765 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20765,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20765,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__20768 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20768,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20768,(1),null);
var G__20774 = cljs.core.next(col_map_seq);
var G__20775 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__20768,col,infos,vec__20765,line,col_map){
return (function (v,p__20771){
var map__20772 = p__20771;
var map__20772__$1 = ((((!((map__20772 == null)))?((((map__20772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20772):map__20772);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20772__$1,cljs.core.cst$kw$gline);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20772__$1,cljs.core.cst$kw$gcol);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__20768,col,infos,vec__20765,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__20774;
new_cols = G__20775;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__20776 = cljs.core.next(line_map_seq);
var G__20777 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__20776;
new_lines = G__20777;
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
var seq__20778_20840 = cljs.core.seq(reverse_map);
var chunk__20779_20841 = null;
var count__20780_20842 = (0);
var i__20781_20843 = (0);
while(true){
if((i__20781_20843 < count__20780_20842)){
var vec__20782_20844 = chunk__20779_20841.cljs$core$IIndexed$_nth$arity$2(null,i__20781_20843);
var line_20845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20782_20844,(0),null);
var columns_20846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20782_20844,(1),null);
var seq__20785_20847 = cljs.core.seq(columns_20846);
var chunk__20786_20848 = null;
var count__20787_20849 = (0);
var i__20788_20850 = (0);
while(true){
if((i__20788_20850 < count__20787_20849)){
var vec__20789_20851 = chunk__20786_20848.cljs$core$IIndexed$_nth$arity$2(null,i__20788_20850);
var column_20852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20789_20851,(0),null);
var column_info_20853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20789_20851,(1),null);
var seq__20792_20854 = cljs.core.seq(column_info_20853);
var chunk__20793_20855 = null;
var count__20794_20856 = (0);
var i__20795_20857 = (0);
while(true){
if((i__20795_20857 < count__20794_20856)){
var map__20796_20858 = chunk__20793_20855.cljs$core$IIndexed$_nth$arity$2(null,i__20795_20857);
var map__20796_20859__$1 = ((((!((map__20796_20858 == null)))?((((map__20796_20858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20796_20858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20796_20858):map__20796_20858);
var gline_20860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20796_20859__$1,cljs.core.cst$kw$gline);
var gcol_20861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20796_20859__$1,cljs.core.cst$kw$gcol);
var name_20862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20796_20859__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20860], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20792_20854,chunk__20793_20855,count__20794_20856,i__20795_20857,seq__20785_20847,chunk__20786_20848,count__20787_20849,i__20788_20850,seq__20778_20840,chunk__20779_20841,count__20780_20842,i__20781_20843,map__20796_20858,map__20796_20859__$1,gline_20860,gcol_20861,name_20862,vec__20789_20851,column_20852,column_info_20853,vec__20782_20844,line_20845,columns_20846,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20861], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20845,cljs.core.cst$kw$col,column_20852,cljs.core.cst$kw$name,name_20862], null));
});})(seq__20792_20854,chunk__20793_20855,count__20794_20856,i__20795_20857,seq__20785_20847,chunk__20786_20848,count__20787_20849,i__20788_20850,seq__20778_20840,chunk__20779_20841,count__20780_20842,i__20781_20843,map__20796_20858,map__20796_20859__$1,gline_20860,gcol_20861,name_20862,vec__20789_20851,column_20852,column_info_20853,vec__20782_20844,line_20845,columns_20846,inverted))
,cljs.core.sorted_map()));

var G__20863 = seq__20792_20854;
var G__20864 = chunk__20793_20855;
var G__20865 = count__20794_20856;
var G__20866 = (i__20795_20857 + (1));
seq__20792_20854 = G__20863;
chunk__20793_20855 = G__20864;
count__20794_20856 = G__20865;
i__20795_20857 = G__20866;
continue;
} else {
var temp__5457__auto___20867 = cljs.core.seq(seq__20792_20854);
if(temp__5457__auto___20867){
var seq__20792_20868__$1 = temp__5457__auto___20867;
if(cljs.core.chunked_seq_QMARK_(seq__20792_20868__$1)){
var c__12674__auto___20869 = cljs.core.chunk_first(seq__20792_20868__$1);
var G__20870 = cljs.core.chunk_rest(seq__20792_20868__$1);
var G__20871 = c__12674__auto___20869;
var G__20872 = cljs.core.count(c__12674__auto___20869);
var G__20873 = (0);
seq__20792_20854 = G__20870;
chunk__20793_20855 = G__20871;
count__20794_20856 = G__20872;
i__20795_20857 = G__20873;
continue;
} else {
var map__20798_20874 = cljs.core.first(seq__20792_20868__$1);
var map__20798_20875__$1 = ((((!((map__20798_20874 == null)))?((((map__20798_20874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20798_20874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20798_20874):map__20798_20874);
var gline_20876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20798_20875__$1,cljs.core.cst$kw$gline);
var gcol_20877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20798_20875__$1,cljs.core.cst$kw$gcol);
var name_20878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20798_20875__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20876], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20792_20854,chunk__20793_20855,count__20794_20856,i__20795_20857,seq__20785_20847,chunk__20786_20848,count__20787_20849,i__20788_20850,seq__20778_20840,chunk__20779_20841,count__20780_20842,i__20781_20843,map__20798_20874,map__20798_20875__$1,gline_20876,gcol_20877,name_20878,seq__20792_20868__$1,temp__5457__auto___20867,vec__20789_20851,column_20852,column_info_20853,vec__20782_20844,line_20845,columns_20846,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20877], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20845,cljs.core.cst$kw$col,column_20852,cljs.core.cst$kw$name,name_20878], null));
});})(seq__20792_20854,chunk__20793_20855,count__20794_20856,i__20795_20857,seq__20785_20847,chunk__20786_20848,count__20787_20849,i__20788_20850,seq__20778_20840,chunk__20779_20841,count__20780_20842,i__20781_20843,map__20798_20874,map__20798_20875__$1,gline_20876,gcol_20877,name_20878,seq__20792_20868__$1,temp__5457__auto___20867,vec__20789_20851,column_20852,column_info_20853,vec__20782_20844,line_20845,columns_20846,inverted))
,cljs.core.sorted_map()));

var G__20879 = cljs.core.next(seq__20792_20868__$1);
var G__20880 = null;
var G__20881 = (0);
var G__20882 = (0);
seq__20792_20854 = G__20879;
chunk__20793_20855 = G__20880;
count__20794_20856 = G__20881;
i__20795_20857 = G__20882;
continue;
}
} else {
}
}
break;
}

var G__20883 = seq__20785_20847;
var G__20884 = chunk__20786_20848;
var G__20885 = count__20787_20849;
var G__20886 = (i__20788_20850 + (1));
seq__20785_20847 = G__20883;
chunk__20786_20848 = G__20884;
count__20787_20849 = G__20885;
i__20788_20850 = G__20886;
continue;
} else {
var temp__5457__auto___20887 = cljs.core.seq(seq__20785_20847);
if(temp__5457__auto___20887){
var seq__20785_20888__$1 = temp__5457__auto___20887;
if(cljs.core.chunked_seq_QMARK_(seq__20785_20888__$1)){
var c__12674__auto___20889 = cljs.core.chunk_first(seq__20785_20888__$1);
var G__20890 = cljs.core.chunk_rest(seq__20785_20888__$1);
var G__20891 = c__12674__auto___20889;
var G__20892 = cljs.core.count(c__12674__auto___20889);
var G__20893 = (0);
seq__20785_20847 = G__20890;
chunk__20786_20848 = G__20891;
count__20787_20849 = G__20892;
i__20788_20850 = G__20893;
continue;
} else {
var vec__20800_20894 = cljs.core.first(seq__20785_20888__$1);
var column_20895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20800_20894,(0),null);
var column_info_20896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20800_20894,(1),null);
var seq__20803_20897 = cljs.core.seq(column_info_20896);
var chunk__20804_20898 = null;
var count__20805_20899 = (0);
var i__20806_20900 = (0);
while(true){
if((i__20806_20900 < count__20805_20899)){
var map__20807_20901 = chunk__20804_20898.cljs$core$IIndexed$_nth$arity$2(null,i__20806_20900);
var map__20807_20902__$1 = ((((!((map__20807_20901 == null)))?((((map__20807_20901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20807_20901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20807_20901):map__20807_20901);
var gline_20903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20807_20902__$1,cljs.core.cst$kw$gline);
var gcol_20904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20807_20902__$1,cljs.core.cst$kw$gcol);
var name_20905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20807_20902__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20903], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20803_20897,chunk__20804_20898,count__20805_20899,i__20806_20900,seq__20785_20847,chunk__20786_20848,count__20787_20849,i__20788_20850,seq__20778_20840,chunk__20779_20841,count__20780_20842,i__20781_20843,map__20807_20901,map__20807_20902__$1,gline_20903,gcol_20904,name_20905,vec__20800_20894,column_20895,column_info_20896,seq__20785_20888__$1,temp__5457__auto___20887,vec__20782_20844,line_20845,columns_20846,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20904], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20845,cljs.core.cst$kw$col,column_20895,cljs.core.cst$kw$name,name_20905], null));
});})(seq__20803_20897,chunk__20804_20898,count__20805_20899,i__20806_20900,seq__20785_20847,chunk__20786_20848,count__20787_20849,i__20788_20850,seq__20778_20840,chunk__20779_20841,count__20780_20842,i__20781_20843,map__20807_20901,map__20807_20902__$1,gline_20903,gcol_20904,name_20905,vec__20800_20894,column_20895,column_info_20896,seq__20785_20888__$1,temp__5457__auto___20887,vec__20782_20844,line_20845,columns_20846,inverted))
,cljs.core.sorted_map()));

var G__20906 = seq__20803_20897;
var G__20907 = chunk__20804_20898;
var G__20908 = count__20805_20899;
var G__20909 = (i__20806_20900 + (1));
seq__20803_20897 = G__20906;
chunk__20804_20898 = G__20907;
count__20805_20899 = G__20908;
i__20806_20900 = G__20909;
continue;
} else {
var temp__5457__auto___20910__$1 = cljs.core.seq(seq__20803_20897);
if(temp__5457__auto___20910__$1){
var seq__20803_20911__$1 = temp__5457__auto___20910__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20803_20911__$1)){
var c__12674__auto___20912 = cljs.core.chunk_first(seq__20803_20911__$1);
var G__20913 = cljs.core.chunk_rest(seq__20803_20911__$1);
var G__20914 = c__12674__auto___20912;
var G__20915 = cljs.core.count(c__12674__auto___20912);
var G__20916 = (0);
seq__20803_20897 = G__20913;
chunk__20804_20898 = G__20914;
count__20805_20899 = G__20915;
i__20806_20900 = G__20916;
continue;
} else {
var map__20809_20917 = cljs.core.first(seq__20803_20911__$1);
var map__20809_20918__$1 = ((((!((map__20809_20917 == null)))?((((map__20809_20917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20809_20917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20809_20917):map__20809_20917);
var gline_20919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20809_20918__$1,cljs.core.cst$kw$gline);
var gcol_20920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20809_20918__$1,cljs.core.cst$kw$gcol);
var name_20921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20809_20918__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20919], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20803_20897,chunk__20804_20898,count__20805_20899,i__20806_20900,seq__20785_20847,chunk__20786_20848,count__20787_20849,i__20788_20850,seq__20778_20840,chunk__20779_20841,count__20780_20842,i__20781_20843,map__20809_20917,map__20809_20918__$1,gline_20919,gcol_20920,name_20921,seq__20803_20911__$1,temp__5457__auto___20910__$1,vec__20800_20894,column_20895,column_info_20896,seq__20785_20888__$1,temp__5457__auto___20887,vec__20782_20844,line_20845,columns_20846,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20920], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20845,cljs.core.cst$kw$col,column_20895,cljs.core.cst$kw$name,name_20921], null));
});})(seq__20803_20897,chunk__20804_20898,count__20805_20899,i__20806_20900,seq__20785_20847,chunk__20786_20848,count__20787_20849,i__20788_20850,seq__20778_20840,chunk__20779_20841,count__20780_20842,i__20781_20843,map__20809_20917,map__20809_20918__$1,gline_20919,gcol_20920,name_20921,seq__20803_20911__$1,temp__5457__auto___20910__$1,vec__20800_20894,column_20895,column_info_20896,seq__20785_20888__$1,temp__5457__auto___20887,vec__20782_20844,line_20845,columns_20846,inverted))
,cljs.core.sorted_map()));

var G__20922 = cljs.core.next(seq__20803_20911__$1);
var G__20923 = null;
var G__20924 = (0);
var G__20925 = (0);
seq__20803_20897 = G__20922;
chunk__20804_20898 = G__20923;
count__20805_20899 = G__20924;
i__20806_20900 = G__20925;
continue;
}
} else {
}
}
break;
}

var G__20926 = cljs.core.next(seq__20785_20888__$1);
var G__20927 = null;
var G__20928 = (0);
var G__20929 = (0);
seq__20785_20847 = G__20926;
chunk__20786_20848 = G__20927;
count__20787_20849 = G__20928;
i__20788_20850 = G__20929;
continue;
}
} else {
}
}
break;
}

var G__20930 = seq__20778_20840;
var G__20931 = chunk__20779_20841;
var G__20932 = count__20780_20842;
var G__20933 = (i__20781_20843 + (1));
seq__20778_20840 = G__20930;
chunk__20779_20841 = G__20931;
count__20780_20842 = G__20932;
i__20781_20843 = G__20933;
continue;
} else {
var temp__5457__auto___20934 = cljs.core.seq(seq__20778_20840);
if(temp__5457__auto___20934){
var seq__20778_20935__$1 = temp__5457__auto___20934;
if(cljs.core.chunked_seq_QMARK_(seq__20778_20935__$1)){
var c__12674__auto___20936 = cljs.core.chunk_first(seq__20778_20935__$1);
var G__20937 = cljs.core.chunk_rest(seq__20778_20935__$1);
var G__20938 = c__12674__auto___20936;
var G__20939 = cljs.core.count(c__12674__auto___20936);
var G__20940 = (0);
seq__20778_20840 = G__20937;
chunk__20779_20841 = G__20938;
count__20780_20842 = G__20939;
i__20781_20843 = G__20940;
continue;
} else {
var vec__20811_20941 = cljs.core.first(seq__20778_20935__$1);
var line_20942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20811_20941,(0),null);
var columns_20943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20811_20941,(1),null);
var seq__20814_20944 = cljs.core.seq(columns_20943);
var chunk__20815_20945 = null;
var count__20816_20946 = (0);
var i__20817_20947 = (0);
while(true){
if((i__20817_20947 < count__20816_20946)){
var vec__20818_20948 = chunk__20815_20945.cljs$core$IIndexed$_nth$arity$2(null,i__20817_20947);
var column_20949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20818_20948,(0),null);
var column_info_20950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20818_20948,(1),null);
var seq__20821_20951 = cljs.core.seq(column_info_20950);
var chunk__20822_20952 = null;
var count__20823_20953 = (0);
var i__20824_20954 = (0);
while(true){
if((i__20824_20954 < count__20823_20953)){
var map__20825_20955 = chunk__20822_20952.cljs$core$IIndexed$_nth$arity$2(null,i__20824_20954);
var map__20825_20956__$1 = ((((!((map__20825_20955 == null)))?((((map__20825_20955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20825_20955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20825_20955):map__20825_20955);
var gline_20957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20825_20956__$1,cljs.core.cst$kw$gline);
var gcol_20958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20825_20956__$1,cljs.core.cst$kw$gcol);
var name_20959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20825_20956__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20957], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20821_20951,chunk__20822_20952,count__20823_20953,i__20824_20954,seq__20814_20944,chunk__20815_20945,count__20816_20946,i__20817_20947,seq__20778_20840,chunk__20779_20841,count__20780_20842,i__20781_20843,map__20825_20955,map__20825_20956__$1,gline_20957,gcol_20958,name_20959,vec__20818_20948,column_20949,column_info_20950,vec__20811_20941,line_20942,columns_20943,seq__20778_20935__$1,temp__5457__auto___20934,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20958], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20942,cljs.core.cst$kw$col,column_20949,cljs.core.cst$kw$name,name_20959], null));
});})(seq__20821_20951,chunk__20822_20952,count__20823_20953,i__20824_20954,seq__20814_20944,chunk__20815_20945,count__20816_20946,i__20817_20947,seq__20778_20840,chunk__20779_20841,count__20780_20842,i__20781_20843,map__20825_20955,map__20825_20956__$1,gline_20957,gcol_20958,name_20959,vec__20818_20948,column_20949,column_info_20950,vec__20811_20941,line_20942,columns_20943,seq__20778_20935__$1,temp__5457__auto___20934,inverted))
,cljs.core.sorted_map()));

var G__20960 = seq__20821_20951;
var G__20961 = chunk__20822_20952;
var G__20962 = count__20823_20953;
var G__20963 = (i__20824_20954 + (1));
seq__20821_20951 = G__20960;
chunk__20822_20952 = G__20961;
count__20823_20953 = G__20962;
i__20824_20954 = G__20963;
continue;
} else {
var temp__5457__auto___20964__$1 = cljs.core.seq(seq__20821_20951);
if(temp__5457__auto___20964__$1){
var seq__20821_20965__$1 = temp__5457__auto___20964__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20821_20965__$1)){
var c__12674__auto___20966 = cljs.core.chunk_first(seq__20821_20965__$1);
var G__20967 = cljs.core.chunk_rest(seq__20821_20965__$1);
var G__20968 = c__12674__auto___20966;
var G__20969 = cljs.core.count(c__12674__auto___20966);
var G__20970 = (0);
seq__20821_20951 = G__20967;
chunk__20822_20952 = G__20968;
count__20823_20953 = G__20969;
i__20824_20954 = G__20970;
continue;
} else {
var map__20827_20971 = cljs.core.first(seq__20821_20965__$1);
var map__20827_20972__$1 = ((((!((map__20827_20971 == null)))?((((map__20827_20971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20827_20971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20827_20971):map__20827_20971);
var gline_20973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20827_20972__$1,cljs.core.cst$kw$gline);
var gcol_20974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20827_20972__$1,cljs.core.cst$kw$gcol);
var name_20975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20827_20972__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20973], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20821_20951,chunk__20822_20952,count__20823_20953,i__20824_20954,seq__20814_20944,chunk__20815_20945,count__20816_20946,i__20817_20947,seq__20778_20840,chunk__20779_20841,count__20780_20842,i__20781_20843,map__20827_20971,map__20827_20972__$1,gline_20973,gcol_20974,name_20975,seq__20821_20965__$1,temp__5457__auto___20964__$1,vec__20818_20948,column_20949,column_info_20950,vec__20811_20941,line_20942,columns_20943,seq__20778_20935__$1,temp__5457__auto___20934,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20974], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20942,cljs.core.cst$kw$col,column_20949,cljs.core.cst$kw$name,name_20975], null));
});})(seq__20821_20951,chunk__20822_20952,count__20823_20953,i__20824_20954,seq__20814_20944,chunk__20815_20945,count__20816_20946,i__20817_20947,seq__20778_20840,chunk__20779_20841,count__20780_20842,i__20781_20843,map__20827_20971,map__20827_20972__$1,gline_20973,gcol_20974,name_20975,seq__20821_20965__$1,temp__5457__auto___20964__$1,vec__20818_20948,column_20949,column_info_20950,vec__20811_20941,line_20942,columns_20943,seq__20778_20935__$1,temp__5457__auto___20934,inverted))
,cljs.core.sorted_map()));

var G__20976 = cljs.core.next(seq__20821_20965__$1);
var G__20977 = null;
var G__20978 = (0);
var G__20979 = (0);
seq__20821_20951 = G__20976;
chunk__20822_20952 = G__20977;
count__20823_20953 = G__20978;
i__20824_20954 = G__20979;
continue;
}
} else {
}
}
break;
}

var G__20980 = seq__20814_20944;
var G__20981 = chunk__20815_20945;
var G__20982 = count__20816_20946;
var G__20983 = (i__20817_20947 + (1));
seq__20814_20944 = G__20980;
chunk__20815_20945 = G__20981;
count__20816_20946 = G__20982;
i__20817_20947 = G__20983;
continue;
} else {
var temp__5457__auto___20984__$1 = cljs.core.seq(seq__20814_20944);
if(temp__5457__auto___20984__$1){
var seq__20814_20985__$1 = temp__5457__auto___20984__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20814_20985__$1)){
var c__12674__auto___20986 = cljs.core.chunk_first(seq__20814_20985__$1);
var G__20987 = cljs.core.chunk_rest(seq__20814_20985__$1);
var G__20988 = c__12674__auto___20986;
var G__20989 = cljs.core.count(c__12674__auto___20986);
var G__20990 = (0);
seq__20814_20944 = G__20987;
chunk__20815_20945 = G__20988;
count__20816_20946 = G__20989;
i__20817_20947 = G__20990;
continue;
} else {
var vec__20829_20991 = cljs.core.first(seq__20814_20985__$1);
var column_20992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20829_20991,(0),null);
var column_info_20993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20829_20991,(1),null);
var seq__20832_20994 = cljs.core.seq(column_info_20993);
var chunk__20833_20995 = null;
var count__20834_20996 = (0);
var i__20835_20997 = (0);
while(true){
if((i__20835_20997 < count__20834_20996)){
var map__20836_20998 = chunk__20833_20995.cljs$core$IIndexed$_nth$arity$2(null,i__20835_20997);
var map__20836_20999__$1 = ((((!((map__20836_20998 == null)))?((((map__20836_20998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20836_20998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20836_20998):map__20836_20998);
var gline_21000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836_20999__$1,cljs.core.cst$kw$gline);
var gcol_21001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836_20999__$1,cljs.core.cst$kw$gcol);
var name_21002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836_20999__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_21000], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20832_20994,chunk__20833_20995,count__20834_20996,i__20835_20997,seq__20814_20944,chunk__20815_20945,count__20816_20946,i__20817_20947,seq__20778_20840,chunk__20779_20841,count__20780_20842,i__20781_20843,map__20836_20998,map__20836_20999__$1,gline_21000,gcol_21001,name_21002,vec__20829_20991,column_20992,column_info_20993,seq__20814_20985__$1,temp__5457__auto___20984__$1,vec__20811_20941,line_20942,columns_20943,seq__20778_20935__$1,temp__5457__auto___20934,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_21001], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20942,cljs.core.cst$kw$col,column_20992,cljs.core.cst$kw$name,name_21002], null));
});})(seq__20832_20994,chunk__20833_20995,count__20834_20996,i__20835_20997,seq__20814_20944,chunk__20815_20945,count__20816_20946,i__20817_20947,seq__20778_20840,chunk__20779_20841,count__20780_20842,i__20781_20843,map__20836_20998,map__20836_20999__$1,gline_21000,gcol_21001,name_21002,vec__20829_20991,column_20992,column_info_20993,seq__20814_20985__$1,temp__5457__auto___20984__$1,vec__20811_20941,line_20942,columns_20943,seq__20778_20935__$1,temp__5457__auto___20934,inverted))
,cljs.core.sorted_map()));

var G__21003 = seq__20832_20994;
var G__21004 = chunk__20833_20995;
var G__21005 = count__20834_20996;
var G__21006 = (i__20835_20997 + (1));
seq__20832_20994 = G__21003;
chunk__20833_20995 = G__21004;
count__20834_20996 = G__21005;
i__20835_20997 = G__21006;
continue;
} else {
var temp__5457__auto___21007__$2 = cljs.core.seq(seq__20832_20994);
if(temp__5457__auto___21007__$2){
var seq__20832_21008__$1 = temp__5457__auto___21007__$2;
if(cljs.core.chunked_seq_QMARK_(seq__20832_21008__$1)){
var c__12674__auto___21009 = cljs.core.chunk_first(seq__20832_21008__$1);
var G__21010 = cljs.core.chunk_rest(seq__20832_21008__$1);
var G__21011 = c__12674__auto___21009;
var G__21012 = cljs.core.count(c__12674__auto___21009);
var G__21013 = (0);
seq__20832_20994 = G__21010;
chunk__20833_20995 = G__21011;
count__20834_20996 = G__21012;
i__20835_20997 = G__21013;
continue;
} else {
var map__20838_21014 = cljs.core.first(seq__20832_21008__$1);
var map__20838_21015__$1 = ((((!((map__20838_21014 == null)))?((((map__20838_21014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20838_21014.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20838_21014):map__20838_21014);
var gline_21016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20838_21015__$1,cljs.core.cst$kw$gline);
var gcol_21017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20838_21015__$1,cljs.core.cst$kw$gcol);
var name_21018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20838_21015__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_21016], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__20832_20994,chunk__20833_20995,count__20834_20996,i__20835_20997,seq__20814_20944,chunk__20815_20945,count__20816_20946,i__20817_20947,seq__20778_20840,chunk__20779_20841,count__20780_20842,i__20781_20843,map__20838_21014,map__20838_21015__$1,gline_21016,gcol_21017,name_21018,seq__20832_21008__$1,temp__5457__auto___21007__$2,vec__20829_20991,column_20992,column_info_20993,seq__20814_20985__$1,temp__5457__auto___20984__$1,vec__20811_20941,line_20942,columns_20943,seq__20778_20935__$1,temp__5457__auto___20934,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_21017], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_20942,cljs.core.cst$kw$col,column_20992,cljs.core.cst$kw$name,name_21018], null));
});})(seq__20832_20994,chunk__20833_20995,count__20834_20996,i__20835_20997,seq__20814_20944,chunk__20815_20945,count__20816_20946,i__20817_20947,seq__20778_20840,chunk__20779_20841,count__20780_20842,i__20781_20843,map__20838_21014,map__20838_21015__$1,gline_21016,gcol_21017,name_21018,seq__20832_21008__$1,temp__5457__auto___21007__$2,vec__20829_20991,column_20992,column_info_20993,seq__20814_20985__$1,temp__5457__auto___20984__$1,vec__20811_20941,line_20942,columns_20943,seq__20778_20935__$1,temp__5457__auto___20934,inverted))
,cljs.core.sorted_map()));

var G__21019 = cljs.core.next(seq__20832_21008__$1);
var G__21020 = null;
var G__21021 = (0);
var G__21022 = (0);
seq__20832_20994 = G__21019;
chunk__20833_20995 = G__21020;
count__20834_20996 = G__21021;
i__20835_20997 = G__21022;
continue;
}
} else {
}
}
break;
}

var G__21023 = cljs.core.next(seq__20814_20985__$1);
var G__21024 = null;
var G__21025 = (0);
var G__21026 = (0);
seq__20814_20944 = G__21023;
chunk__20815_20945 = G__21024;
count__20816_20946 = G__21025;
i__20817_20947 = G__21026;
continue;
}
} else {
}
}
break;
}

var G__21027 = cljs.core.next(seq__20778_20935__$1);
var G__21028 = null;
var G__21029 = (0);
var G__21030 = (0);
seq__20778_20840 = G__21027;
chunk__20779_20841 = G__21028;
count__20780_20842 = G__21029;
i__20781_20843 = G__21030;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
