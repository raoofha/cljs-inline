// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ecmascript5,cljs.core.cst$kw$ecmascript5_DASH_strict,cljs.core.cst$kw$ecmascript6,cljs.core.cst$kw$ecmascript6_DASH_strict,cljs.core.cst$kw$ecmascript_DASH_2015,cljs.core.cst$kw$ecmascript6_DASH_typed,cljs.core.cst$kw$ecmascript_DASH_2016,cljs.core.cst$kw$ecmascript_DASH_2017,cljs.core.cst$kw$ecmascript_DASH_next], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__20999 = s;
var map__20999__$1 = ((((!((map__20999 == null)))?((((map__20999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20999.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20999):map__20999);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20999__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20999__$1,cljs.core.cst$kw$info);
var d = (0);
var G__21002 = info;
var map__21003 = G__21002;
var map__21003__$1 = ((((!((map__21003 == null)))?((((map__21003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21003):map__21003);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21003__$1,cljs.core.cst$kw$shadow);
var d__$1 = d;
var G__21002__$1 = G__21002;
while(true){
var d__$2 = d__$1;
var map__21005 = G__21002__$1;
var map__21005__$1 = ((((!((map__21005 == null)))?((((map__21005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21005):map__21005);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21005__$1,cljs.core.cst$kw$shadow);
if(cljs.core.truth_(shadow__$1)){
var G__21007 = (d__$2 + (1));
var G__21008 = shadow__$1;
d__$1 = G__21007;
G__21002__$1 = G__21008;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__21009){
var map__21010 = p__21009;
var map__21010__$1 = ((((!((map__21010 == null)))?((((map__21010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21010):map__21010);
var name_var = map__21010__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21010__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21010__$1,cljs.core.cst$kw$info);
var name__$1 = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__21012 = info;
var map__21012__$1 = ((((!((map__21012 == null)))?((((map__21012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21012):map__21012);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21012__$1,cljs.core.cst$kw$ns);
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21012__$1,cljs.core.cst$kw$fn_DASH_scope);
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.cst$kw$name),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__21014 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__21014) : cljs.compiler.munge.call(null,G__21014));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__21016 = arguments.length;
switch (G__21016) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(name_var);
var field = cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(name_var);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(name_var);
if(!((cljs.core.cst$kw$fn_DASH_self_DASH_name.cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = cljs.core.munge_str(ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__21018 = cp;
switch (G__21018) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__21020_21024 = cljs.core.seq(s);
var chunk__21021_21025 = null;
var count__21022_21026 = (0);
var i__21023_21027 = (0);
while(true){
if((i__21023_21027 < count__21022_21026)){
var c_21028 = chunk__21021_21025.cljs$core$IIndexed$_nth$arity$2(null,i__21023_21027);
sb.append(cljs.compiler.escape_char(c_21028));

var G__21029 = seq__21020_21024;
var G__21030 = chunk__21021_21025;
var G__21031 = count__21022_21026;
var G__21032 = (i__21023_21027 + (1));
seq__21020_21024 = G__21029;
chunk__21021_21025 = G__21030;
count__21022_21026 = G__21031;
i__21023_21027 = G__21032;
continue;
} else {
var temp__5457__auto___21033 = cljs.core.seq(seq__21020_21024);
if(temp__5457__auto___21033){
var seq__21020_21034__$1 = temp__5457__auto___21033;
if(cljs.core.chunked_seq_QMARK_(seq__21020_21034__$1)){
var c__12674__auto___21035 = cljs.core.chunk_first(seq__21020_21034__$1);
var G__21036 = cljs.core.chunk_rest(seq__21020_21034__$1);
var G__21037 = c__12674__auto___21035;
var G__21038 = cljs.core.count(c__12674__auto___21035);
var G__21039 = (0);
seq__21020_21024 = G__21036;
chunk__21021_21025 = G__21037;
count__21022_21026 = G__21038;
i__21023_21027 = G__21039;
continue;
} else {
var c_21040 = cljs.core.first(seq__21020_21034__$1);
sb.append(cljs.compiler.escape_char(c_21040));

var G__21041 = cljs.core.next(seq__21020_21034__$1);
var G__21042 = null;
var G__21043 = (0);
var G__21044 = (0);
seq__21020_21024 = G__21041;
chunk__21021_21025 = G__21042;
count__21022_21026 = G__21043;
i__21023_21027 = G__21044;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__12798__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12799__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12800__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12801__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),cljs.core.cst$kw$op,cljs.core.cst$kw$default,hierarchy__12802__auto__,method_table__12798__auto__,prefer_table__12799__auto__,method_cache__12800__auto__,cached_hierarchy__12801__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__19225__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__19225__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__21045_21050 = ast;
var map__21045_21051__$1 = ((((!((map__21045_21050 == null)))?((((map__21045_21050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21045_21050.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21045_21050):map__21045_21050);
var env_21052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21045_21051__$1,cljs.core.cst$kw$env);
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env_21052))){
var map__21047_21053 = env_21052;
var map__21047_21054__$1 = ((((!((map__21047_21053 == null)))?((((map__21047_21053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21047_21053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21047_21053):map__21047_21053);
var line_21055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21047_21054__$1,cljs.core.cst$kw$line);
var column_21056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21047_21054__$1,cljs.core.cst$kw$column);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__21047_21053,map__21047_21054__$1,line_21055,column_21056,map__21045_21050,map__21045_21051__$1,env_21052,val__19225__auto__){
return (function (m){
var minfo = (function (){var G__21049 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gcol,cljs.core.cst$kw$gen_DASH_col.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$gline,cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$var)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21049,cljs.core.cst$kw$name,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__21049;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_map,(line_21055 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__21047_21053,map__21047_21054__$1,line_21055,column_21056,map__21045_21050,map__21045_21051__$1,env_21052,val__19225__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_21056)?(column_21056 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__21047_21053,map__21047_21054__$1,line_21055,column_21056,map__21045_21050,map__21045_21051__$1,env_21052,val__19225__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__21047_21053,map__21047_21054__$1,line_21055,column_21056,map__21045_21050,map__21045_21051__$1,env_21052,val__19225__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__21047_21053,map__21047_21054__$1,line_21055,column_21056,map__21045_21050,map__21045_21051__$1,env_21052,val__19225__auto__))
,cljs.core.sorted_map()));
});})(map__21047_21053,map__21047_21054__$1,line_21055,column_21056,map__21045_21050,map__21045_21051__$1,env_21052,val__19225__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__19225__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__13029__auto__ = [];
var len__13022__auto___21063 = arguments.length;
var i__13023__auto___21064 = (0);
while(true){
if((i__13023__auto___21064 < len__13022__auto___21063)){
args__13029__auto__.push((arguments[i__13023__auto___21064]));

var G__21065 = (i__13023__auto___21064 + (1));
i__13023__auto___21064 = G__21065;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__21059_21066 = cljs.core.seq(xs);
var chunk__21060_21067 = null;
var count__21061_21068 = (0);
var i__21062_21069 = (0);
while(true){
if((i__21062_21069 < count__21061_21068)){
var x_21070 = chunk__21060_21067.cljs$core$IIndexed$_nth$arity$2(null,i__21062_21069);
if((x_21070 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_21070)){
cljs.compiler.emit(x_21070);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_21070)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_21070);
} else {
if(goog.isFunction(x_21070)){
(x_21070.cljs$core$IFn$_invoke$arity$0 ? x_21070.cljs$core$IFn$_invoke$arity$0() : x_21070.call(null));
} else {
var s_21071 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_21070], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__21059_21066,chunk__21060_21067,count__21061_21068,i__21062_21069,s_21071,x_21070){
return (function (p1__21057_SHARP_){
return (p1__21057_SHARP_ + cljs.core.count(s_21071));
});})(seq__21059_21066,chunk__21060_21067,count__21061_21068,i__21062_21069,s_21071,x_21070))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_21071], 0));

}
}
}
}

var G__21072 = seq__21059_21066;
var G__21073 = chunk__21060_21067;
var G__21074 = count__21061_21068;
var G__21075 = (i__21062_21069 + (1));
seq__21059_21066 = G__21072;
chunk__21060_21067 = G__21073;
count__21061_21068 = G__21074;
i__21062_21069 = G__21075;
continue;
} else {
var temp__5457__auto___21076 = cljs.core.seq(seq__21059_21066);
if(temp__5457__auto___21076){
var seq__21059_21077__$1 = temp__5457__auto___21076;
if(cljs.core.chunked_seq_QMARK_(seq__21059_21077__$1)){
var c__12674__auto___21078 = cljs.core.chunk_first(seq__21059_21077__$1);
var G__21079 = cljs.core.chunk_rest(seq__21059_21077__$1);
var G__21080 = c__12674__auto___21078;
var G__21081 = cljs.core.count(c__12674__auto___21078);
var G__21082 = (0);
seq__21059_21066 = G__21079;
chunk__21060_21067 = G__21080;
count__21061_21068 = G__21081;
i__21062_21069 = G__21082;
continue;
} else {
var x_21083 = cljs.core.first(seq__21059_21077__$1);
if((x_21083 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_21083)){
cljs.compiler.emit(x_21083);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_21083)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_21083);
} else {
if(goog.isFunction(x_21083)){
(x_21083.cljs$core$IFn$_invoke$arity$0 ? x_21083.cljs$core$IFn$_invoke$arity$0() : x_21083.call(null));
} else {
var s_21084 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_21083], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__21059_21066,chunk__21060_21067,count__21061_21068,i__21062_21069,s_21084,x_21083,seq__21059_21077__$1,temp__5457__auto___21076){
return (function (p1__21057_SHARP_){
return (p1__21057_SHARP_ + cljs.core.count(s_21084));
});})(seq__21059_21066,chunk__21060_21067,count__21061_21068,i__21062_21069,s_21084,x_21083,seq__21059_21077__$1,temp__5457__auto___21076))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_21084], 0));

}
}
}
}

var G__21085 = cljs.core.next(seq__21059_21077__$1);
var G__21086 = null;
var G__21087 = (0);
var G__21088 = (0);
seq__21059_21066 = G__21085;
chunk__21060_21067 = G__21086;
count__21061_21068 = G__21087;
i__21062_21069 = G__21088;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq21058){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21058));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__13029__auto__ = [];
var len__13022__auto___21094 = arguments.length;
var i__13023__auto___21095 = (0);
while(true){
if((i__13023__auto___21095 < len__13022__auto___21094)){
args__13029__auto__.push((arguments[i__13023__auto___21095]));

var G__21096 = (i__13023__auto___21095 + (1));
i__13023__auto___21095 = G__21096;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_21090_21097 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println();
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_21090_21097;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__21091){
var map__21092 = p__21091;
var map__21092__$1 = ((((!((map__21092 == null)))?((((map__21092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21092):map__21092);
var m = map__21092__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21092__$1,cljs.core.cst$kw$gen_DASH_line);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$gen_DASH_line,(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$gen_DASH_col,(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq21089){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21089));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__12870__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_21098_21100 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_21099_21101 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_21098_21100,_STAR_print_fn_STAR_21099_21101,sb__12870__auto__){
return (function (x__12871__auto__){
return sb__12870__auto__.append(x__12871__auto__);
});})(_STAR_print_newline_STAR_21098_21100,_STAR_print_fn_STAR_21099_21101,sb__12870__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_21099_21101;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_21098_21100;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__12870__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__12798__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12799__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12800__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12801__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant"),cljs.core.type,cljs.core.cst$kw$default,hierarchy__12802__auto__,method_table__12798__auto__,prefer_table__12799__auto__,method_cache__12800__auto__,cached_hierarchy__12801__auto__));
})();
}
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$constant,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["null"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NaN"], 0));
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((x > (0)))?"Infinity":"-Infinity")], 0));
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",x,")"], 0));

}
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x))], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(x)?"true":"false")], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(new RegExp(\"\"))"], 0));
} else {
var vec__21102 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21102,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21102,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21102,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern], 0));
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Keyword("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__21105_21107 = (cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__21105_21107) : cljs.compiler.emit_constant.call(null,G__21105_21107));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__21106_21108 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__21106_21108) : cljs.compiler.emit_constant.call(null,G__21106_21108));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Symbol("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(symstr) : cljs.compiler.emit_constant.call(null,symstr));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__21109_21110 = cljs.core.hash(sym);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__21109_21110) : cljs.compiler.emit_constant.call(null,G__21109_21110));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant.call(null,null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5455__auto__ = (function (){var and__11731__auto__ = cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__11731__auto__)){
var G__21111 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__21111) : x.call(null,G__21111));
} else {
return and__11731__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5455__auto__ = (function (){var and__11731__auto__ = cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__11731__auto__)){
var G__21112 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__21112) : x.call(null,G__21112));
} else {
return and__11731__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new Date(",date.getTime(),")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$no_DASH_op,(function (m){
return null;
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var,(function (p__21114){
var map__21115 = p__21114;
var map__21115__$1 = ((((!((map__21115 == null)))?((((map__21115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21115):map__21115);
var ast = map__21115__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21115__$1,cljs.core.cst$kw$info);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21115__$1,cljs.core.cst$kw$env);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21115__$1,cljs.core.cst$kw$form);
var temp__5455__auto__ = cljs.core.cst$kw$const_DASH_expr.cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,cljs.core.cst$kw$env,env));
} else {
var map__21117 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__21117__$1 = ((((!((map__21117 == null)))?((((map__21117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21117):map__21117);
var cenv = map__21117__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21117__$1,cljs.core.cst$kw$options);
var var_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index,cljs.core.name(var_name),cljs.core.cst$kw$name], null));
var or__11743__auto__ = js_module_name;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(cljs.core.cst$kw$binding_DASH_form_QMARK_.cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__21119 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__11731__auto__ = (function (){var G__21121 = cljs.core.cst$kw$language_DASH_out.cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__21121) : cljs.compiler.es5_GT__EQ_.call(null,G__21121));
})();
if(cljs.core.truth_(and__11731__auto__)){
return !((cljs.core.namespace(var_name) == null));
} else {
return and__11731__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__21119,cljs.analyzer.es5_allowed);
} else {
return G__21119;
}
})();
var env__20991__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__21122 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$sym$js_SLASH__DASH_Infinity)){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__21122,reserved);
} else {
return G__21122;
}
})()], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var_DASH_special,(function (p__21123){
var map__21124 = p__21123;
var map__21124__$1 = ((((!((map__21124 == null)))?((((map__21124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21124):map__21124);
var arg = map__21124__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124__$1,cljs.core.cst$kw$env);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124__$1,cljs.core.cst$kw$var);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124__$1,cljs.core.cst$kw$sym);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124__$1,cljs.core.cst$kw$meta);
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__21126 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$);
var map__21126__$1 = ((((!((map__21126 == null)))?((((map__21126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21126):map__21126);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21126__$1,cljs.core.cst$kw$name);
var env__20991__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$meta,(function (p__21128){
var map__21129 = p__21128;
var map__21129__$1 = ((((!((map__21129 == null)))?((((map__21129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21129):map__21129);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21129__$1,cljs.core.cst$kw$expr);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21129__$1,cljs.core.cst$kw$meta);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21129__$1,cljs.core.cst$kw$env);
var env__20991__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_((function (p1__21131_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__21131_SHARP_),cljs.core.cst$kw$constant);
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (p__21132){
var map__21133 = p__21132;
var map__21133__$1 = ((((!((map__21133 == null)))?((((map__21133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21133):map__21133);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21133__$1,cljs.core.cst$kw$env);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21133__$1,cljs.core.cst$kw$keys);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21133__$1,cljs.core.cst$kw$vals);
var env__20991__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if((cljs.core.count(keys) === (0))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentArrayMap.EMPTY"], 0));
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_(keys))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"])"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep(keys),"],[",cljs.compiler.comma_sep(vals),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (p__21135){
var map__21136 = p__21135;
var map__21136__$1 = ((((!((map__21136 == null)))?((((map__21136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21136):map__21136);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21136__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21136__$1,cljs.core.cst$kw$env);
var env__20991__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (p__21138){
var map__21139 = p__21138;
var map__21139__$1 = ((((!((map__21139 == null)))?((((map__21139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21139):map__21139);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21139__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21139__$1,cljs.core.cst$kw$env);
var env__20991__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_21141 = cljs.core.count(items);
if((cnt_21141 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentVector(null, ",cnt_21141,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_((function (p1__21142_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__21142_SHARP_),cljs.core.cst$kw$constant);
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set,(function (p__21143){
var map__21144 = p__21143;
var map__21144__$1 = ((((!((map__21144 == null)))?((((map__21144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21144):map__21144);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21144__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21144__$1,cljs.core.cst$kw$env);
var env__20991__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashSet.EMPTY"], 0));
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_(items))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"))),"], null), null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep(items),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_value,(function (p__21146){
var map__21147 = p__21146;
var map__21147__$1 = ((((!((map__21147 == null)))?((((map__21147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21147):map__21147);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21147__$1,cljs.core.cst$kw$items);
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21147__$1,cljs.core.cst$kw$js_DASH_type);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21147__$1,cljs.core.cst$kw$env);
var env__20991__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,cljs.core.cst$kw$object)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["({"], 0));

var temp__5457__auto___21165 = cljs.core.seq(items);
if(temp__5457__auto___21165){
var items_21166__$1 = temp__5457__auto___21165;
var vec__21149_21167 = items_21166__$1;
var seq__21150_21168 = cljs.core.seq(vec__21149_21167);
var first__21151_21169 = cljs.core.first(seq__21150_21168);
var seq__21150_21170__$1 = cljs.core.next(seq__21150_21168);
var vec__21152_21171 = first__21151_21169;
var k_21172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21152_21171,(0),null);
var v_21173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21152_21171,(1),null);
var r_21174 = seq__21150_21170__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\"",cljs.core.name(k_21172),"\": ",v_21173], 0));

var seq__21155_21175 = cljs.core.seq(r_21174);
var chunk__21156_21176 = null;
var count__21157_21177 = (0);
var i__21158_21178 = (0);
while(true){
if((i__21158_21178 < count__21157_21177)){
var vec__21159_21179 = chunk__21156_21176.cljs$core$IIndexed$_nth$arity$2(null,i__21158_21178);
var k_21180__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21159_21179,(0),null);
var v_21181__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21159_21179,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_21180__$1),"\": ",v_21181__$1], 0));

var G__21182 = seq__21155_21175;
var G__21183 = chunk__21156_21176;
var G__21184 = count__21157_21177;
var G__21185 = (i__21158_21178 + (1));
seq__21155_21175 = G__21182;
chunk__21156_21176 = G__21183;
count__21157_21177 = G__21184;
i__21158_21178 = G__21185;
continue;
} else {
var temp__5457__auto___21186__$1 = cljs.core.seq(seq__21155_21175);
if(temp__5457__auto___21186__$1){
var seq__21155_21187__$1 = temp__5457__auto___21186__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21155_21187__$1)){
var c__12674__auto___21188 = cljs.core.chunk_first(seq__21155_21187__$1);
var G__21189 = cljs.core.chunk_rest(seq__21155_21187__$1);
var G__21190 = c__12674__auto___21188;
var G__21191 = cljs.core.count(c__12674__auto___21188);
var G__21192 = (0);
seq__21155_21175 = G__21189;
chunk__21156_21176 = G__21190;
count__21157_21177 = G__21191;
i__21158_21178 = G__21192;
continue;
} else {
var vec__21162_21193 = cljs.core.first(seq__21155_21187__$1);
var k_21194__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21162_21193,(0),null);
var v_21195__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21162_21193,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_21194__$1),"\": ",v_21195__$1], 0));

var G__21196 = cljs.core.next(seq__21155_21187__$1);
var G__21197 = null;
var G__21198 = (0);
var G__21199 = (0);
seq__21155_21175 = G__21196;
chunk__21156_21176 = G__21197;
count__21157_21177 = G__21198;
i__21158_21178 = G__21199;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[",cljs.compiler.comma_sep(items),"]"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$record_DASH_value,(function (p__21200){
var map__21201 = p__21200;
var map__21201__$1 = ((((!((map__21201 == null)))?((((map__21201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21201):map__21201);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21201__$1,cljs.core.cst$kw$items);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21201__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21201__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21201__$1,cljs.core.cst$kw$env);
var env__20991__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns,".map__GT_",name,"(",items,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$constant,(function (p__21203){
var map__21204 = p__21203;
var map__21204__$1 = ((((!((map__21204 == null)))?((((map__21204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21204.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21204):map__21204);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21204__$1,cljs.core.cst$kw$form);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21204__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__20991__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__21206){
var map__21207 = p__21206;
var map__21207__$1 = ((((!((map__21207 == null)))?((((map__21207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21207.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21207):map__21207);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21207__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21207__$1,cljs.core.cst$kw$form);
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21207__$1,cljs.core.cst$kw$const_DASH_expr);
var or__11743__auto__ = (function (){var and__11731__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant);
if(and__11731__auto__){
var and__11731__auto____$1 = form;
if(cljs.core.truth_(and__11731__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__11731__auto____$1;
}
} else {
return and__11731__auto__;
}
})();
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
var and__11731__auto__ = !((const_expr == null));
if(and__11731__auto__){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return and__11731__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__21209){
var map__21210 = p__21209;
var map__21210__$1 = ((((!((map__21210 == null)))?((((map__21210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21210):map__21210);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21210__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21210__$1,cljs.core.cst$kw$form);
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21210__$1,cljs.core.cst$kw$const_DASH_expr);
var or__11743__auto__ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant)) && ((form === false) || ((form == null)));
if(or__11743__auto__){
return or__11743__auto__;
} else {
var and__11731__auto__ = !((const_expr == null));
if(and__11731__auto__){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return and__11731__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__11743__auto__ = (function (){var fexpr__21213 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null);
return (fexpr__21213.cljs$core$IFn$_invoke$arity$1 ? fexpr__21213.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__21213.call(null,tag));
})();
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$if,(function (p__21214){
var map__21215 = p__21214;
var map__21215__$1 = ((((!((map__21215 == null)))?((((map__21215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21215.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21215):map__21215);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21215__$1,cljs.core.cst$kw$test);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21215__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21215__$1,cljs.core.cst$kw$else);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21215__$1,cljs.core.cst$kw$env);
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21215__$1,cljs.core.cst$kw$unchecked);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__11743__auto__ = unchecked;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then], 0));
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([else$], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(cljs.core.truth_(",test,")){"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(",test,"){"], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,"} else {"], 0));

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([else$,"}"], 0));
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$case_STAR_,(function (p__21217){
var map__21218 = p__21217;
var map__21218__$1 = ((((!((map__21218 == null)))?((((map__21218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21218.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21218):map__21218);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21218__$1,cljs.core.cst$kw$v);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21218__$1,cljs.core.cst$kw$tests);
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21218__$1,cljs.core.cst$kw$thens);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21218__$1,cljs.core.cst$kw$default);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21218__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env),cljs.core.cst$kw$expr)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function(){"], 0));
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",gs,";"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["switch (",v,") {"], 0));

var seq__21220_21238 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__21221_21239 = null;
var count__21222_21240 = (0);
var i__21223_21241 = (0);
while(true){
if((i__21223_21241 < count__21222_21240)){
var vec__21224_21242 = chunk__21221_21239.cljs$core$IIndexed$_nth$arity$2(null,i__21223_21241);
var ts_21243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21224_21242,(0),null);
var then_21244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21224_21242,(1),null);
var seq__21227_21245 = cljs.core.seq(ts_21243);
var chunk__21228_21246 = null;
var count__21229_21247 = (0);
var i__21230_21248 = (0);
while(true){
if((i__21230_21248 < count__21229_21247)){
var test_21249 = chunk__21228_21246.cljs$core$IIndexed$_nth$arity$2(null,i__21230_21248);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_21249,":"], 0));

var G__21250 = seq__21227_21245;
var G__21251 = chunk__21228_21246;
var G__21252 = count__21229_21247;
var G__21253 = (i__21230_21248 + (1));
seq__21227_21245 = G__21250;
chunk__21228_21246 = G__21251;
count__21229_21247 = G__21252;
i__21230_21248 = G__21253;
continue;
} else {
var temp__5457__auto___21254 = cljs.core.seq(seq__21227_21245);
if(temp__5457__auto___21254){
var seq__21227_21255__$1 = temp__5457__auto___21254;
if(cljs.core.chunked_seq_QMARK_(seq__21227_21255__$1)){
var c__12674__auto___21256 = cljs.core.chunk_first(seq__21227_21255__$1);
var G__21257 = cljs.core.chunk_rest(seq__21227_21255__$1);
var G__21258 = c__12674__auto___21256;
var G__21259 = cljs.core.count(c__12674__auto___21256);
var G__21260 = (0);
seq__21227_21245 = G__21257;
chunk__21228_21246 = G__21258;
count__21229_21247 = G__21259;
i__21230_21248 = G__21260;
continue;
} else {
var test_21261 = cljs.core.first(seq__21227_21255__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_21261,":"], 0));

var G__21262 = cljs.core.next(seq__21227_21255__$1);
var G__21263 = null;
var G__21264 = (0);
var G__21265 = (0);
seq__21227_21245 = G__21262;
chunk__21228_21246 = G__21263;
count__21229_21247 = G__21264;
i__21230_21248 = G__21265;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_21244], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_21244], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

var G__21266 = seq__21220_21238;
var G__21267 = chunk__21221_21239;
var G__21268 = count__21222_21240;
var G__21269 = (i__21223_21241 + (1));
seq__21220_21238 = G__21266;
chunk__21221_21239 = G__21267;
count__21222_21240 = G__21268;
i__21223_21241 = G__21269;
continue;
} else {
var temp__5457__auto___21270 = cljs.core.seq(seq__21220_21238);
if(temp__5457__auto___21270){
var seq__21220_21271__$1 = temp__5457__auto___21270;
if(cljs.core.chunked_seq_QMARK_(seq__21220_21271__$1)){
var c__12674__auto___21272 = cljs.core.chunk_first(seq__21220_21271__$1);
var G__21273 = cljs.core.chunk_rest(seq__21220_21271__$1);
var G__21274 = c__12674__auto___21272;
var G__21275 = cljs.core.count(c__12674__auto___21272);
var G__21276 = (0);
seq__21220_21238 = G__21273;
chunk__21221_21239 = G__21274;
count__21222_21240 = G__21275;
i__21223_21241 = G__21276;
continue;
} else {
var vec__21231_21277 = cljs.core.first(seq__21220_21271__$1);
var ts_21278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21231_21277,(0),null);
var then_21279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21231_21277,(1),null);
var seq__21234_21280 = cljs.core.seq(ts_21278);
var chunk__21235_21281 = null;
var count__21236_21282 = (0);
var i__21237_21283 = (0);
while(true){
if((i__21237_21283 < count__21236_21282)){
var test_21284 = chunk__21235_21281.cljs$core$IIndexed$_nth$arity$2(null,i__21237_21283);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_21284,":"], 0));

var G__21285 = seq__21234_21280;
var G__21286 = chunk__21235_21281;
var G__21287 = count__21236_21282;
var G__21288 = (i__21237_21283 + (1));
seq__21234_21280 = G__21285;
chunk__21235_21281 = G__21286;
count__21236_21282 = G__21287;
i__21237_21283 = G__21288;
continue;
} else {
var temp__5457__auto___21289__$1 = cljs.core.seq(seq__21234_21280);
if(temp__5457__auto___21289__$1){
var seq__21234_21290__$1 = temp__5457__auto___21289__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21234_21290__$1)){
var c__12674__auto___21291 = cljs.core.chunk_first(seq__21234_21290__$1);
var G__21292 = cljs.core.chunk_rest(seq__21234_21290__$1);
var G__21293 = c__12674__auto___21291;
var G__21294 = cljs.core.count(c__12674__auto___21291);
var G__21295 = (0);
seq__21234_21280 = G__21292;
chunk__21235_21281 = G__21293;
count__21236_21282 = G__21294;
i__21237_21283 = G__21295;
continue;
} else {
var test_21296 = cljs.core.first(seq__21234_21290__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_21296,":"], 0));

var G__21297 = cljs.core.next(seq__21234_21290__$1);
var G__21298 = null;
var G__21299 = (0);
var G__21300 = (0);
seq__21234_21280 = G__21297;
chunk__21235_21281 = G__21298;
count__21236_21282 = G__21299;
i__21237_21283 = G__21300;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_21279], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_21279], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

var G__21301 = cljs.core.next(seq__21220_21271__$1);
var G__21302 = null;
var G__21303 = (0);
var G__21304 = (0);
seq__21220_21238 = G__21301;
chunk__21221_21239 = G__21302;
count__21222_21240 = G__21303;
i__21223_21241 = G__21304;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",default$], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",gs,";})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$throw,(function (p__21305){
var map__21306 = p__21305;
var map__21306__$1 = ((((!((map__21306 == null)))?((((map__21306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21306):map__21306);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21306__$1,cljs.core.cst$kw$throw);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21306__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function(){throw ",throw$,"})()"], 0));
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["throw ",throw$,";"], 0));
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21309 = env;
var G__21310 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__21309,G__21310) : cljs.compiler.resolve_type.call(null,G__21309,G__21310));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__21311 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21311,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21311,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__21311,fstr,rstr,ret_t,axstr){
return (function (p1__21308_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__21308_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__21308_SHARP_));
});})(idx,vec__21311,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__21314 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21314),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__21314;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21315 = env;
var G__21316 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__21315,G__21316) : cljs.compiler.resolve_type.call(null,G__21315,G__21316));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ts__$1,xs){
return (function (p1__21317_SHARP_){
return cljs.compiler.resolve_type(env,p1__21317_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__21318 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__21319 = cljs.core.seq(vec__21318);
var first__21320 = cljs.core.first(seq__21319);
var seq__21319__$1 = cljs.core.next(seq__21319);
var p = first__21320;
var first__21320__$1 = cljs.core.first(seq__21319__$1);
var seq__21319__$2 = cljs.core.next(seq__21319__$1);
var ts = first__21320__$1;
var first__21320__$2 = cljs.core.first(seq__21319__$2);
var seq__21319__$3 = cljs.core.next(seq__21319__$2);
var n = first__21320__$2;
var xs = seq__21319__$3;
if(cljs.core.truth_((function (){var and__11731__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__11731__auto__){
var and__11731__auto____$1 = ts;
if(cljs.core.truth_(and__11731__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__11731__auto____$1;
}
} else {
return and__11731__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__21321 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__21322 = cljs.core.seq(vec__21321);
var first__21323 = cljs.core.first(seq__21322);
var seq__21322__$1 = cljs.core.next(seq__21322);
var p = first__21323;
var first__21323__$1 = cljs.core.first(seq__21322__$1);
var seq__21322__$2 = cljs.core.next(seq__21322__$1);
var ts = first__21323__$1;
var xs = seq__21322__$2;
if(cljs.core.truth_((function (){var and__11731__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__11731__auto__){
var and__11731__auto____$1 = ts;
if(cljs.core.truth_(and__11731__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__11731__auto____$1;
}
} else {
return and__11731__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__21325 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$closure_DASH_warnings,cljs.core.cst$kw$check_DASH_types], null));
var fexpr__21324 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$warning,null,cljs.core.cst$kw$error,null], null), null);
return (fexpr__21324.cljs$core$IFn$_invoke$arity$1 ? fexpr__21324.cljs$core$IFn$_invoke$arity$1(G__21325) : fexpr__21324.call(null,G__21325));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__21328 = arguments.length;
switch (G__21328) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__21336 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__21326_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__21326_SHARP_);
} else {
return p1__21326_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__21337 = cljs.core.seq(vec__21336);
var first__21338 = cljs.core.first(seq__21337);
var seq__21337__$1 = cljs.core.next(seq__21337);
var x = first__21338;
var ys = seq__21337__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(x,"*/","* /")], 0));

var seq__21339 = cljs.core.seq(ys);
var chunk__21340 = null;
var count__21341 = (0);
var i__21342 = (0);
while(true){
if((i__21342 < count__21341)){
var next_line = chunk__21340.cljs$core$IIndexed$_nth$arity$2(null,i__21342);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__21348 = seq__21339;
var G__21349 = chunk__21340;
var G__21350 = count__21341;
var G__21351 = (i__21342 + (1));
seq__21339 = G__21348;
chunk__21340 = G__21349;
count__21341 = G__21350;
i__21342 = G__21351;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21339);
if(temp__5457__auto__){
var seq__21339__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21339__$1)){
var c__12674__auto__ = cljs.core.chunk_first(seq__21339__$1);
var G__21352 = cljs.core.chunk_rest(seq__21339__$1);
var G__21353 = c__12674__auto__;
var G__21354 = cljs.core.count(c__12674__auto__);
var G__21355 = (0);
seq__21339 = G__21352;
chunk__21340 = G__21353;
count__21341 = G__21354;
i__21342 = G__21355;
continue;
} else {
var next_line = cljs.core.first(seq__21339__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__21356 = cljs.core.next(seq__21339__$1);
var G__21357 = null;
var G__21358 = (0);
var G__21359 = (0);
seq__21339 = G__21356;
chunk__21340 = G__21357;
count__21341 = G__21358;
i__21342 = G__21359;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

var seq__21343_21360 = cljs.core.seq(docs__$2);
var chunk__21344_21361 = null;
var count__21345_21362 = (0);
var i__21346_21363 = (0);
while(true){
if((i__21346_21363 < count__21345_21362)){
var e_21364 = chunk__21344_21361.cljs$core$IIndexed$_nth$arity$2(null,i__21346_21363);
if(cljs.core.truth_(e_21364)){
print_comment_lines(e_21364);
} else {
}

var G__21365 = seq__21343_21360;
var G__21366 = chunk__21344_21361;
var G__21367 = count__21345_21362;
var G__21368 = (i__21346_21363 + (1));
seq__21343_21360 = G__21365;
chunk__21344_21361 = G__21366;
count__21345_21362 = G__21367;
i__21346_21363 = G__21368;
continue;
} else {
var temp__5457__auto___21369 = cljs.core.seq(seq__21343_21360);
if(temp__5457__auto___21369){
var seq__21343_21370__$1 = temp__5457__auto___21369;
if(cljs.core.chunked_seq_QMARK_(seq__21343_21370__$1)){
var c__12674__auto___21371 = cljs.core.chunk_first(seq__21343_21370__$1);
var G__21372 = cljs.core.chunk_rest(seq__21343_21370__$1);
var G__21373 = c__12674__auto___21371;
var G__21374 = cljs.core.count(c__12674__auto___21371);
var G__21375 = (0);
seq__21343_21360 = G__21372;
chunk__21344_21361 = G__21373;
count__21345_21362 = G__21374;
i__21346_21363 = G__21375;
continue;
} else {
var e_21376 = cljs.core.first(seq__21343_21370__$1);
if(cljs.core.truth_(e_21376)){
print_comment_lines(e_21376);
} else {
}

var G__21377 = cljs.core.next(seq__21343_21370__$1);
var G__21378 = null;
var G__21379 = (0);
var G__21380 = (0);
seq__21343_21360 = G__21377;
chunk__21344_21361 = G__21378;
count__21345_21362 = G__21379;
i__21346_21363 = G__21380;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" */"], 0));
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$options);
var and__11731__auto__ = cljs.core.some(((function (opts){
return (function (p1__21382_SHARP_){
return goog.string.startsWith(p1__21382_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__11731__auto__)){
var and__11731__auto____$1 = opts;
if(cljs.core.truth_(and__11731__auto____$1)){
var and__11731__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$optimizations.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$none);
if(and__11731__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$closure_DASH_defines,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_(define))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return and__11731__auto____$2;
}
} else {
return and__11731__auto____$1;
}
} else {
return and__11731__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$def,(function (p__21383){
var map__21384 = p__21383;
var map__21384__$1 = ((((!((map__21384 == null)))?((((map__21384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21384):map__21384);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21384__$1,cljs.core.cst$kw$name);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21384__$1,cljs.core.cst$kw$var);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21384__$1,cljs.core.cst$kw$init);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21384__$1,cljs.core.cst$kw$env);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21384__$1,cljs.core.cst$kw$doc);
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21384__$1,cljs.core.cst$kw$jsdoc);
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21384__$1,cljs.core.cst$kw$export);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21384__$1,cljs.core.cst$kw$test);
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21384__$1,cljs.core.cst$kw$var_DASH_ast);
if(cljs.core.truth_((function (){var or__11743__auto__ = init;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,cljs.core.cst$kw$jsdoc.cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ("], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$], 0));

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",(function (){var temp__5455__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5455__auto__)){
var define = temp__5455__auto__;
return define;
} else {
return init;
}
})()], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["; return ("], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$var_DASH_special,cljs.core.cst$kw$env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr)], null),var_ast], 0))], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");})()"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");"], 0));
} else {
}

if(cljs.core.truth_((function (){var and__11731__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__11731__auto__){
return test;
} else {
return and__11731__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$,".cljs$lang$test = ",test,";"], 0));
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__21386){
var map__21387 = p__21386;
var map__21387__$1 = ((((!((map__21387 == null)))?((((map__21387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21387):map__21387);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21387__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21387__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21387__$1,cljs.core.cst$kw$env);
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (",arglist,"){"], 0));

var seq__21389_21407 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__21390_21408 = null;
var count__21391_21409 = (0);
var i__21392_21410 = (0);
while(true){
if((i__21392_21410 < count__21391_21409)){
var vec__21393_21411 = chunk__21390_21408.cljs$core$IIndexed$_nth$arity$2(null,i__21392_21410);
var i_21412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21393_21411,(0),null);
var param_21413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21393_21411,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_21413);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));

var G__21414 = seq__21389_21407;
var G__21415 = chunk__21390_21408;
var G__21416 = count__21391_21409;
var G__21417 = (i__21392_21410 + (1));
seq__21389_21407 = G__21414;
chunk__21390_21408 = G__21415;
count__21391_21409 = G__21416;
i__21392_21410 = G__21417;
continue;
} else {
var temp__5457__auto___21418 = cljs.core.seq(seq__21389_21407);
if(temp__5457__auto___21418){
var seq__21389_21419__$1 = temp__5457__auto___21418;
if(cljs.core.chunked_seq_QMARK_(seq__21389_21419__$1)){
var c__12674__auto___21420 = cljs.core.chunk_first(seq__21389_21419__$1);
var G__21421 = cljs.core.chunk_rest(seq__21389_21419__$1);
var G__21422 = c__12674__auto___21420;
var G__21423 = cljs.core.count(c__12674__auto___21420);
var G__21424 = (0);
seq__21389_21407 = G__21421;
chunk__21390_21408 = G__21422;
count__21391_21409 = G__21423;
i__21392_21410 = G__21424;
continue;
} else {
var vec__21396_21425 = cljs.core.first(seq__21389_21419__$1);
var i_21426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21396_21425,(0),null);
var param_21427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21396_21425,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_21427);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));

var G__21428 = cljs.core.next(seq__21389_21419__$1);
var G__21429 = null;
var G__21430 = (0);
var G__21431 = (0);
seq__21389_21407 = G__21428;
chunk__21390_21408 = G__21429;
count__21391_21409 = G__21430;
i__21392_21410 = G__21431;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.rest(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name,"("], 0));

var seq__21399_21432 = cljs.core.seq(params);
var chunk__21400_21433 = null;
var count__21401_21434 = (0);
var i__21402_21435 = (0);
while(true){
if((i__21402_21435 < count__21401_21434)){
var param_21436 = chunk__21400_21433.cljs$core$IIndexed$_nth$arity$2(null,i__21402_21435);
cljs.compiler.emit(param_21436);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21436,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21437 = seq__21399_21432;
var G__21438 = chunk__21400_21433;
var G__21439 = count__21401_21434;
var G__21440 = (i__21402_21435 + (1));
seq__21399_21432 = G__21437;
chunk__21400_21433 = G__21438;
count__21401_21434 = G__21439;
i__21402_21435 = G__21440;
continue;
} else {
var temp__5457__auto___21441 = cljs.core.seq(seq__21399_21432);
if(temp__5457__auto___21441){
var seq__21399_21442__$1 = temp__5457__auto___21441;
if(cljs.core.chunked_seq_QMARK_(seq__21399_21442__$1)){
var c__12674__auto___21443 = cljs.core.chunk_first(seq__21399_21442__$1);
var G__21444 = cljs.core.chunk_rest(seq__21399_21442__$1);
var G__21445 = c__12674__auto___21443;
var G__21446 = cljs.core.count(c__12674__auto___21443);
var G__21447 = (0);
seq__21399_21432 = G__21444;
chunk__21400_21433 = G__21445;
count__21401_21434 = G__21446;
i__21402_21435 = G__21447;
continue;
} else {
var param_21448 = cljs.core.first(seq__21399_21442__$1);
cljs.compiler.emit(param_21448);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21448,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21449 = cljs.core.next(seq__21399_21442__$1);
var G__21450 = null;
var G__21451 = (0);
var G__21452 = (0);
seq__21399_21432 = G__21449;
chunk__21400_21433 = G__21450;
count__21401_21434 = G__21451;
i__21402_21435 = G__21452;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.seq(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name,"("], 0));

var seq__21403_21453 = cljs.core.seq(params);
var chunk__21404_21454 = null;
var count__21405_21455 = (0);
var i__21406_21456 = (0);
while(true){
if((i__21406_21456 < count__21405_21455)){
var param_21457 = chunk__21404_21454.cljs$core$IIndexed$_nth$arity$2(null,i__21406_21456);
cljs.compiler.emit(param_21457);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21457,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21458 = seq__21403_21453;
var G__21459 = chunk__21404_21454;
var G__21460 = count__21405_21455;
var G__21461 = (i__21406_21456 + (1));
seq__21403_21453 = G__21458;
chunk__21404_21454 = G__21459;
count__21405_21455 = G__21460;
i__21406_21456 = G__21461;
continue;
} else {
var temp__5457__auto___21462 = cljs.core.seq(seq__21403_21453);
if(temp__5457__auto___21462){
var seq__21403_21463__$1 = temp__5457__auto___21462;
if(cljs.core.chunked_seq_QMARK_(seq__21403_21463__$1)){
var c__12674__auto___21464 = cljs.core.chunk_first(seq__21403_21463__$1);
var G__21465 = cljs.core.chunk_rest(seq__21403_21463__$1);
var G__21466 = c__12674__auto___21464;
var G__21467 = cljs.core.count(c__12674__auto___21464);
var G__21468 = (0);
seq__21403_21453 = G__21465;
chunk__21404_21454 = G__21466;
count__21405_21455 = G__21467;
i__21406_21456 = G__21468;
continue;
} else {
var param_21469 = cljs.core.first(seq__21403_21463__$1);
cljs.compiler.emit(param_21469);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21469,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21470 = cljs.core.next(seq__21403_21463__$1);
var G__21471 = null;
var G__21472 = (0);
var G__21473 = (0);
seq__21403_21453 = G__21470;
chunk__21404_21454 = G__21471;
count__21405_21455 = G__21472;
i__21406_21456 = G__21473;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__21474 = cljs.core.seq(params);
var chunk__21475 = null;
var count__21476 = (0);
var i__21477 = (0);
while(true){
if((i__21477 < count__21476)){
var param = chunk__21475.cljs$core$IIndexed$_nth$arity$2(null,i__21477);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21478 = seq__21474;
var G__21479 = chunk__21475;
var G__21480 = count__21476;
var G__21481 = (i__21477 + (1));
seq__21474 = G__21478;
chunk__21475 = G__21479;
count__21476 = G__21480;
i__21477 = G__21481;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21474);
if(temp__5457__auto__){
var seq__21474__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21474__$1)){
var c__12674__auto__ = cljs.core.chunk_first(seq__21474__$1);
var G__21482 = cljs.core.chunk_rest(seq__21474__$1);
var G__21483 = c__12674__auto__;
var G__21484 = cljs.core.count(c__12674__auto__);
var G__21485 = (0);
seq__21474 = G__21482;
chunk__21475 = G__21483;
count__21476 = G__21484;
i__21477 = G__21485;
continue;
} else {
var param = cljs.core.first(seq__21474__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21486 = cljs.core.next(seq__21474__$1);
var G__21487 = null;
var G__21488 = (0);
var G__21489 = (0);
seq__21474 = G__21486;
chunk__21475 = G__21487;
count__21476 = G__21488;
i__21477 = G__21489;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__21490){
var map__21491 = p__21490;
var map__21491__$1 = ((((!((map__21491 == null)))?((((map__21491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21491):map__21491);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21491__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21491__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21491__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21491__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21491__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21491__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21491__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21491__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__20991__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"("], 0));

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__21493){
var map__21494 = p__21493;
var map__21494__$1 = ((((!((map__21494 == null)))?((((map__21494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21494):map__21494);
var f = map__21494__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21494__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21494__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21494__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21494__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21494__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21494__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21494__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21494__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__20991__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

var name_21504__$1 = (function (){var or__11743__auto__ = name;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_21505 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_21504__$1);
var delegate_name_21506 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_21505),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",delegate_name_21506," = function ("], 0));

var seq__21496_21507 = cljs.core.seq(params);
var chunk__21497_21508 = null;
var count__21498_21509 = (0);
var i__21499_21510 = (0);
while(true){
if((i__21499_21510 < count__21498_21509)){
var param_21511 = chunk__21497_21508.cljs$core$IIndexed$_nth$arity$2(null,i__21499_21510);
cljs.compiler.emit(param_21511);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21511,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21512 = seq__21496_21507;
var G__21513 = chunk__21497_21508;
var G__21514 = count__21498_21509;
var G__21515 = (i__21499_21510 + (1));
seq__21496_21507 = G__21512;
chunk__21497_21508 = G__21513;
count__21498_21509 = G__21514;
i__21499_21510 = G__21515;
continue;
} else {
var temp__5457__auto___21516 = cljs.core.seq(seq__21496_21507);
if(temp__5457__auto___21516){
var seq__21496_21517__$1 = temp__5457__auto___21516;
if(cljs.core.chunked_seq_QMARK_(seq__21496_21517__$1)){
var c__12674__auto___21518 = cljs.core.chunk_first(seq__21496_21517__$1);
var G__21519 = cljs.core.chunk_rest(seq__21496_21517__$1);
var G__21520 = c__12674__auto___21518;
var G__21521 = cljs.core.count(c__12674__auto___21518);
var G__21522 = (0);
seq__21496_21507 = G__21519;
chunk__21497_21508 = G__21520;
count__21498_21509 = G__21521;
i__21499_21510 = G__21522;
continue;
} else {
var param_21523 = cljs.core.first(seq__21496_21517__$1);
cljs.compiler.emit(param_21523);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21523,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21524 = cljs.core.next(seq__21496_21517__$1);
var G__21525 = null;
var G__21526 = (0);
var G__21527 = (0);
seq__21496_21507 = G__21524;
chunk__21497_21508 = G__21525;
count__21498_21509 = G__21526;
i__21499_21510 = G__21527;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_21505," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_21528 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_21528,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name_21506,".call(this,"], 0));

var seq__21500_21529 = cljs.core.seq(params);
var chunk__21501_21530 = null;
var count__21502_21531 = (0);
var i__21503_21532 = (0);
while(true){
if((i__21503_21532 < count__21502_21531)){
var param_21533 = chunk__21501_21530.cljs$core$IIndexed$_nth$arity$2(null,i__21503_21532);
cljs.compiler.emit(param_21533);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21533,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21534 = seq__21500_21529;
var G__21535 = chunk__21501_21530;
var G__21536 = count__21502_21531;
var G__21537 = (i__21503_21532 + (1));
seq__21500_21529 = G__21534;
chunk__21501_21530 = G__21535;
count__21502_21531 = G__21536;
i__21503_21532 = G__21537;
continue;
} else {
var temp__5457__auto___21538 = cljs.core.seq(seq__21500_21529);
if(temp__5457__auto___21538){
var seq__21500_21539__$1 = temp__5457__auto___21538;
if(cljs.core.chunked_seq_QMARK_(seq__21500_21539__$1)){
var c__12674__auto___21540 = cljs.core.chunk_first(seq__21500_21539__$1);
var G__21541 = cljs.core.chunk_rest(seq__21500_21539__$1);
var G__21542 = c__12674__auto___21540;
var G__21543 = cljs.core.count(c__12674__auto___21540);
var G__21544 = (0);
seq__21500_21529 = G__21541;
chunk__21501_21530 = G__21542;
count__21502_21531 = G__21543;
i__21503_21532 = G__21544;
continue;
} else {
var param_21545 = cljs.core.first(seq__21500_21539__$1);
cljs.compiler.emit(param_21545);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21545,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21546 = cljs.core.next(seq__21500_21539__$1);
var G__21547 = null;
var G__21548 = (0);
var G__21549 = (0);
seq__21500_21529 = G__21546;
chunk__21501_21530 = G__21547;
count__21502_21531 = G__21548;
i__21503_21532 = G__21549;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21505,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21505,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$name,name_21504__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21505,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_21506,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_21505,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn,(function (p__21553){
var map__21554 = p__21553;
var map__21554__$1 = ((((!((map__21554 == null)))?((((map__21554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21554.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21554):map__21554);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21554__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21554__$1,cljs.core.cst$kw$env);
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21554__$1,cljs.core.cst$kw$methods);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21554__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21554__$1,cljs.core.cst$kw$variadic);
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21554__$1,cljs.core.cst$kw$recur_DASH_frames);
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21554__$1,cljs.core.cst$kw$loop_DASH_lets);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__21554,map__21554__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__21550_SHARP_){
var and__11731__auto__ = p1__21550_SHARP_;
if(cljs.core.truth_(and__11731__auto__)){
return cljs.core.deref(cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(p1__21550_SHARP_));
} else {
return and__11731__auto__;
}
});})(map__21554,map__21554__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
}
} else {
var name_21589__$1 = (function (){var or__11743__auto__ = name;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_21590 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_21589__$1);
var maxparams_21591 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,methods$));
var mmap_21592 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_21589__$1,mname_21590,maxparams_21591,loop_locals,map__21554,map__21554__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_21590),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_21589__$1,mname_21590,maxparams_21591,loop_locals,map__21554,map__21554__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_21593 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_21589__$1,mname_21590,maxparams_21591,mmap_21592,loop_locals,map__21554,map__21554__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__21551_SHARP_){
return cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__21551_SHARP_)));
});})(name_21589__$1,mname_21590,maxparams_21591,mmap_21592,loop_locals,map__21554,map__21554__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_21592));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_21590," = null;"], 0));

var seq__21556_21594 = cljs.core.seq(ms_21593);
var chunk__21557_21595 = null;
var count__21558_21596 = (0);
var i__21559_21597 = (0);
while(true){
if((i__21559_21597 < count__21558_21596)){
var vec__21560_21598 = chunk__21557_21595.cljs$core$IIndexed$_nth$arity$2(null,i__21559_21597);
var n_21599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21560_21598,(0),null);
var meth_21600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21560_21598,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_21599," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_21600))){
cljs.compiler.emit_variadic_fn_method(meth_21600);
} else {
cljs.compiler.emit_fn_method(meth_21600);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

var G__21601 = seq__21556_21594;
var G__21602 = chunk__21557_21595;
var G__21603 = count__21558_21596;
var G__21604 = (i__21559_21597 + (1));
seq__21556_21594 = G__21601;
chunk__21557_21595 = G__21602;
count__21558_21596 = G__21603;
i__21559_21597 = G__21604;
continue;
} else {
var temp__5457__auto___21605 = cljs.core.seq(seq__21556_21594);
if(temp__5457__auto___21605){
var seq__21556_21606__$1 = temp__5457__auto___21605;
if(cljs.core.chunked_seq_QMARK_(seq__21556_21606__$1)){
var c__12674__auto___21607 = cljs.core.chunk_first(seq__21556_21606__$1);
var G__21608 = cljs.core.chunk_rest(seq__21556_21606__$1);
var G__21609 = c__12674__auto___21607;
var G__21610 = cljs.core.count(c__12674__auto___21607);
var G__21611 = (0);
seq__21556_21594 = G__21608;
chunk__21557_21595 = G__21609;
count__21558_21596 = G__21610;
i__21559_21597 = G__21611;
continue;
} else {
var vec__21563_21612 = cljs.core.first(seq__21556_21606__$1);
var n_21613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21563_21612,(0),null);
var meth_21614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21563_21612,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_21613," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_21614))){
cljs.compiler.emit_variadic_fn_method(meth_21614);
} else {
cljs.compiler.emit_fn_method(meth_21614);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

var G__21615 = cljs.core.next(seq__21556_21606__$1);
var G__21616 = null;
var G__21617 = (0);
var G__21618 = (0);
seq__21556_21594 = G__21615;
chunk__21557_21595 = G__21616;
count__21558_21596 = G__21617;
i__21559_21597 = G__21618;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21590," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_21591),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):maxparams_21591)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_21591));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["switch(arguments.length){"], 0));

var seq__21566_21619 = cljs.core.seq(ms_21593);
var chunk__21567_21620 = null;
var count__21568_21621 = (0);
var i__21569_21622 = (0);
while(true){
if((i__21569_21622 < count__21568_21621)){
var vec__21570_21623 = chunk__21567_21620.cljs$core$IIndexed$_nth$arity$2(null,i__21569_21622);
var n_21624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21570_21623,(0),null);
var meth_21625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21570_21623,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_21625))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_21626 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_21626," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_21627 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_21626," = new cljs.core.IndexedSeq(",a_21627,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_21624,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_21591)),(((cljs.core.count(maxparams_21591) > (1)))?", ":null),restarg_21626,");"], 0));
} else {
var pcnt_21628 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_21625));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_21628,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_21624,".call(this",(((pcnt_21628 === (0)))?null:cljs.core._conj((function (){var x__12697__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_21628,maxparams_21591));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),",")),");"], 0));
}

var G__21629 = seq__21566_21619;
var G__21630 = chunk__21567_21620;
var G__21631 = count__21568_21621;
var G__21632 = (i__21569_21622 + (1));
seq__21566_21619 = G__21629;
chunk__21567_21620 = G__21630;
count__21568_21621 = G__21631;
i__21569_21622 = G__21632;
continue;
} else {
var temp__5457__auto___21633 = cljs.core.seq(seq__21566_21619);
if(temp__5457__auto___21633){
var seq__21566_21634__$1 = temp__5457__auto___21633;
if(cljs.core.chunked_seq_QMARK_(seq__21566_21634__$1)){
var c__12674__auto___21635 = cljs.core.chunk_first(seq__21566_21634__$1);
var G__21636 = cljs.core.chunk_rest(seq__21566_21634__$1);
var G__21637 = c__12674__auto___21635;
var G__21638 = cljs.core.count(c__12674__auto___21635);
var G__21639 = (0);
seq__21566_21619 = G__21636;
chunk__21567_21620 = G__21637;
count__21568_21621 = G__21638;
i__21569_21622 = G__21639;
continue;
} else {
var vec__21573_21640 = cljs.core.first(seq__21566_21634__$1);
var n_21641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21573_21640,(0),null);
var meth_21642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21573_21640,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_21642))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_21643 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_21643," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_21644 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_21643," = new cljs.core.IndexedSeq(",a_21644,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_21641,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_21591)),(((cljs.core.count(maxparams_21591) > (1)))?", ":null),restarg_21643,");"], 0));
} else {
var pcnt_21645 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_21642));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_21645,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_21641,".call(this",(((pcnt_21645 === (0)))?null:cljs.core._conj((function (){var x__12697__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_21645,maxparams_21591));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),",")),");"], 0));
}

var G__21646 = cljs.core.next(seq__21566_21634__$1);
var G__21647 = null;
var G__21648 = (0);
var G__21649 = (0);
seq__21566_21619 = G__21646;
chunk__21567_21620 = G__21647;
count__21568_21621 = G__21648;
i__21569_21622 = G__21649;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["throw(new Error('Invalid arity: ' + (arguments.length - 1)));"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21590,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21590,".cljs$lang$applyTo = ",cljs.core.some(((function (name_21589__$1,mname_21590,maxparams_21591,mmap_21592,ms_21593,loop_locals,map__21554,map__21554__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__21552_SHARP_){
var vec__21576 = p1__21552_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21576,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21576,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_21589__$1,mname_21590,maxparams_21591,mmap_21592,ms_21593,loop_locals,map__21554,map__21554__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_21593),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__21579_21650 = cljs.core.seq(ms_21593);
var chunk__21580_21651 = null;
var count__21581_21652 = (0);
var i__21582_21653 = (0);
while(true){
if((i__21582_21653 < count__21581_21652)){
var vec__21583_21654 = chunk__21580_21651.cljs$core$IIndexed$_nth$arity$2(null,i__21582_21653);
var n_21655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21583_21654,(0),null);
var meth_21656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21583_21654,(1),null);
var c_21657 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_21656));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_21656))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21590,".cljs$core$IFn$_invoke$arity$variadic = ",n_21655,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21590,".cljs$core$IFn$_invoke$arity$",c_21657," = ",n_21655,";"], 0));
}

var G__21658 = seq__21579_21650;
var G__21659 = chunk__21580_21651;
var G__21660 = count__21581_21652;
var G__21661 = (i__21582_21653 + (1));
seq__21579_21650 = G__21658;
chunk__21580_21651 = G__21659;
count__21581_21652 = G__21660;
i__21582_21653 = G__21661;
continue;
} else {
var temp__5457__auto___21662 = cljs.core.seq(seq__21579_21650);
if(temp__5457__auto___21662){
var seq__21579_21663__$1 = temp__5457__auto___21662;
if(cljs.core.chunked_seq_QMARK_(seq__21579_21663__$1)){
var c__12674__auto___21664 = cljs.core.chunk_first(seq__21579_21663__$1);
var G__21665 = cljs.core.chunk_rest(seq__21579_21663__$1);
var G__21666 = c__12674__auto___21664;
var G__21667 = cljs.core.count(c__12674__auto___21664);
var G__21668 = (0);
seq__21579_21650 = G__21665;
chunk__21580_21651 = G__21666;
count__21581_21652 = G__21667;
i__21582_21653 = G__21668;
continue;
} else {
var vec__21586_21669 = cljs.core.first(seq__21579_21663__$1);
var n_21670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21586_21669,(0),null);
var meth_21671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21586_21669,(1),null);
var c_21672 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_21671));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_21671))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21590,".cljs$core$IFn$_invoke$arity$variadic = ",n_21670,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21590,".cljs$core$IFn$_invoke$arity$",c_21672," = ",n_21670,";"], 0));
}

var G__21673 = cljs.core.next(seq__21579_21663__$1);
var G__21674 = null;
var G__21675 = (0);
var G__21676 = (0);
seq__21579_21650 = G__21673;
chunk__21580_21651 = G__21674;
count__21581_21652 = G__21675;
i__21582_21653 = G__21676;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_21590,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$do,(function (p__21677){
var map__21678 = p__21677;
var map__21678__$1 = ((((!((map__21678 == null)))?((((map__21678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21678.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21678):map__21678);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21678__$1,cljs.core.cst$kw$statements);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21678__$1,cljs.core.cst$kw$ret);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21678__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__11731__auto__ = statements;
if(cljs.core.truth_(and__11731__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__11731__auto__;
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var seq__21680_21684 = cljs.core.seq(statements);
var chunk__21681_21685 = null;
var count__21682_21686 = (0);
var i__21683_21687 = (0);
while(true){
if((i__21683_21687 < count__21682_21686)){
var s_21688 = chunk__21681_21685.cljs$core$IIndexed$_nth$arity$2(null,i__21683_21687);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_21688], 0));

var G__21689 = seq__21680_21684;
var G__21690 = chunk__21681_21685;
var G__21691 = count__21682_21686;
var G__21692 = (i__21683_21687 + (1));
seq__21680_21684 = G__21689;
chunk__21681_21685 = G__21690;
count__21682_21686 = G__21691;
i__21683_21687 = G__21692;
continue;
} else {
var temp__5457__auto___21693 = cljs.core.seq(seq__21680_21684);
if(temp__5457__auto___21693){
var seq__21680_21694__$1 = temp__5457__auto___21693;
if(cljs.core.chunked_seq_QMARK_(seq__21680_21694__$1)){
var c__12674__auto___21695 = cljs.core.chunk_first(seq__21680_21694__$1);
var G__21696 = cljs.core.chunk_rest(seq__21680_21694__$1);
var G__21697 = c__12674__auto___21695;
var G__21698 = cljs.core.count(c__12674__auto___21695);
var G__21699 = (0);
seq__21680_21684 = G__21696;
chunk__21681_21685 = G__21697;
count__21682_21686 = G__21698;
i__21683_21687 = G__21699;
continue;
} else {
var s_21700 = cljs.core.first(seq__21680_21694__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_21700], 0));

var G__21701 = cljs.core.next(seq__21680_21694__$1);
var G__21702 = null;
var G__21703 = (0);
var G__21704 = (0);
seq__21680_21684 = G__21701;
chunk__21681_21685 = G__21702;
count__21682_21686 = G__21703;
i__21683_21687 = G__21704;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(cljs.core.truth_((function (){var and__11731__auto__ = statements;
if(cljs.core.truth_(and__11731__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__11731__auto__;
}
})())){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$try,(function (p__21705){
var map__21706 = p__21705;
var map__21706__$1 = ((((!((map__21706 == null)))?((((map__21706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21706):map__21706);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21706__$1,cljs.core.cst$kw$env);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21706__$1,cljs.core.cst$kw$try);
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21706__$1,cljs.core.cst$kw$catch);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21706__$1,cljs.core.cst$kw$name);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21706__$1,cljs.core.cst$kw$finally);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__11743__auto__ = name;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["try{",try$,"}"], 0));

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}"], 0));
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constant,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :constant (:op finally))"].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["finally {",finally$,"}"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([try$], 0));
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__21708,is_loop){
var map__21709 = p__21708;
var map__21709__$1 = ((((!((map__21709 == null)))?((((map__21709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21709):map__21709);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21709__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21709__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21709__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_21711_21720 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_21711_21720,context,map__21709,map__21709__$1,bindings,expr,env){
return (function (binding){
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_21711_21720,context,map__21709,map__21709__$1,bindings,expr,env))
,bindings):null));

try{var seq__21712_21721 = cljs.core.seq(bindings);
var chunk__21713_21722 = null;
var count__21714_21723 = (0);
var i__21715_21724 = (0);
while(true){
if((i__21715_21724 < count__21714_21723)){
var map__21716_21725 = chunk__21713_21722.cljs$core$IIndexed$_nth$arity$2(null,i__21715_21724);
var map__21716_21726__$1 = ((((!((map__21716_21725 == null)))?((((map__21716_21725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21716_21725.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21716_21725):map__21716_21725);
var binding_21727 = map__21716_21726__$1;
var init_21728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21716_21726__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_21727);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_21728,";"], 0));

var G__21729 = seq__21712_21721;
var G__21730 = chunk__21713_21722;
var G__21731 = count__21714_21723;
var G__21732 = (i__21715_21724 + (1));
seq__21712_21721 = G__21729;
chunk__21713_21722 = G__21730;
count__21714_21723 = G__21731;
i__21715_21724 = G__21732;
continue;
} else {
var temp__5457__auto___21733 = cljs.core.seq(seq__21712_21721);
if(temp__5457__auto___21733){
var seq__21712_21734__$1 = temp__5457__auto___21733;
if(cljs.core.chunked_seq_QMARK_(seq__21712_21734__$1)){
var c__12674__auto___21735 = cljs.core.chunk_first(seq__21712_21734__$1);
var G__21736 = cljs.core.chunk_rest(seq__21712_21734__$1);
var G__21737 = c__12674__auto___21735;
var G__21738 = cljs.core.count(c__12674__auto___21735);
var G__21739 = (0);
seq__21712_21721 = G__21736;
chunk__21713_21722 = G__21737;
count__21714_21723 = G__21738;
i__21715_21724 = G__21739;
continue;
} else {
var map__21718_21740 = cljs.core.first(seq__21712_21734__$1);
var map__21718_21741__$1 = ((((!((map__21718_21740 == null)))?((((map__21718_21740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21718_21740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21718_21740):map__21718_21740);
var binding_21742 = map__21718_21741__$1;
var init_21743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21718_21741__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_21742);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_21743,";"], 0));

var G__21744 = cljs.core.next(seq__21712_21734__$1);
var G__21745 = null;
var G__21746 = (0);
var G__21747 = (0);
seq__21712_21721 = G__21744;
chunk__21713_21722 = G__21745;
count__21714_21723 = G__21746;
i__21715_21724 = G__21747;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_21711_21720;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$let,(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$loop,(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$recur,(function (p__21748){
var map__21749 = p__21748;
var map__21749__$1 = ((((!((map__21749 == null)))?((((map__21749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21749):map__21749);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21749__$1,cljs.core.cst$kw$frame);
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21749__$1,cljs.core.cst$kw$exprs);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21749__$1,cljs.core.cst$kw$env);
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame);
var n__12788__auto___21751 = cljs.core.count(exprs);
var i_21752 = (0);
while(true){
if((i_21752 < n__12788__auto___21751)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_21752) : temps.call(null,i_21752))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_21752) : exprs.call(null,i_21752)),";"], 0));

var G__21753 = (i_21752 + (1));
i_21752 = G__21753;
continue;
} else {
}
break;
}

var n__12788__auto___21754 = cljs.core.count(exprs);
var i_21755 = (0);
while(true){
if((i_21755 < n__12788__auto___21754)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_21755) : params.call(null,i_21755)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_21755) : temps.call(null,i_21755)),";"], 0));

var G__21756 = (i_21755 + (1));
i_21755 = G__21756;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$letfn,(function (p__21757){
var map__21758 = p__21757;
var map__21758__$1 = ((((!((map__21758 == null)))?((((map__21758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21758):map__21758);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21758__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21758__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21758__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var seq__21760_21768 = cljs.core.seq(bindings);
var chunk__21761_21769 = null;
var count__21762_21770 = (0);
var i__21763_21771 = (0);
while(true){
if((i__21763_21771 < count__21762_21770)){
var map__21764_21772 = chunk__21761_21769.cljs$core$IIndexed$_nth$arity$2(null,i__21763_21771);
var map__21764_21773__$1 = ((((!((map__21764_21772 == null)))?((((map__21764_21772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21764_21772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21764_21772):map__21764_21772);
var binding_21774 = map__21764_21773__$1;
var init_21775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21764_21773__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_21774)," = ",init_21775,";"], 0));

var G__21776 = seq__21760_21768;
var G__21777 = chunk__21761_21769;
var G__21778 = count__21762_21770;
var G__21779 = (i__21763_21771 + (1));
seq__21760_21768 = G__21776;
chunk__21761_21769 = G__21777;
count__21762_21770 = G__21778;
i__21763_21771 = G__21779;
continue;
} else {
var temp__5457__auto___21780 = cljs.core.seq(seq__21760_21768);
if(temp__5457__auto___21780){
var seq__21760_21781__$1 = temp__5457__auto___21780;
if(cljs.core.chunked_seq_QMARK_(seq__21760_21781__$1)){
var c__12674__auto___21782 = cljs.core.chunk_first(seq__21760_21781__$1);
var G__21783 = cljs.core.chunk_rest(seq__21760_21781__$1);
var G__21784 = c__12674__auto___21782;
var G__21785 = cljs.core.count(c__12674__auto___21782);
var G__21786 = (0);
seq__21760_21768 = G__21783;
chunk__21761_21769 = G__21784;
count__21762_21770 = G__21785;
i__21763_21771 = G__21786;
continue;
} else {
var map__21766_21787 = cljs.core.first(seq__21760_21781__$1);
var map__21766_21788__$1 = ((((!((map__21766_21787 == null)))?((((map__21766_21787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21766_21787.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21766_21787):map__21766_21787);
var binding_21789 = map__21766_21788__$1;
var init_21790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21766_21788__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_21789)," = ",init_21790,";"], 0));

var G__21791 = cljs.core.next(seq__21760_21781__$1);
var G__21792 = null;
var G__21793 = (0);
var G__21794 = (0);
seq__21760_21768 = G__21791;
chunk__21761_21769 = G__21792;
count__21762_21770 = G__21793;
i__21763_21771 = G__21794;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invoke,(function (p__21797){
var map__21798 = p__21797;
var map__21798__$1 = ((((!((map__21798 == null)))?((((map__21798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21798):map__21798);
var expr = map__21798__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21798__$1,cljs.core.cst$kw$f);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21798__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21798__$1,cljs.core.cst$kw$env);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__11731__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__11731__auto__){
var and__11731__auto____$1 = cljs.core.not(cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(info));
if(and__11731__auto____$1){
return cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__11731__auto____$1;
}
} else {
return and__11731__auto__;
}
})();
var protocol = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__11731__auto__ = protocol;
if(cljs.core.truth_(and__11731__auto__)){
var and__11731__auto____$1 = tag;
if(cljs.core.truth_(and__11731__auto____$1)){
var or__11743__auto__ = (function (){var and__11731__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__11731__auto____$2){
var and__11731__auto____$3 = protocol;
if(cljs.core.truth_(and__11731__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$sym$not_DASH_native);
} else {
return and__11731__auto____$3;
}
} else {
return and__11731__auto____$2;
}
})();
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
var and__11731__auto____$2 = (function (){var or__11743__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__11743__auto____$1){
return or__11743__auto____$1;
} else {
return cljs.core.cst$kw$protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__11731__auto____$2)){
var or__11743__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__11743__auto____$1){
return or__11743__auto____$1;
} else {
var and__11731__auto____$3 = !(cljs.core.set_QMARK_(tag));
if(and__11731__auto____$3){
var and__11731__auto____$4 = cljs.core.not((function (){var fexpr__21808 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$sym$clj,null,cljs.core.cst$sym$boolean,null,cljs.core.cst$sym$object,null,cljs.core.cst$sym$any,null,cljs.core.cst$sym$js,null,cljs.core.cst$sym$number,null,cljs.core.cst$sym$clj_DASH_or_DASH_nil,null,cljs.core.cst$sym$array,null,cljs.core.cst$sym$string,null,cljs.core.cst$sym$function,null,cljs.core.cst$sym$clj_DASH_nil,null], null), null);
return (fexpr__21808.cljs$core$IFn$_invoke$arity$1 ? fexpr__21808.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__21808.call(null,tag));
})());
if(and__11731__auto____$4){
var temp__5457__auto__ = cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,tag));
if(cljs.core.truth_(temp__5457__auto__)){
var ps = temp__5457__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__11731__auto____$4;
}
} else {
return and__11731__auto____$3;
}
}
} else {
return and__11731__auto____$2;
}
}
} else {
return and__11731__auto____$1;
}
} else {
return and__11731__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info),cljs.core.cst$sym$cljs$core_SLASH_not)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr))),cljs.core.cst$sym$boolean));
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$js)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$Math));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__11743__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$goog);
if(or__11743__auto__){
return or__11743__auto__;
} else {
var or__11743__auto____$1 = (function (){var temp__5457__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__5457__auto__)){
var ns_str = temp__5457__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__11743__auto____$1)){
return or__11743__auto____$1;
} else {
return !(cljs.core.contains_QMARK_(cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core_SLASH_Keyword,cljs.analyzer.infer_tag(env,f))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cst$kw$constant)) && ((cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)));
var vec__21800 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(info);
var mps = cljs.core.cst$kw$method_DASH_params.cljs$core$IFn$_invoke$arity$1(info);
var mfa = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__11731__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__11731__auto__)){
return (arity > mfa);
} else {
return and__11731__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21798,map__21798__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21798,map__21798__$1,expr,f,args,env){
return (function (p1__21795_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21795_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21798,map__21798__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21798,map__21798__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21798,map__21798__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21798,map__21798__$1,expr,f,args,env){
return (function (p1__21796_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21796_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21798,map__21798__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21798,map__21798__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21800,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21800,(1),null);
var env__20991__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_21809 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args),".",pimpl_21809,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_21810 = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_21810,args)),(((mfa_21810 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_21810,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__11743__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
var or__11743__auto____$1 = js_QMARK_;
if(or__11743__auto____$1){
return or__11743__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f__$1),cljs.core.cst$kw$var))){
var fprop_21811 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_21811," ? ",f__$1,fprop_21811,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_21811," ? ",f__$1,fprop_21811,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$new,(function (p__21812){
var map__21813 = p__21812;
var map__21813__$1 = ((((!((map__21813 == null)))?((((map__21813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21813):map__21813);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21813__$1,cljs.core.cst$kw$ctor);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21813__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21813__$1,cljs.core.cst$kw$env);
var env__20991__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set_BANG_,(function (p__21815){
var map__21816 = p__21815;
var map__21816__$1 = ((((!((map__21816 == null)))?((((map__21816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21816):map__21816);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21816__$1,cljs.core.cst$kw$target);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21816__$1,cljs.core.cst$kw$val);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21816__$1,cljs.core.cst$kw$env);
var env__20991__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__21818 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__21818__$1 = ((((!((map__21818 == null)))?((((map__21818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21818):map__21818);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21818__$1,cljs.core.cst$kw$options);
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21818__$1,cljs.core.cst$kw$js_DASH_dependency_DASH_index);
var map__21819 = options;
var map__21819__$1 = ((((!((map__21819 == null)))?((((map__21819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21819.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21819):map__21819);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21819__$1,cljs.core.cst$kw$target);
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21819__$1,cljs.core.cst$kw$optimizations);
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_);
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_));
var vec__21820 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nodejs,target)){
var map__21826 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__21826__$1 = ((((!((map__21826 == null)))?((((map__21826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21826):map__21826);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21826__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21826__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21820,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21820,(1),null);
var map__21823 = cljs.core.group_by(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__21823__$1 = ((((!((map__21823 == null)))?((((map__21823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21823):map__21823);
var global_exports_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21823__$1,true);
var libs_to_load__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21823__$1,false);
if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);"], 0));
} else {
}

var seq__21829_21845 = cljs.core.seq(libs_to_load__$1);
var chunk__21830_21846 = null;
var count__21831_21847 = (0);
var i__21832_21848 = (0);
while(true){
if((i__21832_21848 < count__21831_21847)){
var lib_21849 = chunk__21830_21846.cljs$core$IIndexed$_nth$arity$2(null,i__21832_21848);
if((cljs.analyzer.foreign_dep_QMARK_(lib_21849)) && (!(cljs.core.keyword_identical_QMARK_(optimizations,cljs.core.cst$kw$none)))){
} else {
if(cljs.core.truth_((function (){var or__11743__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_21849),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_21849),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__11743__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_21849),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_21849),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_21849),"');"], 0));

}
}
}

var G__21850 = seq__21829_21845;
var G__21851 = chunk__21830_21846;
var G__21852 = count__21831_21847;
var G__21853 = (i__21832_21848 + (1));
seq__21829_21845 = G__21850;
chunk__21830_21846 = G__21851;
count__21831_21847 = G__21852;
i__21832_21848 = G__21853;
continue;
} else {
var temp__5457__auto___21854 = cljs.core.seq(seq__21829_21845);
if(temp__5457__auto___21854){
var seq__21829_21855__$1 = temp__5457__auto___21854;
if(cljs.core.chunked_seq_QMARK_(seq__21829_21855__$1)){
var c__12674__auto___21856 = cljs.core.chunk_first(seq__21829_21855__$1);
var G__21857 = cljs.core.chunk_rest(seq__21829_21855__$1);
var G__21858 = c__12674__auto___21856;
var G__21859 = cljs.core.count(c__12674__auto___21856);
var G__21860 = (0);
seq__21829_21845 = G__21857;
chunk__21830_21846 = G__21858;
count__21831_21847 = G__21859;
i__21832_21848 = G__21860;
continue;
} else {
var lib_21861 = cljs.core.first(seq__21829_21855__$1);
if((cljs.analyzer.foreign_dep_QMARK_(lib_21861)) && (!(cljs.core.keyword_identical_QMARK_(optimizations,cljs.core.cst$kw$none)))){
} else {
if(cljs.core.truth_((function (){var or__11743__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_21861),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_21861),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__11743__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_21861),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_21861),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_21861),"');"], 0));

}
}
}

var G__21862 = cljs.core.next(seq__21829_21855__$1);
var G__21863 = null;
var G__21864 = (0);
var G__21865 = (0);
seq__21829_21845 = G__21862;
chunk__21830_21846 = G__21863;
count__21831_21847 = G__21864;
i__21832_21848 = G__21865;
continue;
}
} else {
}
}
break;
}

var seq__21833_21866 = cljs.core.seq(node_libs);
var chunk__21834_21867 = null;
var count__21835_21868 = (0);
var i__21836_21869 = (0);
while(true){
if((i__21836_21869 < count__21835_21868)){
var lib_21870 = chunk__21834_21867.cljs$core$IIndexed$_nth$arity$2(null,i__21836_21869);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_21870)," = require('",lib_21870,"');"], 0));

var G__21871 = seq__21833_21866;
var G__21872 = chunk__21834_21867;
var G__21873 = count__21835_21868;
var G__21874 = (i__21836_21869 + (1));
seq__21833_21866 = G__21871;
chunk__21834_21867 = G__21872;
count__21835_21868 = G__21873;
i__21836_21869 = G__21874;
continue;
} else {
var temp__5457__auto___21875 = cljs.core.seq(seq__21833_21866);
if(temp__5457__auto___21875){
var seq__21833_21876__$1 = temp__5457__auto___21875;
if(cljs.core.chunked_seq_QMARK_(seq__21833_21876__$1)){
var c__12674__auto___21877 = cljs.core.chunk_first(seq__21833_21876__$1);
var G__21878 = cljs.core.chunk_rest(seq__21833_21876__$1);
var G__21879 = c__12674__auto___21877;
var G__21880 = cljs.core.count(c__12674__auto___21877);
var G__21881 = (0);
seq__21833_21866 = G__21878;
chunk__21834_21867 = G__21879;
count__21835_21868 = G__21880;
i__21836_21869 = G__21881;
continue;
} else {
var lib_21882 = cljs.core.first(seq__21833_21876__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_21882)," = require('",lib_21882,"');"], 0));

var G__21883 = cljs.core.next(seq__21833_21876__$1);
var G__21884 = null;
var G__21885 = (0);
var G__21886 = (0);
seq__21833_21866 = G__21883;
chunk__21834_21867 = G__21884;
count__21835_21868 = G__21885;
i__21836_21869 = G__21886;
continue;
}
} else {
}
}
break;
}

var seq__21837_21887 = cljs.core.seq(global_exports_libs);
var chunk__21838_21888 = null;
var count__21839_21889 = (0);
var i__21840_21890 = (0);
while(true){
if((i__21840_21890 < count__21839_21889)){
var lib_21891 = chunk__21838_21888.cljs$core$IIndexed$_nth$arity$2(null,i__21840_21890);
var map__21841_21892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_21891));
var map__21841_21893__$1 = ((((!((map__21841_21892 == null)))?((((map__21841_21892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21841_21892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21841_21892):map__21841_21892);
var global_exports_21894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21841_21893__$1,cljs.core.cst$kw$global_DASH_exports);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib_21891)," = goog.global.",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_21894,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_21891)),";"], 0));

var G__21895 = seq__21837_21887;
var G__21896 = chunk__21838_21888;
var G__21897 = count__21839_21889;
var G__21898 = (i__21840_21890 + (1));
seq__21837_21887 = G__21895;
chunk__21838_21888 = G__21896;
count__21839_21889 = G__21897;
i__21840_21890 = G__21898;
continue;
} else {
var temp__5457__auto___21899 = cljs.core.seq(seq__21837_21887);
if(temp__5457__auto___21899){
var seq__21837_21900__$1 = temp__5457__auto___21899;
if(cljs.core.chunked_seq_QMARK_(seq__21837_21900__$1)){
var c__12674__auto___21901 = cljs.core.chunk_first(seq__21837_21900__$1);
var G__21902 = cljs.core.chunk_rest(seq__21837_21900__$1);
var G__21903 = c__12674__auto___21901;
var G__21904 = cljs.core.count(c__12674__auto___21901);
var G__21905 = (0);
seq__21837_21887 = G__21902;
chunk__21838_21888 = G__21903;
count__21839_21889 = G__21904;
i__21840_21890 = G__21905;
continue;
} else {
var lib_21906 = cljs.core.first(seq__21837_21900__$1);
var map__21843_21907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_21906));
var map__21843_21908__$1 = ((((!((map__21843_21907 == null)))?((((map__21843_21907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21843_21907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21843_21907):map__21843_21907);
var global_exports_21909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21843_21908__$1,cljs.core.cst$kw$global_DASH_exports);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib_21906)," = goog.global.",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_21909,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_21906)),";"], 0));

var G__21910 = cljs.core.next(seq__21837_21900__$1);
var G__21911 = null;
var G__21912 = (0);
var G__21913 = (0);
seq__21837_21887 = G__21910;
chunk__21838_21888 = G__21911;
count__21839_21889 = G__21912;
i__21840_21890 = G__21913;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns_STAR_,(function (p__21914){
var map__21915 = p__21914;
var map__21915__$1 = ((((!((map__21915 == null)))?((((map__21915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21915):map__21915);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21915__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21915__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21915__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21915__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21915__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21915__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21915__$1,cljs.core.cst$kw$deps);
cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_env.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["null;"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns,(function (p__21917){
var map__21918 = p__21917;
var map__21918__$1 = ((((!((map__21918 == null)))?((((map__21918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21918):map__21918);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21918__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21918__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21918__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21918__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21918__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21918__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21918__$1,cljs.core.cst$kw$deps);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$sym$cljs$core)){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('cljs.core');"], 0));

if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');"], 0));
} else {
}
}

cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deftype_STAR_,(function (p__21920){
var map__21921 = p__21920;
var map__21921__$1 = ((((!((map__21921 == null)))?((((map__21921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21921):map__21921);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21921__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21921__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21921__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21921__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21921__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__21923_21941 = cljs.core.seq(protocols);
var chunk__21924_21942 = null;
var count__21925_21943 = (0);
var i__21926_21944 = (0);
while(true){
if((i__21926_21944 < count__21925_21943)){
var protocol_21945 = chunk__21924_21942.cljs$core$IIndexed$_nth$arity$2(null,i__21926_21944);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_21945)].join('')),"}"], 0));

var G__21946 = seq__21923_21941;
var G__21947 = chunk__21924_21942;
var G__21948 = count__21925_21943;
var G__21949 = (i__21926_21944 + (1));
seq__21923_21941 = G__21946;
chunk__21924_21942 = G__21947;
count__21925_21943 = G__21948;
i__21926_21944 = G__21949;
continue;
} else {
var temp__5457__auto___21950 = cljs.core.seq(seq__21923_21941);
if(temp__5457__auto___21950){
var seq__21923_21951__$1 = temp__5457__auto___21950;
if(cljs.core.chunked_seq_QMARK_(seq__21923_21951__$1)){
var c__12674__auto___21952 = cljs.core.chunk_first(seq__21923_21951__$1);
var G__21953 = cljs.core.chunk_rest(seq__21923_21951__$1);
var G__21954 = c__12674__auto___21952;
var G__21955 = cljs.core.count(c__12674__auto___21952);
var G__21956 = (0);
seq__21923_21941 = G__21953;
chunk__21924_21942 = G__21954;
count__21925_21943 = G__21955;
i__21926_21944 = G__21956;
continue;
} else {
var protocol_21957 = cljs.core.first(seq__21923_21951__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_21957)].join('')),"}"], 0));

var G__21958 = cljs.core.next(seq__21923_21951__$1);
var G__21959 = null;
var G__21960 = (0);
var G__21961 = (0);
seq__21923_21941 = G__21958;
chunk__21924_21942 = G__21959;
count__21925_21943 = G__21960;
i__21926_21944 = G__21961;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__21927_21962 = cljs.core.seq(fields__$1);
var chunk__21928_21963 = null;
var count__21929_21964 = (0);
var i__21930_21965 = (0);
while(true){
if((i__21930_21965 < count__21929_21964)){
var fld_21966 = chunk__21928_21963.cljs$core$IIndexed$_nth$arity$2(null,i__21930_21965);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_21966," = ",fld_21966,";"], 0));

var G__21967 = seq__21927_21962;
var G__21968 = chunk__21928_21963;
var G__21969 = count__21929_21964;
var G__21970 = (i__21930_21965 + (1));
seq__21927_21962 = G__21967;
chunk__21928_21963 = G__21968;
count__21929_21964 = G__21969;
i__21930_21965 = G__21970;
continue;
} else {
var temp__5457__auto___21971 = cljs.core.seq(seq__21927_21962);
if(temp__5457__auto___21971){
var seq__21927_21972__$1 = temp__5457__auto___21971;
if(cljs.core.chunked_seq_QMARK_(seq__21927_21972__$1)){
var c__12674__auto___21973 = cljs.core.chunk_first(seq__21927_21972__$1);
var G__21974 = cljs.core.chunk_rest(seq__21927_21972__$1);
var G__21975 = c__12674__auto___21973;
var G__21976 = cljs.core.count(c__12674__auto___21973);
var G__21977 = (0);
seq__21927_21962 = G__21974;
chunk__21928_21963 = G__21975;
count__21929_21964 = G__21976;
i__21930_21965 = G__21977;
continue;
} else {
var fld_21978 = cljs.core.first(seq__21927_21972__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_21978," = ",fld_21978,";"], 0));

var G__21979 = cljs.core.next(seq__21927_21972__$1);
var G__21980 = null;
var G__21981 = (0);
var G__21982 = (0);
seq__21927_21962 = G__21979;
chunk__21928_21963 = G__21980;
count__21929_21964 = G__21981;
i__21930_21965 = G__21982;
continue;
}
} else {
}
}
break;
}

var seq__21931_21983 = cljs.core.seq(pmasks);
var chunk__21932_21984 = null;
var count__21933_21985 = (0);
var i__21934_21986 = (0);
while(true){
if((i__21934_21986 < count__21933_21985)){
var vec__21935_21987 = chunk__21932_21984.cljs$core$IIndexed$_nth$arity$2(null,i__21934_21986);
var pno_21988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21935_21987,(0),null);
var pmask_21989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21935_21987,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_21988,"$ = ",pmask_21989,";"], 0));

var G__21990 = seq__21931_21983;
var G__21991 = chunk__21932_21984;
var G__21992 = count__21933_21985;
var G__21993 = (i__21934_21986 + (1));
seq__21931_21983 = G__21990;
chunk__21932_21984 = G__21991;
count__21933_21985 = G__21992;
i__21934_21986 = G__21993;
continue;
} else {
var temp__5457__auto___21994 = cljs.core.seq(seq__21931_21983);
if(temp__5457__auto___21994){
var seq__21931_21995__$1 = temp__5457__auto___21994;
if(cljs.core.chunked_seq_QMARK_(seq__21931_21995__$1)){
var c__12674__auto___21996 = cljs.core.chunk_first(seq__21931_21995__$1);
var G__21997 = cljs.core.chunk_rest(seq__21931_21995__$1);
var G__21998 = c__12674__auto___21996;
var G__21999 = cljs.core.count(c__12674__auto___21996);
var G__22000 = (0);
seq__21931_21983 = G__21997;
chunk__21932_21984 = G__21998;
count__21933_21985 = G__21999;
i__21934_21986 = G__22000;
continue;
} else {
var vec__21938_22001 = cljs.core.first(seq__21931_21995__$1);
var pno_22002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21938_22001,(0),null);
var pmask_22003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21938_22001,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_22002,"$ = ",pmask_22003,";"], 0));

var G__22004 = cljs.core.next(seq__21931_21995__$1);
var G__22005 = null;
var G__22006 = (0);
var G__22007 = (0);
seq__21931_21983 = G__22004;
chunk__21932_21984 = G__22005;
count__21933_21985 = G__22006;
i__21934_21986 = G__22007;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["});"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$defrecord_STAR_,(function (p__22008){
var map__22009 = p__22008;
var map__22009__$1 = ((((!((map__22009 == null)))?((((map__22009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22009):map__22009);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22009__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22009__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22009__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22009__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22009__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.cst$sym$__hash], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__22011_22029 = cljs.core.seq(protocols);
var chunk__22012_22030 = null;
var count__22013_22031 = (0);
var i__22014_22032 = (0);
while(true){
if((i__22014_22032 < count__22013_22031)){
var protocol_22033 = chunk__22012_22030.cljs$core$IIndexed$_nth$arity$2(null,i__22014_22032);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22033)].join('')),"}"], 0));

var G__22034 = seq__22011_22029;
var G__22035 = chunk__22012_22030;
var G__22036 = count__22013_22031;
var G__22037 = (i__22014_22032 + (1));
seq__22011_22029 = G__22034;
chunk__22012_22030 = G__22035;
count__22013_22031 = G__22036;
i__22014_22032 = G__22037;
continue;
} else {
var temp__5457__auto___22038 = cljs.core.seq(seq__22011_22029);
if(temp__5457__auto___22038){
var seq__22011_22039__$1 = temp__5457__auto___22038;
if(cljs.core.chunked_seq_QMARK_(seq__22011_22039__$1)){
var c__12674__auto___22040 = cljs.core.chunk_first(seq__22011_22039__$1);
var G__22041 = cljs.core.chunk_rest(seq__22011_22039__$1);
var G__22042 = c__12674__auto___22040;
var G__22043 = cljs.core.count(c__12674__auto___22040);
var G__22044 = (0);
seq__22011_22029 = G__22041;
chunk__22012_22030 = G__22042;
count__22013_22031 = G__22043;
i__22014_22032 = G__22044;
continue;
} else {
var protocol_22045 = cljs.core.first(seq__22011_22039__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22045)].join('')),"}"], 0));

var G__22046 = cljs.core.next(seq__22011_22039__$1);
var G__22047 = null;
var G__22048 = (0);
var G__22049 = (0);
seq__22011_22029 = G__22046;
chunk__22012_22030 = G__22047;
count__22013_22031 = G__22048;
i__22014_22032 = G__22049;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__22015_22050 = cljs.core.seq(fields__$1);
var chunk__22016_22051 = null;
var count__22017_22052 = (0);
var i__22018_22053 = (0);
while(true){
if((i__22018_22053 < count__22017_22052)){
var fld_22054 = chunk__22016_22051.cljs$core$IIndexed$_nth$arity$2(null,i__22018_22053);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_22054," = ",fld_22054,";"], 0));

var G__22055 = seq__22015_22050;
var G__22056 = chunk__22016_22051;
var G__22057 = count__22017_22052;
var G__22058 = (i__22018_22053 + (1));
seq__22015_22050 = G__22055;
chunk__22016_22051 = G__22056;
count__22017_22052 = G__22057;
i__22018_22053 = G__22058;
continue;
} else {
var temp__5457__auto___22059 = cljs.core.seq(seq__22015_22050);
if(temp__5457__auto___22059){
var seq__22015_22060__$1 = temp__5457__auto___22059;
if(cljs.core.chunked_seq_QMARK_(seq__22015_22060__$1)){
var c__12674__auto___22061 = cljs.core.chunk_first(seq__22015_22060__$1);
var G__22062 = cljs.core.chunk_rest(seq__22015_22060__$1);
var G__22063 = c__12674__auto___22061;
var G__22064 = cljs.core.count(c__12674__auto___22061);
var G__22065 = (0);
seq__22015_22050 = G__22062;
chunk__22016_22051 = G__22063;
count__22017_22052 = G__22064;
i__22018_22053 = G__22065;
continue;
} else {
var fld_22066 = cljs.core.first(seq__22015_22060__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_22066," = ",fld_22066,";"], 0));

var G__22067 = cljs.core.next(seq__22015_22060__$1);
var G__22068 = null;
var G__22069 = (0);
var G__22070 = (0);
seq__22015_22050 = G__22067;
chunk__22016_22051 = G__22068;
count__22017_22052 = G__22069;
i__22018_22053 = G__22070;
continue;
}
} else {
}
}
break;
}

var seq__22019_22071 = cljs.core.seq(pmasks);
var chunk__22020_22072 = null;
var count__22021_22073 = (0);
var i__22022_22074 = (0);
while(true){
if((i__22022_22074 < count__22021_22073)){
var vec__22023_22075 = chunk__22020_22072.cljs$core$IIndexed$_nth$arity$2(null,i__22022_22074);
var pno_22076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22023_22075,(0),null);
var pmask_22077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22023_22075,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_22076,"$ = ",pmask_22077,";"], 0));

var G__22078 = seq__22019_22071;
var G__22079 = chunk__22020_22072;
var G__22080 = count__22021_22073;
var G__22081 = (i__22022_22074 + (1));
seq__22019_22071 = G__22078;
chunk__22020_22072 = G__22079;
count__22021_22073 = G__22080;
i__22022_22074 = G__22081;
continue;
} else {
var temp__5457__auto___22082 = cljs.core.seq(seq__22019_22071);
if(temp__5457__auto___22082){
var seq__22019_22083__$1 = temp__5457__auto___22082;
if(cljs.core.chunked_seq_QMARK_(seq__22019_22083__$1)){
var c__12674__auto___22084 = cljs.core.chunk_first(seq__22019_22083__$1);
var G__22085 = cljs.core.chunk_rest(seq__22019_22083__$1);
var G__22086 = c__12674__auto___22084;
var G__22087 = cljs.core.count(c__12674__auto___22084);
var G__22088 = (0);
seq__22019_22071 = G__22085;
chunk__22020_22072 = G__22086;
count__22021_22073 = G__22087;
i__22022_22074 = G__22088;
continue;
} else {
var vec__22026_22089 = cljs.core.first(seq__22019_22083__$1);
var pno_22090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22026_22089,(0),null);
var pmask_22091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22026_22089,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_22090,"$ = ",pmask_22091,";"], 0));

var G__22092 = cljs.core.next(seq__22019_22083__$1);
var G__22093 = null;
var G__22094 = (0);
var G__22095 = (0);
seq__22019_22071 = G__22092;
chunk__22020_22072 = G__22093;
count__22021_22073 = G__22094;
i__22022_22074 = G__22095;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["});"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dot,(function (p__22096){
var map__22097 = p__22096;
var map__22097__$1 = ((((!((map__22097 == null)))?((((map__22097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22097):map__22097);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22097__$1,cljs.core.cst$kw$target);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22097__$1,cljs.core.cst$kw$field);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22097__$1,cljs.core.cst$kw$method);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22097__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22097__$1,cljs.core.cst$kw$env);
var env__20991__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js,(function (p__22099){
var map__22100 = p__22099;
var map__22100__$1 = ((((!((map__22100 == null)))?((((map__22100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22100):map__22100);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22100__$1,cljs.core.cst$kw$op);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22100__$1,cljs.core.cst$kw$env);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22100__$1,cljs.core.cst$kw$code);
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22100__$1,cljs.core.cst$kw$segs);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22100__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_((function (){var and__11731__auto__ = code;
if(cljs.core.truth_(and__11731__auto__)){
var G__22102 = clojure.string.trim(code);
var G__22103 = "/*";
return goog.string.startsWith(G__22102,G__22103);
} else {
return and__11731__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
var env__20991__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__20991__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$static_DASH_fns,cljs.core.cst$kw$fn_DASH_invoke_DASH_direct,cljs.core.cst$kw$optimize_DASH_constants,cljs.core.cst$kw$elide_DASH_asserts,cljs.core.cst$kw$target,cljs.core.cst$kw$cache_DASH_key,cljs.core.cst$kw$checked_DASH_arrays,cljs.core.cst$kw$language_DASH_out], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('cljs.core');"], 0));

var seq__22107 = cljs.core.seq(table);
var chunk__22108 = null;
var count__22109 = (0);
var i__22110 = (0);
while(true){
if((i__22110 < count__22109)){
var vec__22111 = chunk__22108.cljs$core$IIndexed$_nth$arity$2(null,i__22110);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22111,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22111,(1),null);
var ns_22117 = cljs.core.namespace(sym);
var name_22118 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n"], 0));

var G__22119 = seq__22107;
var G__22120 = chunk__22108;
var G__22121 = count__22109;
var G__22122 = (i__22110 + (1));
seq__22107 = G__22119;
chunk__22108 = G__22120;
count__22109 = G__22121;
i__22110 = G__22122;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22107);
if(temp__5457__auto__){
var seq__22107__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22107__$1)){
var c__12674__auto__ = cljs.core.chunk_first(seq__22107__$1);
var G__22123 = cljs.core.chunk_rest(seq__22107__$1);
var G__22124 = c__12674__auto__;
var G__22125 = cljs.core.count(c__12674__auto__);
var G__22126 = (0);
seq__22107 = G__22123;
chunk__22108 = G__22124;
count__22109 = G__22125;
i__22110 = G__22126;
continue;
} else {
var vec__22114 = cljs.core.first(seq__22107__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22114,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22114,(1),null);
var ns_22127 = cljs.core.namespace(sym);
var name_22128 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n"], 0));

var G__22129 = cljs.core.next(seq__22107__$1);
var G__22130 = null;
var G__22131 = (0);
var G__22132 = (0);
seq__22107 = G__22129;
chunk__22108 = G__22130;
count__22109 = G__22131;
i__22110 = G__22132;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__22134 = arguments.length;
switch (G__22134) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.core.cst$kw$cljs$analyzer_SLASH_externs.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_22139 = cljs.core.first(ks);
var vec__22135_22140 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_22139);
var top_22141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22135_22140,(0),null);
var prefix_SINGLEQUOTE__22142 = vec__22135_22140;
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$prototype,k_22139)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__22142) == null))){
if(!((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_22141)) || (cljs.core.contains_QMARK_(known_externs,top_22141)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__22142)),";"], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_22141);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__22142)),";"], 0));
}
} else {
}

var m_22143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_22139);
if(cljs.core.empty_QMARK_(m_22143)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__22142,m_22143,top_level,known_externs);
}

var G__22144 = cljs.core.next(ks);
ks = G__22144;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;

