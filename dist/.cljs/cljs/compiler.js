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
var map__21049 = s;
var map__21049__$1 = ((((!((map__21049 == null)))?((((map__21049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21049.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21049):map__21049);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21049__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21049__$1,cljs.core.cst$kw$info);
var d = (0);
var G__21052 = info;
var map__21053 = G__21052;
var map__21053__$1 = ((((!((map__21053 == null)))?((((map__21053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21053):map__21053);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21053__$1,cljs.core.cst$kw$shadow);
var d__$1 = d;
var G__21052__$1 = G__21052;
while(true){
var d__$2 = d__$1;
var map__21055 = G__21052__$1;
var map__21055__$1 = ((((!((map__21055 == null)))?((((map__21055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21055):map__21055);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21055__$1,cljs.core.cst$kw$shadow);
if(cljs.core.truth_(shadow__$1)){
var G__21057 = (d__$2 + (1));
var G__21058 = shadow__$1;
d__$1 = G__21057;
G__21052__$1 = G__21058;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__21059){
var map__21060 = p__21059;
var map__21060__$1 = ((((!((map__21060 == null)))?((((map__21060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21060):map__21060);
var name_var = map__21060__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21060__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21060__$1,cljs.core.cst$kw$info);
var name__$1 = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__21062 = info;
var map__21062__$1 = ((((!((map__21062 == null)))?((((map__21062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21062):map__21062);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21062__$1,cljs.core.cst$kw$ns);
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21062__$1,cljs.core.cst$kw$fn_DASH_scope);
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.cst$kw$name),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__21064 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__21064) : cljs.compiler.munge.call(null,G__21064));
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
var G__21066 = arguments.length;
switch (G__21066) {
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
var G__21068 = cp;
switch (G__21068) {
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
var seq__21070_21074 = cljs.core.seq(s);
var chunk__21071_21075 = null;
var count__21072_21076 = (0);
var i__21073_21077 = (0);
while(true){
if((i__21073_21077 < count__21072_21076)){
var c_21078 = chunk__21071_21075.cljs$core$IIndexed$_nth$arity$2(null,i__21073_21077);
sb.append(cljs.compiler.escape_char(c_21078));

var G__21079 = seq__21070_21074;
var G__21080 = chunk__21071_21075;
var G__21081 = count__21072_21076;
var G__21082 = (i__21073_21077 + (1));
seq__21070_21074 = G__21079;
chunk__21071_21075 = G__21080;
count__21072_21076 = G__21081;
i__21073_21077 = G__21082;
continue;
} else {
var temp__5457__auto___21083 = cljs.core.seq(seq__21070_21074);
if(temp__5457__auto___21083){
var seq__21070_21084__$1 = temp__5457__auto___21083;
if(cljs.core.chunked_seq_QMARK_(seq__21070_21084__$1)){
var c__12674__auto___21085 = cljs.core.chunk_first(seq__21070_21084__$1);
var G__21086 = cljs.core.chunk_rest(seq__21070_21084__$1);
var G__21087 = c__12674__auto___21085;
var G__21088 = cljs.core.count(c__12674__auto___21085);
var G__21089 = (0);
seq__21070_21074 = G__21086;
chunk__21071_21075 = G__21087;
count__21072_21076 = G__21088;
i__21073_21077 = G__21089;
continue;
} else {
var c_21090 = cljs.core.first(seq__21070_21084__$1);
sb.append(cljs.compiler.escape_char(c_21090));

var G__21091 = cljs.core.next(seq__21070_21084__$1);
var G__21092 = null;
var G__21093 = (0);
var G__21094 = (0);
seq__21070_21074 = G__21091;
chunk__21071_21075 = G__21092;
count__21072_21076 = G__21093;
i__21073_21077 = G__21094;
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
var val__19275__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__19275__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__21095_21100 = ast;
var map__21095_21101__$1 = ((((!((map__21095_21100 == null)))?((((map__21095_21100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21095_21100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21095_21100):map__21095_21100);
var env_21102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21095_21101__$1,cljs.core.cst$kw$env);
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env_21102))){
var map__21097_21103 = env_21102;
var map__21097_21104__$1 = ((((!((map__21097_21103 == null)))?((((map__21097_21103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21097_21103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21097_21103):map__21097_21103);
var line_21105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21097_21104__$1,cljs.core.cst$kw$line);
var column_21106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21097_21104__$1,cljs.core.cst$kw$column);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__21097_21103,map__21097_21104__$1,line_21105,column_21106,map__21095_21100,map__21095_21101__$1,env_21102,val__19275__auto__){
return (function (m){
var minfo = (function (){var G__21099 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gcol,cljs.core.cst$kw$gen_DASH_col.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$gline,cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$var)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21099,cljs.core.cst$kw$name,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__21099;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_map,(line_21105 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__21097_21103,map__21097_21104__$1,line_21105,column_21106,map__21095_21100,map__21095_21101__$1,env_21102,val__19275__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_21106)?(column_21106 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__21097_21103,map__21097_21104__$1,line_21105,column_21106,map__21095_21100,map__21095_21101__$1,env_21102,val__19275__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__21097_21103,map__21097_21104__$1,line_21105,column_21106,map__21095_21100,map__21095_21101__$1,env_21102,val__19275__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__21097_21103,map__21097_21104__$1,line_21105,column_21106,map__21095_21100,map__21095_21101__$1,env_21102,val__19275__auto__))
,cljs.core.sorted_map()));
});})(map__21097_21103,map__21097_21104__$1,line_21105,column_21106,map__21095_21100,map__21095_21101__$1,env_21102,val__19275__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__19275__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__13029__auto__ = [];
var len__13022__auto___21113 = arguments.length;
var i__13023__auto___21114 = (0);
while(true){
if((i__13023__auto___21114 < len__13022__auto___21113)){
args__13029__auto__.push((arguments[i__13023__auto___21114]));

var G__21115 = (i__13023__auto___21114 + (1));
i__13023__auto___21114 = G__21115;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__21109_21116 = cljs.core.seq(xs);
var chunk__21110_21117 = null;
var count__21111_21118 = (0);
var i__21112_21119 = (0);
while(true){
if((i__21112_21119 < count__21111_21118)){
var x_21120 = chunk__21110_21117.cljs$core$IIndexed$_nth$arity$2(null,i__21112_21119);
if((x_21120 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_21120)){
cljs.compiler.emit(x_21120);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_21120)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_21120);
} else {
if(goog.isFunction(x_21120)){
(x_21120.cljs$core$IFn$_invoke$arity$0 ? x_21120.cljs$core$IFn$_invoke$arity$0() : x_21120.call(null));
} else {
var s_21121 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_21120], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__21109_21116,chunk__21110_21117,count__21111_21118,i__21112_21119,s_21121,x_21120){
return (function (p1__21107_SHARP_){
return (p1__21107_SHARP_ + cljs.core.count(s_21121));
});})(seq__21109_21116,chunk__21110_21117,count__21111_21118,i__21112_21119,s_21121,x_21120))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_21121], 0));

}
}
}
}

var G__21122 = seq__21109_21116;
var G__21123 = chunk__21110_21117;
var G__21124 = count__21111_21118;
var G__21125 = (i__21112_21119 + (1));
seq__21109_21116 = G__21122;
chunk__21110_21117 = G__21123;
count__21111_21118 = G__21124;
i__21112_21119 = G__21125;
continue;
} else {
var temp__5457__auto___21126 = cljs.core.seq(seq__21109_21116);
if(temp__5457__auto___21126){
var seq__21109_21127__$1 = temp__5457__auto___21126;
if(cljs.core.chunked_seq_QMARK_(seq__21109_21127__$1)){
var c__12674__auto___21128 = cljs.core.chunk_first(seq__21109_21127__$1);
var G__21129 = cljs.core.chunk_rest(seq__21109_21127__$1);
var G__21130 = c__12674__auto___21128;
var G__21131 = cljs.core.count(c__12674__auto___21128);
var G__21132 = (0);
seq__21109_21116 = G__21129;
chunk__21110_21117 = G__21130;
count__21111_21118 = G__21131;
i__21112_21119 = G__21132;
continue;
} else {
var x_21133 = cljs.core.first(seq__21109_21127__$1);
if((x_21133 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_21133)){
cljs.compiler.emit(x_21133);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_21133)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_21133);
} else {
if(goog.isFunction(x_21133)){
(x_21133.cljs$core$IFn$_invoke$arity$0 ? x_21133.cljs$core$IFn$_invoke$arity$0() : x_21133.call(null));
} else {
var s_21134 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_21133], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__21109_21116,chunk__21110_21117,count__21111_21118,i__21112_21119,s_21134,x_21133,seq__21109_21127__$1,temp__5457__auto___21126){
return (function (p1__21107_SHARP_){
return (p1__21107_SHARP_ + cljs.core.count(s_21134));
});})(seq__21109_21116,chunk__21110_21117,count__21111_21118,i__21112_21119,s_21134,x_21133,seq__21109_21127__$1,temp__5457__auto___21126))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_21134], 0));

}
}
}
}

var G__21135 = cljs.core.next(seq__21109_21127__$1);
var G__21136 = null;
var G__21137 = (0);
var G__21138 = (0);
seq__21109_21116 = G__21135;
chunk__21110_21117 = G__21136;
count__21111_21118 = G__21137;
i__21112_21119 = G__21138;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq21108){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21108));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__13029__auto__ = [];
var len__13022__auto___21144 = arguments.length;
var i__13023__auto___21145 = (0);
while(true){
if((i__13023__auto___21145 < len__13022__auto___21144)){
args__13029__auto__.push((arguments[i__13023__auto___21145]));

var G__21146 = (i__13023__auto___21145 + (1));
i__13023__auto___21145 = G__21146;
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

var _STAR_flush_on_newline_STAR_21140_21147 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println();
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_21140_21147;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__21141){
var map__21142 = p__21141;
var map__21142__$1 = ((((!((map__21142 == null)))?((((map__21142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21142.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21142):map__21142);
var m = map__21142__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21142__$1,cljs.core.cst$kw$gen_DASH_line);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$gen_DASH_line,(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$gen_DASH_col,(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq21139){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21139));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__12870__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_21148_21150 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_21149_21151 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_21148_21150,_STAR_print_fn_STAR_21149_21151,sb__12870__auto__){
return (function (x__12871__auto__){
return sb__12870__auto__.append(x__12871__auto__);
});})(_STAR_print_newline_STAR_21148_21150,_STAR_print_fn_STAR_21149_21151,sb__12870__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_21149_21151;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_21148_21150;
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
var vec__21152 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21152,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21152,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21152,(2),null);
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

var G__21155_21157 = (cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__21155_21157) : cljs.compiler.emit_constant.call(null,G__21155_21157));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__21156_21158 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__21156_21158) : cljs.compiler.emit_constant.call(null,G__21156_21158));

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

var G__21159_21160 = cljs.core.hash(sym);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__21159_21160) : cljs.compiler.emit_constant.call(null,G__21159_21160));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant.call(null,null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5455__auto__ = (function (){var and__11731__auto__ = cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__11731__auto__)){
var G__21161 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__21161) : x.call(null,G__21161));
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
var G__21162 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__21162) : x.call(null,G__21162));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var,(function (p__21164){
var map__21165 = p__21164;
var map__21165__$1 = ((((!((map__21165 == null)))?((((map__21165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21165):map__21165);
var ast = map__21165__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21165__$1,cljs.core.cst$kw$info);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21165__$1,cljs.core.cst$kw$env);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21165__$1,cljs.core.cst$kw$form);
var temp__5455__auto__ = cljs.core.cst$kw$const_DASH_expr.cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,cljs.core.cst$kw$env,env));
} else {
var map__21167 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__21167__$1 = ((((!((map__21167 == null)))?((((map__21167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21167):map__21167);
var cenv = map__21167__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21167__$1,cljs.core.cst$kw$options);
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
var reserved = (function (){var G__21169 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__11731__auto__ = (function (){var G__21171 = cljs.core.cst$kw$language_DASH_out.cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__21171) : cljs.compiler.es5_GT__EQ_.call(null,G__21171));
})();
if(cljs.core.truth_(and__11731__auto__)){
return !((cljs.core.namespace(var_name) == null));
} else {
return and__11731__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__21169,cljs.analyzer.es5_allowed);
} else {
return G__21169;
}
})();
var env__21041__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__21172 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$sym$js_SLASH__DASH_Infinity)){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__21172,reserved);
} else {
return G__21172;
}
})()], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var_DASH_special,(function (p__21173){
var map__21174 = p__21173;
var map__21174__$1 = ((((!((map__21174 == null)))?((((map__21174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21174):map__21174);
var arg = map__21174__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21174__$1,cljs.core.cst$kw$env);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21174__$1,cljs.core.cst$kw$var);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21174__$1,cljs.core.cst$kw$sym);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21174__$1,cljs.core.cst$kw$meta);
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__21176 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$);
var map__21176__$1 = ((((!((map__21176 == null)))?((((map__21176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21176.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21176):map__21176);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21176__$1,cljs.core.cst$kw$name);
var env__21041__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$meta,(function (p__21178){
var map__21179 = p__21178;
var map__21179__$1 = ((((!((map__21179 == null)))?((((map__21179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21179):map__21179);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21179__$1,cljs.core.cst$kw$expr);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21179__$1,cljs.core.cst$kw$meta);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21179__$1,cljs.core.cst$kw$env);
var env__21041__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_((function (p1__21181_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__21181_SHARP_),cljs.core.cst$kw$constant);
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (p__21182){
var map__21183 = p__21182;
var map__21183__$1 = ((((!((map__21183 == null)))?((((map__21183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21183.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21183):map__21183);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21183__$1,cljs.core.cst$kw$env);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21183__$1,cljs.core.cst$kw$keys);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21183__$1,cljs.core.cst$kw$vals);
var env__21041__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (p__21185){
var map__21186 = p__21185;
var map__21186__$1 = ((((!((map__21186 == null)))?((((map__21186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21186):map__21186);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21186__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21186__$1,cljs.core.cst$kw$env);
var env__21041__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (p__21188){
var map__21189 = p__21188;
var map__21189__$1 = ((((!((map__21189 == null)))?((((map__21189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21189):map__21189);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21189__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21189__$1,cljs.core.cst$kw$env);
var env__21041__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_21191 = cljs.core.count(items);
if((cnt_21191 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentVector(null, ",cnt_21191,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_((function (p1__21192_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__21192_SHARP_),cljs.core.cst$kw$constant);
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set,(function (p__21193){
var map__21194 = p__21193;
var map__21194__$1 = ((((!((map__21194 == null)))?((((map__21194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21194.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21194):map__21194);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21194__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21194__$1,cljs.core.cst$kw$env);
var env__21041__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_value,(function (p__21196){
var map__21197 = p__21196;
var map__21197__$1 = ((((!((map__21197 == null)))?((((map__21197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21197.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21197):map__21197);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21197__$1,cljs.core.cst$kw$items);
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21197__$1,cljs.core.cst$kw$js_DASH_type);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21197__$1,cljs.core.cst$kw$env);
var env__21041__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,cljs.core.cst$kw$object)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["({"], 0));

var temp__5457__auto___21215 = cljs.core.seq(items);
if(temp__5457__auto___21215){
var items_21216__$1 = temp__5457__auto___21215;
var vec__21199_21217 = items_21216__$1;
var seq__21200_21218 = cljs.core.seq(vec__21199_21217);
var first__21201_21219 = cljs.core.first(seq__21200_21218);
var seq__21200_21220__$1 = cljs.core.next(seq__21200_21218);
var vec__21202_21221 = first__21201_21219;
var k_21222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21202_21221,(0),null);
var v_21223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21202_21221,(1),null);
var r_21224 = seq__21200_21220__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\"",cljs.core.name(k_21222),"\": ",v_21223], 0));

var seq__21205_21225 = cljs.core.seq(r_21224);
var chunk__21206_21226 = null;
var count__21207_21227 = (0);
var i__21208_21228 = (0);
while(true){
if((i__21208_21228 < count__21207_21227)){
var vec__21209_21229 = chunk__21206_21226.cljs$core$IIndexed$_nth$arity$2(null,i__21208_21228);
var k_21230__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21209_21229,(0),null);
var v_21231__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21209_21229,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_21230__$1),"\": ",v_21231__$1], 0));

var G__21232 = seq__21205_21225;
var G__21233 = chunk__21206_21226;
var G__21234 = count__21207_21227;
var G__21235 = (i__21208_21228 + (1));
seq__21205_21225 = G__21232;
chunk__21206_21226 = G__21233;
count__21207_21227 = G__21234;
i__21208_21228 = G__21235;
continue;
} else {
var temp__5457__auto___21236__$1 = cljs.core.seq(seq__21205_21225);
if(temp__5457__auto___21236__$1){
var seq__21205_21237__$1 = temp__5457__auto___21236__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21205_21237__$1)){
var c__12674__auto___21238 = cljs.core.chunk_first(seq__21205_21237__$1);
var G__21239 = cljs.core.chunk_rest(seq__21205_21237__$1);
var G__21240 = c__12674__auto___21238;
var G__21241 = cljs.core.count(c__12674__auto___21238);
var G__21242 = (0);
seq__21205_21225 = G__21239;
chunk__21206_21226 = G__21240;
count__21207_21227 = G__21241;
i__21208_21228 = G__21242;
continue;
} else {
var vec__21212_21243 = cljs.core.first(seq__21205_21237__$1);
var k_21244__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21212_21243,(0),null);
var v_21245__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21212_21243,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_21244__$1),"\": ",v_21245__$1], 0));

var G__21246 = cljs.core.next(seq__21205_21237__$1);
var G__21247 = null;
var G__21248 = (0);
var G__21249 = (0);
seq__21205_21225 = G__21246;
chunk__21206_21226 = G__21247;
count__21207_21227 = G__21248;
i__21208_21228 = G__21249;
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$record_DASH_value,(function (p__21250){
var map__21251 = p__21250;
var map__21251__$1 = ((((!((map__21251 == null)))?((((map__21251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21251):map__21251);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21251__$1,cljs.core.cst$kw$items);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21251__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21251__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21251__$1,cljs.core.cst$kw$env);
var env__21041__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns,".map__GT_",name,"(",items,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$constant,(function (p__21253){
var map__21254 = p__21253;
var map__21254__$1 = ((((!((map__21254 == null)))?((((map__21254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21254):map__21254);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21254__$1,cljs.core.cst$kw$form);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21254__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__21041__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__21256){
var map__21257 = p__21256;
var map__21257__$1 = ((((!((map__21257 == null)))?((((map__21257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21257.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21257):map__21257);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21257__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21257__$1,cljs.core.cst$kw$form);
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21257__$1,cljs.core.cst$kw$const_DASH_expr);
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__21259){
var map__21260 = p__21259;
var map__21260__$1 = ((((!((map__21260 == null)))?((((map__21260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21260.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21260):map__21260);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21260__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21260__$1,cljs.core.cst$kw$form);
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21260__$1,cljs.core.cst$kw$const_DASH_expr);
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
var or__11743__auto__ = (function (){var fexpr__21263 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null);
return (fexpr__21263.cljs$core$IFn$_invoke$arity$1 ? fexpr__21263.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__21263.call(null,tag));
})();
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$if,(function (p__21264){
var map__21265 = p__21264;
var map__21265__$1 = ((((!((map__21265 == null)))?((((map__21265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21265):map__21265);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21265__$1,cljs.core.cst$kw$test);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21265__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21265__$1,cljs.core.cst$kw$else);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21265__$1,cljs.core.cst$kw$env);
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21265__$1,cljs.core.cst$kw$unchecked);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$case_STAR_,(function (p__21267){
var map__21268 = p__21267;
var map__21268__$1 = ((((!((map__21268 == null)))?((((map__21268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21268):map__21268);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21268__$1,cljs.core.cst$kw$v);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21268__$1,cljs.core.cst$kw$tests);
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21268__$1,cljs.core.cst$kw$thens);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21268__$1,cljs.core.cst$kw$default);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21268__$1,cljs.core.cst$kw$env);
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

var seq__21270_21288 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__21271_21289 = null;
var count__21272_21290 = (0);
var i__21273_21291 = (0);
while(true){
if((i__21273_21291 < count__21272_21290)){
var vec__21274_21292 = chunk__21271_21289.cljs$core$IIndexed$_nth$arity$2(null,i__21273_21291);
var ts_21293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21274_21292,(0),null);
var then_21294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21274_21292,(1),null);
var seq__21277_21295 = cljs.core.seq(ts_21293);
var chunk__21278_21296 = null;
var count__21279_21297 = (0);
var i__21280_21298 = (0);
while(true){
if((i__21280_21298 < count__21279_21297)){
var test_21299 = chunk__21278_21296.cljs$core$IIndexed$_nth$arity$2(null,i__21280_21298);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_21299,":"], 0));

var G__21300 = seq__21277_21295;
var G__21301 = chunk__21278_21296;
var G__21302 = count__21279_21297;
var G__21303 = (i__21280_21298 + (1));
seq__21277_21295 = G__21300;
chunk__21278_21296 = G__21301;
count__21279_21297 = G__21302;
i__21280_21298 = G__21303;
continue;
} else {
var temp__5457__auto___21304 = cljs.core.seq(seq__21277_21295);
if(temp__5457__auto___21304){
var seq__21277_21305__$1 = temp__5457__auto___21304;
if(cljs.core.chunked_seq_QMARK_(seq__21277_21305__$1)){
var c__12674__auto___21306 = cljs.core.chunk_first(seq__21277_21305__$1);
var G__21307 = cljs.core.chunk_rest(seq__21277_21305__$1);
var G__21308 = c__12674__auto___21306;
var G__21309 = cljs.core.count(c__12674__auto___21306);
var G__21310 = (0);
seq__21277_21295 = G__21307;
chunk__21278_21296 = G__21308;
count__21279_21297 = G__21309;
i__21280_21298 = G__21310;
continue;
} else {
var test_21311 = cljs.core.first(seq__21277_21305__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_21311,":"], 0));

var G__21312 = cljs.core.next(seq__21277_21305__$1);
var G__21313 = null;
var G__21314 = (0);
var G__21315 = (0);
seq__21277_21295 = G__21312;
chunk__21278_21296 = G__21313;
count__21279_21297 = G__21314;
i__21280_21298 = G__21315;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_21294], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_21294], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

var G__21316 = seq__21270_21288;
var G__21317 = chunk__21271_21289;
var G__21318 = count__21272_21290;
var G__21319 = (i__21273_21291 + (1));
seq__21270_21288 = G__21316;
chunk__21271_21289 = G__21317;
count__21272_21290 = G__21318;
i__21273_21291 = G__21319;
continue;
} else {
var temp__5457__auto___21320 = cljs.core.seq(seq__21270_21288);
if(temp__5457__auto___21320){
var seq__21270_21321__$1 = temp__5457__auto___21320;
if(cljs.core.chunked_seq_QMARK_(seq__21270_21321__$1)){
var c__12674__auto___21322 = cljs.core.chunk_first(seq__21270_21321__$1);
var G__21323 = cljs.core.chunk_rest(seq__21270_21321__$1);
var G__21324 = c__12674__auto___21322;
var G__21325 = cljs.core.count(c__12674__auto___21322);
var G__21326 = (0);
seq__21270_21288 = G__21323;
chunk__21271_21289 = G__21324;
count__21272_21290 = G__21325;
i__21273_21291 = G__21326;
continue;
} else {
var vec__21281_21327 = cljs.core.first(seq__21270_21321__$1);
var ts_21328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21281_21327,(0),null);
var then_21329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21281_21327,(1),null);
var seq__21284_21330 = cljs.core.seq(ts_21328);
var chunk__21285_21331 = null;
var count__21286_21332 = (0);
var i__21287_21333 = (0);
while(true){
if((i__21287_21333 < count__21286_21332)){
var test_21334 = chunk__21285_21331.cljs$core$IIndexed$_nth$arity$2(null,i__21287_21333);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_21334,":"], 0));

var G__21335 = seq__21284_21330;
var G__21336 = chunk__21285_21331;
var G__21337 = count__21286_21332;
var G__21338 = (i__21287_21333 + (1));
seq__21284_21330 = G__21335;
chunk__21285_21331 = G__21336;
count__21286_21332 = G__21337;
i__21287_21333 = G__21338;
continue;
} else {
var temp__5457__auto___21339__$1 = cljs.core.seq(seq__21284_21330);
if(temp__5457__auto___21339__$1){
var seq__21284_21340__$1 = temp__5457__auto___21339__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21284_21340__$1)){
var c__12674__auto___21341 = cljs.core.chunk_first(seq__21284_21340__$1);
var G__21342 = cljs.core.chunk_rest(seq__21284_21340__$1);
var G__21343 = c__12674__auto___21341;
var G__21344 = cljs.core.count(c__12674__auto___21341);
var G__21345 = (0);
seq__21284_21330 = G__21342;
chunk__21285_21331 = G__21343;
count__21286_21332 = G__21344;
i__21287_21333 = G__21345;
continue;
} else {
var test_21346 = cljs.core.first(seq__21284_21340__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_21346,":"], 0));

var G__21347 = cljs.core.next(seq__21284_21340__$1);
var G__21348 = null;
var G__21349 = (0);
var G__21350 = (0);
seq__21284_21330 = G__21347;
chunk__21285_21331 = G__21348;
count__21286_21332 = G__21349;
i__21287_21333 = G__21350;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_21329], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_21329], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

var G__21351 = cljs.core.next(seq__21270_21321__$1);
var G__21352 = null;
var G__21353 = (0);
var G__21354 = (0);
seq__21270_21288 = G__21351;
chunk__21271_21289 = G__21352;
count__21272_21290 = G__21353;
i__21273_21291 = G__21354;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$throw,(function (p__21355){
var map__21356 = p__21355;
var map__21356__$1 = ((((!((map__21356 == null)))?((((map__21356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21356):map__21356);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21356__$1,cljs.core.cst$kw$throw);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21356__$1,cljs.core.cst$kw$env);
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21359 = env;
var G__21360 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__21359,G__21360) : cljs.compiler.resolve_type.call(null,G__21359,G__21360));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__21361 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21361,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21361,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__21361,fstr,rstr,ret_t,axstr){
return (function (p1__21358_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__21358_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__21358_SHARP_));
});})(idx,vec__21361,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__21364 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21364),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__21364;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21365 = env;
var G__21366 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__21365,G__21366) : cljs.compiler.resolve_type.call(null,G__21365,G__21366));
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
return (function (p1__21367_SHARP_){
return cljs.compiler.resolve_type(env,p1__21367_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__21368 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__21369 = cljs.core.seq(vec__21368);
var first__21370 = cljs.core.first(seq__21369);
var seq__21369__$1 = cljs.core.next(seq__21369);
var p = first__21370;
var first__21370__$1 = cljs.core.first(seq__21369__$1);
var seq__21369__$2 = cljs.core.next(seq__21369__$1);
var ts = first__21370__$1;
var first__21370__$2 = cljs.core.first(seq__21369__$2);
var seq__21369__$3 = cljs.core.next(seq__21369__$2);
var n = first__21370__$2;
var xs = seq__21369__$3;
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
var vec__21371 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__21372 = cljs.core.seq(vec__21371);
var first__21373 = cljs.core.first(seq__21372);
var seq__21372__$1 = cljs.core.next(seq__21372);
var p = first__21373;
var first__21373__$1 = cljs.core.first(seq__21372__$1);
var seq__21372__$2 = cljs.core.next(seq__21372__$1);
var ts = first__21373__$1;
var xs = seq__21372__$2;
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
var G__21375 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$closure_DASH_warnings,cljs.core.cst$kw$check_DASH_types], null));
var fexpr__21374 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$warning,null,cljs.core.cst$kw$error,null], null), null);
return (fexpr__21374.cljs$core$IFn$_invoke$arity$1 ? fexpr__21374.cljs$core$IFn$_invoke$arity$1(G__21375) : fexpr__21374.call(null,G__21375));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__21378 = arguments.length;
switch (G__21378) {
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
var vec__21386 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__21376_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__21376_SHARP_);
} else {
return p1__21376_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__21387 = cljs.core.seq(vec__21386);
var first__21388 = cljs.core.first(seq__21387);
var seq__21387__$1 = cljs.core.next(seq__21387);
var x = first__21388;
var ys = seq__21387__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(x,"*/","* /")], 0));

var seq__21389 = cljs.core.seq(ys);
var chunk__21390 = null;
var count__21391 = (0);
var i__21392 = (0);
while(true){
if((i__21392 < count__21391)){
var next_line = chunk__21390.cljs$core$IIndexed$_nth$arity$2(null,i__21392);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__21398 = seq__21389;
var G__21399 = chunk__21390;
var G__21400 = count__21391;
var G__21401 = (i__21392 + (1));
seq__21389 = G__21398;
chunk__21390 = G__21399;
count__21391 = G__21400;
i__21392 = G__21401;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21389);
if(temp__5457__auto__){
var seq__21389__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21389__$1)){
var c__12674__auto__ = cljs.core.chunk_first(seq__21389__$1);
var G__21402 = cljs.core.chunk_rest(seq__21389__$1);
var G__21403 = c__12674__auto__;
var G__21404 = cljs.core.count(c__12674__auto__);
var G__21405 = (0);
seq__21389 = G__21402;
chunk__21390 = G__21403;
count__21391 = G__21404;
i__21392 = G__21405;
continue;
} else {
var next_line = cljs.core.first(seq__21389__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__21406 = cljs.core.next(seq__21389__$1);
var G__21407 = null;
var G__21408 = (0);
var G__21409 = (0);
seq__21389 = G__21406;
chunk__21390 = G__21407;
count__21391 = G__21408;
i__21392 = G__21409;
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

var seq__21393_21410 = cljs.core.seq(docs__$2);
var chunk__21394_21411 = null;
var count__21395_21412 = (0);
var i__21396_21413 = (0);
while(true){
if((i__21396_21413 < count__21395_21412)){
var e_21414 = chunk__21394_21411.cljs$core$IIndexed$_nth$arity$2(null,i__21396_21413);
if(cljs.core.truth_(e_21414)){
print_comment_lines(e_21414);
} else {
}

var G__21415 = seq__21393_21410;
var G__21416 = chunk__21394_21411;
var G__21417 = count__21395_21412;
var G__21418 = (i__21396_21413 + (1));
seq__21393_21410 = G__21415;
chunk__21394_21411 = G__21416;
count__21395_21412 = G__21417;
i__21396_21413 = G__21418;
continue;
} else {
var temp__5457__auto___21419 = cljs.core.seq(seq__21393_21410);
if(temp__5457__auto___21419){
var seq__21393_21420__$1 = temp__5457__auto___21419;
if(cljs.core.chunked_seq_QMARK_(seq__21393_21420__$1)){
var c__12674__auto___21421 = cljs.core.chunk_first(seq__21393_21420__$1);
var G__21422 = cljs.core.chunk_rest(seq__21393_21420__$1);
var G__21423 = c__12674__auto___21421;
var G__21424 = cljs.core.count(c__12674__auto___21421);
var G__21425 = (0);
seq__21393_21410 = G__21422;
chunk__21394_21411 = G__21423;
count__21395_21412 = G__21424;
i__21396_21413 = G__21425;
continue;
} else {
var e_21426 = cljs.core.first(seq__21393_21420__$1);
if(cljs.core.truth_(e_21426)){
print_comment_lines(e_21426);
} else {
}

var G__21427 = cljs.core.next(seq__21393_21420__$1);
var G__21428 = null;
var G__21429 = (0);
var G__21430 = (0);
seq__21393_21410 = G__21427;
chunk__21394_21411 = G__21428;
count__21395_21412 = G__21429;
i__21396_21413 = G__21430;
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
return (function (p1__21432_SHARP_){
return goog.string.startsWith(p1__21432_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$def,(function (p__21433){
var map__21434 = p__21433;
var map__21434__$1 = ((((!((map__21434 == null)))?((((map__21434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21434.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21434):map__21434);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21434__$1,cljs.core.cst$kw$name);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21434__$1,cljs.core.cst$kw$var);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21434__$1,cljs.core.cst$kw$init);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21434__$1,cljs.core.cst$kw$env);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21434__$1,cljs.core.cst$kw$doc);
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21434__$1,cljs.core.cst$kw$jsdoc);
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21434__$1,cljs.core.cst$kw$export);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21434__$1,cljs.core.cst$kw$test);
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21434__$1,cljs.core.cst$kw$var_DASH_ast);
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__21436){
var map__21437 = p__21436;
var map__21437__$1 = ((((!((map__21437 == null)))?((((map__21437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21437):map__21437);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,cljs.core.cst$kw$env);
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (",arglist,"){"], 0));

var seq__21439_21457 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__21440_21458 = null;
var count__21441_21459 = (0);
var i__21442_21460 = (0);
while(true){
if((i__21442_21460 < count__21441_21459)){
var vec__21443_21461 = chunk__21440_21458.cljs$core$IIndexed$_nth$arity$2(null,i__21442_21460);
var i_21462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21443_21461,(0),null);
var param_21463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21443_21461,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_21463);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));

var G__21464 = seq__21439_21457;
var G__21465 = chunk__21440_21458;
var G__21466 = count__21441_21459;
var G__21467 = (i__21442_21460 + (1));
seq__21439_21457 = G__21464;
chunk__21440_21458 = G__21465;
count__21441_21459 = G__21466;
i__21442_21460 = G__21467;
continue;
} else {
var temp__5457__auto___21468 = cljs.core.seq(seq__21439_21457);
if(temp__5457__auto___21468){
var seq__21439_21469__$1 = temp__5457__auto___21468;
if(cljs.core.chunked_seq_QMARK_(seq__21439_21469__$1)){
var c__12674__auto___21470 = cljs.core.chunk_first(seq__21439_21469__$1);
var G__21471 = cljs.core.chunk_rest(seq__21439_21469__$1);
var G__21472 = c__12674__auto___21470;
var G__21473 = cljs.core.count(c__12674__auto___21470);
var G__21474 = (0);
seq__21439_21457 = G__21471;
chunk__21440_21458 = G__21472;
count__21441_21459 = G__21473;
i__21442_21460 = G__21474;
continue;
} else {
var vec__21446_21475 = cljs.core.first(seq__21439_21469__$1);
var i_21476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21446_21475,(0),null);
var param_21477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21446_21475,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_21477);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));

var G__21478 = cljs.core.next(seq__21439_21469__$1);
var G__21479 = null;
var G__21480 = (0);
var G__21481 = (0);
seq__21439_21457 = G__21478;
chunk__21440_21458 = G__21479;
count__21441_21459 = G__21480;
i__21442_21460 = G__21481;
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

var seq__21449_21482 = cljs.core.seq(params);
var chunk__21450_21483 = null;
var count__21451_21484 = (0);
var i__21452_21485 = (0);
while(true){
if((i__21452_21485 < count__21451_21484)){
var param_21486 = chunk__21450_21483.cljs$core$IIndexed$_nth$arity$2(null,i__21452_21485);
cljs.compiler.emit(param_21486);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21486,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21487 = seq__21449_21482;
var G__21488 = chunk__21450_21483;
var G__21489 = count__21451_21484;
var G__21490 = (i__21452_21485 + (1));
seq__21449_21482 = G__21487;
chunk__21450_21483 = G__21488;
count__21451_21484 = G__21489;
i__21452_21485 = G__21490;
continue;
} else {
var temp__5457__auto___21491 = cljs.core.seq(seq__21449_21482);
if(temp__5457__auto___21491){
var seq__21449_21492__$1 = temp__5457__auto___21491;
if(cljs.core.chunked_seq_QMARK_(seq__21449_21492__$1)){
var c__12674__auto___21493 = cljs.core.chunk_first(seq__21449_21492__$1);
var G__21494 = cljs.core.chunk_rest(seq__21449_21492__$1);
var G__21495 = c__12674__auto___21493;
var G__21496 = cljs.core.count(c__12674__auto___21493);
var G__21497 = (0);
seq__21449_21482 = G__21494;
chunk__21450_21483 = G__21495;
count__21451_21484 = G__21496;
i__21452_21485 = G__21497;
continue;
} else {
var param_21498 = cljs.core.first(seq__21449_21492__$1);
cljs.compiler.emit(param_21498);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21498,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21499 = cljs.core.next(seq__21449_21492__$1);
var G__21500 = null;
var G__21501 = (0);
var G__21502 = (0);
seq__21449_21482 = G__21499;
chunk__21450_21483 = G__21500;
count__21451_21484 = G__21501;
i__21452_21485 = G__21502;
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

var seq__21453_21503 = cljs.core.seq(params);
var chunk__21454_21504 = null;
var count__21455_21505 = (0);
var i__21456_21506 = (0);
while(true){
if((i__21456_21506 < count__21455_21505)){
var param_21507 = chunk__21454_21504.cljs$core$IIndexed$_nth$arity$2(null,i__21456_21506);
cljs.compiler.emit(param_21507);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21507,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21508 = seq__21453_21503;
var G__21509 = chunk__21454_21504;
var G__21510 = count__21455_21505;
var G__21511 = (i__21456_21506 + (1));
seq__21453_21503 = G__21508;
chunk__21454_21504 = G__21509;
count__21455_21505 = G__21510;
i__21456_21506 = G__21511;
continue;
} else {
var temp__5457__auto___21512 = cljs.core.seq(seq__21453_21503);
if(temp__5457__auto___21512){
var seq__21453_21513__$1 = temp__5457__auto___21512;
if(cljs.core.chunked_seq_QMARK_(seq__21453_21513__$1)){
var c__12674__auto___21514 = cljs.core.chunk_first(seq__21453_21513__$1);
var G__21515 = cljs.core.chunk_rest(seq__21453_21513__$1);
var G__21516 = c__12674__auto___21514;
var G__21517 = cljs.core.count(c__12674__auto___21514);
var G__21518 = (0);
seq__21453_21503 = G__21515;
chunk__21454_21504 = G__21516;
count__21455_21505 = G__21517;
i__21456_21506 = G__21518;
continue;
} else {
var param_21519 = cljs.core.first(seq__21453_21513__$1);
cljs.compiler.emit(param_21519);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21519,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21520 = cljs.core.next(seq__21453_21513__$1);
var G__21521 = null;
var G__21522 = (0);
var G__21523 = (0);
seq__21453_21503 = G__21520;
chunk__21454_21504 = G__21521;
count__21455_21505 = G__21522;
i__21456_21506 = G__21523;
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
var seq__21524 = cljs.core.seq(params);
var chunk__21525 = null;
var count__21526 = (0);
var i__21527 = (0);
while(true){
if((i__21527 < count__21526)){
var param = chunk__21525.cljs$core$IIndexed$_nth$arity$2(null,i__21527);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21528 = seq__21524;
var G__21529 = chunk__21525;
var G__21530 = count__21526;
var G__21531 = (i__21527 + (1));
seq__21524 = G__21528;
chunk__21525 = G__21529;
count__21526 = G__21530;
i__21527 = G__21531;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21524);
if(temp__5457__auto__){
var seq__21524__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21524__$1)){
var c__12674__auto__ = cljs.core.chunk_first(seq__21524__$1);
var G__21532 = cljs.core.chunk_rest(seq__21524__$1);
var G__21533 = c__12674__auto__;
var G__21534 = cljs.core.count(c__12674__auto__);
var G__21535 = (0);
seq__21524 = G__21532;
chunk__21525 = G__21533;
count__21526 = G__21534;
i__21527 = G__21535;
continue;
} else {
var param = cljs.core.first(seq__21524__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21536 = cljs.core.next(seq__21524__$1);
var G__21537 = null;
var G__21538 = (0);
var G__21539 = (0);
seq__21524 = G__21536;
chunk__21525 = G__21537;
count__21526 = G__21538;
i__21527 = G__21539;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__21540){
var map__21541 = p__21540;
var map__21541__$1 = ((((!((map__21541 == null)))?((((map__21541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21541):map__21541);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21541__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21541__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21541__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21541__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21541__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21541__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21541__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21541__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__21041__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__21543){
var map__21544 = p__21543;
var map__21544__$1 = ((((!((map__21544 == null)))?((((map__21544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21544):map__21544);
var f = map__21544__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21544__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21544__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21544__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21544__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21544__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21544__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21544__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21544__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__21041__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

var name_21554__$1 = (function (){var or__11743__auto__ = name;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_21555 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_21554__$1);
var delegate_name_21556 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_21555),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",delegate_name_21556," = function ("], 0));

var seq__21546_21557 = cljs.core.seq(params);
var chunk__21547_21558 = null;
var count__21548_21559 = (0);
var i__21549_21560 = (0);
while(true){
if((i__21549_21560 < count__21548_21559)){
var param_21561 = chunk__21547_21558.cljs$core$IIndexed$_nth$arity$2(null,i__21549_21560);
cljs.compiler.emit(param_21561);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21561,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21562 = seq__21546_21557;
var G__21563 = chunk__21547_21558;
var G__21564 = count__21548_21559;
var G__21565 = (i__21549_21560 + (1));
seq__21546_21557 = G__21562;
chunk__21547_21558 = G__21563;
count__21548_21559 = G__21564;
i__21549_21560 = G__21565;
continue;
} else {
var temp__5457__auto___21566 = cljs.core.seq(seq__21546_21557);
if(temp__5457__auto___21566){
var seq__21546_21567__$1 = temp__5457__auto___21566;
if(cljs.core.chunked_seq_QMARK_(seq__21546_21567__$1)){
var c__12674__auto___21568 = cljs.core.chunk_first(seq__21546_21567__$1);
var G__21569 = cljs.core.chunk_rest(seq__21546_21567__$1);
var G__21570 = c__12674__auto___21568;
var G__21571 = cljs.core.count(c__12674__auto___21568);
var G__21572 = (0);
seq__21546_21557 = G__21569;
chunk__21547_21558 = G__21570;
count__21548_21559 = G__21571;
i__21549_21560 = G__21572;
continue;
} else {
var param_21573 = cljs.core.first(seq__21546_21567__$1);
cljs.compiler.emit(param_21573);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21573,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21574 = cljs.core.next(seq__21546_21567__$1);
var G__21575 = null;
var G__21576 = (0);
var G__21577 = (0);
seq__21546_21557 = G__21574;
chunk__21547_21558 = G__21575;
count__21548_21559 = G__21576;
i__21549_21560 = G__21577;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_21555," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_21578 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_21578,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name_21556,".call(this,"], 0));

var seq__21550_21579 = cljs.core.seq(params);
var chunk__21551_21580 = null;
var count__21552_21581 = (0);
var i__21553_21582 = (0);
while(true){
if((i__21553_21582 < count__21552_21581)){
var param_21583 = chunk__21551_21580.cljs$core$IIndexed$_nth$arity$2(null,i__21553_21582);
cljs.compiler.emit(param_21583);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21583,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21584 = seq__21550_21579;
var G__21585 = chunk__21551_21580;
var G__21586 = count__21552_21581;
var G__21587 = (i__21553_21582 + (1));
seq__21550_21579 = G__21584;
chunk__21551_21580 = G__21585;
count__21552_21581 = G__21586;
i__21553_21582 = G__21587;
continue;
} else {
var temp__5457__auto___21588 = cljs.core.seq(seq__21550_21579);
if(temp__5457__auto___21588){
var seq__21550_21589__$1 = temp__5457__auto___21588;
if(cljs.core.chunked_seq_QMARK_(seq__21550_21589__$1)){
var c__12674__auto___21590 = cljs.core.chunk_first(seq__21550_21589__$1);
var G__21591 = cljs.core.chunk_rest(seq__21550_21589__$1);
var G__21592 = c__12674__auto___21590;
var G__21593 = cljs.core.count(c__12674__auto___21590);
var G__21594 = (0);
seq__21550_21579 = G__21591;
chunk__21551_21580 = G__21592;
count__21552_21581 = G__21593;
i__21553_21582 = G__21594;
continue;
} else {
var param_21595 = cljs.core.first(seq__21550_21589__$1);
cljs.compiler.emit(param_21595);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21595,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21596 = cljs.core.next(seq__21550_21589__$1);
var G__21597 = null;
var G__21598 = (0);
var G__21599 = (0);
seq__21550_21579 = G__21596;
chunk__21551_21580 = G__21597;
count__21552_21581 = G__21598;
i__21553_21582 = G__21599;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21555,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21555,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$name,name_21554__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21555,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_21556,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_21555,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn,(function (p__21603){
var map__21604 = p__21603;
var map__21604__$1 = ((((!((map__21604 == null)))?((((map__21604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21604.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21604):map__21604);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21604__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21604__$1,cljs.core.cst$kw$env);
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21604__$1,cljs.core.cst$kw$methods);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21604__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21604__$1,cljs.core.cst$kw$variadic);
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21604__$1,cljs.core.cst$kw$recur_DASH_frames);
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21604__$1,cljs.core.cst$kw$loop_DASH_lets);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__21604,map__21604__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__21600_SHARP_){
var and__11731__auto__ = p1__21600_SHARP_;
if(cljs.core.truth_(and__11731__auto__)){
return cljs.core.deref(cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(p1__21600_SHARP_));
} else {
return and__11731__auto__;
}
});})(map__21604,map__21604__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_21639__$1 = (function (){var or__11743__auto__ = name;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_21640 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_21639__$1);
var maxparams_21641 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,methods$));
var mmap_21642 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_21639__$1,mname_21640,maxparams_21641,loop_locals,map__21604,map__21604__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_21640),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_21639__$1,mname_21640,maxparams_21641,loop_locals,map__21604,map__21604__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_21643 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_21639__$1,mname_21640,maxparams_21641,mmap_21642,loop_locals,map__21604,map__21604__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__21601_SHARP_){
return cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__21601_SHARP_)));
});})(name_21639__$1,mname_21640,maxparams_21641,mmap_21642,loop_locals,map__21604,map__21604__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_21642));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_21640," = null;"], 0));

var seq__21606_21644 = cljs.core.seq(ms_21643);
var chunk__21607_21645 = null;
var count__21608_21646 = (0);
var i__21609_21647 = (0);
while(true){
if((i__21609_21647 < count__21608_21646)){
var vec__21610_21648 = chunk__21607_21645.cljs$core$IIndexed$_nth$arity$2(null,i__21609_21647);
var n_21649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21610_21648,(0),null);
var meth_21650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21610_21648,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_21649," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_21650))){
cljs.compiler.emit_variadic_fn_method(meth_21650);
} else {
cljs.compiler.emit_fn_method(meth_21650);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

var G__21651 = seq__21606_21644;
var G__21652 = chunk__21607_21645;
var G__21653 = count__21608_21646;
var G__21654 = (i__21609_21647 + (1));
seq__21606_21644 = G__21651;
chunk__21607_21645 = G__21652;
count__21608_21646 = G__21653;
i__21609_21647 = G__21654;
continue;
} else {
var temp__5457__auto___21655 = cljs.core.seq(seq__21606_21644);
if(temp__5457__auto___21655){
var seq__21606_21656__$1 = temp__5457__auto___21655;
if(cljs.core.chunked_seq_QMARK_(seq__21606_21656__$1)){
var c__12674__auto___21657 = cljs.core.chunk_first(seq__21606_21656__$1);
var G__21658 = cljs.core.chunk_rest(seq__21606_21656__$1);
var G__21659 = c__12674__auto___21657;
var G__21660 = cljs.core.count(c__12674__auto___21657);
var G__21661 = (0);
seq__21606_21644 = G__21658;
chunk__21607_21645 = G__21659;
count__21608_21646 = G__21660;
i__21609_21647 = G__21661;
continue;
} else {
var vec__21613_21662 = cljs.core.first(seq__21606_21656__$1);
var n_21663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21613_21662,(0),null);
var meth_21664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21613_21662,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_21663," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_21664))){
cljs.compiler.emit_variadic_fn_method(meth_21664);
} else {
cljs.compiler.emit_fn_method(meth_21664);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

var G__21665 = cljs.core.next(seq__21606_21656__$1);
var G__21666 = null;
var G__21667 = (0);
var G__21668 = (0);
seq__21606_21644 = G__21665;
chunk__21607_21645 = G__21666;
count__21608_21646 = G__21667;
i__21609_21647 = G__21668;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21640," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_21641),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):maxparams_21641)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_21641));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["switch(arguments.length){"], 0));

var seq__21616_21669 = cljs.core.seq(ms_21643);
var chunk__21617_21670 = null;
var count__21618_21671 = (0);
var i__21619_21672 = (0);
while(true){
if((i__21619_21672 < count__21618_21671)){
var vec__21620_21673 = chunk__21617_21670.cljs$core$IIndexed$_nth$arity$2(null,i__21619_21672);
var n_21674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21620_21673,(0),null);
var meth_21675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21620_21673,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_21675))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_21676 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_21676," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_21677 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_21676," = new cljs.core.IndexedSeq(",a_21677,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_21674,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_21641)),(((cljs.core.count(maxparams_21641) > (1)))?", ":null),restarg_21676,");"], 0));
} else {
var pcnt_21678 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_21675));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_21678,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_21674,".call(this",(((pcnt_21678 === (0)))?null:cljs.core._conj((function (){var x__12697__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_21678,maxparams_21641));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),",")),");"], 0));
}

var G__21679 = seq__21616_21669;
var G__21680 = chunk__21617_21670;
var G__21681 = count__21618_21671;
var G__21682 = (i__21619_21672 + (1));
seq__21616_21669 = G__21679;
chunk__21617_21670 = G__21680;
count__21618_21671 = G__21681;
i__21619_21672 = G__21682;
continue;
} else {
var temp__5457__auto___21683 = cljs.core.seq(seq__21616_21669);
if(temp__5457__auto___21683){
var seq__21616_21684__$1 = temp__5457__auto___21683;
if(cljs.core.chunked_seq_QMARK_(seq__21616_21684__$1)){
var c__12674__auto___21685 = cljs.core.chunk_first(seq__21616_21684__$1);
var G__21686 = cljs.core.chunk_rest(seq__21616_21684__$1);
var G__21687 = c__12674__auto___21685;
var G__21688 = cljs.core.count(c__12674__auto___21685);
var G__21689 = (0);
seq__21616_21669 = G__21686;
chunk__21617_21670 = G__21687;
count__21618_21671 = G__21688;
i__21619_21672 = G__21689;
continue;
} else {
var vec__21623_21690 = cljs.core.first(seq__21616_21684__$1);
var n_21691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21623_21690,(0),null);
var meth_21692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21623_21690,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_21692))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_21693 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_21693," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_21694 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_21693," = new cljs.core.IndexedSeq(",a_21694,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_21691,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_21641)),(((cljs.core.count(maxparams_21641) > (1)))?", ":null),restarg_21693,");"], 0));
} else {
var pcnt_21695 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_21692));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_21695,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_21691,".call(this",(((pcnt_21695 === (0)))?null:cljs.core._conj((function (){var x__12697__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_21695,maxparams_21641));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),",")),");"], 0));
}

var G__21696 = cljs.core.next(seq__21616_21684__$1);
var G__21697 = null;
var G__21698 = (0);
var G__21699 = (0);
seq__21616_21669 = G__21696;
chunk__21617_21670 = G__21697;
count__21618_21671 = G__21698;
i__21619_21672 = G__21699;
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
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21640,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21640,".cljs$lang$applyTo = ",cljs.core.some(((function (name_21639__$1,mname_21640,maxparams_21641,mmap_21642,ms_21643,loop_locals,map__21604,map__21604__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__21602_SHARP_){
var vec__21626 = p1__21602_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21626,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21626,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_21639__$1,mname_21640,maxparams_21641,mmap_21642,ms_21643,loop_locals,map__21604,map__21604__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_21643),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__21629_21700 = cljs.core.seq(ms_21643);
var chunk__21630_21701 = null;
var count__21631_21702 = (0);
var i__21632_21703 = (0);
while(true){
if((i__21632_21703 < count__21631_21702)){
var vec__21633_21704 = chunk__21630_21701.cljs$core$IIndexed$_nth$arity$2(null,i__21632_21703);
var n_21705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21633_21704,(0),null);
var meth_21706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21633_21704,(1),null);
var c_21707 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_21706));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_21706))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21640,".cljs$core$IFn$_invoke$arity$variadic = ",n_21705,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21640,".cljs$core$IFn$_invoke$arity$",c_21707," = ",n_21705,";"], 0));
}

var G__21708 = seq__21629_21700;
var G__21709 = chunk__21630_21701;
var G__21710 = count__21631_21702;
var G__21711 = (i__21632_21703 + (1));
seq__21629_21700 = G__21708;
chunk__21630_21701 = G__21709;
count__21631_21702 = G__21710;
i__21632_21703 = G__21711;
continue;
} else {
var temp__5457__auto___21712 = cljs.core.seq(seq__21629_21700);
if(temp__5457__auto___21712){
var seq__21629_21713__$1 = temp__5457__auto___21712;
if(cljs.core.chunked_seq_QMARK_(seq__21629_21713__$1)){
var c__12674__auto___21714 = cljs.core.chunk_first(seq__21629_21713__$1);
var G__21715 = cljs.core.chunk_rest(seq__21629_21713__$1);
var G__21716 = c__12674__auto___21714;
var G__21717 = cljs.core.count(c__12674__auto___21714);
var G__21718 = (0);
seq__21629_21700 = G__21715;
chunk__21630_21701 = G__21716;
count__21631_21702 = G__21717;
i__21632_21703 = G__21718;
continue;
} else {
var vec__21636_21719 = cljs.core.first(seq__21629_21713__$1);
var n_21720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21636_21719,(0),null);
var meth_21721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21636_21719,(1),null);
var c_21722 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_21721));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_21721))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21640,".cljs$core$IFn$_invoke$arity$variadic = ",n_21720,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21640,".cljs$core$IFn$_invoke$arity$",c_21722," = ",n_21720,";"], 0));
}

var G__21723 = cljs.core.next(seq__21629_21713__$1);
var G__21724 = null;
var G__21725 = (0);
var G__21726 = (0);
seq__21629_21700 = G__21723;
chunk__21630_21701 = G__21724;
count__21631_21702 = G__21725;
i__21632_21703 = G__21726;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_21640,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$do,(function (p__21727){
var map__21728 = p__21727;
var map__21728__$1 = ((((!((map__21728 == null)))?((((map__21728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21728):map__21728);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21728__$1,cljs.core.cst$kw$statements);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21728__$1,cljs.core.cst$kw$ret);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21728__$1,cljs.core.cst$kw$env);
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

var seq__21730_21734 = cljs.core.seq(statements);
var chunk__21731_21735 = null;
var count__21732_21736 = (0);
var i__21733_21737 = (0);
while(true){
if((i__21733_21737 < count__21732_21736)){
var s_21738 = chunk__21731_21735.cljs$core$IIndexed$_nth$arity$2(null,i__21733_21737);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_21738], 0));

var G__21739 = seq__21730_21734;
var G__21740 = chunk__21731_21735;
var G__21741 = count__21732_21736;
var G__21742 = (i__21733_21737 + (1));
seq__21730_21734 = G__21739;
chunk__21731_21735 = G__21740;
count__21732_21736 = G__21741;
i__21733_21737 = G__21742;
continue;
} else {
var temp__5457__auto___21743 = cljs.core.seq(seq__21730_21734);
if(temp__5457__auto___21743){
var seq__21730_21744__$1 = temp__5457__auto___21743;
if(cljs.core.chunked_seq_QMARK_(seq__21730_21744__$1)){
var c__12674__auto___21745 = cljs.core.chunk_first(seq__21730_21744__$1);
var G__21746 = cljs.core.chunk_rest(seq__21730_21744__$1);
var G__21747 = c__12674__auto___21745;
var G__21748 = cljs.core.count(c__12674__auto___21745);
var G__21749 = (0);
seq__21730_21734 = G__21746;
chunk__21731_21735 = G__21747;
count__21732_21736 = G__21748;
i__21733_21737 = G__21749;
continue;
} else {
var s_21750 = cljs.core.first(seq__21730_21744__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_21750], 0));

var G__21751 = cljs.core.next(seq__21730_21744__$1);
var G__21752 = null;
var G__21753 = (0);
var G__21754 = (0);
seq__21730_21734 = G__21751;
chunk__21731_21735 = G__21752;
count__21732_21736 = G__21753;
i__21733_21737 = G__21754;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$try,(function (p__21755){
var map__21756 = p__21755;
var map__21756__$1 = ((((!((map__21756 == null)))?((((map__21756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21756):map__21756);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21756__$1,cljs.core.cst$kw$env);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21756__$1,cljs.core.cst$kw$try);
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21756__$1,cljs.core.cst$kw$catch);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21756__$1,cljs.core.cst$kw$name);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21756__$1,cljs.core.cst$kw$finally);
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__21758,is_loop){
var map__21759 = p__21758;
var map__21759__$1 = ((((!((map__21759 == null)))?((((map__21759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21759):map__21759);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21759__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21759__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21759__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_21761_21770 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_21761_21770,context,map__21759,map__21759__$1,bindings,expr,env){
return (function (binding){
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_21761_21770,context,map__21759,map__21759__$1,bindings,expr,env))
,bindings):null));

try{var seq__21762_21771 = cljs.core.seq(bindings);
var chunk__21763_21772 = null;
var count__21764_21773 = (0);
var i__21765_21774 = (0);
while(true){
if((i__21765_21774 < count__21764_21773)){
var map__21766_21775 = chunk__21763_21772.cljs$core$IIndexed$_nth$arity$2(null,i__21765_21774);
var map__21766_21776__$1 = ((((!((map__21766_21775 == null)))?((((map__21766_21775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21766_21775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21766_21775):map__21766_21775);
var binding_21777 = map__21766_21776__$1;
var init_21778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21766_21776__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_21777);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_21778,";"], 0));

var G__21779 = seq__21762_21771;
var G__21780 = chunk__21763_21772;
var G__21781 = count__21764_21773;
var G__21782 = (i__21765_21774 + (1));
seq__21762_21771 = G__21779;
chunk__21763_21772 = G__21780;
count__21764_21773 = G__21781;
i__21765_21774 = G__21782;
continue;
} else {
var temp__5457__auto___21783 = cljs.core.seq(seq__21762_21771);
if(temp__5457__auto___21783){
var seq__21762_21784__$1 = temp__5457__auto___21783;
if(cljs.core.chunked_seq_QMARK_(seq__21762_21784__$1)){
var c__12674__auto___21785 = cljs.core.chunk_first(seq__21762_21784__$1);
var G__21786 = cljs.core.chunk_rest(seq__21762_21784__$1);
var G__21787 = c__12674__auto___21785;
var G__21788 = cljs.core.count(c__12674__auto___21785);
var G__21789 = (0);
seq__21762_21771 = G__21786;
chunk__21763_21772 = G__21787;
count__21764_21773 = G__21788;
i__21765_21774 = G__21789;
continue;
} else {
var map__21768_21790 = cljs.core.first(seq__21762_21784__$1);
var map__21768_21791__$1 = ((((!((map__21768_21790 == null)))?((((map__21768_21790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21768_21790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21768_21790):map__21768_21790);
var binding_21792 = map__21768_21791__$1;
var init_21793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21768_21791__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_21792);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_21793,";"], 0));

var G__21794 = cljs.core.next(seq__21762_21784__$1);
var G__21795 = null;
var G__21796 = (0);
var G__21797 = (0);
seq__21762_21771 = G__21794;
chunk__21763_21772 = G__21795;
count__21764_21773 = G__21796;
i__21765_21774 = G__21797;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_21761_21770;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$recur,(function (p__21798){
var map__21799 = p__21798;
var map__21799__$1 = ((((!((map__21799 == null)))?((((map__21799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21799):map__21799);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21799__$1,cljs.core.cst$kw$frame);
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21799__$1,cljs.core.cst$kw$exprs);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21799__$1,cljs.core.cst$kw$env);
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame);
var n__12788__auto___21801 = cljs.core.count(exprs);
var i_21802 = (0);
while(true){
if((i_21802 < n__12788__auto___21801)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_21802) : temps.call(null,i_21802))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_21802) : exprs.call(null,i_21802)),";"], 0));

var G__21803 = (i_21802 + (1));
i_21802 = G__21803;
continue;
} else {
}
break;
}

var n__12788__auto___21804 = cljs.core.count(exprs);
var i_21805 = (0);
while(true){
if((i_21805 < n__12788__auto___21804)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_21805) : params.call(null,i_21805)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_21805) : temps.call(null,i_21805)),";"], 0));

var G__21806 = (i_21805 + (1));
i_21805 = G__21806;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$letfn,(function (p__21807){
var map__21808 = p__21807;
var map__21808__$1 = ((((!((map__21808 == null)))?((((map__21808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21808):map__21808);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21808__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21808__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21808__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var seq__21810_21818 = cljs.core.seq(bindings);
var chunk__21811_21819 = null;
var count__21812_21820 = (0);
var i__21813_21821 = (0);
while(true){
if((i__21813_21821 < count__21812_21820)){
var map__21814_21822 = chunk__21811_21819.cljs$core$IIndexed$_nth$arity$2(null,i__21813_21821);
var map__21814_21823__$1 = ((((!((map__21814_21822 == null)))?((((map__21814_21822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21814_21822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21814_21822):map__21814_21822);
var binding_21824 = map__21814_21823__$1;
var init_21825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21814_21823__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_21824)," = ",init_21825,";"], 0));

var G__21826 = seq__21810_21818;
var G__21827 = chunk__21811_21819;
var G__21828 = count__21812_21820;
var G__21829 = (i__21813_21821 + (1));
seq__21810_21818 = G__21826;
chunk__21811_21819 = G__21827;
count__21812_21820 = G__21828;
i__21813_21821 = G__21829;
continue;
} else {
var temp__5457__auto___21830 = cljs.core.seq(seq__21810_21818);
if(temp__5457__auto___21830){
var seq__21810_21831__$1 = temp__5457__auto___21830;
if(cljs.core.chunked_seq_QMARK_(seq__21810_21831__$1)){
var c__12674__auto___21832 = cljs.core.chunk_first(seq__21810_21831__$1);
var G__21833 = cljs.core.chunk_rest(seq__21810_21831__$1);
var G__21834 = c__12674__auto___21832;
var G__21835 = cljs.core.count(c__12674__auto___21832);
var G__21836 = (0);
seq__21810_21818 = G__21833;
chunk__21811_21819 = G__21834;
count__21812_21820 = G__21835;
i__21813_21821 = G__21836;
continue;
} else {
var map__21816_21837 = cljs.core.first(seq__21810_21831__$1);
var map__21816_21838__$1 = ((((!((map__21816_21837 == null)))?((((map__21816_21837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21816_21837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21816_21837):map__21816_21837);
var binding_21839 = map__21816_21838__$1;
var init_21840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21816_21838__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_21839)," = ",init_21840,";"], 0));

var G__21841 = cljs.core.next(seq__21810_21831__$1);
var G__21842 = null;
var G__21843 = (0);
var G__21844 = (0);
seq__21810_21818 = G__21841;
chunk__21811_21819 = G__21842;
count__21812_21820 = G__21843;
i__21813_21821 = G__21844;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invoke,(function (p__21847){
var map__21848 = p__21847;
var map__21848__$1 = ((((!((map__21848 == null)))?((((map__21848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21848):map__21848);
var expr = map__21848__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21848__$1,cljs.core.cst$kw$f);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21848__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21848__$1,cljs.core.cst$kw$env);
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
var and__11731__auto____$4 = cljs.core.not((function (){var fexpr__21858 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$sym$clj,null,cljs.core.cst$sym$boolean,null,cljs.core.cst$sym$object,null,cljs.core.cst$sym$any,null,cljs.core.cst$sym$js,null,cljs.core.cst$sym$number,null,cljs.core.cst$sym$clj_DASH_or_DASH_nil,null,cljs.core.cst$sym$array,null,cljs.core.cst$sym$string,null,cljs.core.cst$sym$function,null,cljs.core.cst$sym$clj_DASH_nil,null], null), null);
return (fexpr__21858.cljs$core$IFn$_invoke$arity$1 ? fexpr__21858.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__21858.call(null,tag));
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
var vec__21850 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21848,map__21848__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21848,map__21848__$1,expr,f,args,env){
return (function (p1__21845_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21845_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21848,map__21848__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21848,map__21848__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21848,map__21848__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21848,map__21848__$1,expr,f,args,env){
return (function (p1__21846_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21846_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21848,map__21848__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21848,map__21848__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21850,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21850,(1),null);
var env__21041__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_21859 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args),".",pimpl_21859,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_21860 = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_21860,args)),(((mfa_21860 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_21860,args)),"], 0))"], 0));
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
var fprop_21861 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_21861," ? ",f__$1,fprop_21861,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_21861," ? ",f__$1,fprop_21861,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$new,(function (p__21862){
var map__21863 = p__21862;
var map__21863__$1 = ((((!((map__21863 == null)))?((((map__21863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21863):map__21863);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21863__$1,cljs.core.cst$kw$ctor);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21863__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21863__$1,cljs.core.cst$kw$env);
var env__21041__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set_BANG_,(function (p__21865){
var map__21866 = p__21865;
var map__21866__$1 = ((((!((map__21866 == null)))?((((map__21866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21866):map__21866);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21866__$1,cljs.core.cst$kw$target);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21866__$1,cljs.core.cst$kw$val);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21866__$1,cljs.core.cst$kw$env);
var env__21041__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__21868 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__21868__$1 = ((((!((map__21868 == null)))?((((map__21868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21868):map__21868);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21868__$1,cljs.core.cst$kw$options);
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21868__$1,cljs.core.cst$kw$js_DASH_dependency_DASH_index);
var map__21869 = options;
var map__21869__$1 = ((((!((map__21869 == null)))?((((map__21869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21869):map__21869);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21869__$1,cljs.core.cst$kw$target);
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21869__$1,cljs.core.cst$kw$optimizations);
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_);
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_));
var vec__21870 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nodejs,target)){
var map__21876 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__21876__$1 = ((((!((map__21876 == null)))?((((map__21876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21876.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21876):map__21876);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21876__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21876__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21870,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21870,(1),null);
var map__21873 = cljs.core.group_by(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__21873__$1 = ((((!((map__21873 == null)))?((((map__21873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21873.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21873):map__21873);
var global_exports_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21873__$1,true);
var libs_to_load__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21873__$1,false);
if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);"], 0));
} else {
}

var seq__21879_21895 = cljs.core.seq(libs_to_load__$1);
var chunk__21880_21896 = null;
var count__21881_21897 = (0);
var i__21882_21898 = (0);
while(true){
if((i__21882_21898 < count__21881_21897)){
var lib_21899 = chunk__21880_21896.cljs$core$IIndexed$_nth$arity$2(null,i__21882_21898);
if((cljs.analyzer.foreign_dep_QMARK_(lib_21899)) && (!(cljs.core.keyword_identical_QMARK_(optimizations,cljs.core.cst$kw$none)))){
} else {
if(cljs.core.truth_((function (){var or__11743__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_21899),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_21899),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__11743__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_21899),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_21899),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_21899),"');"], 0));

}
}
}

var G__21900 = seq__21879_21895;
var G__21901 = chunk__21880_21896;
var G__21902 = count__21881_21897;
var G__21903 = (i__21882_21898 + (1));
seq__21879_21895 = G__21900;
chunk__21880_21896 = G__21901;
count__21881_21897 = G__21902;
i__21882_21898 = G__21903;
continue;
} else {
var temp__5457__auto___21904 = cljs.core.seq(seq__21879_21895);
if(temp__5457__auto___21904){
var seq__21879_21905__$1 = temp__5457__auto___21904;
if(cljs.core.chunked_seq_QMARK_(seq__21879_21905__$1)){
var c__12674__auto___21906 = cljs.core.chunk_first(seq__21879_21905__$1);
var G__21907 = cljs.core.chunk_rest(seq__21879_21905__$1);
var G__21908 = c__12674__auto___21906;
var G__21909 = cljs.core.count(c__12674__auto___21906);
var G__21910 = (0);
seq__21879_21895 = G__21907;
chunk__21880_21896 = G__21908;
count__21881_21897 = G__21909;
i__21882_21898 = G__21910;
continue;
} else {
var lib_21911 = cljs.core.first(seq__21879_21905__$1);
if((cljs.analyzer.foreign_dep_QMARK_(lib_21911)) && (!(cljs.core.keyword_identical_QMARK_(optimizations,cljs.core.cst$kw$none)))){
} else {
if(cljs.core.truth_((function (){var or__11743__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_21911),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_21911),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__11743__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_21911),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_21911),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_21911),"');"], 0));

}
}
}

var G__21912 = cljs.core.next(seq__21879_21905__$1);
var G__21913 = null;
var G__21914 = (0);
var G__21915 = (0);
seq__21879_21895 = G__21912;
chunk__21880_21896 = G__21913;
count__21881_21897 = G__21914;
i__21882_21898 = G__21915;
continue;
}
} else {
}
}
break;
}

var seq__21883_21916 = cljs.core.seq(node_libs);
var chunk__21884_21917 = null;
var count__21885_21918 = (0);
var i__21886_21919 = (0);
while(true){
if((i__21886_21919 < count__21885_21918)){
var lib_21920 = chunk__21884_21917.cljs$core$IIndexed$_nth$arity$2(null,i__21886_21919);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_21920)," = require('",lib_21920,"');"], 0));

var G__21921 = seq__21883_21916;
var G__21922 = chunk__21884_21917;
var G__21923 = count__21885_21918;
var G__21924 = (i__21886_21919 + (1));
seq__21883_21916 = G__21921;
chunk__21884_21917 = G__21922;
count__21885_21918 = G__21923;
i__21886_21919 = G__21924;
continue;
} else {
var temp__5457__auto___21925 = cljs.core.seq(seq__21883_21916);
if(temp__5457__auto___21925){
var seq__21883_21926__$1 = temp__5457__auto___21925;
if(cljs.core.chunked_seq_QMARK_(seq__21883_21926__$1)){
var c__12674__auto___21927 = cljs.core.chunk_first(seq__21883_21926__$1);
var G__21928 = cljs.core.chunk_rest(seq__21883_21926__$1);
var G__21929 = c__12674__auto___21927;
var G__21930 = cljs.core.count(c__12674__auto___21927);
var G__21931 = (0);
seq__21883_21916 = G__21928;
chunk__21884_21917 = G__21929;
count__21885_21918 = G__21930;
i__21886_21919 = G__21931;
continue;
} else {
var lib_21932 = cljs.core.first(seq__21883_21926__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_21932)," = require('",lib_21932,"');"], 0));

var G__21933 = cljs.core.next(seq__21883_21926__$1);
var G__21934 = null;
var G__21935 = (0);
var G__21936 = (0);
seq__21883_21916 = G__21933;
chunk__21884_21917 = G__21934;
count__21885_21918 = G__21935;
i__21886_21919 = G__21936;
continue;
}
} else {
}
}
break;
}

var seq__21887_21937 = cljs.core.seq(global_exports_libs);
var chunk__21888_21938 = null;
var count__21889_21939 = (0);
var i__21890_21940 = (0);
while(true){
if((i__21890_21940 < count__21889_21939)){
var lib_21941 = chunk__21888_21938.cljs$core$IIndexed$_nth$arity$2(null,i__21890_21940);
var map__21891_21942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_21941));
var map__21891_21943__$1 = ((((!((map__21891_21942 == null)))?((((map__21891_21942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21891_21942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21891_21942):map__21891_21942);
var global_exports_21944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21891_21943__$1,cljs.core.cst$kw$global_DASH_exports);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib_21941)," = goog.global.",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_21944,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_21941)),";"], 0));

var G__21945 = seq__21887_21937;
var G__21946 = chunk__21888_21938;
var G__21947 = count__21889_21939;
var G__21948 = (i__21890_21940 + (1));
seq__21887_21937 = G__21945;
chunk__21888_21938 = G__21946;
count__21889_21939 = G__21947;
i__21890_21940 = G__21948;
continue;
} else {
var temp__5457__auto___21949 = cljs.core.seq(seq__21887_21937);
if(temp__5457__auto___21949){
var seq__21887_21950__$1 = temp__5457__auto___21949;
if(cljs.core.chunked_seq_QMARK_(seq__21887_21950__$1)){
var c__12674__auto___21951 = cljs.core.chunk_first(seq__21887_21950__$1);
var G__21952 = cljs.core.chunk_rest(seq__21887_21950__$1);
var G__21953 = c__12674__auto___21951;
var G__21954 = cljs.core.count(c__12674__auto___21951);
var G__21955 = (0);
seq__21887_21937 = G__21952;
chunk__21888_21938 = G__21953;
count__21889_21939 = G__21954;
i__21890_21940 = G__21955;
continue;
} else {
var lib_21956 = cljs.core.first(seq__21887_21950__$1);
var map__21893_21957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_21956));
var map__21893_21958__$1 = ((((!((map__21893_21957 == null)))?((((map__21893_21957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21893_21957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21893_21957):map__21893_21957);
var global_exports_21959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21893_21958__$1,cljs.core.cst$kw$global_DASH_exports);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib_21956)," = goog.global.",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_21959,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_21956)),";"], 0));

var G__21960 = cljs.core.next(seq__21887_21950__$1);
var G__21961 = null;
var G__21962 = (0);
var G__21963 = (0);
seq__21887_21937 = G__21960;
chunk__21888_21938 = G__21961;
count__21889_21939 = G__21962;
i__21890_21940 = G__21963;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns_STAR_,(function (p__21964){
var map__21965 = p__21964;
var map__21965__$1 = ((((!((map__21965 == null)))?((((map__21965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21965):map__21965);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21965__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21965__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21965__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21965__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21965__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21965__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21965__$1,cljs.core.cst$kw$deps);
cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_env.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["null;"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns,(function (p__21967){
var map__21968 = p__21967;
var map__21968__$1 = ((((!((map__21968 == null)))?((((map__21968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21968):map__21968);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21968__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21968__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21968__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21968__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21968__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21968__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21968__$1,cljs.core.cst$kw$deps);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deftype_STAR_,(function (p__21970){
var map__21971 = p__21970;
var map__21971__$1 = ((((!((map__21971 == null)))?((((map__21971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21971):map__21971);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21971__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21971__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21971__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21971__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21971__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__21973_21991 = cljs.core.seq(protocols);
var chunk__21974_21992 = null;
var count__21975_21993 = (0);
var i__21976_21994 = (0);
while(true){
if((i__21976_21994 < count__21975_21993)){
var protocol_21995 = chunk__21974_21992.cljs$core$IIndexed$_nth$arity$2(null,i__21976_21994);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_21995)].join('')),"}"], 0));

var G__21996 = seq__21973_21991;
var G__21997 = chunk__21974_21992;
var G__21998 = count__21975_21993;
var G__21999 = (i__21976_21994 + (1));
seq__21973_21991 = G__21996;
chunk__21974_21992 = G__21997;
count__21975_21993 = G__21998;
i__21976_21994 = G__21999;
continue;
} else {
var temp__5457__auto___22000 = cljs.core.seq(seq__21973_21991);
if(temp__5457__auto___22000){
var seq__21973_22001__$1 = temp__5457__auto___22000;
if(cljs.core.chunked_seq_QMARK_(seq__21973_22001__$1)){
var c__12674__auto___22002 = cljs.core.chunk_first(seq__21973_22001__$1);
var G__22003 = cljs.core.chunk_rest(seq__21973_22001__$1);
var G__22004 = c__12674__auto___22002;
var G__22005 = cljs.core.count(c__12674__auto___22002);
var G__22006 = (0);
seq__21973_21991 = G__22003;
chunk__21974_21992 = G__22004;
count__21975_21993 = G__22005;
i__21976_21994 = G__22006;
continue;
} else {
var protocol_22007 = cljs.core.first(seq__21973_22001__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22007)].join('')),"}"], 0));

var G__22008 = cljs.core.next(seq__21973_22001__$1);
var G__22009 = null;
var G__22010 = (0);
var G__22011 = (0);
seq__21973_21991 = G__22008;
chunk__21974_21992 = G__22009;
count__21975_21993 = G__22010;
i__21976_21994 = G__22011;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__21977_22012 = cljs.core.seq(fields__$1);
var chunk__21978_22013 = null;
var count__21979_22014 = (0);
var i__21980_22015 = (0);
while(true){
if((i__21980_22015 < count__21979_22014)){
var fld_22016 = chunk__21978_22013.cljs$core$IIndexed$_nth$arity$2(null,i__21980_22015);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_22016," = ",fld_22016,";"], 0));

var G__22017 = seq__21977_22012;
var G__22018 = chunk__21978_22013;
var G__22019 = count__21979_22014;
var G__22020 = (i__21980_22015 + (1));
seq__21977_22012 = G__22017;
chunk__21978_22013 = G__22018;
count__21979_22014 = G__22019;
i__21980_22015 = G__22020;
continue;
} else {
var temp__5457__auto___22021 = cljs.core.seq(seq__21977_22012);
if(temp__5457__auto___22021){
var seq__21977_22022__$1 = temp__5457__auto___22021;
if(cljs.core.chunked_seq_QMARK_(seq__21977_22022__$1)){
var c__12674__auto___22023 = cljs.core.chunk_first(seq__21977_22022__$1);
var G__22024 = cljs.core.chunk_rest(seq__21977_22022__$1);
var G__22025 = c__12674__auto___22023;
var G__22026 = cljs.core.count(c__12674__auto___22023);
var G__22027 = (0);
seq__21977_22012 = G__22024;
chunk__21978_22013 = G__22025;
count__21979_22014 = G__22026;
i__21980_22015 = G__22027;
continue;
} else {
var fld_22028 = cljs.core.first(seq__21977_22022__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_22028," = ",fld_22028,";"], 0));

var G__22029 = cljs.core.next(seq__21977_22022__$1);
var G__22030 = null;
var G__22031 = (0);
var G__22032 = (0);
seq__21977_22012 = G__22029;
chunk__21978_22013 = G__22030;
count__21979_22014 = G__22031;
i__21980_22015 = G__22032;
continue;
}
} else {
}
}
break;
}

var seq__21981_22033 = cljs.core.seq(pmasks);
var chunk__21982_22034 = null;
var count__21983_22035 = (0);
var i__21984_22036 = (0);
while(true){
if((i__21984_22036 < count__21983_22035)){
var vec__21985_22037 = chunk__21982_22034.cljs$core$IIndexed$_nth$arity$2(null,i__21984_22036);
var pno_22038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21985_22037,(0),null);
var pmask_22039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21985_22037,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_22038,"$ = ",pmask_22039,";"], 0));

var G__22040 = seq__21981_22033;
var G__22041 = chunk__21982_22034;
var G__22042 = count__21983_22035;
var G__22043 = (i__21984_22036 + (1));
seq__21981_22033 = G__22040;
chunk__21982_22034 = G__22041;
count__21983_22035 = G__22042;
i__21984_22036 = G__22043;
continue;
} else {
var temp__5457__auto___22044 = cljs.core.seq(seq__21981_22033);
if(temp__5457__auto___22044){
var seq__21981_22045__$1 = temp__5457__auto___22044;
if(cljs.core.chunked_seq_QMARK_(seq__21981_22045__$1)){
var c__12674__auto___22046 = cljs.core.chunk_first(seq__21981_22045__$1);
var G__22047 = cljs.core.chunk_rest(seq__21981_22045__$1);
var G__22048 = c__12674__auto___22046;
var G__22049 = cljs.core.count(c__12674__auto___22046);
var G__22050 = (0);
seq__21981_22033 = G__22047;
chunk__21982_22034 = G__22048;
count__21983_22035 = G__22049;
i__21984_22036 = G__22050;
continue;
} else {
var vec__21988_22051 = cljs.core.first(seq__21981_22045__$1);
var pno_22052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21988_22051,(0),null);
var pmask_22053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21988_22051,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_22052,"$ = ",pmask_22053,";"], 0));

var G__22054 = cljs.core.next(seq__21981_22045__$1);
var G__22055 = null;
var G__22056 = (0);
var G__22057 = (0);
seq__21981_22033 = G__22054;
chunk__21982_22034 = G__22055;
count__21983_22035 = G__22056;
i__21984_22036 = G__22057;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$defrecord_STAR_,(function (p__22058){
var map__22059 = p__22058;
var map__22059__$1 = ((((!((map__22059 == null)))?((((map__22059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22059.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22059):map__22059);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22059__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22059__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22059__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22059__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22059__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.cst$sym$__hash], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__22061_22079 = cljs.core.seq(protocols);
var chunk__22062_22080 = null;
var count__22063_22081 = (0);
var i__22064_22082 = (0);
while(true){
if((i__22064_22082 < count__22063_22081)){
var protocol_22083 = chunk__22062_22080.cljs$core$IIndexed$_nth$arity$2(null,i__22064_22082);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22083)].join('')),"}"], 0));

var G__22084 = seq__22061_22079;
var G__22085 = chunk__22062_22080;
var G__22086 = count__22063_22081;
var G__22087 = (i__22064_22082 + (1));
seq__22061_22079 = G__22084;
chunk__22062_22080 = G__22085;
count__22063_22081 = G__22086;
i__22064_22082 = G__22087;
continue;
} else {
var temp__5457__auto___22088 = cljs.core.seq(seq__22061_22079);
if(temp__5457__auto___22088){
var seq__22061_22089__$1 = temp__5457__auto___22088;
if(cljs.core.chunked_seq_QMARK_(seq__22061_22089__$1)){
var c__12674__auto___22090 = cljs.core.chunk_first(seq__22061_22089__$1);
var G__22091 = cljs.core.chunk_rest(seq__22061_22089__$1);
var G__22092 = c__12674__auto___22090;
var G__22093 = cljs.core.count(c__12674__auto___22090);
var G__22094 = (0);
seq__22061_22079 = G__22091;
chunk__22062_22080 = G__22092;
count__22063_22081 = G__22093;
i__22064_22082 = G__22094;
continue;
} else {
var protocol_22095 = cljs.core.first(seq__22061_22089__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22095)].join('')),"}"], 0));

var G__22096 = cljs.core.next(seq__22061_22089__$1);
var G__22097 = null;
var G__22098 = (0);
var G__22099 = (0);
seq__22061_22079 = G__22096;
chunk__22062_22080 = G__22097;
count__22063_22081 = G__22098;
i__22064_22082 = G__22099;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__22065_22100 = cljs.core.seq(fields__$1);
var chunk__22066_22101 = null;
var count__22067_22102 = (0);
var i__22068_22103 = (0);
while(true){
if((i__22068_22103 < count__22067_22102)){
var fld_22104 = chunk__22066_22101.cljs$core$IIndexed$_nth$arity$2(null,i__22068_22103);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_22104," = ",fld_22104,";"], 0));

var G__22105 = seq__22065_22100;
var G__22106 = chunk__22066_22101;
var G__22107 = count__22067_22102;
var G__22108 = (i__22068_22103 + (1));
seq__22065_22100 = G__22105;
chunk__22066_22101 = G__22106;
count__22067_22102 = G__22107;
i__22068_22103 = G__22108;
continue;
} else {
var temp__5457__auto___22109 = cljs.core.seq(seq__22065_22100);
if(temp__5457__auto___22109){
var seq__22065_22110__$1 = temp__5457__auto___22109;
if(cljs.core.chunked_seq_QMARK_(seq__22065_22110__$1)){
var c__12674__auto___22111 = cljs.core.chunk_first(seq__22065_22110__$1);
var G__22112 = cljs.core.chunk_rest(seq__22065_22110__$1);
var G__22113 = c__12674__auto___22111;
var G__22114 = cljs.core.count(c__12674__auto___22111);
var G__22115 = (0);
seq__22065_22100 = G__22112;
chunk__22066_22101 = G__22113;
count__22067_22102 = G__22114;
i__22068_22103 = G__22115;
continue;
} else {
var fld_22116 = cljs.core.first(seq__22065_22110__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_22116," = ",fld_22116,";"], 0));

var G__22117 = cljs.core.next(seq__22065_22110__$1);
var G__22118 = null;
var G__22119 = (0);
var G__22120 = (0);
seq__22065_22100 = G__22117;
chunk__22066_22101 = G__22118;
count__22067_22102 = G__22119;
i__22068_22103 = G__22120;
continue;
}
} else {
}
}
break;
}

var seq__22069_22121 = cljs.core.seq(pmasks);
var chunk__22070_22122 = null;
var count__22071_22123 = (0);
var i__22072_22124 = (0);
while(true){
if((i__22072_22124 < count__22071_22123)){
var vec__22073_22125 = chunk__22070_22122.cljs$core$IIndexed$_nth$arity$2(null,i__22072_22124);
var pno_22126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22073_22125,(0),null);
var pmask_22127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22073_22125,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_22126,"$ = ",pmask_22127,";"], 0));

var G__22128 = seq__22069_22121;
var G__22129 = chunk__22070_22122;
var G__22130 = count__22071_22123;
var G__22131 = (i__22072_22124 + (1));
seq__22069_22121 = G__22128;
chunk__22070_22122 = G__22129;
count__22071_22123 = G__22130;
i__22072_22124 = G__22131;
continue;
} else {
var temp__5457__auto___22132 = cljs.core.seq(seq__22069_22121);
if(temp__5457__auto___22132){
var seq__22069_22133__$1 = temp__5457__auto___22132;
if(cljs.core.chunked_seq_QMARK_(seq__22069_22133__$1)){
var c__12674__auto___22134 = cljs.core.chunk_first(seq__22069_22133__$1);
var G__22135 = cljs.core.chunk_rest(seq__22069_22133__$1);
var G__22136 = c__12674__auto___22134;
var G__22137 = cljs.core.count(c__12674__auto___22134);
var G__22138 = (0);
seq__22069_22121 = G__22135;
chunk__22070_22122 = G__22136;
count__22071_22123 = G__22137;
i__22072_22124 = G__22138;
continue;
} else {
var vec__22076_22139 = cljs.core.first(seq__22069_22133__$1);
var pno_22140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22076_22139,(0),null);
var pmask_22141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22076_22139,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_22140,"$ = ",pmask_22141,";"], 0));

var G__22142 = cljs.core.next(seq__22069_22133__$1);
var G__22143 = null;
var G__22144 = (0);
var G__22145 = (0);
seq__22069_22121 = G__22142;
chunk__22070_22122 = G__22143;
count__22071_22123 = G__22144;
i__22072_22124 = G__22145;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dot,(function (p__22146){
var map__22147 = p__22146;
var map__22147__$1 = ((((!((map__22147 == null)))?((((map__22147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22147):map__22147);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22147__$1,cljs.core.cst$kw$target);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22147__$1,cljs.core.cst$kw$field);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22147__$1,cljs.core.cst$kw$method);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22147__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22147__$1,cljs.core.cst$kw$env);
var env__21041__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js,(function (p__22149){
var map__22150 = p__22149;
var map__22150__$1 = ((((!((map__22150 == null)))?((((map__22150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22150):map__22150);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22150__$1,cljs.core.cst$kw$op);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22150__$1,cljs.core.cst$kw$env);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22150__$1,cljs.core.cst$kw$code);
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22150__$1,cljs.core.cst$kw$segs);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22150__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_((function (){var and__11731__auto__ = code;
if(cljs.core.truth_(and__11731__auto__)){
var G__22152 = clojure.string.trim(code);
var G__22153 = "/*";
return goog.string.startsWith(G__22152,G__22153);
} else {
return and__11731__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
var env__21041__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21041__auto__))){
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

var seq__22157 = cljs.core.seq(table);
var chunk__22158 = null;
var count__22159 = (0);
var i__22160 = (0);
while(true){
if((i__22160 < count__22159)){
var vec__22161 = chunk__22158.cljs$core$IIndexed$_nth$arity$2(null,i__22160);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22161,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22161,(1),null);
var ns_22167 = cljs.core.namespace(sym);
var name_22168 = cljs.core.name(sym);
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

var G__22169 = seq__22157;
var G__22170 = chunk__22158;
var G__22171 = count__22159;
var G__22172 = (i__22160 + (1));
seq__22157 = G__22169;
chunk__22158 = G__22170;
count__22159 = G__22171;
i__22160 = G__22172;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22157);
if(temp__5457__auto__){
var seq__22157__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22157__$1)){
var c__12674__auto__ = cljs.core.chunk_first(seq__22157__$1);
var G__22173 = cljs.core.chunk_rest(seq__22157__$1);
var G__22174 = c__12674__auto__;
var G__22175 = cljs.core.count(c__12674__auto__);
var G__22176 = (0);
seq__22157 = G__22173;
chunk__22158 = G__22174;
count__22159 = G__22175;
i__22160 = G__22176;
continue;
} else {
var vec__22164 = cljs.core.first(seq__22157__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22164,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22164,(1),null);
var ns_22177 = cljs.core.namespace(sym);
var name_22178 = cljs.core.name(sym);
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

var G__22179 = cljs.core.next(seq__22157__$1);
var G__22180 = null;
var G__22181 = (0);
var G__22182 = (0);
seq__22157 = G__22179;
chunk__22158 = G__22180;
count__22159 = G__22181;
i__22160 = G__22182;
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
var G__22184 = arguments.length;
switch (G__22184) {
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
var k_22189 = cljs.core.first(ks);
var vec__22185_22190 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_22189);
var top_22191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22185_22190,(0),null);
var prefix_SINGLEQUOTE__22192 = vec__22185_22190;
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$prototype,k_22189)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__22192) == null))){
if(!((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_22191)) || (cljs.core.contains_QMARK_(known_externs,top_22191)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__22192)),";"], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_22191);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__22192)),";"], 0));
}
} else {
}

var m_22193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_22189);
if(cljs.core.empty_QMARK_(m_22193)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__22192,m_22193,top_level,known_externs);
}

var G__22194 = cljs.core.next(ks);
ks = G__22194;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;

