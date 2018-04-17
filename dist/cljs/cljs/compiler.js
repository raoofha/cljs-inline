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
var map__21054 = s;
var map__21054__$1 = ((((!((map__21054 == null)))?((((map__21054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21054):map__21054);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21054__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21054__$1,cljs.core.cst$kw$info);
var d = (0);
var G__21057 = info;
var map__21058 = G__21057;
var map__21058__$1 = ((((!((map__21058 == null)))?((((map__21058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21058):map__21058);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21058__$1,cljs.core.cst$kw$shadow);
var d__$1 = d;
var G__21057__$1 = G__21057;
while(true){
var d__$2 = d__$1;
var map__21060 = G__21057__$1;
var map__21060__$1 = ((((!((map__21060 == null)))?((((map__21060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21060):map__21060);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21060__$1,cljs.core.cst$kw$shadow);
if(cljs.core.truth_(shadow__$1)){
var G__21062 = (d__$2 + (1));
var G__21063 = shadow__$1;
d__$1 = G__21062;
G__21057__$1 = G__21063;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__21064){
var map__21065 = p__21064;
var map__21065__$1 = ((((!((map__21065 == null)))?((((map__21065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21065):map__21065);
var name_var = map__21065__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21065__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21065__$1,cljs.core.cst$kw$info);
var name__$1 = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__21067 = info;
var map__21067__$1 = ((((!((map__21067 == null)))?((((map__21067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21067.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21067):map__21067);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21067__$1,cljs.core.cst$kw$ns);
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21067__$1,cljs.core.cst$kw$fn_DASH_scope);
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.cst$kw$name),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__21069 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__21069) : cljs.compiler.munge.call(null,G__21069));
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
var G__21071 = arguments.length;
switch (G__21071) {
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
var G__21073 = cp;
switch (G__21073) {
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
var seq__21075_21079 = cljs.core.seq(s);
var chunk__21076_21080 = null;
var count__21077_21081 = (0);
var i__21078_21082 = (0);
while(true){
if((i__21078_21082 < count__21077_21081)){
var c_21083 = chunk__21076_21080.cljs$core$IIndexed$_nth$arity$2(null,i__21078_21082);
sb.append(cljs.compiler.escape_char(c_21083));

var G__21084 = seq__21075_21079;
var G__21085 = chunk__21076_21080;
var G__21086 = count__21077_21081;
var G__21087 = (i__21078_21082 + (1));
seq__21075_21079 = G__21084;
chunk__21076_21080 = G__21085;
count__21077_21081 = G__21086;
i__21078_21082 = G__21087;
continue;
} else {
var temp__5457__auto___21088 = cljs.core.seq(seq__21075_21079);
if(temp__5457__auto___21088){
var seq__21075_21089__$1 = temp__5457__auto___21088;
if(cljs.core.chunked_seq_QMARK_(seq__21075_21089__$1)){
var c__12674__auto___21090 = cljs.core.chunk_first(seq__21075_21089__$1);
var G__21091 = cljs.core.chunk_rest(seq__21075_21089__$1);
var G__21092 = c__12674__auto___21090;
var G__21093 = cljs.core.count(c__12674__auto___21090);
var G__21094 = (0);
seq__21075_21079 = G__21091;
chunk__21076_21080 = G__21092;
count__21077_21081 = G__21093;
i__21078_21082 = G__21094;
continue;
} else {
var c_21095 = cljs.core.first(seq__21075_21089__$1);
sb.append(cljs.compiler.escape_char(c_21095));

var G__21096 = cljs.core.next(seq__21075_21089__$1);
var G__21097 = null;
var G__21098 = (0);
var G__21099 = (0);
seq__21075_21079 = G__21096;
chunk__21076_21080 = G__21097;
count__21077_21081 = G__21098;
i__21078_21082 = G__21099;
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
var val__19280__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__19280__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__21100_21105 = ast;
var map__21100_21106__$1 = ((((!((map__21100_21105 == null)))?((((map__21100_21105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21100_21105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21100_21105):map__21100_21105);
var env_21107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21100_21106__$1,cljs.core.cst$kw$env);
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env_21107))){
var map__21102_21108 = env_21107;
var map__21102_21109__$1 = ((((!((map__21102_21108 == null)))?((((map__21102_21108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21102_21108.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21102_21108):map__21102_21108);
var line_21110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21102_21109__$1,cljs.core.cst$kw$line);
var column_21111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21102_21109__$1,cljs.core.cst$kw$column);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__21102_21108,map__21102_21109__$1,line_21110,column_21111,map__21100_21105,map__21100_21106__$1,env_21107,val__19280__auto__){
return (function (m){
var minfo = (function (){var G__21104 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gcol,cljs.core.cst$kw$gen_DASH_col.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$gline,cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$var)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21104,cljs.core.cst$kw$name,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__21104;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_map,(line_21110 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__21102_21108,map__21102_21109__$1,line_21110,column_21111,map__21100_21105,map__21100_21106__$1,env_21107,val__19280__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_21111)?(column_21111 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__21102_21108,map__21102_21109__$1,line_21110,column_21111,map__21100_21105,map__21100_21106__$1,env_21107,val__19280__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__21102_21108,map__21102_21109__$1,line_21110,column_21111,map__21100_21105,map__21100_21106__$1,env_21107,val__19280__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__21102_21108,map__21102_21109__$1,line_21110,column_21111,map__21100_21105,map__21100_21106__$1,env_21107,val__19280__auto__))
,cljs.core.sorted_map()));
});})(map__21102_21108,map__21102_21109__$1,line_21110,column_21111,map__21100_21105,map__21100_21106__$1,env_21107,val__19280__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__19280__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__13029__auto__ = [];
var len__13022__auto___21118 = arguments.length;
var i__13023__auto___21119 = (0);
while(true){
if((i__13023__auto___21119 < len__13022__auto___21118)){
args__13029__auto__.push((arguments[i__13023__auto___21119]));

var G__21120 = (i__13023__auto___21119 + (1));
i__13023__auto___21119 = G__21120;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((0) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__13030__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__21114_21121 = cljs.core.seq(xs);
var chunk__21115_21122 = null;
var count__21116_21123 = (0);
var i__21117_21124 = (0);
while(true){
if((i__21117_21124 < count__21116_21123)){
var x_21125 = chunk__21115_21122.cljs$core$IIndexed$_nth$arity$2(null,i__21117_21124);
if((x_21125 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_21125)){
cljs.compiler.emit(x_21125);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_21125)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_21125);
} else {
if(goog.isFunction(x_21125)){
(x_21125.cljs$core$IFn$_invoke$arity$0 ? x_21125.cljs$core$IFn$_invoke$arity$0() : x_21125.call(null));
} else {
var s_21126 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_21125], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__21114_21121,chunk__21115_21122,count__21116_21123,i__21117_21124,s_21126,x_21125){
return (function (p1__21112_SHARP_){
return (p1__21112_SHARP_ + cljs.core.count(s_21126));
});})(seq__21114_21121,chunk__21115_21122,count__21116_21123,i__21117_21124,s_21126,x_21125))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_21126], 0));

}
}
}
}

var G__21127 = seq__21114_21121;
var G__21128 = chunk__21115_21122;
var G__21129 = count__21116_21123;
var G__21130 = (i__21117_21124 + (1));
seq__21114_21121 = G__21127;
chunk__21115_21122 = G__21128;
count__21116_21123 = G__21129;
i__21117_21124 = G__21130;
continue;
} else {
var temp__5457__auto___21131 = cljs.core.seq(seq__21114_21121);
if(temp__5457__auto___21131){
var seq__21114_21132__$1 = temp__5457__auto___21131;
if(cljs.core.chunked_seq_QMARK_(seq__21114_21132__$1)){
var c__12674__auto___21133 = cljs.core.chunk_first(seq__21114_21132__$1);
var G__21134 = cljs.core.chunk_rest(seq__21114_21132__$1);
var G__21135 = c__12674__auto___21133;
var G__21136 = cljs.core.count(c__12674__auto___21133);
var G__21137 = (0);
seq__21114_21121 = G__21134;
chunk__21115_21122 = G__21135;
count__21116_21123 = G__21136;
i__21117_21124 = G__21137;
continue;
} else {
var x_21138 = cljs.core.first(seq__21114_21132__$1);
if((x_21138 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_21138)){
cljs.compiler.emit(x_21138);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_21138)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_21138);
} else {
if(goog.isFunction(x_21138)){
(x_21138.cljs$core$IFn$_invoke$arity$0 ? x_21138.cljs$core$IFn$_invoke$arity$0() : x_21138.call(null));
} else {
var s_21139 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_21138], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__21114_21121,chunk__21115_21122,count__21116_21123,i__21117_21124,s_21139,x_21138,seq__21114_21132__$1,temp__5457__auto___21131){
return (function (p1__21112_SHARP_){
return (p1__21112_SHARP_ + cljs.core.count(s_21139));
});})(seq__21114_21121,chunk__21115_21122,count__21116_21123,i__21117_21124,s_21139,x_21138,seq__21114_21132__$1,temp__5457__auto___21131))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_21139], 0));

}
}
}
}

var G__21140 = cljs.core.next(seq__21114_21132__$1);
var G__21141 = null;
var G__21142 = (0);
var G__21143 = (0);
seq__21114_21121 = G__21140;
chunk__21115_21122 = G__21141;
count__21116_21123 = G__21142;
i__21117_21124 = G__21143;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq21113){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21113));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__13029__auto__ = [];
var len__13022__auto___21149 = arguments.length;
var i__13023__auto___21150 = (0);
while(true){
if((i__13023__auto___21150 < len__13022__auto___21149)){
args__13029__auto__.push((arguments[i__13023__auto___21150]));

var G__21151 = (i__13023__auto___21150 + (1));
i__13023__auto___21150 = G__21151;
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

var _STAR_flush_on_newline_STAR_21145_21152 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println();
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_21145_21152;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__21146){
var map__21147 = p__21146;
var map__21147__$1 = ((((!((map__21147 == null)))?((((map__21147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21147):map__21147);
var m = map__21147__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21147__$1,cljs.core.cst$kw$gen_DASH_line);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$gen_DASH_line,(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$gen_DASH_col,(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq21144){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21144));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__12870__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_21153_21155 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_21154_21156 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_21153_21155,_STAR_print_fn_STAR_21154_21156,sb__12870__auto__){
return (function (x__12871__auto__){
return sb__12870__auto__.append(x__12871__auto__);
});})(_STAR_print_newline_STAR_21153_21155,_STAR_print_fn_STAR_21154_21156,sb__12870__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_21154_21156;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_21153_21155;
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
var vec__21157 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21157,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21157,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21157,(2),null);
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

var G__21160_21162 = (cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__21160_21162) : cljs.compiler.emit_constant.call(null,G__21160_21162));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__21161_21163 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__21161_21163) : cljs.compiler.emit_constant.call(null,G__21161_21163));

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

var G__21164_21165 = cljs.core.hash(sym);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__21164_21165) : cljs.compiler.emit_constant.call(null,G__21164_21165));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant.call(null,null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5455__auto__ = (function (){var and__11731__auto__ = cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__11731__auto__)){
var G__21166 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__21166) : x.call(null,G__21166));
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
var G__21167 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__21167) : x.call(null,G__21167));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var,(function (p__21169){
var map__21170 = p__21169;
var map__21170__$1 = ((((!((map__21170 == null)))?((((map__21170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21170.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21170):map__21170);
var ast = map__21170__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21170__$1,cljs.core.cst$kw$info);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21170__$1,cljs.core.cst$kw$env);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21170__$1,cljs.core.cst$kw$form);
var temp__5455__auto__ = cljs.core.cst$kw$const_DASH_expr.cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,cljs.core.cst$kw$env,env));
} else {
var map__21172 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__21172__$1 = ((((!((map__21172 == null)))?((((map__21172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21172):map__21172);
var cenv = map__21172__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21172__$1,cljs.core.cst$kw$options);
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
var reserved = (function (){var G__21174 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__11731__auto__ = (function (){var G__21176 = cljs.core.cst$kw$language_DASH_out.cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__21176) : cljs.compiler.es5_GT__EQ_.call(null,G__21176));
})();
if(cljs.core.truth_(and__11731__auto__)){
return !((cljs.core.namespace(var_name) == null));
} else {
return and__11731__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__21174,cljs.analyzer.es5_allowed);
} else {
return G__21174;
}
})();
var env__21046__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__21177 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$sym$js_SLASH__DASH_Infinity)){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__21177,reserved);
} else {
return G__21177;
}
})()], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var_DASH_special,(function (p__21178){
var map__21179 = p__21178;
var map__21179__$1 = ((((!((map__21179 == null)))?((((map__21179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21179):map__21179);
var arg = map__21179__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21179__$1,cljs.core.cst$kw$env);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21179__$1,cljs.core.cst$kw$var);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21179__$1,cljs.core.cst$kw$sym);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21179__$1,cljs.core.cst$kw$meta);
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__21181 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$);
var map__21181__$1 = ((((!((map__21181 == null)))?((((map__21181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21181.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21181):map__21181);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21181__$1,cljs.core.cst$kw$name);
var env__21046__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$meta,(function (p__21183){
var map__21184 = p__21183;
var map__21184__$1 = ((((!((map__21184 == null)))?((((map__21184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21184):map__21184);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21184__$1,cljs.core.cst$kw$expr);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21184__$1,cljs.core.cst$kw$meta);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21184__$1,cljs.core.cst$kw$env);
var env__21046__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_((function (p1__21186_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__21186_SHARP_),cljs.core.cst$kw$constant);
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (p__21187){
var map__21188 = p__21187;
var map__21188__$1 = ((((!((map__21188 == null)))?((((map__21188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21188):map__21188);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21188__$1,cljs.core.cst$kw$env);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21188__$1,cljs.core.cst$kw$keys);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21188__$1,cljs.core.cst$kw$vals);
var env__21046__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (p__21190){
var map__21191 = p__21190;
var map__21191__$1 = ((((!((map__21191 == null)))?((((map__21191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21191):map__21191);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21191__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21191__$1,cljs.core.cst$kw$env);
var env__21046__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (p__21193){
var map__21194 = p__21193;
var map__21194__$1 = ((((!((map__21194 == null)))?((((map__21194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21194.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21194):map__21194);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21194__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21194__$1,cljs.core.cst$kw$env);
var env__21046__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_21196 = cljs.core.count(items);
if((cnt_21196 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentVector(null, ",cnt_21196,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_((function (p1__21197_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__21197_SHARP_),cljs.core.cst$kw$constant);
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set,(function (p__21198){
var map__21199 = p__21198;
var map__21199__$1 = ((((!((map__21199 == null)))?((((map__21199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21199):map__21199);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21199__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21199__$1,cljs.core.cst$kw$env);
var env__21046__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_value,(function (p__21201){
var map__21202 = p__21201;
var map__21202__$1 = ((((!((map__21202 == null)))?((((map__21202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21202):map__21202);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21202__$1,cljs.core.cst$kw$items);
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21202__$1,cljs.core.cst$kw$js_DASH_type);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21202__$1,cljs.core.cst$kw$env);
var env__21046__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,cljs.core.cst$kw$object)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["({"], 0));

var temp__5457__auto___21220 = cljs.core.seq(items);
if(temp__5457__auto___21220){
var items_21221__$1 = temp__5457__auto___21220;
var vec__21204_21222 = items_21221__$1;
var seq__21205_21223 = cljs.core.seq(vec__21204_21222);
var first__21206_21224 = cljs.core.first(seq__21205_21223);
var seq__21205_21225__$1 = cljs.core.next(seq__21205_21223);
var vec__21207_21226 = first__21206_21224;
var k_21227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21207_21226,(0),null);
var v_21228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21207_21226,(1),null);
var r_21229 = seq__21205_21225__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\"",cljs.core.name(k_21227),"\": ",v_21228], 0));

var seq__21210_21230 = cljs.core.seq(r_21229);
var chunk__21211_21231 = null;
var count__21212_21232 = (0);
var i__21213_21233 = (0);
while(true){
if((i__21213_21233 < count__21212_21232)){
var vec__21214_21234 = chunk__21211_21231.cljs$core$IIndexed$_nth$arity$2(null,i__21213_21233);
var k_21235__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21214_21234,(0),null);
var v_21236__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21214_21234,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_21235__$1),"\": ",v_21236__$1], 0));

var G__21237 = seq__21210_21230;
var G__21238 = chunk__21211_21231;
var G__21239 = count__21212_21232;
var G__21240 = (i__21213_21233 + (1));
seq__21210_21230 = G__21237;
chunk__21211_21231 = G__21238;
count__21212_21232 = G__21239;
i__21213_21233 = G__21240;
continue;
} else {
var temp__5457__auto___21241__$1 = cljs.core.seq(seq__21210_21230);
if(temp__5457__auto___21241__$1){
var seq__21210_21242__$1 = temp__5457__auto___21241__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21210_21242__$1)){
var c__12674__auto___21243 = cljs.core.chunk_first(seq__21210_21242__$1);
var G__21244 = cljs.core.chunk_rest(seq__21210_21242__$1);
var G__21245 = c__12674__auto___21243;
var G__21246 = cljs.core.count(c__12674__auto___21243);
var G__21247 = (0);
seq__21210_21230 = G__21244;
chunk__21211_21231 = G__21245;
count__21212_21232 = G__21246;
i__21213_21233 = G__21247;
continue;
} else {
var vec__21217_21248 = cljs.core.first(seq__21210_21242__$1);
var k_21249__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21217_21248,(0),null);
var v_21250__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21217_21248,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_21249__$1),"\": ",v_21250__$1], 0));

var G__21251 = cljs.core.next(seq__21210_21242__$1);
var G__21252 = null;
var G__21253 = (0);
var G__21254 = (0);
seq__21210_21230 = G__21251;
chunk__21211_21231 = G__21252;
count__21212_21232 = G__21253;
i__21213_21233 = G__21254;
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$record_DASH_value,(function (p__21255){
var map__21256 = p__21255;
var map__21256__$1 = ((((!((map__21256 == null)))?((((map__21256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21256.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21256):map__21256);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21256__$1,cljs.core.cst$kw$items);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21256__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21256__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21256__$1,cljs.core.cst$kw$env);
var env__21046__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns,".map__GT_",name,"(",items,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$constant,(function (p__21258){
var map__21259 = p__21258;
var map__21259__$1 = ((((!((map__21259 == null)))?((((map__21259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21259):map__21259);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21259__$1,cljs.core.cst$kw$form);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21259__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__21046__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__21261){
var map__21262 = p__21261;
var map__21262__$1 = ((((!((map__21262 == null)))?((((map__21262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21262):map__21262);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21262__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21262__$1,cljs.core.cst$kw$form);
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21262__$1,cljs.core.cst$kw$const_DASH_expr);
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__21264){
var map__21265 = p__21264;
var map__21265__$1 = ((((!((map__21265 == null)))?((((map__21265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21265):map__21265);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21265__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21265__$1,cljs.core.cst$kw$form);
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21265__$1,cljs.core.cst$kw$const_DASH_expr);
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
var or__11743__auto__ = (function (){var fexpr__21268 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null);
return (fexpr__21268.cljs$core$IFn$_invoke$arity$1 ? fexpr__21268.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__21268.call(null,tag));
})();
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$if,(function (p__21269){
var map__21270 = p__21269;
var map__21270__$1 = ((((!((map__21270 == null)))?((((map__21270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21270.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21270):map__21270);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21270__$1,cljs.core.cst$kw$test);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21270__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21270__$1,cljs.core.cst$kw$else);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21270__$1,cljs.core.cst$kw$env);
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21270__$1,cljs.core.cst$kw$unchecked);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$case_STAR_,(function (p__21272){
var map__21273 = p__21272;
var map__21273__$1 = ((((!((map__21273 == null)))?((((map__21273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21273):map__21273);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21273__$1,cljs.core.cst$kw$v);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21273__$1,cljs.core.cst$kw$tests);
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21273__$1,cljs.core.cst$kw$thens);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21273__$1,cljs.core.cst$kw$default);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21273__$1,cljs.core.cst$kw$env);
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

var seq__21275_21293 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__21276_21294 = null;
var count__21277_21295 = (0);
var i__21278_21296 = (0);
while(true){
if((i__21278_21296 < count__21277_21295)){
var vec__21279_21297 = chunk__21276_21294.cljs$core$IIndexed$_nth$arity$2(null,i__21278_21296);
var ts_21298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21279_21297,(0),null);
var then_21299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21279_21297,(1),null);
var seq__21282_21300 = cljs.core.seq(ts_21298);
var chunk__21283_21301 = null;
var count__21284_21302 = (0);
var i__21285_21303 = (0);
while(true){
if((i__21285_21303 < count__21284_21302)){
var test_21304 = chunk__21283_21301.cljs$core$IIndexed$_nth$arity$2(null,i__21285_21303);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_21304,":"], 0));

var G__21305 = seq__21282_21300;
var G__21306 = chunk__21283_21301;
var G__21307 = count__21284_21302;
var G__21308 = (i__21285_21303 + (1));
seq__21282_21300 = G__21305;
chunk__21283_21301 = G__21306;
count__21284_21302 = G__21307;
i__21285_21303 = G__21308;
continue;
} else {
var temp__5457__auto___21309 = cljs.core.seq(seq__21282_21300);
if(temp__5457__auto___21309){
var seq__21282_21310__$1 = temp__5457__auto___21309;
if(cljs.core.chunked_seq_QMARK_(seq__21282_21310__$1)){
var c__12674__auto___21311 = cljs.core.chunk_first(seq__21282_21310__$1);
var G__21312 = cljs.core.chunk_rest(seq__21282_21310__$1);
var G__21313 = c__12674__auto___21311;
var G__21314 = cljs.core.count(c__12674__auto___21311);
var G__21315 = (0);
seq__21282_21300 = G__21312;
chunk__21283_21301 = G__21313;
count__21284_21302 = G__21314;
i__21285_21303 = G__21315;
continue;
} else {
var test_21316 = cljs.core.first(seq__21282_21310__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_21316,":"], 0));

var G__21317 = cljs.core.next(seq__21282_21310__$1);
var G__21318 = null;
var G__21319 = (0);
var G__21320 = (0);
seq__21282_21300 = G__21317;
chunk__21283_21301 = G__21318;
count__21284_21302 = G__21319;
i__21285_21303 = G__21320;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_21299], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_21299], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

var G__21321 = seq__21275_21293;
var G__21322 = chunk__21276_21294;
var G__21323 = count__21277_21295;
var G__21324 = (i__21278_21296 + (1));
seq__21275_21293 = G__21321;
chunk__21276_21294 = G__21322;
count__21277_21295 = G__21323;
i__21278_21296 = G__21324;
continue;
} else {
var temp__5457__auto___21325 = cljs.core.seq(seq__21275_21293);
if(temp__5457__auto___21325){
var seq__21275_21326__$1 = temp__5457__auto___21325;
if(cljs.core.chunked_seq_QMARK_(seq__21275_21326__$1)){
var c__12674__auto___21327 = cljs.core.chunk_first(seq__21275_21326__$1);
var G__21328 = cljs.core.chunk_rest(seq__21275_21326__$1);
var G__21329 = c__12674__auto___21327;
var G__21330 = cljs.core.count(c__12674__auto___21327);
var G__21331 = (0);
seq__21275_21293 = G__21328;
chunk__21276_21294 = G__21329;
count__21277_21295 = G__21330;
i__21278_21296 = G__21331;
continue;
} else {
var vec__21286_21332 = cljs.core.first(seq__21275_21326__$1);
var ts_21333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21286_21332,(0),null);
var then_21334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21286_21332,(1),null);
var seq__21289_21335 = cljs.core.seq(ts_21333);
var chunk__21290_21336 = null;
var count__21291_21337 = (0);
var i__21292_21338 = (0);
while(true){
if((i__21292_21338 < count__21291_21337)){
var test_21339 = chunk__21290_21336.cljs$core$IIndexed$_nth$arity$2(null,i__21292_21338);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_21339,":"], 0));

var G__21340 = seq__21289_21335;
var G__21341 = chunk__21290_21336;
var G__21342 = count__21291_21337;
var G__21343 = (i__21292_21338 + (1));
seq__21289_21335 = G__21340;
chunk__21290_21336 = G__21341;
count__21291_21337 = G__21342;
i__21292_21338 = G__21343;
continue;
} else {
var temp__5457__auto___21344__$1 = cljs.core.seq(seq__21289_21335);
if(temp__5457__auto___21344__$1){
var seq__21289_21345__$1 = temp__5457__auto___21344__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21289_21345__$1)){
var c__12674__auto___21346 = cljs.core.chunk_first(seq__21289_21345__$1);
var G__21347 = cljs.core.chunk_rest(seq__21289_21345__$1);
var G__21348 = c__12674__auto___21346;
var G__21349 = cljs.core.count(c__12674__auto___21346);
var G__21350 = (0);
seq__21289_21335 = G__21347;
chunk__21290_21336 = G__21348;
count__21291_21337 = G__21349;
i__21292_21338 = G__21350;
continue;
} else {
var test_21351 = cljs.core.first(seq__21289_21345__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_21351,":"], 0));

var G__21352 = cljs.core.next(seq__21289_21345__$1);
var G__21353 = null;
var G__21354 = (0);
var G__21355 = (0);
seq__21289_21335 = G__21352;
chunk__21290_21336 = G__21353;
count__21291_21337 = G__21354;
i__21292_21338 = G__21355;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_21334], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_21334], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

var G__21356 = cljs.core.next(seq__21275_21326__$1);
var G__21357 = null;
var G__21358 = (0);
var G__21359 = (0);
seq__21275_21293 = G__21356;
chunk__21276_21294 = G__21357;
count__21277_21295 = G__21358;
i__21278_21296 = G__21359;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$throw,(function (p__21360){
var map__21361 = p__21360;
var map__21361__$1 = ((((!((map__21361 == null)))?((((map__21361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21361):map__21361);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21361__$1,cljs.core.cst$kw$throw);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21361__$1,cljs.core.cst$kw$env);
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21364 = env;
var G__21365 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__21364,G__21365) : cljs.compiler.resolve_type.call(null,G__21364,G__21365));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__21366 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21366,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21366,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__21366,fstr,rstr,ret_t,axstr){
return (function (p1__21363_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__21363_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__21363_SHARP_));
});})(idx,vec__21366,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__21369 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21369),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__21369;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21370 = env;
var G__21371 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__21370,G__21371) : cljs.compiler.resolve_type.call(null,G__21370,G__21371));
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
return (function (p1__21372_SHARP_){
return cljs.compiler.resolve_type(env,p1__21372_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__21373 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__21374 = cljs.core.seq(vec__21373);
var first__21375 = cljs.core.first(seq__21374);
var seq__21374__$1 = cljs.core.next(seq__21374);
var p = first__21375;
var first__21375__$1 = cljs.core.first(seq__21374__$1);
var seq__21374__$2 = cljs.core.next(seq__21374__$1);
var ts = first__21375__$1;
var first__21375__$2 = cljs.core.first(seq__21374__$2);
var seq__21374__$3 = cljs.core.next(seq__21374__$2);
var n = first__21375__$2;
var xs = seq__21374__$3;
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
var vec__21376 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__21377 = cljs.core.seq(vec__21376);
var first__21378 = cljs.core.first(seq__21377);
var seq__21377__$1 = cljs.core.next(seq__21377);
var p = first__21378;
var first__21378__$1 = cljs.core.first(seq__21377__$1);
var seq__21377__$2 = cljs.core.next(seq__21377__$1);
var ts = first__21378__$1;
var xs = seq__21377__$2;
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
var G__21380 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$closure_DASH_warnings,cljs.core.cst$kw$check_DASH_types], null));
var fexpr__21379 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$warning,null,cljs.core.cst$kw$error,null], null), null);
return (fexpr__21379.cljs$core$IFn$_invoke$arity$1 ? fexpr__21379.cljs$core$IFn$_invoke$arity$1(G__21380) : fexpr__21379.call(null,G__21380));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__21383 = arguments.length;
switch (G__21383) {
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
var vec__21391 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__21381_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__21381_SHARP_);
} else {
return p1__21381_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__21392 = cljs.core.seq(vec__21391);
var first__21393 = cljs.core.first(seq__21392);
var seq__21392__$1 = cljs.core.next(seq__21392);
var x = first__21393;
var ys = seq__21392__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(x,"*/","* /")], 0));

var seq__21394 = cljs.core.seq(ys);
var chunk__21395 = null;
var count__21396 = (0);
var i__21397 = (0);
while(true){
if((i__21397 < count__21396)){
var next_line = chunk__21395.cljs$core$IIndexed$_nth$arity$2(null,i__21397);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__21403 = seq__21394;
var G__21404 = chunk__21395;
var G__21405 = count__21396;
var G__21406 = (i__21397 + (1));
seq__21394 = G__21403;
chunk__21395 = G__21404;
count__21396 = G__21405;
i__21397 = G__21406;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21394);
if(temp__5457__auto__){
var seq__21394__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21394__$1)){
var c__12674__auto__ = cljs.core.chunk_first(seq__21394__$1);
var G__21407 = cljs.core.chunk_rest(seq__21394__$1);
var G__21408 = c__12674__auto__;
var G__21409 = cljs.core.count(c__12674__auto__);
var G__21410 = (0);
seq__21394 = G__21407;
chunk__21395 = G__21408;
count__21396 = G__21409;
i__21397 = G__21410;
continue;
} else {
var next_line = cljs.core.first(seq__21394__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__21411 = cljs.core.next(seq__21394__$1);
var G__21412 = null;
var G__21413 = (0);
var G__21414 = (0);
seq__21394 = G__21411;
chunk__21395 = G__21412;
count__21396 = G__21413;
i__21397 = G__21414;
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

var seq__21398_21415 = cljs.core.seq(docs__$2);
var chunk__21399_21416 = null;
var count__21400_21417 = (0);
var i__21401_21418 = (0);
while(true){
if((i__21401_21418 < count__21400_21417)){
var e_21419 = chunk__21399_21416.cljs$core$IIndexed$_nth$arity$2(null,i__21401_21418);
if(cljs.core.truth_(e_21419)){
print_comment_lines(e_21419);
} else {
}

var G__21420 = seq__21398_21415;
var G__21421 = chunk__21399_21416;
var G__21422 = count__21400_21417;
var G__21423 = (i__21401_21418 + (1));
seq__21398_21415 = G__21420;
chunk__21399_21416 = G__21421;
count__21400_21417 = G__21422;
i__21401_21418 = G__21423;
continue;
} else {
var temp__5457__auto___21424 = cljs.core.seq(seq__21398_21415);
if(temp__5457__auto___21424){
var seq__21398_21425__$1 = temp__5457__auto___21424;
if(cljs.core.chunked_seq_QMARK_(seq__21398_21425__$1)){
var c__12674__auto___21426 = cljs.core.chunk_first(seq__21398_21425__$1);
var G__21427 = cljs.core.chunk_rest(seq__21398_21425__$1);
var G__21428 = c__12674__auto___21426;
var G__21429 = cljs.core.count(c__12674__auto___21426);
var G__21430 = (0);
seq__21398_21415 = G__21427;
chunk__21399_21416 = G__21428;
count__21400_21417 = G__21429;
i__21401_21418 = G__21430;
continue;
} else {
var e_21431 = cljs.core.first(seq__21398_21425__$1);
if(cljs.core.truth_(e_21431)){
print_comment_lines(e_21431);
} else {
}

var G__21432 = cljs.core.next(seq__21398_21425__$1);
var G__21433 = null;
var G__21434 = (0);
var G__21435 = (0);
seq__21398_21415 = G__21432;
chunk__21399_21416 = G__21433;
count__21400_21417 = G__21434;
i__21401_21418 = G__21435;
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
return (function (p1__21437_SHARP_){
return goog.string.startsWith(p1__21437_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$def,(function (p__21438){
var map__21439 = p__21438;
var map__21439__$1 = ((((!((map__21439 == null)))?((((map__21439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21439):map__21439);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21439__$1,cljs.core.cst$kw$name);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21439__$1,cljs.core.cst$kw$var);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21439__$1,cljs.core.cst$kw$init);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21439__$1,cljs.core.cst$kw$env);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21439__$1,cljs.core.cst$kw$doc);
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21439__$1,cljs.core.cst$kw$jsdoc);
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21439__$1,cljs.core.cst$kw$export);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21439__$1,cljs.core.cst$kw$test);
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21439__$1,cljs.core.cst$kw$var_DASH_ast);
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__21441){
var map__21442 = p__21441;
var map__21442__$1 = ((((!((map__21442 == null)))?((((map__21442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21442):map__21442);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21442__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21442__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21442__$1,cljs.core.cst$kw$env);
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (",arglist,"){"], 0));

var seq__21444_21462 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__21445_21463 = null;
var count__21446_21464 = (0);
var i__21447_21465 = (0);
while(true){
if((i__21447_21465 < count__21446_21464)){
var vec__21448_21466 = chunk__21445_21463.cljs$core$IIndexed$_nth$arity$2(null,i__21447_21465);
var i_21467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21448_21466,(0),null);
var param_21468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21448_21466,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_21468);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));

var G__21469 = seq__21444_21462;
var G__21470 = chunk__21445_21463;
var G__21471 = count__21446_21464;
var G__21472 = (i__21447_21465 + (1));
seq__21444_21462 = G__21469;
chunk__21445_21463 = G__21470;
count__21446_21464 = G__21471;
i__21447_21465 = G__21472;
continue;
} else {
var temp__5457__auto___21473 = cljs.core.seq(seq__21444_21462);
if(temp__5457__auto___21473){
var seq__21444_21474__$1 = temp__5457__auto___21473;
if(cljs.core.chunked_seq_QMARK_(seq__21444_21474__$1)){
var c__12674__auto___21475 = cljs.core.chunk_first(seq__21444_21474__$1);
var G__21476 = cljs.core.chunk_rest(seq__21444_21474__$1);
var G__21477 = c__12674__auto___21475;
var G__21478 = cljs.core.count(c__12674__auto___21475);
var G__21479 = (0);
seq__21444_21462 = G__21476;
chunk__21445_21463 = G__21477;
count__21446_21464 = G__21478;
i__21447_21465 = G__21479;
continue;
} else {
var vec__21451_21480 = cljs.core.first(seq__21444_21474__$1);
var i_21481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21451_21480,(0),null);
var param_21482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21451_21480,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_21482);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));

var G__21483 = cljs.core.next(seq__21444_21474__$1);
var G__21484 = null;
var G__21485 = (0);
var G__21486 = (0);
seq__21444_21462 = G__21483;
chunk__21445_21463 = G__21484;
count__21446_21464 = G__21485;
i__21447_21465 = G__21486;
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

var seq__21454_21487 = cljs.core.seq(params);
var chunk__21455_21488 = null;
var count__21456_21489 = (0);
var i__21457_21490 = (0);
while(true){
if((i__21457_21490 < count__21456_21489)){
var param_21491 = chunk__21455_21488.cljs$core$IIndexed$_nth$arity$2(null,i__21457_21490);
cljs.compiler.emit(param_21491);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21491,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21492 = seq__21454_21487;
var G__21493 = chunk__21455_21488;
var G__21494 = count__21456_21489;
var G__21495 = (i__21457_21490 + (1));
seq__21454_21487 = G__21492;
chunk__21455_21488 = G__21493;
count__21456_21489 = G__21494;
i__21457_21490 = G__21495;
continue;
} else {
var temp__5457__auto___21496 = cljs.core.seq(seq__21454_21487);
if(temp__5457__auto___21496){
var seq__21454_21497__$1 = temp__5457__auto___21496;
if(cljs.core.chunked_seq_QMARK_(seq__21454_21497__$1)){
var c__12674__auto___21498 = cljs.core.chunk_first(seq__21454_21497__$1);
var G__21499 = cljs.core.chunk_rest(seq__21454_21497__$1);
var G__21500 = c__12674__auto___21498;
var G__21501 = cljs.core.count(c__12674__auto___21498);
var G__21502 = (0);
seq__21454_21487 = G__21499;
chunk__21455_21488 = G__21500;
count__21456_21489 = G__21501;
i__21457_21490 = G__21502;
continue;
} else {
var param_21503 = cljs.core.first(seq__21454_21497__$1);
cljs.compiler.emit(param_21503);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21503,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21504 = cljs.core.next(seq__21454_21497__$1);
var G__21505 = null;
var G__21506 = (0);
var G__21507 = (0);
seq__21454_21487 = G__21504;
chunk__21455_21488 = G__21505;
count__21456_21489 = G__21506;
i__21457_21490 = G__21507;
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

var seq__21458_21508 = cljs.core.seq(params);
var chunk__21459_21509 = null;
var count__21460_21510 = (0);
var i__21461_21511 = (0);
while(true){
if((i__21461_21511 < count__21460_21510)){
var param_21512 = chunk__21459_21509.cljs$core$IIndexed$_nth$arity$2(null,i__21461_21511);
cljs.compiler.emit(param_21512);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21512,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21513 = seq__21458_21508;
var G__21514 = chunk__21459_21509;
var G__21515 = count__21460_21510;
var G__21516 = (i__21461_21511 + (1));
seq__21458_21508 = G__21513;
chunk__21459_21509 = G__21514;
count__21460_21510 = G__21515;
i__21461_21511 = G__21516;
continue;
} else {
var temp__5457__auto___21517 = cljs.core.seq(seq__21458_21508);
if(temp__5457__auto___21517){
var seq__21458_21518__$1 = temp__5457__auto___21517;
if(cljs.core.chunked_seq_QMARK_(seq__21458_21518__$1)){
var c__12674__auto___21519 = cljs.core.chunk_first(seq__21458_21518__$1);
var G__21520 = cljs.core.chunk_rest(seq__21458_21518__$1);
var G__21521 = c__12674__auto___21519;
var G__21522 = cljs.core.count(c__12674__auto___21519);
var G__21523 = (0);
seq__21458_21508 = G__21520;
chunk__21459_21509 = G__21521;
count__21460_21510 = G__21522;
i__21461_21511 = G__21523;
continue;
} else {
var param_21524 = cljs.core.first(seq__21458_21518__$1);
cljs.compiler.emit(param_21524);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21524,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21525 = cljs.core.next(seq__21458_21518__$1);
var G__21526 = null;
var G__21527 = (0);
var G__21528 = (0);
seq__21458_21508 = G__21525;
chunk__21459_21509 = G__21526;
count__21460_21510 = G__21527;
i__21461_21511 = G__21528;
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
var seq__21529 = cljs.core.seq(params);
var chunk__21530 = null;
var count__21531 = (0);
var i__21532 = (0);
while(true){
if((i__21532 < count__21531)){
var param = chunk__21530.cljs$core$IIndexed$_nth$arity$2(null,i__21532);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21533 = seq__21529;
var G__21534 = chunk__21530;
var G__21535 = count__21531;
var G__21536 = (i__21532 + (1));
seq__21529 = G__21533;
chunk__21530 = G__21534;
count__21531 = G__21535;
i__21532 = G__21536;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21529);
if(temp__5457__auto__){
var seq__21529__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21529__$1)){
var c__12674__auto__ = cljs.core.chunk_first(seq__21529__$1);
var G__21537 = cljs.core.chunk_rest(seq__21529__$1);
var G__21538 = c__12674__auto__;
var G__21539 = cljs.core.count(c__12674__auto__);
var G__21540 = (0);
seq__21529 = G__21537;
chunk__21530 = G__21538;
count__21531 = G__21539;
i__21532 = G__21540;
continue;
} else {
var param = cljs.core.first(seq__21529__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21541 = cljs.core.next(seq__21529__$1);
var G__21542 = null;
var G__21543 = (0);
var G__21544 = (0);
seq__21529 = G__21541;
chunk__21530 = G__21542;
count__21531 = G__21543;
i__21532 = G__21544;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__21545){
var map__21546 = p__21545;
var map__21546__$1 = ((((!((map__21546 == null)))?((((map__21546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21546):map__21546);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21546__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21546__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21546__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21546__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21546__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21546__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21546__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21546__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__21046__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__21548){
var map__21549 = p__21548;
var map__21549__$1 = ((((!((map__21549 == null)))?((((map__21549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21549):map__21549);
var f = map__21549__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21549__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21549__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21549__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21549__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21549__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21549__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21549__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21549__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__21046__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

var name_21559__$1 = (function (){var or__11743__auto__ = name;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_21560 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_21559__$1);
var delegate_name_21561 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_21560),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",delegate_name_21561," = function ("], 0));

var seq__21551_21562 = cljs.core.seq(params);
var chunk__21552_21563 = null;
var count__21553_21564 = (0);
var i__21554_21565 = (0);
while(true){
if((i__21554_21565 < count__21553_21564)){
var param_21566 = chunk__21552_21563.cljs$core$IIndexed$_nth$arity$2(null,i__21554_21565);
cljs.compiler.emit(param_21566);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21566,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21567 = seq__21551_21562;
var G__21568 = chunk__21552_21563;
var G__21569 = count__21553_21564;
var G__21570 = (i__21554_21565 + (1));
seq__21551_21562 = G__21567;
chunk__21552_21563 = G__21568;
count__21553_21564 = G__21569;
i__21554_21565 = G__21570;
continue;
} else {
var temp__5457__auto___21571 = cljs.core.seq(seq__21551_21562);
if(temp__5457__auto___21571){
var seq__21551_21572__$1 = temp__5457__auto___21571;
if(cljs.core.chunked_seq_QMARK_(seq__21551_21572__$1)){
var c__12674__auto___21573 = cljs.core.chunk_first(seq__21551_21572__$1);
var G__21574 = cljs.core.chunk_rest(seq__21551_21572__$1);
var G__21575 = c__12674__auto___21573;
var G__21576 = cljs.core.count(c__12674__auto___21573);
var G__21577 = (0);
seq__21551_21562 = G__21574;
chunk__21552_21563 = G__21575;
count__21553_21564 = G__21576;
i__21554_21565 = G__21577;
continue;
} else {
var param_21578 = cljs.core.first(seq__21551_21572__$1);
cljs.compiler.emit(param_21578);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21578,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21579 = cljs.core.next(seq__21551_21572__$1);
var G__21580 = null;
var G__21581 = (0);
var G__21582 = (0);
seq__21551_21562 = G__21579;
chunk__21552_21563 = G__21580;
count__21553_21564 = G__21581;
i__21554_21565 = G__21582;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_21560," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_21583 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_21583,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name_21561,".call(this,"], 0));

var seq__21555_21584 = cljs.core.seq(params);
var chunk__21556_21585 = null;
var count__21557_21586 = (0);
var i__21558_21587 = (0);
while(true){
if((i__21558_21587 < count__21557_21586)){
var param_21588 = chunk__21556_21585.cljs$core$IIndexed$_nth$arity$2(null,i__21558_21587);
cljs.compiler.emit(param_21588);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21588,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21589 = seq__21555_21584;
var G__21590 = chunk__21556_21585;
var G__21591 = count__21557_21586;
var G__21592 = (i__21558_21587 + (1));
seq__21555_21584 = G__21589;
chunk__21556_21585 = G__21590;
count__21557_21586 = G__21591;
i__21558_21587 = G__21592;
continue;
} else {
var temp__5457__auto___21593 = cljs.core.seq(seq__21555_21584);
if(temp__5457__auto___21593){
var seq__21555_21594__$1 = temp__5457__auto___21593;
if(cljs.core.chunked_seq_QMARK_(seq__21555_21594__$1)){
var c__12674__auto___21595 = cljs.core.chunk_first(seq__21555_21594__$1);
var G__21596 = cljs.core.chunk_rest(seq__21555_21594__$1);
var G__21597 = c__12674__auto___21595;
var G__21598 = cljs.core.count(c__12674__auto___21595);
var G__21599 = (0);
seq__21555_21584 = G__21596;
chunk__21556_21585 = G__21597;
count__21557_21586 = G__21598;
i__21558_21587 = G__21599;
continue;
} else {
var param_21600 = cljs.core.first(seq__21555_21594__$1);
cljs.compiler.emit(param_21600);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21600,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__21601 = cljs.core.next(seq__21555_21594__$1);
var G__21602 = null;
var G__21603 = (0);
var G__21604 = (0);
seq__21555_21584 = G__21601;
chunk__21556_21585 = G__21602;
count__21557_21586 = G__21603;
i__21558_21587 = G__21604;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21560,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21560,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$name,name_21559__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21560,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_21561,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_21560,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn,(function (p__21608){
var map__21609 = p__21608;
var map__21609__$1 = ((((!((map__21609 == null)))?((((map__21609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21609):map__21609);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21609__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21609__$1,cljs.core.cst$kw$env);
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21609__$1,cljs.core.cst$kw$methods);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21609__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21609__$1,cljs.core.cst$kw$variadic);
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21609__$1,cljs.core.cst$kw$recur_DASH_frames);
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21609__$1,cljs.core.cst$kw$loop_DASH_lets);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__21609,map__21609__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__21605_SHARP_){
var and__11731__auto__ = p1__21605_SHARP_;
if(cljs.core.truth_(and__11731__auto__)){
return cljs.core.deref(cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(p1__21605_SHARP_));
} else {
return and__11731__auto__;
}
});})(map__21609,map__21609__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_21644__$1 = (function (){var or__11743__auto__ = name;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_21645 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_21644__$1);
var maxparams_21646 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,methods$));
var mmap_21647 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_21644__$1,mname_21645,maxparams_21646,loop_locals,map__21609,map__21609__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_21645),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_21644__$1,mname_21645,maxparams_21646,loop_locals,map__21609,map__21609__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_21648 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_21644__$1,mname_21645,maxparams_21646,mmap_21647,loop_locals,map__21609,map__21609__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__21606_SHARP_){
return cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__21606_SHARP_)));
});})(name_21644__$1,mname_21645,maxparams_21646,mmap_21647,loop_locals,map__21609,map__21609__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_21647));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_21645," = null;"], 0));

var seq__21611_21649 = cljs.core.seq(ms_21648);
var chunk__21612_21650 = null;
var count__21613_21651 = (0);
var i__21614_21652 = (0);
while(true){
if((i__21614_21652 < count__21613_21651)){
var vec__21615_21653 = chunk__21612_21650.cljs$core$IIndexed$_nth$arity$2(null,i__21614_21652);
var n_21654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21615_21653,(0),null);
var meth_21655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21615_21653,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_21654," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_21655))){
cljs.compiler.emit_variadic_fn_method(meth_21655);
} else {
cljs.compiler.emit_fn_method(meth_21655);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

var G__21656 = seq__21611_21649;
var G__21657 = chunk__21612_21650;
var G__21658 = count__21613_21651;
var G__21659 = (i__21614_21652 + (1));
seq__21611_21649 = G__21656;
chunk__21612_21650 = G__21657;
count__21613_21651 = G__21658;
i__21614_21652 = G__21659;
continue;
} else {
var temp__5457__auto___21660 = cljs.core.seq(seq__21611_21649);
if(temp__5457__auto___21660){
var seq__21611_21661__$1 = temp__5457__auto___21660;
if(cljs.core.chunked_seq_QMARK_(seq__21611_21661__$1)){
var c__12674__auto___21662 = cljs.core.chunk_first(seq__21611_21661__$1);
var G__21663 = cljs.core.chunk_rest(seq__21611_21661__$1);
var G__21664 = c__12674__auto___21662;
var G__21665 = cljs.core.count(c__12674__auto___21662);
var G__21666 = (0);
seq__21611_21649 = G__21663;
chunk__21612_21650 = G__21664;
count__21613_21651 = G__21665;
i__21614_21652 = G__21666;
continue;
} else {
var vec__21618_21667 = cljs.core.first(seq__21611_21661__$1);
var n_21668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21618_21667,(0),null);
var meth_21669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21618_21667,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_21668," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_21669))){
cljs.compiler.emit_variadic_fn_method(meth_21669);
} else {
cljs.compiler.emit_fn_method(meth_21669);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

var G__21670 = cljs.core.next(seq__21611_21661__$1);
var G__21671 = null;
var G__21672 = (0);
var G__21673 = (0);
seq__21611_21649 = G__21670;
chunk__21612_21650 = G__21671;
count__21613_21651 = G__21672;
i__21614_21652 = G__21673;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21645," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_21646),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):maxparams_21646)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_21646));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["switch(arguments.length){"], 0));

var seq__21621_21674 = cljs.core.seq(ms_21648);
var chunk__21622_21675 = null;
var count__21623_21676 = (0);
var i__21624_21677 = (0);
while(true){
if((i__21624_21677 < count__21623_21676)){
var vec__21625_21678 = chunk__21622_21675.cljs$core$IIndexed$_nth$arity$2(null,i__21624_21677);
var n_21679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21625_21678,(0),null);
var meth_21680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21625_21678,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_21680))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_21681 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_21681," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_21682 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_21681," = new cljs.core.IndexedSeq(",a_21682,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_21679,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_21646)),(((cljs.core.count(maxparams_21646) > (1)))?", ":null),restarg_21681,");"], 0));
} else {
var pcnt_21683 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_21680));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_21683,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_21679,".call(this",(((pcnt_21683 === (0)))?null:cljs.core._conj((function (){var x__12697__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_21683,maxparams_21646));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),",")),");"], 0));
}

var G__21684 = seq__21621_21674;
var G__21685 = chunk__21622_21675;
var G__21686 = count__21623_21676;
var G__21687 = (i__21624_21677 + (1));
seq__21621_21674 = G__21684;
chunk__21622_21675 = G__21685;
count__21623_21676 = G__21686;
i__21624_21677 = G__21687;
continue;
} else {
var temp__5457__auto___21688 = cljs.core.seq(seq__21621_21674);
if(temp__5457__auto___21688){
var seq__21621_21689__$1 = temp__5457__auto___21688;
if(cljs.core.chunked_seq_QMARK_(seq__21621_21689__$1)){
var c__12674__auto___21690 = cljs.core.chunk_first(seq__21621_21689__$1);
var G__21691 = cljs.core.chunk_rest(seq__21621_21689__$1);
var G__21692 = c__12674__auto___21690;
var G__21693 = cljs.core.count(c__12674__auto___21690);
var G__21694 = (0);
seq__21621_21674 = G__21691;
chunk__21622_21675 = G__21692;
count__21623_21676 = G__21693;
i__21624_21677 = G__21694;
continue;
} else {
var vec__21628_21695 = cljs.core.first(seq__21621_21689__$1);
var n_21696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21628_21695,(0),null);
var meth_21697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21628_21695,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_21697))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_21698 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_21698," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_21699 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_21698," = new cljs.core.IndexedSeq(",a_21699,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_21696,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_21646)),(((cljs.core.count(maxparams_21646) > (1)))?", ":null),restarg_21698,");"], 0));
} else {
var pcnt_21700 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_21697));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_21700,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_21696,".call(this",(((pcnt_21700 === (0)))?null:cljs.core._conj((function (){var x__12697__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_21700,maxparams_21646));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),",")),");"], 0));
}

var G__21701 = cljs.core.next(seq__21621_21689__$1);
var G__21702 = null;
var G__21703 = (0);
var G__21704 = (0);
seq__21621_21674 = G__21701;
chunk__21622_21675 = G__21702;
count__21623_21676 = G__21703;
i__21624_21677 = G__21704;
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
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21645,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21645,".cljs$lang$applyTo = ",cljs.core.some(((function (name_21644__$1,mname_21645,maxparams_21646,mmap_21647,ms_21648,loop_locals,map__21609,map__21609__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__21607_SHARP_){
var vec__21631 = p1__21607_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21631,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21631,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_21644__$1,mname_21645,maxparams_21646,mmap_21647,ms_21648,loop_locals,map__21609,map__21609__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_21648),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__21634_21705 = cljs.core.seq(ms_21648);
var chunk__21635_21706 = null;
var count__21636_21707 = (0);
var i__21637_21708 = (0);
while(true){
if((i__21637_21708 < count__21636_21707)){
var vec__21638_21709 = chunk__21635_21706.cljs$core$IIndexed$_nth$arity$2(null,i__21637_21708);
var n_21710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21638_21709,(0),null);
var meth_21711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21638_21709,(1),null);
var c_21712 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_21711));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_21711))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21645,".cljs$core$IFn$_invoke$arity$variadic = ",n_21710,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21645,".cljs$core$IFn$_invoke$arity$",c_21712," = ",n_21710,";"], 0));
}

var G__21713 = seq__21634_21705;
var G__21714 = chunk__21635_21706;
var G__21715 = count__21636_21707;
var G__21716 = (i__21637_21708 + (1));
seq__21634_21705 = G__21713;
chunk__21635_21706 = G__21714;
count__21636_21707 = G__21715;
i__21637_21708 = G__21716;
continue;
} else {
var temp__5457__auto___21717 = cljs.core.seq(seq__21634_21705);
if(temp__5457__auto___21717){
var seq__21634_21718__$1 = temp__5457__auto___21717;
if(cljs.core.chunked_seq_QMARK_(seq__21634_21718__$1)){
var c__12674__auto___21719 = cljs.core.chunk_first(seq__21634_21718__$1);
var G__21720 = cljs.core.chunk_rest(seq__21634_21718__$1);
var G__21721 = c__12674__auto___21719;
var G__21722 = cljs.core.count(c__12674__auto___21719);
var G__21723 = (0);
seq__21634_21705 = G__21720;
chunk__21635_21706 = G__21721;
count__21636_21707 = G__21722;
i__21637_21708 = G__21723;
continue;
} else {
var vec__21641_21724 = cljs.core.first(seq__21634_21718__$1);
var n_21725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21641_21724,(0),null);
var meth_21726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21641_21724,(1),null);
var c_21727 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_21726));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_21726))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21645,".cljs$core$IFn$_invoke$arity$variadic = ",n_21725,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21645,".cljs$core$IFn$_invoke$arity$",c_21727," = ",n_21725,";"], 0));
}

var G__21728 = cljs.core.next(seq__21634_21718__$1);
var G__21729 = null;
var G__21730 = (0);
var G__21731 = (0);
seq__21634_21705 = G__21728;
chunk__21635_21706 = G__21729;
count__21636_21707 = G__21730;
i__21637_21708 = G__21731;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_21645,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$do,(function (p__21732){
var map__21733 = p__21732;
var map__21733__$1 = ((((!((map__21733 == null)))?((((map__21733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21733.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21733):map__21733);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21733__$1,cljs.core.cst$kw$statements);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21733__$1,cljs.core.cst$kw$ret);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21733__$1,cljs.core.cst$kw$env);
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

var seq__21735_21739 = cljs.core.seq(statements);
var chunk__21736_21740 = null;
var count__21737_21741 = (0);
var i__21738_21742 = (0);
while(true){
if((i__21738_21742 < count__21737_21741)){
var s_21743 = chunk__21736_21740.cljs$core$IIndexed$_nth$arity$2(null,i__21738_21742);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_21743], 0));

var G__21744 = seq__21735_21739;
var G__21745 = chunk__21736_21740;
var G__21746 = count__21737_21741;
var G__21747 = (i__21738_21742 + (1));
seq__21735_21739 = G__21744;
chunk__21736_21740 = G__21745;
count__21737_21741 = G__21746;
i__21738_21742 = G__21747;
continue;
} else {
var temp__5457__auto___21748 = cljs.core.seq(seq__21735_21739);
if(temp__5457__auto___21748){
var seq__21735_21749__$1 = temp__5457__auto___21748;
if(cljs.core.chunked_seq_QMARK_(seq__21735_21749__$1)){
var c__12674__auto___21750 = cljs.core.chunk_first(seq__21735_21749__$1);
var G__21751 = cljs.core.chunk_rest(seq__21735_21749__$1);
var G__21752 = c__12674__auto___21750;
var G__21753 = cljs.core.count(c__12674__auto___21750);
var G__21754 = (0);
seq__21735_21739 = G__21751;
chunk__21736_21740 = G__21752;
count__21737_21741 = G__21753;
i__21738_21742 = G__21754;
continue;
} else {
var s_21755 = cljs.core.first(seq__21735_21749__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_21755], 0));

var G__21756 = cljs.core.next(seq__21735_21749__$1);
var G__21757 = null;
var G__21758 = (0);
var G__21759 = (0);
seq__21735_21739 = G__21756;
chunk__21736_21740 = G__21757;
count__21737_21741 = G__21758;
i__21738_21742 = G__21759;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$try,(function (p__21760){
var map__21761 = p__21760;
var map__21761__$1 = ((((!((map__21761 == null)))?((((map__21761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21761.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21761):map__21761);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21761__$1,cljs.core.cst$kw$env);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21761__$1,cljs.core.cst$kw$try);
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21761__$1,cljs.core.cst$kw$catch);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21761__$1,cljs.core.cst$kw$name);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21761__$1,cljs.core.cst$kw$finally);
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__21763,is_loop){
var map__21764 = p__21763;
var map__21764__$1 = ((((!((map__21764 == null)))?((((map__21764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21764):map__21764);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21764__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21764__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21764__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_21766_21775 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_21766_21775,context,map__21764,map__21764__$1,bindings,expr,env){
return (function (binding){
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_21766_21775,context,map__21764,map__21764__$1,bindings,expr,env))
,bindings):null));

try{var seq__21767_21776 = cljs.core.seq(bindings);
var chunk__21768_21777 = null;
var count__21769_21778 = (0);
var i__21770_21779 = (0);
while(true){
if((i__21770_21779 < count__21769_21778)){
var map__21771_21780 = chunk__21768_21777.cljs$core$IIndexed$_nth$arity$2(null,i__21770_21779);
var map__21771_21781__$1 = ((((!((map__21771_21780 == null)))?((((map__21771_21780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21771_21780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21771_21780):map__21771_21780);
var binding_21782 = map__21771_21781__$1;
var init_21783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21771_21781__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_21782);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_21783,";"], 0));

var G__21784 = seq__21767_21776;
var G__21785 = chunk__21768_21777;
var G__21786 = count__21769_21778;
var G__21787 = (i__21770_21779 + (1));
seq__21767_21776 = G__21784;
chunk__21768_21777 = G__21785;
count__21769_21778 = G__21786;
i__21770_21779 = G__21787;
continue;
} else {
var temp__5457__auto___21788 = cljs.core.seq(seq__21767_21776);
if(temp__5457__auto___21788){
var seq__21767_21789__$1 = temp__5457__auto___21788;
if(cljs.core.chunked_seq_QMARK_(seq__21767_21789__$1)){
var c__12674__auto___21790 = cljs.core.chunk_first(seq__21767_21789__$1);
var G__21791 = cljs.core.chunk_rest(seq__21767_21789__$1);
var G__21792 = c__12674__auto___21790;
var G__21793 = cljs.core.count(c__12674__auto___21790);
var G__21794 = (0);
seq__21767_21776 = G__21791;
chunk__21768_21777 = G__21792;
count__21769_21778 = G__21793;
i__21770_21779 = G__21794;
continue;
} else {
var map__21773_21795 = cljs.core.first(seq__21767_21789__$1);
var map__21773_21796__$1 = ((((!((map__21773_21795 == null)))?((((map__21773_21795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21773_21795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21773_21795):map__21773_21795);
var binding_21797 = map__21773_21796__$1;
var init_21798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773_21796__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_21797);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_21798,";"], 0));

var G__21799 = cljs.core.next(seq__21767_21789__$1);
var G__21800 = null;
var G__21801 = (0);
var G__21802 = (0);
seq__21767_21776 = G__21799;
chunk__21768_21777 = G__21800;
count__21769_21778 = G__21801;
i__21770_21779 = G__21802;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_21766_21775;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$recur,(function (p__21803){
var map__21804 = p__21803;
var map__21804__$1 = ((((!((map__21804 == null)))?((((map__21804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21804.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21804):map__21804);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21804__$1,cljs.core.cst$kw$frame);
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21804__$1,cljs.core.cst$kw$exprs);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21804__$1,cljs.core.cst$kw$env);
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame);
var n__12788__auto___21806 = cljs.core.count(exprs);
var i_21807 = (0);
while(true){
if((i_21807 < n__12788__auto___21806)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_21807) : temps.call(null,i_21807))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_21807) : exprs.call(null,i_21807)),";"], 0));

var G__21808 = (i_21807 + (1));
i_21807 = G__21808;
continue;
} else {
}
break;
}

var n__12788__auto___21809 = cljs.core.count(exprs);
var i_21810 = (0);
while(true){
if((i_21810 < n__12788__auto___21809)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_21810) : params.call(null,i_21810)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_21810) : temps.call(null,i_21810)),";"], 0));

var G__21811 = (i_21810 + (1));
i_21810 = G__21811;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$letfn,(function (p__21812){
var map__21813 = p__21812;
var map__21813__$1 = ((((!((map__21813 == null)))?((((map__21813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21813):map__21813);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21813__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21813__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21813__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var seq__21815_21823 = cljs.core.seq(bindings);
var chunk__21816_21824 = null;
var count__21817_21825 = (0);
var i__21818_21826 = (0);
while(true){
if((i__21818_21826 < count__21817_21825)){
var map__21819_21827 = chunk__21816_21824.cljs$core$IIndexed$_nth$arity$2(null,i__21818_21826);
var map__21819_21828__$1 = ((((!((map__21819_21827 == null)))?((((map__21819_21827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21819_21827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21819_21827):map__21819_21827);
var binding_21829 = map__21819_21828__$1;
var init_21830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21819_21828__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_21829)," = ",init_21830,";"], 0));

var G__21831 = seq__21815_21823;
var G__21832 = chunk__21816_21824;
var G__21833 = count__21817_21825;
var G__21834 = (i__21818_21826 + (1));
seq__21815_21823 = G__21831;
chunk__21816_21824 = G__21832;
count__21817_21825 = G__21833;
i__21818_21826 = G__21834;
continue;
} else {
var temp__5457__auto___21835 = cljs.core.seq(seq__21815_21823);
if(temp__5457__auto___21835){
var seq__21815_21836__$1 = temp__5457__auto___21835;
if(cljs.core.chunked_seq_QMARK_(seq__21815_21836__$1)){
var c__12674__auto___21837 = cljs.core.chunk_first(seq__21815_21836__$1);
var G__21838 = cljs.core.chunk_rest(seq__21815_21836__$1);
var G__21839 = c__12674__auto___21837;
var G__21840 = cljs.core.count(c__12674__auto___21837);
var G__21841 = (0);
seq__21815_21823 = G__21838;
chunk__21816_21824 = G__21839;
count__21817_21825 = G__21840;
i__21818_21826 = G__21841;
continue;
} else {
var map__21821_21842 = cljs.core.first(seq__21815_21836__$1);
var map__21821_21843__$1 = ((((!((map__21821_21842 == null)))?((((map__21821_21842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21821_21842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21821_21842):map__21821_21842);
var binding_21844 = map__21821_21843__$1;
var init_21845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21821_21843__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_21844)," = ",init_21845,";"], 0));

var G__21846 = cljs.core.next(seq__21815_21836__$1);
var G__21847 = null;
var G__21848 = (0);
var G__21849 = (0);
seq__21815_21823 = G__21846;
chunk__21816_21824 = G__21847;
count__21817_21825 = G__21848;
i__21818_21826 = G__21849;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invoke,(function (p__21852){
var map__21853 = p__21852;
var map__21853__$1 = ((((!((map__21853 == null)))?((((map__21853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21853.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21853):map__21853);
var expr = map__21853__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21853__$1,cljs.core.cst$kw$f);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21853__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21853__$1,cljs.core.cst$kw$env);
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
var and__11731__auto____$4 = cljs.core.not((function (){var fexpr__21863 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$sym$clj,null,cljs.core.cst$sym$boolean,null,cljs.core.cst$sym$object,null,cljs.core.cst$sym$any,null,cljs.core.cst$sym$js,null,cljs.core.cst$sym$number,null,cljs.core.cst$sym$clj_DASH_or_DASH_nil,null,cljs.core.cst$sym$array,null,cljs.core.cst$sym$string,null,cljs.core.cst$sym$function,null,cljs.core.cst$sym$clj_DASH_nil,null], null), null);
return (fexpr__21863.cljs$core$IFn$_invoke$arity$1 ? fexpr__21863.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__21863.call(null,tag));
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
var vec__21855 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21853,map__21853__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21853,map__21853__$1,expr,f,args,env){
return (function (p1__21850_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21850_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21853,map__21853__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21853,map__21853__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21853,map__21853__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21853,map__21853__$1,expr,f,args,env){
return (function (p1__21851_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21851_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21853,map__21853__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21853,map__21853__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21855,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21855,(1),null);
var env__21046__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_21864 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args),".",pimpl_21864,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_21865 = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_21865,args)),(((mfa_21865 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_21865,args)),"], 0))"], 0));
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
var fprop_21866 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_21866," ? ",f__$1,fprop_21866,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_21866," ? ",f__$1,fprop_21866,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$new,(function (p__21867){
var map__21868 = p__21867;
var map__21868__$1 = ((((!((map__21868 == null)))?((((map__21868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21868):map__21868);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21868__$1,cljs.core.cst$kw$ctor);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21868__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21868__$1,cljs.core.cst$kw$env);
var env__21046__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set_BANG_,(function (p__21870){
var map__21871 = p__21870;
var map__21871__$1 = ((((!((map__21871 == null)))?((((map__21871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21871.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21871):map__21871);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21871__$1,cljs.core.cst$kw$target);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21871__$1,cljs.core.cst$kw$val);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21871__$1,cljs.core.cst$kw$env);
var env__21046__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__21873 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__21873__$1 = ((((!((map__21873 == null)))?((((map__21873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21873.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21873):map__21873);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21873__$1,cljs.core.cst$kw$options);
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21873__$1,cljs.core.cst$kw$js_DASH_dependency_DASH_index);
var map__21874 = options;
var map__21874__$1 = ((((!((map__21874 == null)))?((((map__21874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21874):map__21874);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21874__$1,cljs.core.cst$kw$target);
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21874__$1,cljs.core.cst$kw$optimizations);
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_);
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_));
var vec__21875 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nodejs,target)){
var map__21881 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__21881__$1 = ((((!((map__21881 == null)))?((((map__21881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21881.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21881):map__21881);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21881__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21881__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21875,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21875,(1),null);
var map__21878 = cljs.core.group_by(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__21878__$1 = ((((!((map__21878 == null)))?((((map__21878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21878):map__21878);
var global_exports_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21878__$1,true);
var libs_to_load__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21878__$1,false);
if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);"], 0));
} else {
}

var seq__21884_21900 = cljs.core.seq(libs_to_load__$1);
var chunk__21885_21901 = null;
var count__21886_21902 = (0);
var i__21887_21903 = (0);
while(true){
if((i__21887_21903 < count__21886_21902)){
var lib_21904 = chunk__21885_21901.cljs$core$IIndexed$_nth$arity$2(null,i__21887_21903);
if((cljs.analyzer.foreign_dep_QMARK_(lib_21904)) && (!(cljs.core.keyword_identical_QMARK_(optimizations,cljs.core.cst$kw$none)))){
} else {
if(cljs.core.truth_((function (){var or__11743__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_21904),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_21904),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__11743__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_21904),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_21904),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_21904),"');"], 0));

}
}
}

var G__21905 = seq__21884_21900;
var G__21906 = chunk__21885_21901;
var G__21907 = count__21886_21902;
var G__21908 = (i__21887_21903 + (1));
seq__21884_21900 = G__21905;
chunk__21885_21901 = G__21906;
count__21886_21902 = G__21907;
i__21887_21903 = G__21908;
continue;
} else {
var temp__5457__auto___21909 = cljs.core.seq(seq__21884_21900);
if(temp__5457__auto___21909){
var seq__21884_21910__$1 = temp__5457__auto___21909;
if(cljs.core.chunked_seq_QMARK_(seq__21884_21910__$1)){
var c__12674__auto___21911 = cljs.core.chunk_first(seq__21884_21910__$1);
var G__21912 = cljs.core.chunk_rest(seq__21884_21910__$1);
var G__21913 = c__12674__auto___21911;
var G__21914 = cljs.core.count(c__12674__auto___21911);
var G__21915 = (0);
seq__21884_21900 = G__21912;
chunk__21885_21901 = G__21913;
count__21886_21902 = G__21914;
i__21887_21903 = G__21915;
continue;
} else {
var lib_21916 = cljs.core.first(seq__21884_21910__$1);
if((cljs.analyzer.foreign_dep_QMARK_(lib_21916)) && (!(cljs.core.keyword_identical_QMARK_(optimizations,cljs.core.cst$kw$none)))){
} else {
if(cljs.core.truth_((function (){var or__11743__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_21916),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_21916),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__11743__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_21916),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_21916),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_21916),"');"], 0));

}
}
}

var G__21917 = cljs.core.next(seq__21884_21910__$1);
var G__21918 = null;
var G__21919 = (0);
var G__21920 = (0);
seq__21884_21900 = G__21917;
chunk__21885_21901 = G__21918;
count__21886_21902 = G__21919;
i__21887_21903 = G__21920;
continue;
}
} else {
}
}
break;
}

var seq__21888_21921 = cljs.core.seq(node_libs);
var chunk__21889_21922 = null;
var count__21890_21923 = (0);
var i__21891_21924 = (0);
while(true){
if((i__21891_21924 < count__21890_21923)){
var lib_21925 = chunk__21889_21922.cljs$core$IIndexed$_nth$arity$2(null,i__21891_21924);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_21925)," = require('",lib_21925,"');"], 0));

var G__21926 = seq__21888_21921;
var G__21927 = chunk__21889_21922;
var G__21928 = count__21890_21923;
var G__21929 = (i__21891_21924 + (1));
seq__21888_21921 = G__21926;
chunk__21889_21922 = G__21927;
count__21890_21923 = G__21928;
i__21891_21924 = G__21929;
continue;
} else {
var temp__5457__auto___21930 = cljs.core.seq(seq__21888_21921);
if(temp__5457__auto___21930){
var seq__21888_21931__$1 = temp__5457__auto___21930;
if(cljs.core.chunked_seq_QMARK_(seq__21888_21931__$1)){
var c__12674__auto___21932 = cljs.core.chunk_first(seq__21888_21931__$1);
var G__21933 = cljs.core.chunk_rest(seq__21888_21931__$1);
var G__21934 = c__12674__auto___21932;
var G__21935 = cljs.core.count(c__12674__auto___21932);
var G__21936 = (0);
seq__21888_21921 = G__21933;
chunk__21889_21922 = G__21934;
count__21890_21923 = G__21935;
i__21891_21924 = G__21936;
continue;
} else {
var lib_21937 = cljs.core.first(seq__21888_21931__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_21937)," = require('",lib_21937,"');"], 0));

var G__21938 = cljs.core.next(seq__21888_21931__$1);
var G__21939 = null;
var G__21940 = (0);
var G__21941 = (0);
seq__21888_21921 = G__21938;
chunk__21889_21922 = G__21939;
count__21890_21923 = G__21940;
i__21891_21924 = G__21941;
continue;
}
} else {
}
}
break;
}

var seq__21892_21942 = cljs.core.seq(global_exports_libs);
var chunk__21893_21943 = null;
var count__21894_21944 = (0);
var i__21895_21945 = (0);
while(true){
if((i__21895_21945 < count__21894_21944)){
var lib_21946 = chunk__21893_21943.cljs$core$IIndexed$_nth$arity$2(null,i__21895_21945);
var map__21896_21947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_21946));
var map__21896_21948__$1 = ((((!((map__21896_21947 == null)))?((((map__21896_21947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21896_21947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21896_21947):map__21896_21947);
var global_exports_21949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21896_21948__$1,cljs.core.cst$kw$global_DASH_exports);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib_21946)," = goog.global.",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_21949,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_21946)),";"], 0));

var G__21950 = seq__21892_21942;
var G__21951 = chunk__21893_21943;
var G__21952 = count__21894_21944;
var G__21953 = (i__21895_21945 + (1));
seq__21892_21942 = G__21950;
chunk__21893_21943 = G__21951;
count__21894_21944 = G__21952;
i__21895_21945 = G__21953;
continue;
} else {
var temp__5457__auto___21954 = cljs.core.seq(seq__21892_21942);
if(temp__5457__auto___21954){
var seq__21892_21955__$1 = temp__5457__auto___21954;
if(cljs.core.chunked_seq_QMARK_(seq__21892_21955__$1)){
var c__12674__auto___21956 = cljs.core.chunk_first(seq__21892_21955__$1);
var G__21957 = cljs.core.chunk_rest(seq__21892_21955__$1);
var G__21958 = c__12674__auto___21956;
var G__21959 = cljs.core.count(c__12674__auto___21956);
var G__21960 = (0);
seq__21892_21942 = G__21957;
chunk__21893_21943 = G__21958;
count__21894_21944 = G__21959;
i__21895_21945 = G__21960;
continue;
} else {
var lib_21961 = cljs.core.first(seq__21892_21955__$1);
var map__21898_21962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_21961));
var map__21898_21963__$1 = ((((!((map__21898_21962 == null)))?((((map__21898_21962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21898_21962.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21898_21962):map__21898_21962);
var global_exports_21964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21898_21963__$1,cljs.core.cst$kw$global_DASH_exports);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib_21961)," = goog.global.",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_21964,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_21961)),";"], 0));

var G__21965 = cljs.core.next(seq__21892_21955__$1);
var G__21966 = null;
var G__21967 = (0);
var G__21968 = (0);
seq__21892_21942 = G__21965;
chunk__21893_21943 = G__21966;
count__21894_21944 = G__21967;
i__21895_21945 = G__21968;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns_STAR_,(function (p__21969){
var map__21970 = p__21969;
var map__21970__$1 = ((((!((map__21970 == null)))?((((map__21970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21970):map__21970);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21970__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21970__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21970__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21970__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21970__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21970__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21970__$1,cljs.core.cst$kw$deps);
cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_env.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["null;"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns,(function (p__21972){
var map__21973 = p__21972;
var map__21973__$1 = ((((!((map__21973 == null)))?((((map__21973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21973):map__21973);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21973__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21973__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21973__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21973__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21973__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21973__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21973__$1,cljs.core.cst$kw$deps);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deftype_STAR_,(function (p__21975){
var map__21976 = p__21975;
var map__21976__$1 = ((((!((map__21976 == null)))?((((map__21976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21976):map__21976);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21976__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21976__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21976__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21976__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21976__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__21978_21996 = cljs.core.seq(protocols);
var chunk__21979_21997 = null;
var count__21980_21998 = (0);
var i__21981_21999 = (0);
while(true){
if((i__21981_21999 < count__21980_21998)){
var protocol_22000 = chunk__21979_21997.cljs$core$IIndexed$_nth$arity$2(null,i__21981_21999);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22000)].join('')),"}"], 0));

var G__22001 = seq__21978_21996;
var G__22002 = chunk__21979_21997;
var G__22003 = count__21980_21998;
var G__22004 = (i__21981_21999 + (1));
seq__21978_21996 = G__22001;
chunk__21979_21997 = G__22002;
count__21980_21998 = G__22003;
i__21981_21999 = G__22004;
continue;
} else {
var temp__5457__auto___22005 = cljs.core.seq(seq__21978_21996);
if(temp__5457__auto___22005){
var seq__21978_22006__$1 = temp__5457__auto___22005;
if(cljs.core.chunked_seq_QMARK_(seq__21978_22006__$1)){
var c__12674__auto___22007 = cljs.core.chunk_first(seq__21978_22006__$1);
var G__22008 = cljs.core.chunk_rest(seq__21978_22006__$1);
var G__22009 = c__12674__auto___22007;
var G__22010 = cljs.core.count(c__12674__auto___22007);
var G__22011 = (0);
seq__21978_21996 = G__22008;
chunk__21979_21997 = G__22009;
count__21980_21998 = G__22010;
i__21981_21999 = G__22011;
continue;
} else {
var protocol_22012 = cljs.core.first(seq__21978_22006__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22012)].join('')),"}"], 0));

var G__22013 = cljs.core.next(seq__21978_22006__$1);
var G__22014 = null;
var G__22015 = (0);
var G__22016 = (0);
seq__21978_21996 = G__22013;
chunk__21979_21997 = G__22014;
count__21980_21998 = G__22015;
i__21981_21999 = G__22016;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__21982_22017 = cljs.core.seq(fields__$1);
var chunk__21983_22018 = null;
var count__21984_22019 = (0);
var i__21985_22020 = (0);
while(true){
if((i__21985_22020 < count__21984_22019)){
var fld_22021 = chunk__21983_22018.cljs$core$IIndexed$_nth$arity$2(null,i__21985_22020);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_22021," = ",fld_22021,";"], 0));

var G__22022 = seq__21982_22017;
var G__22023 = chunk__21983_22018;
var G__22024 = count__21984_22019;
var G__22025 = (i__21985_22020 + (1));
seq__21982_22017 = G__22022;
chunk__21983_22018 = G__22023;
count__21984_22019 = G__22024;
i__21985_22020 = G__22025;
continue;
} else {
var temp__5457__auto___22026 = cljs.core.seq(seq__21982_22017);
if(temp__5457__auto___22026){
var seq__21982_22027__$1 = temp__5457__auto___22026;
if(cljs.core.chunked_seq_QMARK_(seq__21982_22027__$1)){
var c__12674__auto___22028 = cljs.core.chunk_first(seq__21982_22027__$1);
var G__22029 = cljs.core.chunk_rest(seq__21982_22027__$1);
var G__22030 = c__12674__auto___22028;
var G__22031 = cljs.core.count(c__12674__auto___22028);
var G__22032 = (0);
seq__21982_22017 = G__22029;
chunk__21983_22018 = G__22030;
count__21984_22019 = G__22031;
i__21985_22020 = G__22032;
continue;
} else {
var fld_22033 = cljs.core.first(seq__21982_22027__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_22033," = ",fld_22033,";"], 0));

var G__22034 = cljs.core.next(seq__21982_22027__$1);
var G__22035 = null;
var G__22036 = (0);
var G__22037 = (0);
seq__21982_22017 = G__22034;
chunk__21983_22018 = G__22035;
count__21984_22019 = G__22036;
i__21985_22020 = G__22037;
continue;
}
} else {
}
}
break;
}

var seq__21986_22038 = cljs.core.seq(pmasks);
var chunk__21987_22039 = null;
var count__21988_22040 = (0);
var i__21989_22041 = (0);
while(true){
if((i__21989_22041 < count__21988_22040)){
var vec__21990_22042 = chunk__21987_22039.cljs$core$IIndexed$_nth$arity$2(null,i__21989_22041);
var pno_22043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21990_22042,(0),null);
var pmask_22044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21990_22042,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_22043,"$ = ",pmask_22044,";"], 0));

var G__22045 = seq__21986_22038;
var G__22046 = chunk__21987_22039;
var G__22047 = count__21988_22040;
var G__22048 = (i__21989_22041 + (1));
seq__21986_22038 = G__22045;
chunk__21987_22039 = G__22046;
count__21988_22040 = G__22047;
i__21989_22041 = G__22048;
continue;
} else {
var temp__5457__auto___22049 = cljs.core.seq(seq__21986_22038);
if(temp__5457__auto___22049){
var seq__21986_22050__$1 = temp__5457__auto___22049;
if(cljs.core.chunked_seq_QMARK_(seq__21986_22050__$1)){
var c__12674__auto___22051 = cljs.core.chunk_first(seq__21986_22050__$1);
var G__22052 = cljs.core.chunk_rest(seq__21986_22050__$1);
var G__22053 = c__12674__auto___22051;
var G__22054 = cljs.core.count(c__12674__auto___22051);
var G__22055 = (0);
seq__21986_22038 = G__22052;
chunk__21987_22039 = G__22053;
count__21988_22040 = G__22054;
i__21989_22041 = G__22055;
continue;
} else {
var vec__21993_22056 = cljs.core.first(seq__21986_22050__$1);
var pno_22057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21993_22056,(0),null);
var pmask_22058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21993_22056,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_22057,"$ = ",pmask_22058,";"], 0));

var G__22059 = cljs.core.next(seq__21986_22050__$1);
var G__22060 = null;
var G__22061 = (0);
var G__22062 = (0);
seq__21986_22038 = G__22059;
chunk__21987_22039 = G__22060;
count__21988_22040 = G__22061;
i__21989_22041 = G__22062;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$defrecord_STAR_,(function (p__22063){
var map__22064 = p__22063;
var map__22064__$1 = ((((!((map__22064 == null)))?((((map__22064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22064.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22064):map__22064);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22064__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22064__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22064__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22064__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22064__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.cst$sym$__hash], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__22066_22084 = cljs.core.seq(protocols);
var chunk__22067_22085 = null;
var count__22068_22086 = (0);
var i__22069_22087 = (0);
while(true){
if((i__22069_22087 < count__22068_22086)){
var protocol_22088 = chunk__22067_22085.cljs$core$IIndexed$_nth$arity$2(null,i__22069_22087);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22088)].join('')),"}"], 0));

var G__22089 = seq__22066_22084;
var G__22090 = chunk__22067_22085;
var G__22091 = count__22068_22086;
var G__22092 = (i__22069_22087 + (1));
seq__22066_22084 = G__22089;
chunk__22067_22085 = G__22090;
count__22068_22086 = G__22091;
i__22069_22087 = G__22092;
continue;
} else {
var temp__5457__auto___22093 = cljs.core.seq(seq__22066_22084);
if(temp__5457__auto___22093){
var seq__22066_22094__$1 = temp__5457__auto___22093;
if(cljs.core.chunked_seq_QMARK_(seq__22066_22094__$1)){
var c__12674__auto___22095 = cljs.core.chunk_first(seq__22066_22094__$1);
var G__22096 = cljs.core.chunk_rest(seq__22066_22094__$1);
var G__22097 = c__12674__auto___22095;
var G__22098 = cljs.core.count(c__12674__auto___22095);
var G__22099 = (0);
seq__22066_22084 = G__22096;
chunk__22067_22085 = G__22097;
count__22068_22086 = G__22098;
i__22069_22087 = G__22099;
continue;
} else {
var protocol_22100 = cljs.core.first(seq__22066_22094__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22100)].join('')),"}"], 0));

var G__22101 = cljs.core.next(seq__22066_22094__$1);
var G__22102 = null;
var G__22103 = (0);
var G__22104 = (0);
seq__22066_22084 = G__22101;
chunk__22067_22085 = G__22102;
count__22068_22086 = G__22103;
i__22069_22087 = G__22104;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__22070_22105 = cljs.core.seq(fields__$1);
var chunk__22071_22106 = null;
var count__22072_22107 = (0);
var i__22073_22108 = (0);
while(true){
if((i__22073_22108 < count__22072_22107)){
var fld_22109 = chunk__22071_22106.cljs$core$IIndexed$_nth$arity$2(null,i__22073_22108);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_22109," = ",fld_22109,";"], 0));

var G__22110 = seq__22070_22105;
var G__22111 = chunk__22071_22106;
var G__22112 = count__22072_22107;
var G__22113 = (i__22073_22108 + (1));
seq__22070_22105 = G__22110;
chunk__22071_22106 = G__22111;
count__22072_22107 = G__22112;
i__22073_22108 = G__22113;
continue;
} else {
var temp__5457__auto___22114 = cljs.core.seq(seq__22070_22105);
if(temp__5457__auto___22114){
var seq__22070_22115__$1 = temp__5457__auto___22114;
if(cljs.core.chunked_seq_QMARK_(seq__22070_22115__$1)){
var c__12674__auto___22116 = cljs.core.chunk_first(seq__22070_22115__$1);
var G__22117 = cljs.core.chunk_rest(seq__22070_22115__$1);
var G__22118 = c__12674__auto___22116;
var G__22119 = cljs.core.count(c__12674__auto___22116);
var G__22120 = (0);
seq__22070_22105 = G__22117;
chunk__22071_22106 = G__22118;
count__22072_22107 = G__22119;
i__22073_22108 = G__22120;
continue;
} else {
var fld_22121 = cljs.core.first(seq__22070_22115__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_22121," = ",fld_22121,";"], 0));

var G__22122 = cljs.core.next(seq__22070_22115__$1);
var G__22123 = null;
var G__22124 = (0);
var G__22125 = (0);
seq__22070_22105 = G__22122;
chunk__22071_22106 = G__22123;
count__22072_22107 = G__22124;
i__22073_22108 = G__22125;
continue;
}
} else {
}
}
break;
}

var seq__22074_22126 = cljs.core.seq(pmasks);
var chunk__22075_22127 = null;
var count__22076_22128 = (0);
var i__22077_22129 = (0);
while(true){
if((i__22077_22129 < count__22076_22128)){
var vec__22078_22130 = chunk__22075_22127.cljs$core$IIndexed$_nth$arity$2(null,i__22077_22129);
var pno_22131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22078_22130,(0),null);
var pmask_22132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22078_22130,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_22131,"$ = ",pmask_22132,";"], 0));

var G__22133 = seq__22074_22126;
var G__22134 = chunk__22075_22127;
var G__22135 = count__22076_22128;
var G__22136 = (i__22077_22129 + (1));
seq__22074_22126 = G__22133;
chunk__22075_22127 = G__22134;
count__22076_22128 = G__22135;
i__22077_22129 = G__22136;
continue;
} else {
var temp__5457__auto___22137 = cljs.core.seq(seq__22074_22126);
if(temp__5457__auto___22137){
var seq__22074_22138__$1 = temp__5457__auto___22137;
if(cljs.core.chunked_seq_QMARK_(seq__22074_22138__$1)){
var c__12674__auto___22139 = cljs.core.chunk_first(seq__22074_22138__$1);
var G__22140 = cljs.core.chunk_rest(seq__22074_22138__$1);
var G__22141 = c__12674__auto___22139;
var G__22142 = cljs.core.count(c__12674__auto___22139);
var G__22143 = (0);
seq__22074_22126 = G__22140;
chunk__22075_22127 = G__22141;
count__22076_22128 = G__22142;
i__22077_22129 = G__22143;
continue;
} else {
var vec__22081_22144 = cljs.core.first(seq__22074_22138__$1);
var pno_22145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22081_22144,(0),null);
var pmask_22146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22081_22144,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_22145,"$ = ",pmask_22146,";"], 0));

var G__22147 = cljs.core.next(seq__22074_22138__$1);
var G__22148 = null;
var G__22149 = (0);
var G__22150 = (0);
seq__22074_22126 = G__22147;
chunk__22075_22127 = G__22148;
count__22076_22128 = G__22149;
i__22077_22129 = G__22150;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dot,(function (p__22151){
var map__22152 = p__22151;
var map__22152__$1 = ((((!((map__22152 == null)))?((((map__22152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22152.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22152):map__22152);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22152__$1,cljs.core.cst$kw$target);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22152__$1,cljs.core.cst$kw$field);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22152__$1,cljs.core.cst$kw$method);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22152__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22152__$1,cljs.core.cst$kw$env);
var env__21046__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js,(function (p__22154){
var map__22155 = p__22154;
var map__22155__$1 = ((((!((map__22155 == null)))?((((map__22155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22155.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22155):map__22155);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22155__$1,cljs.core.cst$kw$op);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22155__$1,cljs.core.cst$kw$env);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22155__$1,cljs.core.cst$kw$code);
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22155__$1,cljs.core.cst$kw$segs);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22155__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_((function (){var and__11731__auto__ = code;
if(cljs.core.truth_(and__11731__auto__)){
var G__22157 = clojure.string.trim(code);
var G__22158 = "/*";
return goog.string.startsWith(G__22157,G__22158);
} else {
return and__11731__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
var env__21046__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__21046__auto__))){
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

var seq__22162 = cljs.core.seq(table);
var chunk__22163 = null;
var count__22164 = (0);
var i__22165 = (0);
while(true){
if((i__22165 < count__22164)){
var vec__22166 = chunk__22163.cljs$core$IIndexed$_nth$arity$2(null,i__22165);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22166,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22166,(1),null);
var ns_22172 = cljs.core.namespace(sym);
var name_22173 = cljs.core.name(sym);
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

var G__22174 = seq__22162;
var G__22175 = chunk__22163;
var G__22176 = count__22164;
var G__22177 = (i__22165 + (1));
seq__22162 = G__22174;
chunk__22163 = G__22175;
count__22164 = G__22176;
i__22165 = G__22177;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22162);
if(temp__5457__auto__){
var seq__22162__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22162__$1)){
var c__12674__auto__ = cljs.core.chunk_first(seq__22162__$1);
var G__22178 = cljs.core.chunk_rest(seq__22162__$1);
var G__22179 = c__12674__auto__;
var G__22180 = cljs.core.count(c__12674__auto__);
var G__22181 = (0);
seq__22162 = G__22178;
chunk__22163 = G__22179;
count__22164 = G__22180;
i__22165 = G__22181;
continue;
} else {
var vec__22169 = cljs.core.first(seq__22162__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22169,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22169,(1),null);
var ns_22182 = cljs.core.namespace(sym);
var name_22183 = cljs.core.name(sym);
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

var G__22184 = cljs.core.next(seq__22162__$1);
var G__22185 = null;
var G__22186 = (0);
var G__22187 = (0);
seq__22162 = G__22184;
chunk__22163 = G__22185;
count__22164 = G__22186;
i__22165 = G__22187;
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
var G__22189 = arguments.length;
switch (G__22189) {
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
var k_22194 = cljs.core.first(ks);
var vec__22190_22195 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_22194);
var top_22196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22190_22195,(0),null);
var prefix_SINGLEQUOTE__22197 = vec__22190_22195;
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$prototype,k_22194)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__22197) == null))){
if(!((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_22196)) || (cljs.core.contains_QMARK_(known_externs,top_22196)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__22197)),";"], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_22196);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__22197)),";"], 0));
}
} else {
}

var m_22198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_22194);
if(cljs.core.empty_QMARK_(m_22198)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__22197,m_22198,top_level,known_externs);
}

var G__22199 = cljs.core.next(ks);
ks = G__22199;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;

