// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels22212 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels22212 = (function (val,meta22213){
this.val = val;
this.meta22213 = meta22213;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels22212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22214,meta22213__$1){
var self__ = this;
var _22214__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels22212(self__.val,meta22213__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels22212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22214){
var self__ = this;
var _22214__$1 = this;
return self__.meta22213;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels22212.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels22212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val,cljs.core.cst$sym$meta22213], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels22212.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels22212.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels22212";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels22212.cljs$lang$ctorPrWriter = (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels22212");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels22212 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels22212(val__$1,meta22213){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels22212(val__$1,meta22213));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels22212(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$handler,cljs.core.cst$sym$val], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__12476__auto__ = (((this$ == null))?null:this$);
var m__12477__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__12476__auto__)]);
if(!((m__12477__auto__ == null))){
return (m__12477__auto__.cljs$core$IFn$_invoke$arity$1 ? m__12477__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__12477__auto__.call(null,this$));
} else {
var m__12477__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__12477__auto____$1 == null))){
return (m__12477__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__12477__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__12477__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_22226 = self__.puts.pop();
if((putter_22226 == null)){
} else {
var put_handler_22227 = putter_22226.handler;
var val_22228 = putter_22226.val;
if(put_handler_22227.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_22229 = put_handler_22227.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_22229,put_handler_22227,val_22228,putter_22226,this$__$1){
return (function (){
return (put_cb_22229.cljs$core$IFn$_invoke$arity$1 ? put_cb_22229.cljs$core$IFn$_invoke$arity$1(true) : put_cb_22229.call(null,true));
});})(put_cb_22229,put_handler_22227,val_22228,putter_22226,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return this$__$1.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return cljs.core.async.impl.channels.box(!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__11731__auto__ = self__.buf;
if(cljs.core.truth_(and__11731__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__11731__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null,self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0)))){
var taker = self__.takes.pop();
if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var ret = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var G__22230 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null,val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__22230;
continue;
} else {
var G__22231 = takers;
takers = G__22231;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__22215_22232 = cljs.core.seq(take_cbs);
var chunk__22216_22233 = null;
var count__22217_22234 = (0);
var i__22218_22235 = (0);
while(true){
if((i__22218_22235 < count__22217_22234)){
var f_22236 = chunk__22216_22233.cljs$core$IIndexed$_nth$arity$2(null,i__22218_22235);
cljs.core.async.impl.dispatch.run(f_22236);

var G__22237 = seq__22215_22232;
var G__22238 = chunk__22216_22233;
var G__22239 = count__22217_22234;
var G__22240 = (i__22218_22235 + (1));
seq__22215_22232 = G__22237;
chunk__22216_22233 = G__22238;
count__22217_22234 = G__22239;
i__22218_22235 = G__22240;
continue;
} else {
var temp__5457__auto___22241 = cljs.core.seq(seq__22215_22232);
if(temp__5457__auto___22241){
var seq__22215_22242__$1 = temp__5457__auto___22241;
if(cljs.core.chunked_seq_QMARK_(seq__22215_22242__$1)){
var c__12674__auto___22243 = cljs.core.chunk_first(seq__22215_22242__$1);
var G__22244 = cljs.core.chunk_rest(seq__22215_22242__$1);
var G__22245 = c__12674__auto___22243;
var G__22246 = cljs.core.count(c__12674__auto___22243);
var G__22247 = (0);
seq__22215_22232 = G__22244;
chunk__22216_22233 = G__22245;
count__22217_22234 = G__22246;
i__22218_22235 = G__22247;
continue;
} else {
var f_22248 = cljs.core.first(seq__22215_22242__$1);
cljs.core.async.impl.dispatch.run(f_22248);

var G__22249 = cljs.core.next(seq__22215_22242__$1);
var G__22250 = null;
var G__22251 = (0);
var G__22252 = (0);
seq__22215_22232 = G__22249;
chunk__22216_22233 = G__22250;
count__22217_22234 = G__22251;
i__22218_22235 = G__22252;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit(taker);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null,val));
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join('')),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count(self__.buf) > (0)))){
var temp__5455__auto__ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
if(cljs.core.truth_(temp__5455__auto__)){
var take_cb = temp__5455__auto__;
var val = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var vec__22219 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__11731__auto__ = put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(and__11731__auto__){
return put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__11731__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null,self__.buf,val__$1))):null);
if((cljs.core.not(done_QMARK_)) && (cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0)))){
var G__22253 = cbs__$1;
cbs = G__22253;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22219,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22219,(1),null);
if(cljs.core.truth_(done_QMARK_)){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

var seq__22222_22254 = cljs.core.seq(cbs);
var chunk__22223_22255 = null;
var count__22224_22256 = (0);
var i__22225_22257 = (0);
while(true){
if((i__22225_22257 < count__22224_22256)){
var cb_22258 = chunk__22223_22255.cljs$core$IIndexed$_nth$arity$2(null,i__22225_22257);
cljs.core.async.impl.dispatch.run(((function (seq__22222_22254,chunk__22223_22255,count__22224_22256,i__22225_22257,cb_22258,val,vec__22219,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return (cb_22258.cljs$core$IFn$_invoke$arity$1 ? cb_22258.cljs$core$IFn$_invoke$arity$1(true) : cb_22258.call(null,true));
});})(seq__22222_22254,chunk__22223_22255,count__22224_22256,i__22225_22257,cb_22258,val,vec__22219,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);

var G__22259 = seq__22222_22254;
var G__22260 = chunk__22223_22255;
var G__22261 = count__22224_22256;
var G__22262 = (i__22225_22257 + (1));
seq__22222_22254 = G__22259;
chunk__22223_22255 = G__22260;
count__22224_22256 = G__22261;
i__22225_22257 = G__22262;
continue;
} else {
var temp__5457__auto___22263 = cljs.core.seq(seq__22222_22254);
if(temp__5457__auto___22263){
var seq__22222_22264__$1 = temp__5457__auto___22263;
if(cljs.core.chunked_seq_QMARK_(seq__22222_22264__$1)){
var c__12674__auto___22265 = cljs.core.chunk_first(seq__22222_22264__$1);
var G__22266 = cljs.core.chunk_rest(seq__22222_22264__$1);
var G__22267 = c__12674__auto___22265;
var G__22268 = cljs.core.count(c__12674__auto___22265);
var G__22269 = (0);
seq__22222_22254 = G__22266;
chunk__22223_22255 = G__22267;
count__22224_22256 = G__22268;
i__22225_22257 = G__22269;
continue;
} else {
var cb_22270 = cljs.core.first(seq__22222_22264__$1);
cljs.core.async.impl.dispatch.run(((function (seq__22222_22254,chunk__22223_22255,count__22224_22256,i__22225_22257,cb_22270,seq__22222_22264__$1,temp__5457__auto___22263,val,vec__22219,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return (cb_22270.cljs$core$IFn$_invoke$arity$1 ? cb_22270.cljs$core$IFn$_invoke$arity$1(true) : cb_22270.call(null,true));
});})(seq__22222_22254,chunk__22223_22255,count__22224_22256,i__22225_22257,cb_22270,seq__22222_22264__$1,temp__5457__auto___22263,val,vec__22219,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);

var G__22271 = cljs.core.next(seq__22222_22264__$1);
var G__22272 = null;
var G__22273 = (0);
var G__22274 = (0);
seq__22222_22254 = G__22271;
chunk__22223_22255 = G__22272;
count__22224_22256 = G__22273;
i__22225_22257 = G__22274;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb,putter,this$__$1){
return (function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null,true));
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__11731__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__11731__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__11731__auto__;
}
})())){
var has_val = (function (){var and__11731__auto__ = self__.buf;
if(cljs.core.truth_(and__11731__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__11731__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join('')),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__11731__auto__ = self__.buf;
if(cljs.core.truth_(and__11731__auto__)){
return (self__.puts.length === (0));
} else {
return and__11731__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

while(true){
var taker_22275 = self__.takes.pop();
if((taker_22275 == null)){
} else {
if(taker_22275.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_22276 = taker_22275.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_22277 = (cljs.core.truth_((function (){var and__11731__auto__ = self__.buf;
if(cljs.core.truth_(and__11731__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__11731__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_22276,val_22277,taker_22275,this$__$1){
return (function (){
return (take_cb_22276.cljs$core$IFn$_invoke$arity$1 ? take_cb_22276.cljs$core$IFn$_invoke$arity$1(val_22277) : take_cb_22276.call(null,val_22277));
});})(take_cb_22276,val_22277,taker_22275,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$takes,cljs.core.with_meta(cljs.core.cst$sym$dirty_DASH_takes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$puts,cljs.core.with_meta(cljs.core.cst$sym$dirty_DASH_puts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$buf,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$not_DASH_native], null)),cljs.core.with_meta(cljs.core.cst$sym$closed,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$add_BANG_], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var fexpr__22278 = (function (){var or__11743__auto__ = exh;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})();
return (fexpr__22278.cljs$core$IFn$_invoke$arity$1 ? fexpr__22278.cljs$core$IFn$_invoke$arity$1(t) : fexpr__22278.call(null,t));
})();
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__22280 = arguments.length;
switch (G__22280) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null,cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__22284 = null;
var G__22284__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null,buf__$1));
}catch (e22281){var t = e22281;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__22284__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null,buf__$1,val));
}catch (e22282){var t = e22282;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__22284 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__22284__1.call(this,buf__$1);
case 2:
return G__22284__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__22284.cljs$core$IFn$_invoke$arity$1 = G__22284__1;
G__22284.cljs$core$IFn$_invoke$arity$2 = G__22284__2;
return G__22284;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;

