// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.tools.reader.edn');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.tools.reader.impl.errors');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader.impl.utils');
goog.require('cljs.tools.reader.impl.commons');
goog.require('cljs.tools.reader');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');


cljs.tools.reader.edn.macro_terminating_QMARK_ = (function cljs$tools$reader$edn$macro_terminating_QMARK_(ch){
var and__11731__auto__ = !(("#" === ch));
if(and__11731__auto__){
var and__11731__auto____$1 = !(("'" === ch));
if(and__11731__auto____$1){
var and__11731__auto____$2 = !((":" === ch));
if(and__11731__auto____$2){
return (cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.edn.macros.call(null,ch));
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
cljs.tools.reader.edn.not_constituent_QMARK_ = (function cljs$tools$reader$edn$not_constituent_QMARK_(ch){
return (("@" === ch)) || (("`" === ch)) || (("~" === ch));
});
cljs.tools.reader.edn.read_token = (function cljs$tools$reader$edn$read_token(var_args){
var G__19075 = arguments.length;
switch (G__19075) {
case 3:
return cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3 = (function (rdr,kind,initch){
return cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$4(rdr,kind,initch,true);
});

cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$4 = (function (rdr,kind,initch,validate_leading_QMARK_){
if(cljs.core.not(initch)){
return cljs.tools.reader.impl.errors.throw_eof_at_start(rdr,kind);
} else {
if(cljs.core.truth_((function (){var and__11731__auto__ = validate_leading_QMARK_;
if(cljs.core.truth_(and__11731__auto__)){
return cljs.tools.reader.edn.not_constituent_QMARK_(initch);
} else {
return and__11731__auto__;
}
})())){
return cljs.tools.reader.impl.errors.throw_bad_char(rdr,kind,initch);
} else {
var sb = (new goog.string.StringBuffer());
var ch = (function (){
cljs.tools.reader.reader_types.unread(rdr,initch);

return initch;
})()
;
while(true){
if((cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)) || (cljs.tools.reader.edn.macro_terminating_QMARK_(ch)) || ((ch == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(cljs.tools.reader.edn.not_constituent_QMARK_(ch)){
return cljs.tools.reader.impl.errors.throw_bad_char(rdr,kind,ch);
} else {
var G__19078 = (function (){var G__19076 = sb;
G__19076.append(cljs.tools.reader.reader_types.read_char(rdr));

return G__19076;
})();
var G__19079 = cljs.tools.reader.reader_types.peek_char(rdr);
sb = G__19078;
ch = G__19079;
continue;
}
}
break;
}

}
}
});

cljs.tools.reader.edn.read_token.cljs$lang$maxFixedArity = 4;

cljs.tools.reader.edn.read_dispatch = (function cljs$tools$reader$edn$read_dispatch(rdr,_,opts){
var temp__5455__auto__ = cljs.tools.reader.reader_types.read_char(rdr);
if(cljs.core.truth_(temp__5455__auto__)){
var ch = temp__5455__auto__;
var temp__5455__auto____$1 = (cljs.tools.reader.edn.dispatch_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.edn.dispatch_macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.edn.dispatch_macros.call(null,ch));
if(cljs.core.truth_(temp__5455__auto____$1)){
var dm = temp__5455__auto____$1;
return (dm.cljs$core$IFn$_invoke$arity$3 ? dm.cljs$core$IFn$_invoke$arity$3(rdr,ch,opts) : dm.call(null,rdr,ch,opts));
} else {
var temp__5455__auto____$2 = (function (){var G__19080 = (function (){var G__19083 = rdr;
cljs.tools.reader.reader_types.unread(G__19083,ch);

return G__19083;
})();
var G__19081 = ch;
var G__19082 = opts;
return (cljs.tools.reader.edn.read_tagged.cljs$core$IFn$_invoke$arity$3 ? cljs.tools.reader.edn.read_tagged.cljs$core$IFn$_invoke$arity$3(G__19080,G__19081,G__19082) : cljs.tools.reader.edn.read_tagged.call(null,G__19080,G__19081,G__19082));
})();
if(cljs.core.truth_(temp__5455__auto____$2)){
var obj = temp__5455__auto____$2;
return obj;
} else {
return cljs.tools.reader.impl.errors.throw_no_dispatch(rdr,ch);
}
}
} else {
return cljs.tools.reader.impl.errors.throw_eof_at_dispatch(rdr);
}
});
cljs.tools.reader.edn.read_unmatched_delimiter = (function cljs$tools$reader$edn$read_unmatched_delimiter(rdr,ch,opts){
return cljs.tools.reader.impl.errors.throw_unmatch_delimiter(rdr,ch);
});
cljs.tools.reader.edn.read_unicode_char = (function cljs$tools$reader$edn$read_unicode_char(var_args){
var G__19085 = arguments.length;
switch (G__19085) {
case 4:
return cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$4 = (function (token,offset,length,base){
var l = (offset + length);
if((cljs.core.count(token) === l)){
} else {
cljs.tools.reader.impl.errors.throw_invalid_unicode_literal(null,token);
}

var i = offset;
var uc = (0);
while(true){
if((i === l)){
return String.fromCharCode(uc);
} else {
var d = cljs.tools.reader.char_code(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token,i),base);
if((d === (-1))){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit_in_token(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token,i),token);
} else {
var G__19087 = (i + (1));
var G__19088 = (d + (uc * base));
i = G__19087;
uc = G__19088;
continue;
}
}
break;
}
});

cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$5 = (function (rdr,initch,base,length,exact_QMARK_){
var i = (1);
var uc = cljs.tools.reader.char_code(initch,base);
while(true){
if((uc === (-1))){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit(rdr,initch);
} else {
if(!((i === length))){
var ch = cljs.tools.reader.reader_types.peek_char(rdr);
if(cljs.core.truth_((function (){var or__11743__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_(ch);
if(or__11743__auto__){
return or__11743__auto__;
} else {
var or__11743__auto____$1 = (cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.edn.macros.call(null,ch));
if(cljs.core.truth_(or__11743__auto____$1)){
return or__11743__auto____$1;
} else {
return (ch == null);
}
}
})())){
if(cljs.core.truth_(exact_QMARK_)){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_len(rdr,i,length);
} else {
return String.fromCharCode(uc);
}
} else {
var d = cljs.tools.reader.char_code(ch,base);
cljs.tools.reader.reader_types.read_char(rdr);

if((d === (-1))){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit(rdr,ch);
} else {
var G__19089 = (i + (1));
var G__19090 = (d + (uc * base));
i = G__19089;
uc = G__19090;
continue;
}
}
} else {
return String.fromCharCode(uc);
}
}
break;
}
});

cljs.tools.reader.edn.read_unicode_char.cljs$lang$maxFixedArity = 5;

cljs.tools.reader.edn.upper_limit = ("\uD7FF" | (0));
cljs.tools.reader.edn.lower_limit = ("\uE000" | (0));
cljs.tools.reader.edn.read_char_STAR_ = (function cljs$tools$reader$edn$read_char_STAR_(rdr,backslash,opts){
var ch = cljs.tools.reader.reader_types.read_char(rdr);
if(!((ch == null))){
var token = (((cljs.tools.reader.edn.macro_terminating_QMARK_(ch)) || (cljs.tools.reader.edn.not_constituent_QMARK_(ch)) || (cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch)].join(''):cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$4(rdr,cljs.core.cst$kw$character,ch,false));
var token_len = cljs.core.count(token);
if(((1) === token_len)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token,(0));
} else {
if((token === "newline")){
return "\n";
} else {
if((token === "space")){
return " ";
} else {
if((token === "tab")){
return "\t";
} else {
if((token === "backspace")){
return "\b";
} else {
if((token === "formfeed")){
return "\f";
} else {
if((token === "return")){
return "\r";
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"u"))){
var c = cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$4(token,(1),(4),(16));
var ic = c.charCodeAt();
if(((ic > cljs.tools.reader.edn.upper_limit)) && ((ic < cljs.tools.reader.edn.lower_limit))){
return cljs.tools.reader.impl.errors.throw_invalid_character_literal(rdr,c);
} else {
return c;
}
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"o"))){
var len = (token_len - (1));
if((len > (3))){
return cljs.tools.reader.impl.errors.throw_invalid_octal_len(rdr,token);
} else {
var uc = cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$4(token,(1),len,(8));
if(((uc | (0)) > (255))){
return cljs.tools.reader.impl.errors.throw_bad_octal_number(rdr);
} else {
return uc;
}
}
} else {
return cljs.tools.reader.impl.errors.throw_unsupported_character(rdr,token);

}
}
}
}
}
}
}
}
}
} else {
return cljs.tools.reader.impl.errors.throw_eof_in_character(rdr);
}
});
cljs.tools.reader.edn.starting_line_col_info = (function cljs$tools$reader$edn$starting_line_col_info(rdr){
if(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_(rdr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.tools.reader.reader_types.get_line_number(rdr),(((cljs.tools.reader.reader_types.get_column_number(rdr) | (0)) - (1)) | (0))], null);
} else {
return null;
}
});
cljs.tools.reader.edn.read_delimited = (function cljs$tools$reader$edn$read_delimited(kind,delim,rdr,opts){
var vec__19091 = cljs.tools.reader.edn.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19091,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19091,(1),null);
var delim__$1 = cljs.tools.reader.impl.utils.char$(delim);
var a = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var ch = cljs.tools.reader.impl.commons.read_past(cljs.tools.reader.impl.utils.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch)){
} else {
cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5(rdr,kind,start_line,start_column,cljs.core.count(a));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(delim__$1,cljs.tools.reader.impl.utils.char$(ch))){
return cljs.core.persistent_BANG_(a);
} else {
var temp__5455__auto__ = (cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.edn.macros.call(null,ch));
if(cljs.core.truth_(temp__5455__auto__)){
var macrofn = temp__5455__auto__;
var mret = (macrofn.cljs$core$IFn$_invoke$arity$3 ? macrofn.cljs$core$IFn$_invoke$arity$3(rdr,ch,opts) : macrofn.call(null,rdr,ch,opts));
var G__19099 = ((!((mret === rdr)))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,mret):a);
a = G__19099;
continue;
} else {
var o = (function (){var G__19094 = (function (){var G__19098 = rdr;
cljs.tools.reader.reader_types.unread(G__19098,ch);

return G__19098;
})();
var G__19095 = true;
var G__19096 = null;
var G__19097 = opts;
return (cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(G__19094,G__19095,G__19096,G__19097) : cljs.tools.reader.edn.read.call(null,G__19094,G__19095,G__19096,G__19097));
})();
var G__19100 = ((!((o === rdr)))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,o):a);
a = G__19100;
continue;
}
}
break;
}
});
cljs.tools.reader.edn.read_list = (function cljs$tools$reader$edn$read_list(rdr,_,opts){
var the_list = cljs.tools.reader.edn.read_delimited(cljs.core.cst$kw$list,")",rdr,opts);
if(cljs.core.empty_QMARK_(the_list)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,the_list);
}
});
cljs.tools.reader.edn.read_vector = (function cljs$tools$reader$edn$read_vector(rdr,_,opts){
return cljs.tools.reader.edn.read_delimited(cljs.core.cst$kw$vector,"]",rdr,opts);
});
cljs.tools.reader.edn.read_map = (function cljs$tools$reader$edn$read_map(rdr,_,opts){
var vec__19101 = cljs.tools.reader.edn.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19101,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19101,(1),null);
var the_map = cljs.tools.reader.edn.read_delimited(cljs.core.cst$kw$map,"}",rdr,opts);
var map_count = cljs.core.count(the_map);
var ks = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),the_map);
var key_set = cljs.core.set(ks);
if(cljs.core.odd_QMARK_(map_count)){
cljs.tools.reader.impl.errors.throw_odd_map(rdr,start_line,start_column,the_map);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(key_set),cljs.core.count(ks))){
} else {
cljs.tools.reader.impl.errors.throw_dup_keys(rdr,cljs.core.cst$kw$map,ks);
}

if((map_count <= ((2) * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))){
return cljs.core.PersistentArrayMap.fromArray(cljs.core.to_array(the_map),true,true);
} else {
return cljs.core.PersistentHashMap.fromArray(cljs.core.to_array(the_map),true);
}
});
cljs.tools.reader.edn.read_number = (function cljs$tools$reader$edn$read_number(rdr,initch,opts){
var sb = (function (){var G__19104 = (new goog.string.StringBuffer());
G__19104.append(initch);

return G__19104;
})();
var ch = cljs.tools.reader.reader_types.read_char(rdr);
while(true){
if(cljs.core.truth_((function (){var or__11743__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_(ch);
if(or__11743__auto__){
return or__11743__auto__;
} else {
var or__11743__auto____$1 = (cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.edn.macros.call(null,ch));
if(cljs.core.truth_(or__11743__auto____$1)){
return or__11743__auto____$1;
} else {
return (ch == null);
}
}
})())){
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
cljs.tools.reader.reader_types.unread(rdr,ch);

var or__11743__auto__ = cljs.tools.reader.impl.commons.match_number(s);
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.tools.reader.impl.errors.throw_invalid_number(rdr,s);
}
} else {
var G__19106 = (function (){var G__19105 = sb;
G__19105.append(ch);

return G__19105;
})();
var G__19107 = cljs.tools.reader.reader_types.read_char(rdr);
sb = G__19106;
ch = G__19107;
continue;
}
break;
}
});
cljs.tools.reader.edn.escape_char = (function cljs$tools$reader$edn$escape_char(sb,rdr){
var ch = cljs.tools.reader.reader_types.read_char(rdr);
var G__19108 = ch;
switch (G__19108) {
case "t":
return "\t";

break;
case "r":
return "\r";

break;
case "n":
return "\n";

break;
case "\\":
return "\\";

break;
case "\"":
return "\"";

break;
case "b":
return "\b";

break;
case "f":
return "\f";

break;
case "u":
var ch__$1 = cljs.tools.reader.reader_types.read_char(rdr);
if(((-1) === (function (){var G__19109 = (ch__$1 | (0));
var G__19110 = (16);
return parseInt(G__19109,G__19110);
})())){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_escape(rdr,ch__$1);
} else {
return cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$5(rdr,ch__$1,(16),(4),true);
}

break;
default:
if(cljs.tools.reader.impl.utils.numeric_QMARK_(ch)){
var ch__$1 = cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$5(rdr,ch,(8),(3),false);
if(((ch__$1 | (0)) > (223))){
return cljs.tools.reader.impl.errors.throw_bad_octal_number(rdr);
} else {
return ch__$1;
}
} else {
return cljs.tools.reader.impl.errors.throw_bad_escape_char(rdr,ch);
}

}
});
cljs.tools.reader.edn.read_string_STAR_ = (function cljs$tools$reader$edn$read_string_STAR_(rdr,_,opts){
var sb = (new goog.string.StringBuffer());
var ch = cljs.tools.reader.reader_types.read_char(rdr);
while(true){
var G__19112 = ch;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__19112)){
return cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.cst$kw$string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\"",sb], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",G__19112)){
var G__19115 = (function (){var G__19113 = sb;
G__19113.append(cljs.tools.reader.edn.escape_char(sb,rdr));

return G__19113;
})();
var G__19116 = cljs.tools.reader.reader_types.read_char(rdr);
sb = G__19115;
ch = G__19116;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__19112)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
var G__19117 = (function (){var G__19114 = sb;
G__19114.append(ch);

return G__19114;
})();
var G__19118 = cljs.tools.reader.reader_types.read_char(rdr);
sb = G__19117;
ch = G__19118;
continue;

}
}
}
break;
}
});
cljs.tools.reader.edn.read_symbol = (function cljs$tools$reader$edn$read_symbol(rdr,initch){
var temp__5457__auto__ = cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3(rdr,cljs.core.cst$kw$symbol,initch);
if(cljs.core.truth_(temp__5457__auto__)){
var token = temp__5457__auto__;
var G__19119 = token;
switch (G__19119) {
case "nil":
return null;

break;
case "true":
return true;

break;
case "false":
return false;

break;
case "/":
return cljs.core.cst$sym$_SLASH_;

break;
default:
var or__11743__auto__ = (function (){var temp__5457__auto____$1 = cljs.tools.reader.impl.commons.parse_symbol(token);
if(cljs.core.truth_(temp__5457__auto____$1)){
var p = temp__5457__auto____$1;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1((0)) : p.call(null,(0))),(p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1((1)) : p.call(null,(1))));
} else {
return null;
}
})();
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.tools.reader.impl.errors.throw_invalid(rdr,cljs.core.cst$kw$symbol,token);
}

}
} else {
return null;
}
});
cljs.tools.reader.edn.read_keyword = (function cljs$tools$reader$edn$read_keyword(reader,initch,opts){
var ch = cljs.tools.reader.reader_types.read_char(reader);
if(!(cljs.tools.reader.impl.utils.whitespace_QMARK_(ch))){
var token = cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3(reader,cljs.core.cst$kw$keyword,ch);
var s = cljs.tools.reader.impl.commons.parse_symbol(token);
if(cljs.core.truth_((function (){var and__11731__auto__ = s;
if(cljs.core.truth_(and__11731__auto__)){
return ((-1) === token.indexOf("::"));
} else {
return and__11731__auto__;
}
})())){
var ns = (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1((0)) : s.call(null,(0)));
var name = (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1((1)) : s.call(null,(1)));
if((":" === cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token,(0)))){
return cljs.tools.reader.impl.errors.throw_invalid(reader,cljs.core.cst$kw$keyword,token);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,name);
}
} else {
return cljs.tools.reader.impl.errors.throw_invalid(reader,cljs.core.cst$kw$keyword,token);
}
} else {
return cljs.tools.reader.impl.errors.throw_single_colon(reader);
}
});
cljs.tools.reader.edn.wrapping_reader = (function cljs$tools$reader$edn$wrapping_reader(sym){
return (function (rdr,_,opts){
var x__12697__auto__ = sym;
return cljs.core._conj((function (){var x__12697__auto____$1 = (cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,opts) : cljs.tools.reader.edn.read.call(null,rdr,true,null,opts));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
});
});
cljs.tools.reader.edn.read_meta = (function cljs$tools$reader$edn$read_meta(rdr,_,opts){
var m = cljs.tools.reader.impl.utils.desugar_meta((cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,opts) : cljs.tools.reader.edn.read.call(null,rdr,true,null,opts)));
if(cljs.core.map_QMARK_(m)){
} else {
cljs.tools.reader.impl.errors.throw_bad_metadata(rdr,m);
}

var o = (cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,opts) : cljs.tools.reader.edn.read.call(null,rdr,true,null,opts));
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.with_meta(o,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(o),m], 0)));
} else {
return cljs.tools.reader.impl.errors.throw_bad_metadata_target(rdr,o);
}
});
cljs.tools.reader.edn.read_set = (function cljs$tools$reader$edn$read_set(rdr,_,opts){
var coll = cljs.tools.reader.edn.read_delimited(cljs.core.cst$kw$set,"}",rdr,opts);
var the_set = cljs.core.set(coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),cljs.core.count(the_set))){
} else {
cljs.tools.reader.impl.errors.throw_dup_keys(rdr,cljs.core.cst$kw$set,coll);
}

return the_set;
});
cljs.tools.reader.edn.read_discard = (function cljs$tools$reader$edn$read_discard(rdr,_,opts){
var G__19122 = rdr;
(cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(G__19122,true,null,true) : cljs.tools.reader.edn.read.call(null,G__19122,true,null,true));

return G__19122;
});
cljs.tools.reader.edn.read_namespaced_map = (function cljs$tools$reader$edn$read_namespaced_map(rdr,_,opts){
var token = cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3(rdr,cljs.core.cst$kw$namespaced_DASH_map,cljs.tools.reader.reader_types.read_char(rdr));
var temp__5455__auto__ = (function (){var G__19123 = token;
var G__19123__$1 = (((G__19123 == null))?null:cljs.tools.reader.impl.commons.parse_symbol(G__19123));
if((G__19123__$1 == null)){
return null;
} else {
return cljs.tools.reader.impl.utils.second_SINGLEQUOTE_(G__19123__$1);
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var ns = temp__5455__auto__;
var ch = cljs.tools.reader.impl.commons.read_past(cljs.tools.reader.impl.utils.whitespace_QMARK_,rdr);
if((ch === "{")){
var items = cljs.tools.reader.edn.read_delimited(cljs.core.cst$kw$namespaced_DASH_map,"}",rdr,opts);
if(cljs.core.odd_QMARK_(cljs.core.count(items))){
cljs.tools.reader.impl.errors.throw_odd_map(rdr,null,null,items);
} else {
}

var keys = cljs.tools.reader.impl.utils.namespace_keys([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),items));
var vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(items));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.set(keys)),cljs.core.count(keys))){
} else {
cljs.tools.reader.impl.errors.throw_dup_keys(rdr,cljs.core.cst$kw$namespaced_DASH_map,keys);
}

return cljs.core.zipmap(keys,vals);
} else {
return cljs.tools.reader.impl.errors.throw_ns_map_no_map(rdr,token);
}
} else {
return cljs.tools.reader.impl.errors.throw_bad_ns(rdr,token);
}
});
cljs.tools.reader.edn.read_symbolic_value = (function cljs$tools$reader$edn$read_symbolic_value(rdr,_,opts){
var sym = (cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,opts) : cljs.tools.reader.edn.read.call(null,rdr,true,null,opts));
var G__19124 = sym;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$NaN,G__19124)){
return Number.NaN;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_DASH_Inf,G__19124)){
return Number.NEGATIVE_INFINITY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$Inf,G__19124)){
return Number.POSITIVE_INFINITY;
} else {
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Invalid token: ##",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')], 0));

}
}
}
});
cljs.tools.reader.edn.macros = (function cljs$tools$reader$edn$macros(ch){
var G__19125 = ch;
switch (G__19125) {
case "\"":
return cljs.tools.reader.edn.read_string_STAR_;

break;
case ":":
return cljs.tools.reader.edn.read_keyword;

break;
case ";":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "^":
return cljs.tools.reader.edn.read_meta;

break;
case "(":
return cljs.tools.reader.edn.read_list;

break;
case ")":
return cljs.tools.reader.edn.read_unmatched_delimiter;

break;
case "[":
return cljs.tools.reader.edn.read_vector;

break;
case "]":
return cljs.tools.reader.edn.read_unmatched_delimiter;

break;
case "{":
return cljs.tools.reader.edn.read_map;

break;
case "}":
return cljs.tools.reader.edn.read_unmatched_delimiter;

break;
case "\\":
return cljs.tools.reader.edn.read_char_STAR_;

break;
case "#":
return cljs.tools.reader.edn.read_dispatch;

break;
default:
return null;

}
});
cljs.tools.reader.edn.dispatch_macros = (function cljs$tools$reader$edn$dispatch_macros(ch){
var G__19127 = ch;
switch (G__19127) {
case "^":
return cljs.tools.reader.edn.read_meta;

break;
case "{":
return cljs.tools.reader.edn.read_set;

break;
case "<":
return cljs.tools.reader.impl.commons.throwing_reader("Unreadable form");

break;
case "!":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "_":
return cljs.tools.reader.edn.read_discard;

break;
case ":":
return cljs.tools.reader.edn.read_namespaced_map;

break;
case "#":
return cljs.tools.reader.edn.read_symbolic_value;

break;
default:
return null;

}
});
cljs.tools.reader.edn.read_tagged = (function cljs$tools$reader$edn$read_tagged(rdr,initch,opts){
var tag = (cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,opts) : cljs.tools.reader.edn.read.call(null,rdr,true,null,opts));
var object = (cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,opts) : cljs.tools.reader.edn.read.call(null,rdr,true,null,opts));
if(!((tag instanceof cljs.core.Symbol))){
cljs.tools.reader.impl.errors.throw_bad_reader_tag(rdr,"Reader tag must be a symbol");
} else {
}

var temp__5455__auto__ = (function (){var or__11743__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$readers.cljs$core$IFn$_invoke$arity$1(opts),tag);
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return (cljs.tools.reader.default_data_readers.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.default_data_readers.cljs$core$IFn$_invoke$arity$1(tag) : cljs.tools.reader.default_data_readers.call(null,tag));
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(object) : f.call(null,object));
} else {
var temp__5455__auto____$1 = cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5455__auto____$1)){
var d = temp__5455__auto____$1;
return (d.cljs$core$IFn$_invoke$arity$2 ? d.cljs$core$IFn$_invoke$arity$2(tag,object) : d.call(null,tag,object));
} else {
return cljs.tools.reader.impl.errors.throw_unknown_reader_tag(rdr,tag);
}
}
});
/**
 * Reads the first object from an IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * clojure.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.tools.reader.edn.read = (function cljs$tools$reader$edn$read(var_args){
var G__19130 = arguments.length;
switch (G__19130) {
case 1:
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,reader);
});

cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2 = (function (p__19131,reader){
var map__19132 = p__19131;
var map__19132__$1 = ((((!((map__19132 == null)))?((((map__19132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19132):map__19132);
var opts = map__19132__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19132__$1,cljs.core.cst$kw$eof);
var eof_error_QMARK_ = !(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$eof));
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(reader,eof_error_QMARK_,eof,opts);
});

cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
try{while(true){
var ch = cljs.tools.reader.reader_types.read_char(reader);
if(cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)){
continue;
} else {
if((ch == null)){
if(cljs.core.truth_(eof_error_QMARK_)){
return cljs.tools.reader.impl.errors.throw_eof_error(reader,null);
} else {
return eof;
}
} else {
if(cljs.tools.reader.impl.commons.number_literal_QMARK_(reader,ch)){
return cljs.tools.reader.edn.read_number(reader,ch,opts);
} else {
var f = cljs.tools.reader.edn.macros(ch);
if(cljs.core.truth_(f)){
var res = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(reader,ch,opts) : f.call(null,reader,ch,opts));
if((res === reader)){
continue;
} else {
return res;
}
} else {
return cljs.tools.reader.edn.read_symbol(reader,ch);
}

}
}
}
break;
}
}catch (e19134){if((e19134 instanceof Error)){
var e = e19134;
if(cljs.tools.reader.impl.utils.ex_info_QMARK_(e)){
var d = cljs.core.ex_data(e);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reader_DASH_exception,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(d))){
throw e;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(e.message,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reader_DASH_exception], null),d,(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader))?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,cljs.tools.reader.reader_types.get_line_number(reader),cljs.core.cst$kw$column,cljs.tools.reader.reader_types.get_column_number(reader),cljs.core.cst$kw$file,cljs.tools.reader.reader_types.get_file_name(reader)], null):null)], 0)),e);
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(e.message,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reader_DASH_exception], null),(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader))?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,cljs.tools.reader.reader_types.get_line_number(reader),cljs.core.cst$kw$column,cljs.tools.reader.reader_types.get_column_number(reader),cljs.core.cst$kw$file,cljs.tools.reader.reader_types.get_file_name(reader)], null):null)], 0)),e);
}
} else {
throw e19134;

}
}});

cljs.tools.reader.edn.read.cljs$lang$maxFixedArity = 4;

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per clojure.tools.reader.edn/read
 */
cljs.tools.reader.edn.read_string = (function cljs$tools$reader$edn$read_string(var_args){
var G__19137 = arguments.length;
switch (G__19137) {
case 1:
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$eof,null], null),s);
});

cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(cljs.core.truth_((function (){var and__11731__auto__ = s;
if(cljs.core.truth_(and__11731__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s,"");
} else {
return and__11731__auto__;
}
})())){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(opts,cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
} else {
return null;
}
});

cljs.tools.reader.edn.read_string.cljs$lang$maxFixedArity = 2;
