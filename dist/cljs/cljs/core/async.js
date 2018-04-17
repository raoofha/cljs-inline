// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24548 = arguments.length;
switch (G__24548) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24549 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24549 = (function (f,blockable,meta24550){
this.f = f;
this.blockable = blockable;
this.meta24550 = meta24550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24551,meta24550__$1){
var self__ = this;
var _24551__$1 = this;
return (new cljs.core.async.t_cljs$core$async24549(self__.f,self__.blockable,meta24550__$1));
});

cljs.core.async.t_cljs$core$async24549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24551){
var self__ = this;
var _24551__$1 = this;
return self__.meta24550;
});

cljs.core.async.t_cljs$core$async24549.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24549.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24549.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24549.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta24550], null);
});

cljs.core.async.t_cljs$core$async24549.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24549";

cljs.core.async.t_cljs$core$async24549.cljs$lang$ctorPrWriter = (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async/t_cljs$core$async24549");
});

cljs.core.async.__GT_t_cljs$core$async24549 = (function cljs$core$async$__GT_t_cljs$core$async24549(f__$1,blockable__$1,meta24550){
return (new cljs.core.async.t_cljs$core$async24549(f__$1,blockable__$1,meta24550));
});

}

return (new cljs.core.async.t_cljs$core$async24549(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__24555 = arguments.length;
switch (G__24555) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__24558 = arguments.length;
switch (G__24558) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__24561 = arguments.length;
switch (G__24561) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_24563 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24563) : fn1.call(null,val_24563));
} else {
cljs.core.async.impl.dispatch.run(((function (val_24563,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24563) : fn1.call(null,val_24563));
});})(val_24563,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__24565 = arguments.length;
switch (G__24565) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__12788__auto___24567 = n;
var x_24568 = (0);
while(true){
if((x_24568 < n__12788__auto___24567)){
(a[x_24568] = (0));

var G__24569 = (x_24568 + (1));
x_24568 = G__24569;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__24570 = (i + (1));
i = G__24570;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async24571 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24571 = (function (flag,meta24572){
this.flag = flag;
this.meta24572 = meta24572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24573,meta24572__$1){
var self__ = this;
var _24573__$1 = this;
return (new cljs.core.async.t_cljs$core$async24571(self__.flag,meta24572__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24571.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24573){
var self__ = this;
var _24573__$1 = this;
return self__.meta24572;
});})(flag))
;

cljs.core.async.t_cljs$core$async24571.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24571.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24571.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta24572], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24571";

cljs.core.async.t_cljs$core$async24571.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async/t_cljs$core$async24571");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24571 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24571(flag__$1,meta24572){
return (new cljs.core.async.t_cljs$core$async24571(flag__$1,meta24572));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24571(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24574 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24574 = (function (flag,cb,meta24575){
this.flag = flag;
this.cb = cb;
this.meta24575 = meta24575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24576,meta24575__$1){
var self__ = this;
var _24576__$1 = this;
return (new cljs.core.async.t_cljs$core$async24574(self__.flag,self__.cb,meta24575__$1));
});

cljs.core.async.t_cljs$core$async24574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24576){
var self__ = this;
var _24576__$1 = this;
return self__.meta24575;
});

cljs.core.async.t_cljs$core$async24574.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24574.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async24574.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24574.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta24575], null);
});

cljs.core.async.t_cljs$core$async24574.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24574.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24574";

cljs.core.async.t_cljs$core$async24574.cljs$lang$ctorPrWriter = (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async/t_cljs$core$async24574");
});

cljs.core.async.__GT_t_cljs$core$async24574 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24574(flag__$1,cb__$1,meta24575){
return (new cljs.core.async.t_cljs$core$async24574(flag__$1,cb__$1,meta24575));
});

}

return (new cljs.core.async.t_cljs$core$async24574(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24577_SHARP_){
var G__24579 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24577_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24579) : fret.call(null,G__24579));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24578_SHARP_){
var G__24580 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24578_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24580) : fret.call(null,G__24580));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__11743__auto__ = wport;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24581 = (i + (1));
i = G__24581;
continue;
}
} else {
return null;
}
break;
}
})();
var or__11743__auto__ = ret;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5457__auto__ = (function (){var and__11731__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__11731__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__11731__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__13029__auto__ = [];
var len__13022__auto___24587 = arguments.length;
var i__13023__auto___24588 = (0);
while(true){
if((i__13023__auto___24588 < len__13022__auto___24587)){
args__13029__auto__.push((arguments[i__13023__auto___24588]));

var G__24589 = (i__13023__auto___24588 + (1));
i__13023__auto___24588 = G__24589;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((1) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__13030__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24584){
var map__24585 = p__24584;
var map__24585__$1 = ((((!((map__24585 == null)))?((((map__24585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24585.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24585):map__24585);
var opts = map__24585__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24582){
var G__24583 = cljs.core.first(seq24582);
var seq24582__$1 = cljs.core.next(seq24582);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24583,seq24582__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__24591 = arguments.length;
switch (G__24591) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24488__auto___24637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24488__auto___24637){
return (function (){
var f__24489__auto__ = (function (){var switch__24386__auto__ = ((function (c__24488__auto___24637){
return (function (state_24615){
var state_val_24616 = (state_24615[(1)]);
if((state_val_24616 === (7))){
var inst_24611 = (state_24615[(2)]);
var state_24615__$1 = state_24615;
var statearr_24617_24638 = state_24615__$1;
(statearr_24617_24638[(2)] = inst_24611);

(statearr_24617_24638[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24616 === (1))){
var state_24615__$1 = state_24615;
var statearr_24618_24639 = state_24615__$1;
(statearr_24618_24639[(2)] = null);

(statearr_24618_24639[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24616 === (4))){
var inst_24594 = (state_24615[(7)]);
var inst_24594__$1 = (state_24615[(2)]);
var inst_24595 = (inst_24594__$1 == null);
var state_24615__$1 = (function (){var statearr_24619 = state_24615;
(statearr_24619[(7)] = inst_24594__$1);

return statearr_24619;
})();
if(cljs.core.truth_(inst_24595)){
var statearr_24620_24640 = state_24615__$1;
(statearr_24620_24640[(1)] = (5));

} else {
var statearr_24621_24641 = state_24615__$1;
(statearr_24621_24641[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24616 === (13))){
var state_24615__$1 = state_24615;
var statearr_24622_24642 = state_24615__$1;
(statearr_24622_24642[(2)] = null);

(statearr_24622_24642[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24616 === (6))){
var inst_24594 = (state_24615[(7)]);
var state_24615__$1 = state_24615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24615__$1,(11),to,inst_24594);
} else {
if((state_val_24616 === (3))){
var inst_24613 = (state_24615[(2)]);
var state_24615__$1 = state_24615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24615__$1,inst_24613);
} else {
if((state_val_24616 === (12))){
var state_24615__$1 = state_24615;
var statearr_24623_24643 = state_24615__$1;
(statearr_24623_24643[(2)] = null);

(statearr_24623_24643[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24616 === (2))){
var state_24615__$1 = state_24615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24615__$1,(4),from);
} else {
if((state_val_24616 === (11))){
var inst_24604 = (state_24615[(2)]);
var state_24615__$1 = state_24615;
if(cljs.core.truth_(inst_24604)){
var statearr_24624_24644 = state_24615__$1;
(statearr_24624_24644[(1)] = (12));

} else {
var statearr_24625_24645 = state_24615__$1;
(statearr_24625_24645[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24616 === (9))){
var state_24615__$1 = state_24615;
var statearr_24626_24646 = state_24615__$1;
(statearr_24626_24646[(2)] = null);

(statearr_24626_24646[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24616 === (5))){
var state_24615__$1 = state_24615;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24627_24647 = state_24615__$1;
(statearr_24627_24647[(1)] = (8));

} else {
var statearr_24628_24648 = state_24615__$1;
(statearr_24628_24648[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24616 === (14))){
var inst_24609 = (state_24615[(2)]);
var state_24615__$1 = state_24615;
var statearr_24629_24649 = state_24615__$1;
(statearr_24629_24649[(2)] = inst_24609);

(statearr_24629_24649[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24616 === (10))){
var inst_24601 = (state_24615[(2)]);
var state_24615__$1 = state_24615;
var statearr_24630_24650 = state_24615__$1;
(statearr_24630_24650[(2)] = inst_24601);

(statearr_24630_24650[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24616 === (8))){
var inst_24598 = cljs.core.async.close_BANG_(to);
var state_24615__$1 = state_24615;
var statearr_24631_24651 = state_24615__$1;
(statearr_24631_24651[(2)] = inst_24598);

(statearr_24631_24651[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24488__auto___24637))
;
return ((function (switch__24386__auto__,c__24488__auto___24637){
return (function() {
var cljs$core$async$state_machine__24387__auto__ = null;
var cljs$core$async$state_machine__24387__auto____0 = (function (){
var statearr_24632 = [null,null,null,null,null,null,null,null];
(statearr_24632[(0)] = cljs$core$async$state_machine__24387__auto__);

(statearr_24632[(1)] = (1));

return statearr_24632;
});
var cljs$core$async$state_machine__24387__auto____1 = (function (state_24615){
while(true){
var ret_value__24388__auto__ = (function (){try{while(true){
var result__24389__auto__ = switch__24386__auto__(state_24615);
if(cljs.core.keyword_identical_QMARK_(result__24389__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24389__auto__;
}
break;
}
}catch (e24633){if((e24633 instanceof Object)){
var ex__24390__auto__ = e24633;
var statearr_24634_24652 = state_24615;
(statearr_24634_24652[(5)] = ex__24390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24615);

return cljs.core.cst$kw$recur;
} else {
throw e24633;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24388__auto__,cljs.core.cst$kw$recur)){
var G__24653 = state_24615;
state_24615 = G__24653;
continue;
} else {
return ret_value__24388__auto__;
}
break;
}
});
cljs$core$async$state_machine__24387__auto__ = function(state_24615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24387__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24387__auto____1.call(this,state_24615);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24387__auto____0;
cljs$core$async$state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24387__auto____1;
return cljs$core$async$state_machine__24387__auto__;
})()
;})(switch__24386__auto__,c__24488__auto___24637))
})();
var state__24490__auto__ = (function (){var statearr_24635 = (f__24489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24489__auto__.cljs$core$IFn$_invoke$arity$0() : f__24489__auto__.call(null));
(statearr_24635[(6)] = c__24488__auto___24637);

return statearr_24635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24490__auto__);
});})(c__24488__auto___24637))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__24654){
var vec__24655 = p__24654;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24655,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24655,(1),null);
var job = vec__24655;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__24488__auto___24826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24488__auto___24826,res,vec__24655,v,p,job,jobs,results){
return (function (){
var f__24489__auto__ = (function (){var switch__24386__auto__ = ((function (c__24488__auto___24826,res,vec__24655,v,p,job,jobs,results){
return (function (state_24662){
var state_val_24663 = (state_24662[(1)]);
if((state_val_24663 === (1))){
var state_24662__$1 = state_24662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24662__$1,(2),res,v);
} else {
if((state_val_24663 === (2))){
var inst_24659 = (state_24662[(2)]);
var inst_24660 = cljs.core.async.close_BANG_(res);
var state_24662__$1 = (function (){var statearr_24664 = state_24662;
(statearr_24664[(7)] = inst_24659);

return statearr_24664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24662__$1,inst_24660);
} else {
return null;
}
}
});})(c__24488__auto___24826,res,vec__24655,v,p,job,jobs,results))
;
return ((function (switch__24386__auto__,c__24488__auto___24826,res,vec__24655,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____0 = (function (){
var statearr_24665 = [null,null,null,null,null,null,null,null];
(statearr_24665[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__);

(statearr_24665[(1)] = (1));

return statearr_24665;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____1 = (function (state_24662){
while(true){
var ret_value__24388__auto__ = (function (){try{while(true){
var result__24389__auto__ = switch__24386__auto__(state_24662);
if(cljs.core.keyword_identical_QMARK_(result__24389__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24389__auto__;
}
break;
}
}catch (e24666){if((e24666 instanceof Object)){
var ex__24390__auto__ = e24666;
var statearr_24667_24827 = state_24662;
(statearr_24667_24827[(5)] = ex__24390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24662);

return cljs.core.cst$kw$recur;
} else {
throw e24666;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24388__auto__,cljs.core.cst$kw$recur)){
var G__24828 = state_24662;
state_24662 = G__24828;
continue;
} else {
return ret_value__24388__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__ = function(state_24662){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____1.call(this,state_24662);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__;
})()
;})(switch__24386__auto__,c__24488__auto___24826,res,vec__24655,v,p,job,jobs,results))
})();
var state__24490__auto__ = (function (){var statearr_24668 = (f__24489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24489__auto__.cljs$core$IFn$_invoke$arity$0() : f__24489__auto__.call(null));
(statearr_24668[(6)] = c__24488__auto___24826);

return statearr_24668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24490__auto__);
});})(c__24488__auto___24826,res,vec__24655,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24669){
var vec__24670 = p__24669;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24670,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24670,(1),null);
var job = vec__24670;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__12788__auto___24829 = n;
var __24830 = (0);
while(true){
if((__24830 < n__12788__auto___24829)){
var G__24673_24831 = type;
var G__24673_24832__$1 = (((G__24673_24831 instanceof cljs.core.Keyword))?G__24673_24831.fqn:null);
switch (G__24673_24832__$1) {
case "compute":
var c__24488__auto___24834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24830,c__24488__auto___24834,G__24673_24831,G__24673_24832__$1,n__12788__auto___24829,jobs,results,process,async){
return (function (){
var f__24489__auto__ = (function (){var switch__24386__auto__ = ((function (__24830,c__24488__auto___24834,G__24673_24831,G__24673_24832__$1,n__12788__auto___24829,jobs,results,process,async){
return (function (state_24686){
var state_val_24687 = (state_24686[(1)]);
if((state_val_24687 === (1))){
var state_24686__$1 = state_24686;
var statearr_24688_24835 = state_24686__$1;
(statearr_24688_24835[(2)] = null);

(statearr_24688_24835[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24687 === (2))){
var state_24686__$1 = state_24686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24686__$1,(4),jobs);
} else {
if((state_val_24687 === (3))){
var inst_24684 = (state_24686[(2)]);
var state_24686__$1 = state_24686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24686__$1,inst_24684);
} else {
if((state_val_24687 === (4))){
var inst_24676 = (state_24686[(2)]);
var inst_24677 = process(inst_24676);
var state_24686__$1 = state_24686;
if(cljs.core.truth_(inst_24677)){
var statearr_24689_24836 = state_24686__$1;
(statearr_24689_24836[(1)] = (5));

} else {
var statearr_24690_24837 = state_24686__$1;
(statearr_24690_24837[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24687 === (5))){
var state_24686__$1 = state_24686;
var statearr_24691_24838 = state_24686__$1;
(statearr_24691_24838[(2)] = null);

(statearr_24691_24838[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24687 === (6))){
var state_24686__$1 = state_24686;
var statearr_24692_24839 = state_24686__$1;
(statearr_24692_24839[(2)] = null);

(statearr_24692_24839[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24687 === (7))){
var inst_24682 = (state_24686[(2)]);
var state_24686__$1 = state_24686;
var statearr_24693_24840 = state_24686__$1;
(statearr_24693_24840[(2)] = inst_24682);

(statearr_24693_24840[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__24830,c__24488__auto___24834,G__24673_24831,G__24673_24832__$1,n__12788__auto___24829,jobs,results,process,async))
;
return ((function (__24830,switch__24386__auto__,c__24488__auto___24834,G__24673_24831,G__24673_24832__$1,n__12788__auto___24829,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____0 = (function (){
var statearr_24694 = [null,null,null,null,null,null,null];
(statearr_24694[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__);

(statearr_24694[(1)] = (1));

return statearr_24694;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____1 = (function (state_24686){
while(true){
var ret_value__24388__auto__ = (function (){try{while(true){
var result__24389__auto__ = switch__24386__auto__(state_24686);
if(cljs.core.keyword_identical_QMARK_(result__24389__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24389__auto__;
}
break;
}
}catch (e24695){if((e24695 instanceof Object)){
var ex__24390__auto__ = e24695;
var statearr_24696_24841 = state_24686;
(statearr_24696_24841[(5)] = ex__24390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24686);

return cljs.core.cst$kw$recur;
} else {
throw e24695;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24388__auto__,cljs.core.cst$kw$recur)){
var G__24842 = state_24686;
state_24686 = G__24842;
continue;
} else {
return ret_value__24388__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__ = function(state_24686){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____1.call(this,state_24686);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__;
})()
;})(__24830,switch__24386__auto__,c__24488__auto___24834,G__24673_24831,G__24673_24832__$1,n__12788__auto___24829,jobs,results,process,async))
})();
var state__24490__auto__ = (function (){var statearr_24697 = (f__24489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24489__auto__.cljs$core$IFn$_invoke$arity$0() : f__24489__auto__.call(null));
(statearr_24697[(6)] = c__24488__auto___24834);

return statearr_24697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24490__auto__);
});})(__24830,c__24488__auto___24834,G__24673_24831,G__24673_24832__$1,n__12788__auto___24829,jobs,results,process,async))
);


break;
case "async":
var c__24488__auto___24843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24830,c__24488__auto___24843,G__24673_24831,G__24673_24832__$1,n__12788__auto___24829,jobs,results,process,async){
return (function (){
var f__24489__auto__ = (function (){var switch__24386__auto__ = ((function (__24830,c__24488__auto___24843,G__24673_24831,G__24673_24832__$1,n__12788__auto___24829,jobs,results,process,async){
return (function (state_24710){
var state_val_24711 = (state_24710[(1)]);
if((state_val_24711 === (1))){
var state_24710__$1 = state_24710;
var statearr_24712_24844 = state_24710__$1;
(statearr_24712_24844[(2)] = null);

(statearr_24712_24844[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24711 === (2))){
var state_24710__$1 = state_24710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24710__$1,(4),jobs);
} else {
if((state_val_24711 === (3))){
var inst_24708 = (state_24710[(2)]);
var state_24710__$1 = state_24710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24710__$1,inst_24708);
} else {
if((state_val_24711 === (4))){
var inst_24700 = (state_24710[(2)]);
var inst_24701 = async(inst_24700);
var state_24710__$1 = state_24710;
if(cljs.core.truth_(inst_24701)){
var statearr_24713_24845 = state_24710__$1;
(statearr_24713_24845[(1)] = (5));

} else {
var statearr_24714_24846 = state_24710__$1;
(statearr_24714_24846[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24711 === (5))){
var state_24710__$1 = state_24710;
var statearr_24715_24847 = state_24710__$1;
(statearr_24715_24847[(2)] = null);

(statearr_24715_24847[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24711 === (6))){
var state_24710__$1 = state_24710;
var statearr_24716_24848 = state_24710__$1;
(statearr_24716_24848[(2)] = null);

(statearr_24716_24848[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24711 === (7))){
var inst_24706 = (state_24710[(2)]);
var state_24710__$1 = state_24710;
var statearr_24717_24849 = state_24710__$1;
(statearr_24717_24849[(2)] = inst_24706);

(statearr_24717_24849[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__24830,c__24488__auto___24843,G__24673_24831,G__24673_24832__$1,n__12788__auto___24829,jobs,results,process,async))
;
return ((function (__24830,switch__24386__auto__,c__24488__auto___24843,G__24673_24831,G__24673_24832__$1,n__12788__auto___24829,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____0 = (function (){
var statearr_24718 = [null,null,null,null,null,null,null];
(statearr_24718[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__);

(statearr_24718[(1)] = (1));

return statearr_24718;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____1 = (function (state_24710){
while(true){
var ret_value__24388__auto__ = (function (){try{while(true){
var result__24389__auto__ = switch__24386__auto__(state_24710);
if(cljs.core.keyword_identical_QMARK_(result__24389__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24389__auto__;
}
break;
}
}catch (e24719){if((e24719 instanceof Object)){
var ex__24390__auto__ = e24719;
var statearr_24720_24850 = state_24710;
(statearr_24720_24850[(5)] = ex__24390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24710);

return cljs.core.cst$kw$recur;
} else {
throw e24719;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24388__auto__,cljs.core.cst$kw$recur)){
var G__24851 = state_24710;
state_24710 = G__24851;
continue;
} else {
return ret_value__24388__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__ = function(state_24710){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____1.call(this,state_24710);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__;
})()
;})(__24830,switch__24386__auto__,c__24488__auto___24843,G__24673_24831,G__24673_24832__$1,n__12788__auto___24829,jobs,results,process,async))
})();
var state__24490__auto__ = (function (){var statearr_24721 = (f__24489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24489__auto__.cljs$core$IFn$_invoke$arity$0() : f__24489__auto__.call(null));
(statearr_24721[(6)] = c__24488__auto___24843);

return statearr_24721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24490__auto__);
});})(__24830,c__24488__auto___24843,G__24673_24831,G__24673_24832__$1,n__12788__auto___24829,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24673_24832__$1)].join('')));

}

var G__24852 = (__24830 + (1));
__24830 = G__24852;
continue;
} else {
}
break;
}

var c__24488__auto___24853 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24488__auto___24853,jobs,results,process,async){
return (function (){
var f__24489__auto__ = (function (){var switch__24386__auto__ = ((function (c__24488__auto___24853,jobs,results,process,async){
return (function (state_24743){
var state_val_24744 = (state_24743[(1)]);
if((state_val_24744 === (1))){
var state_24743__$1 = state_24743;
var statearr_24745_24854 = state_24743__$1;
(statearr_24745_24854[(2)] = null);

(statearr_24745_24854[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24744 === (2))){
var state_24743__$1 = state_24743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24743__$1,(4),from);
} else {
if((state_val_24744 === (3))){
var inst_24741 = (state_24743[(2)]);
var state_24743__$1 = state_24743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24743__$1,inst_24741);
} else {
if((state_val_24744 === (4))){
var inst_24724 = (state_24743[(7)]);
var inst_24724__$1 = (state_24743[(2)]);
var inst_24725 = (inst_24724__$1 == null);
var state_24743__$1 = (function (){var statearr_24746 = state_24743;
(statearr_24746[(7)] = inst_24724__$1);

return statearr_24746;
})();
if(cljs.core.truth_(inst_24725)){
var statearr_24747_24855 = state_24743__$1;
(statearr_24747_24855[(1)] = (5));

} else {
var statearr_24748_24856 = state_24743__$1;
(statearr_24748_24856[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24744 === (5))){
var inst_24727 = cljs.core.async.close_BANG_(jobs);
var state_24743__$1 = state_24743;
var statearr_24749_24857 = state_24743__$1;
(statearr_24749_24857[(2)] = inst_24727);

(statearr_24749_24857[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24744 === (6))){
var inst_24724 = (state_24743[(7)]);
var inst_24729 = (state_24743[(8)]);
var inst_24729__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24730 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24731 = [inst_24724,inst_24729__$1];
var inst_24732 = (new cljs.core.PersistentVector(null,2,(5),inst_24730,inst_24731,null));
var state_24743__$1 = (function (){var statearr_24750 = state_24743;
(statearr_24750[(8)] = inst_24729__$1);

return statearr_24750;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24743__$1,(8),jobs,inst_24732);
} else {
if((state_val_24744 === (7))){
var inst_24739 = (state_24743[(2)]);
var state_24743__$1 = state_24743;
var statearr_24751_24858 = state_24743__$1;
(statearr_24751_24858[(2)] = inst_24739);

(statearr_24751_24858[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24744 === (8))){
var inst_24729 = (state_24743[(8)]);
var inst_24734 = (state_24743[(2)]);
var state_24743__$1 = (function (){var statearr_24752 = state_24743;
(statearr_24752[(9)] = inst_24734);

return statearr_24752;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24743__$1,(9),results,inst_24729);
} else {
if((state_val_24744 === (9))){
var inst_24736 = (state_24743[(2)]);
var state_24743__$1 = (function (){var statearr_24753 = state_24743;
(statearr_24753[(10)] = inst_24736);

return statearr_24753;
})();
var statearr_24754_24859 = state_24743__$1;
(statearr_24754_24859[(2)] = null);

(statearr_24754_24859[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__24488__auto___24853,jobs,results,process,async))
;
return ((function (switch__24386__auto__,c__24488__auto___24853,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____0 = (function (){
var statearr_24755 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24755[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__);

(statearr_24755[(1)] = (1));

return statearr_24755;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____1 = (function (state_24743){
while(true){
var ret_value__24388__auto__ = (function (){try{while(true){
var result__24389__auto__ = switch__24386__auto__(state_24743);
if(cljs.core.keyword_identical_QMARK_(result__24389__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24389__auto__;
}
break;
}
}catch (e24756){if((e24756 instanceof Object)){
var ex__24390__auto__ = e24756;
var statearr_24757_24860 = state_24743;
(statearr_24757_24860[(5)] = ex__24390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24743);

return cljs.core.cst$kw$recur;
} else {
throw e24756;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24388__auto__,cljs.core.cst$kw$recur)){
var G__24861 = state_24743;
state_24743 = G__24861;
continue;
} else {
return ret_value__24388__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__ = function(state_24743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____1.call(this,state_24743);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__;
})()
;})(switch__24386__auto__,c__24488__auto___24853,jobs,results,process,async))
})();
var state__24490__auto__ = (function (){var statearr_24758 = (f__24489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24489__auto__.cljs$core$IFn$_invoke$arity$0() : f__24489__auto__.call(null));
(statearr_24758[(6)] = c__24488__auto___24853);

return statearr_24758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24490__auto__);
});})(c__24488__auto___24853,jobs,results,process,async))
);


var c__24488__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24488__auto__,jobs,results,process,async){
return (function (){
var f__24489__auto__ = (function (){var switch__24386__auto__ = ((function (c__24488__auto__,jobs,results,process,async){
return (function (state_24796){
var state_val_24797 = (state_24796[(1)]);
if((state_val_24797 === (7))){
var inst_24792 = (state_24796[(2)]);
var state_24796__$1 = state_24796;
var statearr_24798_24862 = state_24796__$1;
(statearr_24798_24862[(2)] = inst_24792);

(statearr_24798_24862[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24797 === (20))){
var state_24796__$1 = state_24796;
var statearr_24799_24863 = state_24796__$1;
(statearr_24799_24863[(2)] = null);

(statearr_24799_24863[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24797 === (1))){
var state_24796__$1 = state_24796;
var statearr_24800_24864 = state_24796__$1;
(statearr_24800_24864[(2)] = null);

(statearr_24800_24864[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24797 === (4))){
var inst_24761 = (state_24796[(7)]);
var inst_24761__$1 = (state_24796[(2)]);
var inst_24762 = (inst_24761__$1 == null);
var state_24796__$1 = (function (){var statearr_24801 = state_24796;
(statearr_24801[(7)] = inst_24761__$1);

return statearr_24801;
})();
if(cljs.core.truth_(inst_24762)){
var statearr_24802_24865 = state_24796__$1;
(statearr_24802_24865[(1)] = (5));

} else {
var statearr_24803_24866 = state_24796__$1;
(statearr_24803_24866[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24797 === (15))){
var inst_24774 = (state_24796[(8)]);
var state_24796__$1 = state_24796;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24796__$1,(18),to,inst_24774);
} else {
if((state_val_24797 === (21))){
var inst_24787 = (state_24796[(2)]);
var state_24796__$1 = state_24796;
var statearr_24804_24867 = state_24796__$1;
(statearr_24804_24867[(2)] = inst_24787);

(statearr_24804_24867[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24797 === (13))){
var inst_24789 = (state_24796[(2)]);
var state_24796__$1 = (function (){var statearr_24805 = state_24796;
(statearr_24805[(9)] = inst_24789);

return statearr_24805;
})();
var statearr_24806_24868 = state_24796__$1;
(statearr_24806_24868[(2)] = null);

(statearr_24806_24868[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24797 === (6))){
var inst_24761 = (state_24796[(7)]);
var state_24796__$1 = state_24796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24796__$1,(11),inst_24761);
} else {
if((state_val_24797 === (17))){
var inst_24782 = (state_24796[(2)]);
var state_24796__$1 = state_24796;
if(cljs.core.truth_(inst_24782)){
var statearr_24807_24869 = state_24796__$1;
(statearr_24807_24869[(1)] = (19));

} else {
var statearr_24808_24870 = state_24796__$1;
(statearr_24808_24870[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24797 === (3))){
var inst_24794 = (state_24796[(2)]);
var state_24796__$1 = state_24796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24796__$1,inst_24794);
} else {
if((state_val_24797 === (12))){
var inst_24771 = (state_24796[(10)]);
var state_24796__$1 = state_24796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24796__$1,(14),inst_24771);
} else {
if((state_val_24797 === (2))){
var state_24796__$1 = state_24796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24796__$1,(4),results);
} else {
if((state_val_24797 === (19))){
var state_24796__$1 = state_24796;
var statearr_24809_24871 = state_24796__$1;
(statearr_24809_24871[(2)] = null);

(statearr_24809_24871[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24797 === (11))){
var inst_24771 = (state_24796[(2)]);
var state_24796__$1 = (function (){var statearr_24810 = state_24796;
(statearr_24810[(10)] = inst_24771);

return statearr_24810;
})();
var statearr_24811_24872 = state_24796__$1;
(statearr_24811_24872[(2)] = null);

(statearr_24811_24872[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24797 === (9))){
var state_24796__$1 = state_24796;
var statearr_24812_24873 = state_24796__$1;
(statearr_24812_24873[(2)] = null);

(statearr_24812_24873[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24797 === (5))){
var state_24796__$1 = state_24796;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24813_24874 = state_24796__$1;
(statearr_24813_24874[(1)] = (8));

} else {
var statearr_24814_24875 = state_24796__$1;
(statearr_24814_24875[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24797 === (14))){
var inst_24774 = (state_24796[(8)]);
var inst_24776 = (state_24796[(11)]);
var inst_24774__$1 = (state_24796[(2)]);
var inst_24775 = (inst_24774__$1 == null);
var inst_24776__$1 = cljs.core.not(inst_24775);
var state_24796__$1 = (function (){var statearr_24815 = state_24796;
(statearr_24815[(8)] = inst_24774__$1);

(statearr_24815[(11)] = inst_24776__$1);

return statearr_24815;
})();
if(inst_24776__$1){
var statearr_24816_24876 = state_24796__$1;
(statearr_24816_24876[(1)] = (15));

} else {
var statearr_24817_24877 = state_24796__$1;
(statearr_24817_24877[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24797 === (16))){
var inst_24776 = (state_24796[(11)]);
var state_24796__$1 = state_24796;
var statearr_24818_24878 = state_24796__$1;
(statearr_24818_24878[(2)] = inst_24776);

(statearr_24818_24878[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24797 === (10))){
var inst_24768 = (state_24796[(2)]);
var state_24796__$1 = state_24796;
var statearr_24819_24879 = state_24796__$1;
(statearr_24819_24879[(2)] = inst_24768);

(statearr_24819_24879[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24797 === (18))){
var inst_24779 = (state_24796[(2)]);
var state_24796__$1 = state_24796;
var statearr_24820_24880 = state_24796__$1;
(statearr_24820_24880[(2)] = inst_24779);

(statearr_24820_24880[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24797 === (8))){
var inst_24765 = cljs.core.async.close_BANG_(to);
var state_24796__$1 = state_24796;
var statearr_24821_24881 = state_24796__$1;
(statearr_24821_24881[(2)] = inst_24765);

(statearr_24821_24881[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24488__auto__,jobs,results,process,async))
;
return ((function (switch__24386__auto__,c__24488__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____0 = (function (){
var statearr_24822 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24822[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__);

(statearr_24822[(1)] = (1));

return statearr_24822;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____1 = (function (state_24796){
while(true){
var ret_value__24388__auto__ = (function (){try{while(true){
var result__24389__auto__ = switch__24386__auto__(state_24796);
if(cljs.core.keyword_identical_QMARK_(result__24389__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24389__auto__;
}
break;
}
}catch (e24823){if((e24823 instanceof Object)){
var ex__24390__auto__ = e24823;
var statearr_24824_24882 = state_24796;
(statearr_24824_24882[(5)] = ex__24390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24796);

return cljs.core.cst$kw$recur;
} else {
throw e24823;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24388__auto__,cljs.core.cst$kw$recur)){
var G__24883 = state_24796;
state_24796 = G__24883;
continue;
} else {
return ret_value__24388__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__ = function(state_24796){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____1.call(this,state_24796);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24387__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24387__auto__;
})()
;})(switch__24386__auto__,c__24488__auto__,jobs,results,process,async))
})();
var state__24490__auto__ = (function (){var statearr_24825 = (f__24489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24489__auto__.cljs$core$IFn$_invoke$arity$0() : f__24489__auto__.call(null));
(statearr_24825[(6)] = c__24488__auto__);

return statearr_24825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24490__auto__);
});})(c__24488__auto__,jobs,results,process,async))
);

return c__24488__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24885 = arguments.length;
switch (G__24885) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24888 = arguments.length;
switch (G__24888) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24891 = arguments.length;
switch (G__24891) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__24488__auto___24940 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24488__auto___24940,tc,fc){
return (function (){
var f__24489__auto__ = (function (){var switch__24386__auto__ = ((function (c__24488__auto___24940,tc,fc){
return (function (state_24917){
var state_val_24918 = (state_24917[(1)]);
if((state_val_24918 === (7))){
var inst_24913 = (state_24917[(2)]);
var state_24917__$1 = state_24917;
var statearr_24919_24941 = state_24917__$1;
(statearr_24919_24941[(2)] = inst_24913);

(statearr_24919_24941[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24918 === (1))){
var state_24917__$1 = state_24917;
var statearr_24920_24942 = state_24917__$1;
(statearr_24920_24942[(2)] = null);

(statearr_24920_24942[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24918 === (4))){
var inst_24894 = (state_24917[(7)]);
var inst_24894__$1 = (state_24917[(2)]);
var inst_24895 = (inst_24894__$1 == null);
var state_24917__$1 = (function (){var statearr_24921 = state_24917;
(statearr_24921[(7)] = inst_24894__$1);

return statearr_24921;
})();
if(cljs.core.truth_(inst_24895)){
var statearr_24922_24943 = state_24917__$1;
(statearr_24922_24943[(1)] = (5));

} else {
var statearr_24923_24944 = state_24917__$1;
(statearr_24923_24944[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24918 === (13))){
var state_24917__$1 = state_24917;
var statearr_24924_24945 = state_24917__$1;
(statearr_24924_24945[(2)] = null);

(statearr_24924_24945[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24918 === (6))){
var inst_24894 = (state_24917[(7)]);
var inst_24900 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24894) : p.call(null,inst_24894));
var state_24917__$1 = state_24917;
if(cljs.core.truth_(inst_24900)){
var statearr_24925_24946 = state_24917__$1;
(statearr_24925_24946[(1)] = (9));

} else {
var statearr_24926_24947 = state_24917__$1;
(statearr_24926_24947[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24918 === (3))){
var inst_24915 = (state_24917[(2)]);
var state_24917__$1 = state_24917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24917__$1,inst_24915);
} else {
if((state_val_24918 === (12))){
var state_24917__$1 = state_24917;
var statearr_24927_24948 = state_24917__$1;
(statearr_24927_24948[(2)] = null);

(statearr_24927_24948[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24918 === (2))){
var state_24917__$1 = state_24917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24917__$1,(4),ch);
} else {
if((state_val_24918 === (11))){
var inst_24894 = (state_24917[(7)]);
var inst_24904 = (state_24917[(2)]);
var state_24917__$1 = state_24917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24917__$1,(8),inst_24904,inst_24894);
} else {
if((state_val_24918 === (9))){
var state_24917__$1 = state_24917;
var statearr_24928_24949 = state_24917__$1;
(statearr_24928_24949[(2)] = tc);

(statearr_24928_24949[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24918 === (5))){
var inst_24897 = cljs.core.async.close_BANG_(tc);
var inst_24898 = cljs.core.async.close_BANG_(fc);
var state_24917__$1 = (function (){var statearr_24929 = state_24917;
(statearr_24929[(8)] = inst_24897);

return statearr_24929;
})();
var statearr_24930_24950 = state_24917__$1;
(statearr_24930_24950[(2)] = inst_24898);

(statearr_24930_24950[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24918 === (14))){
var inst_24911 = (state_24917[(2)]);
var state_24917__$1 = state_24917;
var statearr_24931_24951 = state_24917__$1;
(statearr_24931_24951[(2)] = inst_24911);

(statearr_24931_24951[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24918 === (10))){
var state_24917__$1 = state_24917;
var statearr_24932_24952 = state_24917__$1;
(statearr_24932_24952[(2)] = fc);

(statearr_24932_24952[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24918 === (8))){
var inst_24906 = (state_24917[(2)]);
var state_24917__$1 = state_24917;
if(cljs.core.truth_(inst_24906)){
var statearr_24933_24953 = state_24917__$1;
(statearr_24933_24953[(1)] = (12));

} else {
var statearr_24934_24954 = state_24917__$1;
(statearr_24934_24954[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24488__auto___24940,tc,fc))
;
return ((function (switch__24386__auto__,c__24488__auto___24940,tc,fc){
return (function() {
var cljs$core$async$state_machine__24387__auto__ = null;
var cljs$core$async$state_machine__24387__auto____0 = (function (){
var statearr_24935 = [null,null,null,null,null,null,null,null,null];
(statearr_24935[(0)] = cljs$core$async$state_machine__24387__auto__);

(statearr_24935[(1)] = (1));

return statearr_24935;
});
var cljs$core$async$state_machine__24387__auto____1 = (function (state_24917){
while(true){
var ret_value__24388__auto__ = (function (){try{while(true){
var result__24389__auto__ = switch__24386__auto__(state_24917);
if(cljs.core.keyword_identical_QMARK_(result__24389__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24389__auto__;
}
break;
}
}catch (e24936){if((e24936 instanceof Object)){
var ex__24390__auto__ = e24936;
var statearr_24937_24955 = state_24917;
(statearr_24937_24955[(5)] = ex__24390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24917);

return cljs.core.cst$kw$recur;
} else {
throw e24936;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24388__auto__,cljs.core.cst$kw$recur)){
var G__24956 = state_24917;
state_24917 = G__24956;
continue;
} else {
return ret_value__24388__auto__;
}
break;
}
});
cljs$core$async$state_machine__24387__auto__ = function(state_24917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24387__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24387__auto____1.call(this,state_24917);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24387__auto____0;
cljs$core$async$state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24387__auto____1;
return cljs$core$async$state_machine__24387__auto__;
})()
;})(switch__24386__auto__,c__24488__auto___24940,tc,fc))
})();
var state__24490__auto__ = (function (){var statearr_24938 = (f__24489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24489__auto__.cljs$core$IFn$_invoke$arity$0() : f__24489__auto__.call(null));
(statearr_24938[(6)] = c__24488__auto___24940);

return statearr_24938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24490__auto__);
});})(c__24488__auto___24940,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24488__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24488__auto__){
return (function (){
var f__24489__auto__ = (function (){var switch__24386__auto__ = ((function (c__24488__auto__){
return (function (state_24977){
var state_val_24978 = (state_24977[(1)]);
if((state_val_24978 === (7))){
var inst_24973 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
var statearr_24979_24997 = state_24977__$1;
(statearr_24979_24997[(2)] = inst_24973);

(statearr_24979_24997[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24978 === (1))){
var inst_24957 = init;
var state_24977__$1 = (function (){var statearr_24980 = state_24977;
(statearr_24980[(7)] = inst_24957);

return statearr_24980;
})();
var statearr_24981_24998 = state_24977__$1;
(statearr_24981_24998[(2)] = null);

(statearr_24981_24998[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24978 === (4))){
var inst_24960 = (state_24977[(8)]);
var inst_24960__$1 = (state_24977[(2)]);
var inst_24961 = (inst_24960__$1 == null);
var state_24977__$1 = (function (){var statearr_24982 = state_24977;
(statearr_24982[(8)] = inst_24960__$1);

return statearr_24982;
})();
if(cljs.core.truth_(inst_24961)){
var statearr_24983_24999 = state_24977__$1;
(statearr_24983_24999[(1)] = (5));

} else {
var statearr_24984_25000 = state_24977__$1;
(statearr_24984_25000[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24978 === (6))){
var inst_24957 = (state_24977[(7)]);
var inst_24960 = (state_24977[(8)]);
var inst_24964 = (state_24977[(9)]);
var inst_24964__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24957,inst_24960) : f.call(null,inst_24957,inst_24960));
var inst_24965 = cljs.core.reduced_QMARK_(inst_24964__$1);
var state_24977__$1 = (function (){var statearr_24985 = state_24977;
(statearr_24985[(9)] = inst_24964__$1);

return statearr_24985;
})();
if(inst_24965){
var statearr_24986_25001 = state_24977__$1;
(statearr_24986_25001[(1)] = (8));

} else {
var statearr_24987_25002 = state_24977__$1;
(statearr_24987_25002[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24978 === (3))){
var inst_24975 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24977__$1,inst_24975);
} else {
if((state_val_24978 === (2))){
var state_24977__$1 = state_24977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24977__$1,(4),ch);
} else {
if((state_val_24978 === (9))){
var inst_24964 = (state_24977[(9)]);
var inst_24957 = inst_24964;
var state_24977__$1 = (function (){var statearr_24988 = state_24977;
(statearr_24988[(7)] = inst_24957);

return statearr_24988;
})();
var statearr_24989_25003 = state_24977__$1;
(statearr_24989_25003[(2)] = null);

(statearr_24989_25003[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24978 === (5))){
var inst_24957 = (state_24977[(7)]);
var state_24977__$1 = state_24977;
var statearr_24990_25004 = state_24977__$1;
(statearr_24990_25004[(2)] = inst_24957);

(statearr_24990_25004[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24978 === (10))){
var inst_24971 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
var statearr_24991_25005 = state_24977__$1;
(statearr_24991_25005[(2)] = inst_24971);

(statearr_24991_25005[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24978 === (8))){
var inst_24964 = (state_24977[(9)]);
var inst_24967 = cljs.core.deref(inst_24964);
var state_24977__$1 = state_24977;
var statearr_24992_25006 = state_24977__$1;
(statearr_24992_25006[(2)] = inst_24967);

(statearr_24992_25006[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__24488__auto__))
;
return ((function (switch__24386__auto__,c__24488__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24387__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24387__auto____0 = (function (){
var statearr_24993 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24993[(0)] = cljs$core$async$reduce_$_state_machine__24387__auto__);

(statearr_24993[(1)] = (1));

return statearr_24993;
});
var cljs$core$async$reduce_$_state_machine__24387__auto____1 = (function (state_24977){
while(true){
var ret_value__24388__auto__ = (function (){try{while(true){
var result__24389__auto__ = switch__24386__auto__(state_24977);
if(cljs.core.keyword_identical_QMARK_(result__24389__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24389__auto__;
}
break;
}
}catch (e24994){if((e24994 instanceof Object)){
var ex__24390__auto__ = e24994;
var statearr_24995_25007 = state_24977;
(statearr_24995_25007[(5)] = ex__24390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24977);

return cljs.core.cst$kw$recur;
} else {
throw e24994;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24388__auto__,cljs.core.cst$kw$recur)){
var G__25008 = state_24977;
state_24977 = G__25008;
continue;
} else {
return ret_value__24388__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24387__auto__ = function(state_24977){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24387__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24387__auto____1.call(this,state_24977);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24387__auto____0;
cljs$core$async$reduce_$_state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24387__auto____1;
return cljs$core$async$reduce_$_state_machine__24387__auto__;
})()
;})(switch__24386__auto__,c__24488__auto__))
})();
var state__24490__auto__ = (function (){var statearr_24996 = (f__24489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24489__auto__.cljs$core$IFn$_invoke$arity$0() : f__24489__auto__.call(null));
(statearr_24996[(6)] = c__24488__auto__);

return statearr_24996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24490__auto__);
});})(c__24488__auto__))
);

return c__24488__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__24488__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24488__auto__,f__$1){
return (function (){
var f__24489__auto__ = (function (){var switch__24386__auto__ = ((function (c__24488__auto__,f__$1){
return (function (state_25014){
var state_val_25015 = (state_25014[(1)]);
if((state_val_25015 === (1))){
var inst_25009 = cljs.core.async.reduce(f__$1,init,ch);
var state_25014__$1 = state_25014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25014__$1,(2),inst_25009);
} else {
if((state_val_25015 === (2))){
var inst_25011 = (state_25014[(2)]);
var inst_25012 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_25011) : f__$1.call(null,inst_25011));
var state_25014__$1 = state_25014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25014__$1,inst_25012);
} else {
return null;
}
}
});})(c__24488__auto__,f__$1))
;
return ((function (switch__24386__auto__,c__24488__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24387__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24387__auto____0 = (function (){
var statearr_25016 = [null,null,null,null,null,null,null];
(statearr_25016[(0)] = cljs$core$async$transduce_$_state_machine__24387__auto__);

(statearr_25016[(1)] = (1));

return statearr_25016;
});
var cljs$core$async$transduce_$_state_machine__24387__auto____1 = (function (state_25014){
while(true){
var ret_value__24388__auto__ = (function (){try{while(true){
var result__24389__auto__ = switch__24386__auto__(state_25014);
if(cljs.core.keyword_identical_QMARK_(result__24389__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24389__auto__;
}
break;
}
}catch (e25017){if((e25017 instanceof Object)){
var ex__24390__auto__ = e25017;
var statearr_25018_25020 = state_25014;
(statearr_25018_25020[(5)] = ex__24390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25014);

return cljs.core.cst$kw$recur;
} else {
throw e25017;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24388__auto__,cljs.core.cst$kw$recur)){
var G__25021 = state_25014;
state_25014 = G__25021;
continue;
} else {
return ret_value__24388__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24387__auto__ = function(state_25014){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24387__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24387__auto____1.call(this,state_25014);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24387__auto____0;
cljs$core$async$transduce_$_state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24387__auto____1;
return cljs$core$async$transduce_$_state_machine__24387__auto__;
})()
;})(switch__24386__auto__,c__24488__auto__,f__$1))
})();
var state__24490__auto__ = (function (){var statearr_25019 = (f__24489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24489__auto__.cljs$core$IFn$_invoke$arity$0() : f__24489__auto__.call(null));
(statearr_25019[(6)] = c__24488__auto__);

return statearr_25019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24490__auto__);
});})(c__24488__auto__,f__$1))
);

return c__24488__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25023 = arguments.length;
switch (G__25023) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24488__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24488__auto__){
return (function (){
var f__24489__auto__ = (function (){var switch__24386__auto__ = ((function (c__24488__auto__){
return (function (state_25048){
var state_val_25049 = (state_25048[(1)]);
if((state_val_25049 === (7))){
var inst_25030 = (state_25048[(2)]);
var state_25048__$1 = state_25048;
var statearr_25050_25071 = state_25048__$1;
(statearr_25050_25071[(2)] = inst_25030);

(statearr_25050_25071[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25049 === (1))){
var inst_25024 = cljs.core.seq(coll);
var inst_25025 = inst_25024;
var state_25048__$1 = (function (){var statearr_25051 = state_25048;
(statearr_25051[(7)] = inst_25025);

return statearr_25051;
})();
var statearr_25052_25072 = state_25048__$1;
(statearr_25052_25072[(2)] = null);

(statearr_25052_25072[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25049 === (4))){
var inst_25025 = (state_25048[(7)]);
var inst_25028 = cljs.core.first(inst_25025);
var state_25048__$1 = state_25048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25048__$1,(7),ch,inst_25028);
} else {
if((state_val_25049 === (13))){
var inst_25042 = (state_25048[(2)]);
var state_25048__$1 = state_25048;
var statearr_25053_25073 = state_25048__$1;
(statearr_25053_25073[(2)] = inst_25042);

(statearr_25053_25073[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25049 === (6))){
var inst_25033 = (state_25048[(2)]);
var state_25048__$1 = state_25048;
if(cljs.core.truth_(inst_25033)){
var statearr_25054_25074 = state_25048__$1;
(statearr_25054_25074[(1)] = (8));

} else {
var statearr_25055_25075 = state_25048__$1;
(statearr_25055_25075[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25049 === (3))){
var inst_25046 = (state_25048[(2)]);
var state_25048__$1 = state_25048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25048__$1,inst_25046);
} else {
if((state_val_25049 === (12))){
var state_25048__$1 = state_25048;
var statearr_25056_25076 = state_25048__$1;
(statearr_25056_25076[(2)] = null);

(statearr_25056_25076[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25049 === (2))){
var inst_25025 = (state_25048[(7)]);
var state_25048__$1 = state_25048;
if(cljs.core.truth_(inst_25025)){
var statearr_25057_25077 = state_25048__$1;
(statearr_25057_25077[(1)] = (4));

} else {
var statearr_25058_25078 = state_25048__$1;
(statearr_25058_25078[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25049 === (11))){
var inst_25039 = cljs.core.async.close_BANG_(ch);
var state_25048__$1 = state_25048;
var statearr_25059_25079 = state_25048__$1;
(statearr_25059_25079[(2)] = inst_25039);

(statearr_25059_25079[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25049 === (9))){
var state_25048__$1 = state_25048;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25060_25080 = state_25048__$1;
(statearr_25060_25080[(1)] = (11));

} else {
var statearr_25061_25081 = state_25048__$1;
(statearr_25061_25081[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25049 === (5))){
var inst_25025 = (state_25048[(7)]);
var state_25048__$1 = state_25048;
var statearr_25062_25082 = state_25048__$1;
(statearr_25062_25082[(2)] = inst_25025);

(statearr_25062_25082[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25049 === (10))){
var inst_25044 = (state_25048[(2)]);
var state_25048__$1 = state_25048;
var statearr_25063_25083 = state_25048__$1;
(statearr_25063_25083[(2)] = inst_25044);

(statearr_25063_25083[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25049 === (8))){
var inst_25025 = (state_25048[(7)]);
var inst_25035 = cljs.core.next(inst_25025);
var inst_25025__$1 = inst_25035;
var state_25048__$1 = (function (){var statearr_25064 = state_25048;
(statearr_25064[(7)] = inst_25025__$1);

return statearr_25064;
})();
var statearr_25065_25084 = state_25048__$1;
(statearr_25065_25084[(2)] = null);

(statearr_25065_25084[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24488__auto__))
;
return ((function (switch__24386__auto__,c__24488__auto__){
return (function() {
var cljs$core$async$state_machine__24387__auto__ = null;
var cljs$core$async$state_machine__24387__auto____0 = (function (){
var statearr_25066 = [null,null,null,null,null,null,null,null];
(statearr_25066[(0)] = cljs$core$async$state_machine__24387__auto__);

(statearr_25066[(1)] = (1));

return statearr_25066;
});
var cljs$core$async$state_machine__24387__auto____1 = (function (state_25048){
while(true){
var ret_value__24388__auto__ = (function (){try{while(true){
var result__24389__auto__ = switch__24386__auto__(state_25048);
if(cljs.core.keyword_identical_QMARK_(result__24389__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24389__auto__;
}
break;
}
}catch (e25067){if((e25067 instanceof Object)){
var ex__24390__auto__ = e25067;
var statearr_25068_25085 = state_25048;
(statearr_25068_25085[(5)] = ex__24390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25048);

return cljs.core.cst$kw$recur;
} else {
throw e25067;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24388__auto__,cljs.core.cst$kw$recur)){
var G__25086 = state_25048;
state_25048 = G__25086;
continue;
} else {
return ret_value__24388__auto__;
}
break;
}
});
cljs$core$async$state_machine__24387__auto__ = function(state_25048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24387__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24387__auto____1.call(this,state_25048);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24387__auto____0;
cljs$core$async$state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24387__auto____1;
return cljs$core$async$state_machine__24387__auto__;
})()
;})(switch__24386__auto__,c__24488__auto__))
})();
var state__24490__auto__ = (function (){var statearr_25069 = (f__24489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24489__auto__.cljs$core$IFn$_invoke$arity$0() : f__24489__auto__.call(null));
(statearr_25069[(6)] = c__24488__auto__);

return statearr_25069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24490__auto__);
});})(c__24488__auto__))
);

return c__24488__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__12476__auto__ = (((_ == null))?null:_);
var m__12477__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12476__auto__)]);
if(!((m__12477__auto__ == null))){
return (m__12477__auto__.cljs$core$IFn$_invoke$arity$1 ? m__12477__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__12477__auto__.call(null,_));
} else {
var m__12477__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__12477__auto____$1 == null))){
return (m__12477__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__12477__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__12477__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__12476__auto__ = (((m == null))?null:m);
var m__12477__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12476__auto__)]);
if(!((m__12477__auto__ == null))){
return (m__12477__auto__.cljs$core$IFn$_invoke$arity$3 ? m__12477__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__12477__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__12477__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__12477__auto____$1 == null))){
return (m__12477__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__12477__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__12477__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__12476__auto__ = (((m == null))?null:m);
var m__12477__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12476__auto__)]);
if(!((m__12477__auto__ == null))){
return (m__12477__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12477__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__12477__auto__.call(null,m,ch));
} else {
var m__12477__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__12477__auto____$1 == null))){
return (m__12477__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12477__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__12477__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__12476__auto__ = (((m == null))?null:m);
var m__12477__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12476__auto__)]);
if(!((m__12477__auto__ == null))){
return (m__12477__auto__.cljs$core$IFn$_invoke$arity$1 ? m__12477__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__12477__auto__.call(null,m));
} else {
var m__12477__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__12477__auto____$1 == null))){
return (m__12477__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__12477__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__12477__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25087 = (function (ch,cs,meta25088){
this.ch = ch;
this.cs = cs;
this.meta25088 = meta25088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25089,meta25088__$1){
var self__ = this;
var _25089__$1 = this;
return (new cljs.core.async.t_cljs$core$async25087(self__.ch,self__.cs,meta25088__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25089){
var self__ = this;
var _25089__$1 = this;
return self__.meta25088;
});})(cs))
;

cljs.core.async.t_cljs$core$async25087.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25087.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25087.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25087.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25087.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25087.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25087.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta25088], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25087.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25087";

cljs.core.async.t_cljs$core$async25087.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async/t_cljs$core$async25087");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25087 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25087(ch__$1,cs__$1,meta25088){
return (new cljs.core.async.t_cljs$core$async25087(ch__$1,cs__$1,meta25088));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25087(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24488__auto___25309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24488__auto___25309,cs,m,dchan,dctr,done){
return (function (){
var f__24489__auto__ = (function (){var switch__24386__auto__ = ((function (c__24488__auto___25309,cs,m,dchan,dctr,done){
return (function (state_25224){
var state_val_25225 = (state_25224[(1)]);
if((state_val_25225 === (7))){
var inst_25220 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
var statearr_25226_25310 = state_25224__$1;
(statearr_25226_25310[(2)] = inst_25220);

(statearr_25226_25310[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (20))){
var inst_25123 = (state_25224[(7)]);
var inst_25135 = cljs.core.first(inst_25123);
var inst_25136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25135,(0),null);
var inst_25137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25135,(1),null);
var state_25224__$1 = (function (){var statearr_25227 = state_25224;
(statearr_25227[(8)] = inst_25136);

return statearr_25227;
})();
if(cljs.core.truth_(inst_25137)){
var statearr_25228_25311 = state_25224__$1;
(statearr_25228_25311[(1)] = (22));

} else {
var statearr_25229_25312 = state_25224__$1;
(statearr_25229_25312[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (27))){
var inst_25092 = (state_25224[(9)]);
var inst_25165 = (state_25224[(10)]);
var inst_25172 = (state_25224[(11)]);
var inst_25167 = (state_25224[(12)]);
var inst_25172__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25165,inst_25167);
var inst_25173 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25172__$1,inst_25092,done);
var state_25224__$1 = (function (){var statearr_25230 = state_25224;
(statearr_25230[(11)] = inst_25172__$1);

return statearr_25230;
})();
if(cljs.core.truth_(inst_25173)){
var statearr_25231_25313 = state_25224__$1;
(statearr_25231_25313[(1)] = (30));

} else {
var statearr_25232_25314 = state_25224__$1;
(statearr_25232_25314[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (1))){
var state_25224__$1 = state_25224;
var statearr_25233_25315 = state_25224__$1;
(statearr_25233_25315[(2)] = null);

(statearr_25233_25315[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (24))){
var inst_25123 = (state_25224[(7)]);
var inst_25142 = (state_25224[(2)]);
var inst_25143 = cljs.core.next(inst_25123);
var inst_25101 = inst_25143;
var inst_25102 = null;
var inst_25103 = (0);
var inst_25104 = (0);
var state_25224__$1 = (function (){var statearr_25234 = state_25224;
(statearr_25234[(13)] = inst_25104);

(statearr_25234[(14)] = inst_25101);

(statearr_25234[(15)] = inst_25103);

(statearr_25234[(16)] = inst_25142);

(statearr_25234[(17)] = inst_25102);

return statearr_25234;
})();
var statearr_25235_25316 = state_25224__$1;
(statearr_25235_25316[(2)] = null);

(statearr_25235_25316[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (39))){
var state_25224__$1 = state_25224;
var statearr_25239_25317 = state_25224__$1;
(statearr_25239_25317[(2)] = null);

(statearr_25239_25317[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (4))){
var inst_25092 = (state_25224[(9)]);
var inst_25092__$1 = (state_25224[(2)]);
var inst_25093 = (inst_25092__$1 == null);
var state_25224__$1 = (function (){var statearr_25240 = state_25224;
(statearr_25240[(9)] = inst_25092__$1);

return statearr_25240;
})();
if(cljs.core.truth_(inst_25093)){
var statearr_25241_25318 = state_25224__$1;
(statearr_25241_25318[(1)] = (5));

} else {
var statearr_25242_25319 = state_25224__$1;
(statearr_25242_25319[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (15))){
var inst_25104 = (state_25224[(13)]);
var inst_25101 = (state_25224[(14)]);
var inst_25103 = (state_25224[(15)]);
var inst_25102 = (state_25224[(17)]);
var inst_25119 = (state_25224[(2)]);
var inst_25120 = (inst_25104 + (1));
var tmp25236 = inst_25101;
var tmp25237 = inst_25103;
var tmp25238 = inst_25102;
var inst_25101__$1 = tmp25236;
var inst_25102__$1 = tmp25238;
var inst_25103__$1 = tmp25237;
var inst_25104__$1 = inst_25120;
var state_25224__$1 = (function (){var statearr_25243 = state_25224;
(statearr_25243[(13)] = inst_25104__$1);

(statearr_25243[(14)] = inst_25101__$1);

(statearr_25243[(18)] = inst_25119);

(statearr_25243[(15)] = inst_25103__$1);

(statearr_25243[(17)] = inst_25102__$1);

return statearr_25243;
})();
var statearr_25244_25320 = state_25224__$1;
(statearr_25244_25320[(2)] = null);

(statearr_25244_25320[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (21))){
var inst_25146 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
var statearr_25248_25321 = state_25224__$1;
(statearr_25248_25321[(2)] = inst_25146);

(statearr_25248_25321[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (31))){
var inst_25172 = (state_25224[(11)]);
var inst_25176 = done(null);
var inst_25177 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25172);
var state_25224__$1 = (function (){var statearr_25249 = state_25224;
(statearr_25249[(19)] = inst_25176);

return statearr_25249;
})();
var statearr_25250_25322 = state_25224__$1;
(statearr_25250_25322[(2)] = inst_25177);

(statearr_25250_25322[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (32))){
var inst_25165 = (state_25224[(10)]);
var inst_25166 = (state_25224[(20)]);
var inst_25164 = (state_25224[(21)]);
var inst_25167 = (state_25224[(12)]);
var inst_25179 = (state_25224[(2)]);
var inst_25180 = (inst_25167 + (1));
var tmp25245 = inst_25165;
var tmp25246 = inst_25166;
var tmp25247 = inst_25164;
var inst_25164__$1 = tmp25247;
var inst_25165__$1 = tmp25245;
var inst_25166__$1 = tmp25246;
var inst_25167__$1 = inst_25180;
var state_25224__$1 = (function (){var statearr_25251 = state_25224;
(statearr_25251[(10)] = inst_25165__$1);

(statearr_25251[(20)] = inst_25166__$1);

(statearr_25251[(21)] = inst_25164__$1);

(statearr_25251[(12)] = inst_25167__$1);

(statearr_25251[(22)] = inst_25179);

return statearr_25251;
})();
var statearr_25252_25323 = state_25224__$1;
(statearr_25252_25323[(2)] = null);

(statearr_25252_25323[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (40))){
var inst_25192 = (state_25224[(23)]);
var inst_25196 = done(null);
var inst_25197 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25192);
var state_25224__$1 = (function (){var statearr_25253 = state_25224;
(statearr_25253[(24)] = inst_25196);

return statearr_25253;
})();
var statearr_25254_25324 = state_25224__$1;
(statearr_25254_25324[(2)] = inst_25197);

(statearr_25254_25324[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (33))){
var inst_25183 = (state_25224[(25)]);
var inst_25185 = cljs.core.chunked_seq_QMARK_(inst_25183);
var state_25224__$1 = state_25224;
if(inst_25185){
var statearr_25255_25325 = state_25224__$1;
(statearr_25255_25325[(1)] = (36));

} else {
var statearr_25256_25326 = state_25224__$1;
(statearr_25256_25326[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (13))){
var inst_25113 = (state_25224[(26)]);
var inst_25116 = cljs.core.async.close_BANG_(inst_25113);
var state_25224__$1 = state_25224;
var statearr_25257_25327 = state_25224__$1;
(statearr_25257_25327[(2)] = inst_25116);

(statearr_25257_25327[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (22))){
var inst_25136 = (state_25224[(8)]);
var inst_25139 = cljs.core.async.close_BANG_(inst_25136);
var state_25224__$1 = state_25224;
var statearr_25258_25328 = state_25224__$1;
(statearr_25258_25328[(2)] = inst_25139);

(statearr_25258_25328[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (36))){
var inst_25183 = (state_25224[(25)]);
var inst_25187 = cljs.core.chunk_first(inst_25183);
var inst_25188 = cljs.core.chunk_rest(inst_25183);
var inst_25189 = cljs.core.count(inst_25187);
var inst_25164 = inst_25188;
var inst_25165 = inst_25187;
var inst_25166 = inst_25189;
var inst_25167 = (0);
var state_25224__$1 = (function (){var statearr_25259 = state_25224;
(statearr_25259[(10)] = inst_25165);

(statearr_25259[(20)] = inst_25166);

(statearr_25259[(21)] = inst_25164);

(statearr_25259[(12)] = inst_25167);

return statearr_25259;
})();
var statearr_25260_25329 = state_25224__$1;
(statearr_25260_25329[(2)] = null);

(statearr_25260_25329[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (41))){
var inst_25183 = (state_25224[(25)]);
var inst_25199 = (state_25224[(2)]);
var inst_25200 = cljs.core.next(inst_25183);
var inst_25164 = inst_25200;
var inst_25165 = null;
var inst_25166 = (0);
var inst_25167 = (0);
var state_25224__$1 = (function (){var statearr_25261 = state_25224;
(statearr_25261[(10)] = inst_25165);

(statearr_25261[(27)] = inst_25199);

(statearr_25261[(20)] = inst_25166);

(statearr_25261[(21)] = inst_25164);

(statearr_25261[(12)] = inst_25167);

return statearr_25261;
})();
var statearr_25262_25330 = state_25224__$1;
(statearr_25262_25330[(2)] = null);

(statearr_25262_25330[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (43))){
var state_25224__$1 = state_25224;
var statearr_25263_25331 = state_25224__$1;
(statearr_25263_25331[(2)] = null);

(statearr_25263_25331[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (29))){
var inst_25208 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
var statearr_25264_25332 = state_25224__$1;
(statearr_25264_25332[(2)] = inst_25208);

(statearr_25264_25332[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (44))){
var inst_25217 = (state_25224[(2)]);
var state_25224__$1 = (function (){var statearr_25265 = state_25224;
(statearr_25265[(28)] = inst_25217);

return statearr_25265;
})();
var statearr_25266_25333 = state_25224__$1;
(statearr_25266_25333[(2)] = null);

(statearr_25266_25333[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (6))){
var inst_25156 = (state_25224[(29)]);
var inst_25155 = cljs.core.deref(cs);
var inst_25156__$1 = cljs.core.keys(inst_25155);
var inst_25157 = cljs.core.count(inst_25156__$1);
var inst_25158 = cljs.core.reset_BANG_(dctr,inst_25157);
var inst_25163 = cljs.core.seq(inst_25156__$1);
var inst_25164 = inst_25163;
var inst_25165 = null;
var inst_25166 = (0);
var inst_25167 = (0);
var state_25224__$1 = (function (){var statearr_25267 = state_25224;
(statearr_25267[(10)] = inst_25165);

(statearr_25267[(29)] = inst_25156__$1);

(statearr_25267[(30)] = inst_25158);

(statearr_25267[(20)] = inst_25166);

(statearr_25267[(21)] = inst_25164);

(statearr_25267[(12)] = inst_25167);

return statearr_25267;
})();
var statearr_25268_25334 = state_25224__$1;
(statearr_25268_25334[(2)] = null);

(statearr_25268_25334[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (28))){
var inst_25164 = (state_25224[(21)]);
var inst_25183 = (state_25224[(25)]);
var inst_25183__$1 = cljs.core.seq(inst_25164);
var state_25224__$1 = (function (){var statearr_25269 = state_25224;
(statearr_25269[(25)] = inst_25183__$1);

return statearr_25269;
})();
if(inst_25183__$1){
var statearr_25270_25335 = state_25224__$1;
(statearr_25270_25335[(1)] = (33));

} else {
var statearr_25271_25336 = state_25224__$1;
(statearr_25271_25336[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (25))){
var inst_25166 = (state_25224[(20)]);
var inst_25167 = (state_25224[(12)]);
var inst_25169 = (inst_25167 < inst_25166);
var inst_25170 = inst_25169;
var state_25224__$1 = state_25224;
if(cljs.core.truth_(inst_25170)){
var statearr_25272_25337 = state_25224__$1;
(statearr_25272_25337[(1)] = (27));

} else {
var statearr_25273_25338 = state_25224__$1;
(statearr_25273_25338[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (34))){
var state_25224__$1 = state_25224;
var statearr_25274_25339 = state_25224__$1;
(statearr_25274_25339[(2)] = null);

(statearr_25274_25339[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (17))){
var state_25224__$1 = state_25224;
var statearr_25275_25340 = state_25224__$1;
(statearr_25275_25340[(2)] = null);

(statearr_25275_25340[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (3))){
var inst_25222 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25224__$1,inst_25222);
} else {
if((state_val_25225 === (12))){
var inst_25151 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
var statearr_25276_25341 = state_25224__$1;
(statearr_25276_25341[(2)] = inst_25151);

(statearr_25276_25341[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (2))){
var state_25224__$1 = state_25224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25224__$1,(4),ch);
} else {
if((state_val_25225 === (23))){
var state_25224__$1 = state_25224;
var statearr_25277_25342 = state_25224__$1;
(statearr_25277_25342[(2)] = null);

(statearr_25277_25342[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (35))){
var inst_25206 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
var statearr_25278_25343 = state_25224__$1;
(statearr_25278_25343[(2)] = inst_25206);

(statearr_25278_25343[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (19))){
var inst_25123 = (state_25224[(7)]);
var inst_25127 = cljs.core.chunk_first(inst_25123);
var inst_25128 = cljs.core.chunk_rest(inst_25123);
var inst_25129 = cljs.core.count(inst_25127);
var inst_25101 = inst_25128;
var inst_25102 = inst_25127;
var inst_25103 = inst_25129;
var inst_25104 = (0);
var state_25224__$1 = (function (){var statearr_25279 = state_25224;
(statearr_25279[(13)] = inst_25104);

(statearr_25279[(14)] = inst_25101);

(statearr_25279[(15)] = inst_25103);

(statearr_25279[(17)] = inst_25102);

return statearr_25279;
})();
var statearr_25280_25344 = state_25224__$1;
(statearr_25280_25344[(2)] = null);

(statearr_25280_25344[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (11))){
var inst_25101 = (state_25224[(14)]);
var inst_25123 = (state_25224[(7)]);
var inst_25123__$1 = cljs.core.seq(inst_25101);
var state_25224__$1 = (function (){var statearr_25281 = state_25224;
(statearr_25281[(7)] = inst_25123__$1);

return statearr_25281;
})();
if(inst_25123__$1){
var statearr_25282_25345 = state_25224__$1;
(statearr_25282_25345[(1)] = (16));

} else {
var statearr_25283_25346 = state_25224__$1;
(statearr_25283_25346[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (9))){
var inst_25153 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
var statearr_25284_25347 = state_25224__$1;
(statearr_25284_25347[(2)] = inst_25153);

(statearr_25284_25347[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (5))){
var inst_25099 = cljs.core.deref(cs);
var inst_25100 = cljs.core.seq(inst_25099);
var inst_25101 = inst_25100;
var inst_25102 = null;
var inst_25103 = (0);
var inst_25104 = (0);
var state_25224__$1 = (function (){var statearr_25285 = state_25224;
(statearr_25285[(13)] = inst_25104);

(statearr_25285[(14)] = inst_25101);

(statearr_25285[(15)] = inst_25103);

(statearr_25285[(17)] = inst_25102);

return statearr_25285;
})();
var statearr_25286_25348 = state_25224__$1;
(statearr_25286_25348[(2)] = null);

(statearr_25286_25348[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (14))){
var state_25224__$1 = state_25224;
var statearr_25287_25349 = state_25224__$1;
(statearr_25287_25349[(2)] = null);

(statearr_25287_25349[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (45))){
var inst_25214 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
var statearr_25288_25350 = state_25224__$1;
(statearr_25288_25350[(2)] = inst_25214);

(statearr_25288_25350[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (26))){
var inst_25156 = (state_25224[(29)]);
var inst_25210 = (state_25224[(2)]);
var inst_25211 = cljs.core.seq(inst_25156);
var state_25224__$1 = (function (){var statearr_25289 = state_25224;
(statearr_25289[(31)] = inst_25210);

return statearr_25289;
})();
if(inst_25211){
var statearr_25290_25351 = state_25224__$1;
(statearr_25290_25351[(1)] = (42));

} else {
var statearr_25291_25352 = state_25224__$1;
(statearr_25291_25352[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (16))){
var inst_25123 = (state_25224[(7)]);
var inst_25125 = cljs.core.chunked_seq_QMARK_(inst_25123);
var state_25224__$1 = state_25224;
if(inst_25125){
var statearr_25292_25353 = state_25224__$1;
(statearr_25292_25353[(1)] = (19));

} else {
var statearr_25293_25354 = state_25224__$1;
(statearr_25293_25354[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (38))){
var inst_25203 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
var statearr_25294_25355 = state_25224__$1;
(statearr_25294_25355[(2)] = inst_25203);

(statearr_25294_25355[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (30))){
var state_25224__$1 = state_25224;
var statearr_25295_25356 = state_25224__$1;
(statearr_25295_25356[(2)] = null);

(statearr_25295_25356[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (10))){
var inst_25104 = (state_25224[(13)]);
var inst_25102 = (state_25224[(17)]);
var inst_25112 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25102,inst_25104);
var inst_25113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25112,(0),null);
var inst_25114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25112,(1),null);
var state_25224__$1 = (function (){var statearr_25296 = state_25224;
(statearr_25296[(26)] = inst_25113);

return statearr_25296;
})();
if(cljs.core.truth_(inst_25114)){
var statearr_25297_25357 = state_25224__$1;
(statearr_25297_25357[(1)] = (13));

} else {
var statearr_25298_25358 = state_25224__$1;
(statearr_25298_25358[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (18))){
var inst_25149 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
var statearr_25299_25359 = state_25224__$1;
(statearr_25299_25359[(2)] = inst_25149);

(statearr_25299_25359[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (42))){
var state_25224__$1 = state_25224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25224__$1,(45),dchan);
} else {
if((state_val_25225 === (37))){
var inst_25092 = (state_25224[(9)]);
var inst_25192 = (state_25224[(23)]);
var inst_25183 = (state_25224[(25)]);
var inst_25192__$1 = cljs.core.first(inst_25183);
var inst_25193 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25192__$1,inst_25092,done);
var state_25224__$1 = (function (){var statearr_25300 = state_25224;
(statearr_25300[(23)] = inst_25192__$1);

return statearr_25300;
})();
if(cljs.core.truth_(inst_25193)){
var statearr_25301_25360 = state_25224__$1;
(statearr_25301_25360[(1)] = (39));

} else {
var statearr_25302_25361 = state_25224__$1;
(statearr_25302_25361[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25225 === (8))){
var inst_25104 = (state_25224[(13)]);
var inst_25103 = (state_25224[(15)]);
var inst_25106 = (inst_25104 < inst_25103);
var inst_25107 = inst_25106;
var state_25224__$1 = state_25224;
if(cljs.core.truth_(inst_25107)){
var statearr_25303_25362 = state_25224__$1;
(statearr_25303_25362[(1)] = (10));

} else {
var statearr_25304_25363 = state_25224__$1;
(statearr_25304_25363[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24488__auto___25309,cs,m,dchan,dctr,done))
;
return ((function (switch__24386__auto__,c__24488__auto___25309,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24387__auto__ = null;
var cljs$core$async$mult_$_state_machine__24387__auto____0 = (function (){
var statearr_25305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25305[(0)] = cljs$core$async$mult_$_state_machine__24387__auto__);

(statearr_25305[(1)] = (1));

return statearr_25305;
});
var cljs$core$async$mult_$_state_machine__24387__auto____1 = (function (state_25224){
while(true){
var ret_value__24388__auto__ = (function (){try{while(true){
var result__24389__auto__ = switch__24386__auto__(state_25224);
if(cljs.core.keyword_identical_QMARK_(result__24389__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24389__auto__;
}
break;
}
}catch (e25306){if((e25306 instanceof Object)){
var ex__24390__auto__ = e25306;
var statearr_25307_25364 = state_25224;
(statearr_25307_25364[(5)] = ex__24390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25224);

return cljs.core.cst$kw$recur;
} else {
throw e25306;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24388__auto__,cljs.core.cst$kw$recur)){
var G__25365 = state_25224;
state_25224 = G__25365;
continue;
} else {
return ret_value__24388__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24387__auto__ = function(state_25224){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24387__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24387__auto____1.call(this,state_25224);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24387__auto____0;
cljs$core$async$mult_$_state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24387__auto____1;
return cljs$core$async$mult_$_state_machine__24387__auto__;
})()
;})(switch__24386__auto__,c__24488__auto___25309,cs,m,dchan,dctr,done))
})();
var state__24490__auto__ = (function (){var statearr_25308 = (f__24489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24489__auto__.cljs$core$IFn$_invoke$arity$0() : f__24489__auto__.call(null));
(statearr_25308[(6)] = c__24488__auto___25309);

return statearr_25308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24490__auto__);
});})(c__24488__auto___25309,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25367 = arguments.length;
switch (G__25367) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__12476__auto__ = (((m == null))?null:m);
var m__12477__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12476__auto__)]);
if(!((m__12477__auto__ == null))){
return (m__12477__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12477__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__12477__auto__.call(null,m,ch));
} else {
var m__12477__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__12477__auto____$1 == null))){
return (m__12477__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12477__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__12477__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__12476__auto__ = (((m == null))?null:m);
var m__12477__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12476__auto__)]);
if(!((m__12477__auto__ == null))){
return (m__12477__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12477__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__12477__auto__.call(null,m,ch));
} else {
var m__12477__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__12477__auto____$1 == null))){
return (m__12477__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12477__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__12477__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__12476__auto__ = (((m == null))?null:m);
var m__12477__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12476__auto__)]);
if(!((m__12477__auto__ == null))){
return (m__12477__auto__.cljs$core$IFn$_invoke$arity$1 ? m__12477__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__12477__auto__.call(null,m));
} else {
var m__12477__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__12477__auto____$1 == null))){
return (m__12477__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__12477__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__12477__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__12476__auto__ = (((m == null))?null:m);
var m__12477__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12476__auto__)]);
if(!((m__12477__auto__ == null))){
return (m__12477__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12477__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__12477__auto__.call(null,m,state_map));
} else {
var m__12477__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__12477__auto____$1 == null))){
return (m__12477__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12477__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__12477__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__12476__auto__ = (((m == null))?null:m);
var m__12477__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12476__auto__)]);
if(!((m__12477__auto__ == null))){
return (m__12477__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12477__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__12477__auto__.call(null,m,mode));
} else {
var m__12477__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__12477__auto____$1 == null))){
return (m__12477__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12477__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__12477__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__13029__auto__ = [];
var len__13022__auto___25379 = arguments.length;
var i__13023__auto___25380 = (0);
while(true){
if((i__13023__auto___25380 < len__13022__auto___25379)){
args__13029__auto__.push((arguments[i__13023__auto___25380]));

var G__25381 = (i__13023__auto___25380 + (1));
i__13023__auto___25380 = G__25381;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25373){
var map__25374 = p__25373;
var map__25374__$1 = ((((!((map__25374 == null)))?((((map__25374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25374):map__25374);
var opts = map__25374__$1;
var statearr_25376_25382 = state;
(statearr_25376_25382[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__25374,map__25374__$1,opts){
return (function (val){
var statearr_25377_25383 = state;
(statearr_25377_25383[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25374,map__25374__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_25378_25384 = state;
(statearr_25378_25384[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25369){
var G__25370 = cljs.core.first(seq25369);
var seq25369__$1 = cljs.core.next(seq25369);
var G__25371 = cljs.core.first(seq25369__$1);
var seq25369__$2 = cljs.core.next(seq25369__$1);
var G__25372 = cljs.core.first(seq25369__$2);
var seq25369__$3 = cljs.core.next(seq25369__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25370,G__25371,G__25372,seq25369__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25385 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25385 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25386){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25386 = meta25386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25387,meta25386__$1){
var self__ = this;
var _25387__$1 = this;
return (new cljs.core.async.t_cljs$core$async25385(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25386__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25385.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25387){
var self__ = this;
var _25387__$1 = this;
return self__.meta25386;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25385.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25385.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25385.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25385.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25385.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25385.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25385.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25385.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25385.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta25386], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25385.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25385";

cljs.core.async.t_cljs$core$async25385.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async/t_cljs$core$async25385");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25385 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25385(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25386){
return (new cljs.core.async.t_cljs$core$async25385(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25386));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25385(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24488__auto___25549 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24488__auto___25549,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24489__auto__ = (function (){var switch__24386__auto__ = ((function (c__24488__auto___25549,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25489){
var state_val_25490 = (state_25489[(1)]);
if((state_val_25490 === (7))){
var inst_25404 = (state_25489[(2)]);
var state_25489__$1 = state_25489;
var statearr_25491_25550 = state_25489__$1;
(statearr_25491_25550[(2)] = inst_25404);

(statearr_25491_25550[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (20))){
var inst_25416 = (state_25489[(7)]);
var state_25489__$1 = state_25489;
var statearr_25492_25551 = state_25489__$1;
(statearr_25492_25551[(2)] = inst_25416);

(statearr_25492_25551[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (27))){
var state_25489__$1 = state_25489;
var statearr_25493_25552 = state_25489__$1;
(statearr_25493_25552[(2)] = null);

(statearr_25493_25552[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (1))){
var inst_25391 = (state_25489[(8)]);
var inst_25391__$1 = calc_state();
var inst_25393 = (inst_25391__$1 == null);
var inst_25394 = cljs.core.not(inst_25393);
var state_25489__$1 = (function (){var statearr_25494 = state_25489;
(statearr_25494[(8)] = inst_25391__$1);

return statearr_25494;
})();
if(inst_25394){
var statearr_25495_25553 = state_25489__$1;
(statearr_25495_25553[(1)] = (2));

} else {
var statearr_25496_25554 = state_25489__$1;
(statearr_25496_25554[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (24))){
var inst_25463 = (state_25489[(9)]);
var inst_25440 = (state_25489[(10)]);
var inst_25449 = (state_25489[(11)]);
var inst_25463__$1 = (inst_25440.cljs$core$IFn$_invoke$arity$1 ? inst_25440.cljs$core$IFn$_invoke$arity$1(inst_25449) : inst_25440.call(null,inst_25449));
var state_25489__$1 = (function (){var statearr_25497 = state_25489;
(statearr_25497[(9)] = inst_25463__$1);

return statearr_25497;
})();
if(cljs.core.truth_(inst_25463__$1)){
var statearr_25498_25555 = state_25489__$1;
(statearr_25498_25555[(1)] = (29));

} else {
var statearr_25499_25556 = state_25489__$1;
(statearr_25499_25556[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (4))){
var inst_25407 = (state_25489[(2)]);
var state_25489__$1 = state_25489;
if(cljs.core.truth_(inst_25407)){
var statearr_25500_25557 = state_25489__$1;
(statearr_25500_25557[(1)] = (8));

} else {
var statearr_25501_25558 = state_25489__$1;
(statearr_25501_25558[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (15))){
var inst_25434 = (state_25489[(2)]);
var state_25489__$1 = state_25489;
if(cljs.core.truth_(inst_25434)){
var statearr_25502_25559 = state_25489__$1;
(statearr_25502_25559[(1)] = (19));

} else {
var statearr_25503_25560 = state_25489__$1;
(statearr_25503_25560[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (21))){
var inst_25439 = (state_25489[(12)]);
var inst_25439__$1 = (state_25489[(2)]);
var inst_25440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25439__$1,cljs.core.cst$kw$solos);
var inst_25441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25439__$1,cljs.core.cst$kw$mutes);
var inst_25442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25439__$1,cljs.core.cst$kw$reads);
var state_25489__$1 = (function (){var statearr_25504 = state_25489;
(statearr_25504[(13)] = inst_25441);

(statearr_25504[(10)] = inst_25440);

(statearr_25504[(12)] = inst_25439__$1);

return statearr_25504;
})();
return cljs.core.async.ioc_alts_BANG_(state_25489__$1,(22),inst_25442);
} else {
if((state_val_25490 === (31))){
var inst_25471 = (state_25489[(2)]);
var state_25489__$1 = state_25489;
if(cljs.core.truth_(inst_25471)){
var statearr_25505_25561 = state_25489__$1;
(statearr_25505_25561[(1)] = (32));

} else {
var statearr_25506_25562 = state_25489__$1;
(statearr_25506_25562[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (32))){
var inst_25448 = (state_25489[(14)]);
var state_25489__$1 = state_25489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25489__$1,(35),out,inst_25448);
} else {
if((state_val_25490 === (33))){
var inst_25439 = (state_25489[(12)]);
var inst_25416 = inst_25439;
var state_25489__$1 = (function (){var statearr_25507 = state_25489;
(statearr_25507[(7)] = inst_25416);

return statearr_25507;
})();
var statearr_25508_25563 = state_25489__$1;
(statearr_25508_25563[(2)] = null);

(statearr_25508_25563[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (13))){
var inst_25416 = (state_25489[(7)]);
var inst_25423 = inst_25416.cljs$lang$protocol_mask$partition0$;
var inst_25424 = (inst_25423 & (64));
var inst_25425 = inst_25416.cljs$core$ISeq$;
var inst_25426 = (cljs.core.PROTOCOL_SENTINEL === inst_25425);
var inst_25427 = (inst_25424) || (inst_25426);
var state_25489__$1 = state_25489;
if(cljs.core.truth_(inst_25427)){
var statearr_25509_25564 = state_25489__$1;
(statearr_25509_25564[(1)] = (16));

} else {
var statearr_25510_25565 = state_25489__$1;
(statearr_25510_25565[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (22))){
var inst_25448 = (state_25489[(14)]);
var inst_25449 = (state_25489[(11)]);
var inst_25447 = (state_25489[(2)]);
var inst_25448__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25447,(0),null);
var inst_25449__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25447,(1),null);
var inst_25450 = (inst_25448__$1 == null);
var inst_25451 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25449__$1,change);
var inst_25452 = (inst_25450) || (inst_25451);
var state_25489__$1 = (function (){var statearr_25511 = state_25489;
(statearr_25511[(14)] = inst_25448__$1);

(statearr_25511[(11)] = inst_25449__$1);

return statearr_25511;
})();
if(cljs.core.truth_(inst_25452)){
var statearr_25512_25566 = state_25489__$1;
(statearr_25512_25566[(1)] = (23));

} else {
var statearr_25513_25567 = state_25489__$1;
(statearr_25513_25567[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (36))){
var inst_25439 = (state_25489[(12)]);
var inst_25416 = inst_25439;
var state_25489__$1 = (function (){var statearr_25514 = state_25489;
(statearr_25514[(7)] = inst_25416);

return statearr_25514;
})();
var statearr_25515_25568 = state_25489__$1;
(statearr_25515_25568[(2)] = null);

(statearr_25515_25568[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (29))){
var inst_25463 = (state_25489[(9)]);
var state_25489__$1 = state_25489;
var statearr_25516_25569 = state_25489__$1;
(statearr_25516_25569[(2)] = inst_25463);

(statearr_25516_25569[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (6))){
var state_25489__$1 = state_25489;
var statearr_25517_25570 = state_25489__$1;
(statearr_25517_25570[(2)] = false);

(statearr_25517_25570[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (28))){
var inst_25459 = (state_25489[(2)]);
var inst_25460 = calc_state();
var inst_25416 = inst_25460;
var state_25489__$1 = (function (){var statearr_25518 = state_25489;
(statearr_25518[(15)] = inst_25459);

(statearr_25518[(7)] = inst_25416);

return statearr_25518;
})();
var statearr_25519_25571 = state_25489__$1;
(statearr_25519_25571[(2)] = null);

(statearr_25519_25571[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (25))){
var inst_25485 = (state_25489[(2)]);
var state_25489__$1 = state_25489;
var statearr_25520_25572 = state_25489__$1;
(statearr_25520_25572[(2)] = inst_25485);

(statearr_25520_25572[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (34))){
var inst_25483 = (state_25489[(2)]);
var state_25489__$1 = state_25489;
var statearr_25521_25573 = state_25489__$1;
(statearr_25521_25573[(2)] = inst_25483);

(statearr_25521_25573[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (17))){
var state_25489__$1 = state_25489;
var statearr_25522_25574 = state_25489__$1;
(statearr_25522_25574[(2)] = false);

(statearr_25522_25574[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (3))){
var state_25489__$1 = state_25489;
var statearr_25523_25575 = state_25489__$1;
(statearr_25523_25575[(2)] = false);

(statearr_25523_25575[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (12))){
var inst_25487 = (state_25489[(2)]);
var state_25489__$1 = state_25489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25489__$1,inst_25487);
} else {
if((state_val_25490 === (2))){
var inst_25391 = (state_25489[(8)]);
var inst_25396 = inst_25391.cljs$lang$protocol_mask$partition0$;
var inst_25397 = (inst_25396 & (64));
var inst_25398 = inst_25391.cljs$core$ISeq$;
var inst_25399 = (cljs.core.PROTOCOL_SENTINEL === inst_25398);
var inst_25400 = (inst_25397) || (inst_25399);
var state_25489__$1 = state_25489;
if(cljs.core.truth_(inst_25400)){
var statearr_25524_25576 = state_25489__$1;
(statearr_25524_25576[(1)] = (5));

} else {
var statearr_25525_25577 = state_25489__$1;
(statearr_25525_25577[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (23))){
var inst_25448 = (state_25489[(14)]);
var inst_25454 = (inst_25448 == null);
var state_25489__$1 = state_25489;
if(cljs.core.truth_(inst_25454)){
var statearr_25526_25578 = state_25489__$1;
(statearr_25526_25578[(1)] = (26));

} else {
var statearr_25527_25579 = state_25489__$1;
(statearr_25527_25579[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (35))){
var inst_25474 = (state_25489[(2)]);
var state_25489__$1 = state_25489;
if(cljs.core.truth_(inst_25474)){
var statearr_25528_25580 = state_25489__$1;
(statearr_25528_25580[(1)] = (36));

} else {
var statearr_25529_25581 = state_25489__$1;
(statearr_25529_25581[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (19))){
var inst_25416 = (state_25489[(7)]);
var inst_25436 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25416);
var state_25489__$1 = state_25489;
var statearr_25530_25582 = state_25489__$1;
(statearr_25530_25582[(2)] = inst_25436);

(statearr_25530_25582[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (11))){
var inst_25416 = (state_25489[(7)]);
var inst_25420 = (inst_25416 == null);
var inst_25421 = cljs.core.not(inst_25420);
var state_25489__$1 = state_25489;
if(inst_25421){
var statearr_25531_25583 = state_25489__$1;
(statearr_25531_25583[(1)] = (13));

} else {
var statearr_25532_25584 = state_25489__$1;
(statearr_25532_25584[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (9))){
var inst_25391 = (state_25489[(8)]);
var state_25489__$1 = state_25489;
var statearr_25533_25585 = state_25489__$1;
(statearr_25533_25585[(2)] = inst_25391);

(statearr_25533_25585[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (5))){
var state_25489__$1 = state_25489;
var statearr_25534_25586 = state_25489__$1;
(statearr_25534_25586[(2)] = true);

(statearr_25534_25586[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (14))){
var state_25489__$1 = state_25489;
var statearr_25535_25587 = state_25489__$1;
(statearr_25535_25587[(2)] = false);

(statearr_25535_25587[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (26))){
var inst_25449 = (state_25489[(11)]);
var inst_25456 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25449);
var state_25489__$1 = state_25489;
var statearr_25536_25588 = state_25489__$1;
(statearr_25536_25588[(2)] = inst_25456);

(statearr_25536_25588[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (16))){
var state_25489__$1 = state_25489;
var statearr_25537_25589 = state_25489__$1;
(statearr_25537_25589[(2)] = true);

(statearr_25537_25589[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (38))){
var inst_25479 = (state_25489[(2)]);
var state_25489__$1 = state_25489;
var statearr_25538_25590 = state_25489__$1;
(statearr_25538_25590[(2)] = inst_25479);

(statearr_25538_25590[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (30))){
var inst_25441 = (state_25489[(13)]);
var inst_25440 = (state_25489[(10)]);
var inst_25449 = (state_25489[(11)]);
var inst_25466 = cljs.core.empty_QMARK_(inst_25440);
var inst_25467 = (inst_25441.cljs$core$IFn$_invoke$arity$1 ? inst_25441.cljs$core$IFn$_invoke$arity$1(inst_25449) : inst_25441.call(null,inst_25449));
var inst_25468 = cljs.core.not(inst_25467);
var inst_25469 = (inst_25466) && (inst_25468);
var state_25489__$1 = state_25489;
var statearr_25539_25591 = state_25489__$1;
(statearr_25539_25591[(2)] = inst_25469);

(statearr_25539_25591[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (10))){
var inst_25391 = (state_25489[(8)]);
var inst_25412 = (state_25489[(2)]);
var inst_25413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25412,cljs.core.cst$kw$solos);
var inst_25414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25412,cljs.core.cst$kw$mutes);
var inst_25415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25412,cljs.core.cst$kw$reads);
var inst_25416 = inst_25391;
var state_25489__$1 = (function (){var statearr_25540 = state_25489;
(statearr_25540[(16)] = inst_25413);

(statearr_25540[(17)] = inst_25415);

(statearr_25540[(18)] = inst_25414);

(statearr_25540[(7)] = inst_25416);

return statearr_25540;
})();
var statearr_25541_25592 = state_25489__$1;
(statearr_25541_25592[(2)] = null);

(statearr_25541_25592[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (18))){
var inst_25431 = (state_25489[(2)]);
var state_25489__$1 = state_25489;
var statearr_25542_25593 = state_25489__$1;
(statearr_25542_25593[(2)] = inst_25431);

(statearr_25542_25593[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (37))){
var state_25489__$1 = state_25489;
var statearr_25543_25594 = state_25489__$1;
(statearr_25543_25594[(2)] = null);

(statearr_25543_25594[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (8))){
var inst_25391 = (state_25489[(8)]);
var inst_25409 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25391);
var state_25489__$1 = state_25489;
var statearr_25544_25595 = state_25489__$1;
(statearr_25544_25595[(2)] = inst_25409);

(statearr_25544_25595[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24488__auto___25549,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24386__auto__,c__24488__auto___25549,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24387__auto__ = null;
var cljs$core$async$mix_$_state_machine__24387__auto____0 = (function (){
var statearr_25545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25545[(0)] = cljs$core$async$mix_$_state_machine__24387__auto__);

(statearr_25545[(1)] = (1));

return statearr_25545;
});
var cljs$core$async$mix_$_state_machine__24387__auto____1 = (function (state_25489){
while(true){
var ret_value__24388__auto__ = (function (){try{while(true){
var result__24389__auto__ = switch__24386__auto__(state_25489);
if(cljs.core.keyword_identical_QMARK_(result__24389__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24389__auto__;
}
break;
}
}catch (e25546){if((e25546 instanceof Object)){
var ex__24390__auto__ = e25546;
var statearr_25547_25596 = state_25489;
(statearr_25547_25596[(5)] = ex__24390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25489);

return cljs.core.cst$kw$recur;
} else {
throw e25546;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24388__auto__,cljs.core.cst$kw$recur)){
var G__25597 = state_25489;
state_25489 = G__25597;
continue;
} else {
return ret_value__24388__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24387__auto__ = function(state_25489){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24387__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24387__auto____1.call(this,state_25489);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24387__auto____0;
cljs$core$async$mix_$_state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24387__auto____1;
return cljs$core$async$mix_$_state_machine__24387__auto__;
})()
;})(switch__24386__auto__,c__24488__auto___25549,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24490__auto__ = (function (){var statearr_25548 = (f__24489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24489__auto__.cljs$core$IFn$_invoke$arity$0() : f__24489__auto__.call(null));
(statearr_25548[(6)] = c__24488__auto___25549);

return statearr_25548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24490__auto__);
});})(c__24488__auto___25549,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__12476__auto__ = (((p == null))?null:p);
var m__12477__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12476__auto__)]);
if(!((m__12477__auto__ == null))){
return (m__12477__auto__.cljs$core$IFn$_invoke$arity$4 ? m__12477__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__12477__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__12477__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__12477__auto____$1 == null))){
return (m__12477__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__12477__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__12477__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__12476__auto__ = (((p == null))?null:p);
var m__12477__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12476__auto__)]);
if(!((m__12477__auto__ == null))){
return (m__12477__auto__.cljs$core$IFn$_invoke$arity$3 ? m__12477__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__12477__auto__.call(null,p,v,ch));
} else {
var m__12477__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__12477__auto____$1 == null))){
return (m__12477__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__12477__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__12477__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25599 = arguments.length;
switch (G__25599) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__12476__auto__ = (((p == null))?null:p);
var m__12477__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12476__auto__)]);
if(!((m__12477__auto__ == null))){
return (m__12477__auto__.cljs$core$IFn$_invoke$arity$1 ? m__12477__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__12477__auto__.call(null,p));
} else {
var m__12477__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__12477__auto____$1 == null))){
return (m__12477__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__12477__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__12477__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__12476__auto__ = (((p == null))?null:p);
var m__12477__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12476__auto__)]);
if(!((m__12477__auto__ == null))){
return (m__12477__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12477__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__12477__auto__.call(null,p,v));
} else {
var m__12477__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__12477__auto____$1 == null))){
return (m__12477__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12477__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__12477__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__25603 = arguments.length;
switch (G__25603) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__11743__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__11743__auto__,mults){
return (function (p1__25601_SHARP_){
if(cljs.core.truth_((p1__25601_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25601_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25601_SHARP_.call(null,topic)))){
return p1__25601_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25601_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__11743__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25604 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25604 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25605){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25605 = meta25605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25606,meta25605__$1){
var self__ = this;
var _25606__$1 = this;
return (new cljs.core.async.t_cljs$core$async25604(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25605__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25604.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25606){
var self__ = this;
var _25606__$1 = this;
return self__.meta25605;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25604.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25604.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25604.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25604.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25604.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25604.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25604.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25604.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta25605], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25604.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25604";

cljs.core.async.t_cljs$core$async25604.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async/t_cljs$core$async25604");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25604 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25604(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25605){
return (new cljs.core.async.t_cljs$core$async25604(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25605));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25604(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24488__auto___25724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24488__auto___25724,mults,ensure_mult,p){
return (function (){
var f__24489__auto__ = (function (){var switch__24386__auto__ = ((function (c__24488__auto___25724,mults,ensure_mult,p){
return (function (state_25678){
var state_val_25679 = (state_25678[(1)]);
if((state_val_25679 === (7))){
var inst_25674 = (state_25678[(2)]);
var state_25678__$1 = state_25678;
var statearr_25680_25725 = state_25678__$1;
(statearr_25680_25725[(2)] = inst_25674);

(statearr_25680_25725[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25679 === (20))){
var state_25678__$1 = state_25678;
var statearr_25681_25726 = state_25678__$1;
(statearr_25681_25726[(2)] = null);

(statearr_25681_25726[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25679 === (1))){
var state_25678__$1 = state_25678;
var statearr_25682_25727 = state_25678__$1;
(statearr_25682_25727[(2)] = null);

(statearr_25682_25727[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25679 === (24))){
var inst_25657 = (state_25678[(7)]);
var inst_25666 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25657);
var state_25678__$1 = state_25678;
var statearr_25683_25728 = state_25678__$1;
(statearr_25683_25728[(2)] = inst_25666);

(statearr_25683_25728[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25679 === (4))){
var inst_25609 = (state_25678[(8)]);
var inst_25609__$1 = (state_25678[(2)]);
var inst_25610 = (inst_25609__$1 == null);
var state_25678__$1 = (function (){var statearr_25684 = state_25678;
(statearr_25684[(8)] = inst_25609__$1);

return statearr_25684;
})();
if(cljs.core.truth_(inst_25610)){
var statearr_25685_25729 = state_25678__$1;
(statearr_25685_25729[(1)] = (5));

} else {
var statearr_25686_25730 = state_25678__$1;
(statearr_25686_25730[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25679 === (15))){
var inst_25651 = (state_25678[(2)]);
var state_25678__$1 = state_25678;
var statearr_25687_25731 = state_25678__$1;
(statearr_25687_25731[(2)] = inst_25651);

(statearr_25687_25731[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25679 === (21))){
var inst_25671 = (state_25678[(2)]);
var state_25678__$1 = (function (){var statearr_25688 = state_25678;
(statearr_25688[(9)] = inst_25671);

return statearr_25688;
})();
var statearr_25689_25732 = state_25678__$1;
(statearr_25689_25732[(2)] = null);

(statearr_25689_25732[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25679 === (13))){
var inst_25633 = (state_25678[(10)]);
var inst_25635 = cljs.core.chunked_seq_QMARK_(inst_25633);
var state_25678__$1 = state_25678;
if(inst_25635){
var statearr_25690_25733 = state_25678__$1;
(statearr_25690_25733[(1)] = (16));

} else {
var statearr_25691_25734 = state_25678__$1;
(statearr_25691_25734[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25679 === (22))){
var inst_25663 = (state_25678[(2)]);
var state_25678__$1 = state_25678;
if(cljs.core.truth_(inst_25663)){
var statearr_25692_25735 = state_25678__$1;
(statearr_25692_25735[(1)] = (23));

} else {
var statearr_25693_25736 = state_25678__$1;
(statearr_25693_25736[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25679 === (6))){
var inst_25609 = (state_25678[(8)]);
var inst_25657 = (state_25678[(7)]);
var inst_25659 = (state_25678[(11)]);
var inst_25657__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25609) : topic_fn.call(null,inst_25609));
var inst_25658 = cljs.core.deref(mults);
var inst_25659__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25658,inst_25657__$1);
var state_25678__$1 = (function (){var statearr_25694 = state_25678;
(statearr_25694[(7)] = inst_25657__$1);

(statearr_25694[(11)] = inst_25659__$1);

return statearr_25694;
})();
if(cljs.core.truth_(inst_25659__$1)){
var statearr_25695_25737 = state_25678__$1;
(statearr_25695_25737[(1)] = (19));

} else {
var statearr_25696_25738 = state_25678__$1;
(statearr_25696_25738[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25679 === (25))){
var inst_25668 = (state_25678[(2)]);
var state_25678__$1 = state_25678;
var statearr_25697_25739 = state_25678__$1;
(statearr_25697_25739[(2)] = inst_25668);

(statearr_25697_25739[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25679 === (17))){
var inst_25633 = (state_25678[(10)]);
var inst_25642 = cljs.core.first(inst_25633);
var inst_25643 = cljs.core.async.muxch_STAR_(inst_25642);
var inst_25644 = cljs.core.async.close_BANG_(inst_25643);
var inst_25645 = cljs.core.next(inst_25633);
var inst_25619 = inst_25645;
var inst_25620 = null;
var inst_25621 = (0);
var inst_25622 = (0);
var state_25678__$1 = (function (){var statearr_25698 = state_25678;
(statearr_25698[(12)] = inst_25622);

(statearr_25698[(13)] = inst_25644);

(statearr_25698[(14)] = inst_25619);

(statearr_25698[(15)] = inst_25620);

(statearr_25698[(16)] = inst_25621);

return statearr_25698;
})();
var statearr_25699_25740 = state_25678__$1;
(statearr_25699_25740[(2)] = null);

(statearr_25699_25740[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25679 === (3))){
var inst_25676 = (state_25678[(2)]);
var state_25678__$1 = state_25678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25678__$1,inst_25676);
} else {
if((state_val_25679 === (12))){
var inst_25653 = (state_25678[(2)]);
var state_25678__$1 = state_25678;
var statearr_25700_25741 = state_25678__$1;
(statearr_25700_25741[(2)] = inst_25653);

(statearr_25700_25741[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25679 === (2))){
var state_25678__$1 = state_25678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25678__$1,(4),ch);
} else {
if((state_val_25679 === (23))){
var state_25678__$1 = state_25678;
var statearr_25701_25742 = state_25678__$1;
(statearr_25701_25742[(2)] = null);

(statearr_25701_25742[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25679 === (19))){
var inst_25609 = (state_25678[(8)]);
var inst_25659 = (state_25678[(11)]);
var inst_25661 = cljs.core.async.muxch_STAR_(inst_25659);
var state_25678__$1 = state_25678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25678__$1,(22),inst_25661,inst_25609);
} else {
if((state_val_25679 === (11))){
var inst_25619 = (state_25678[(14)]);
var inst_25633 = (state_25678[(10)]);
var inst_25633__$1 = cljs.core.seq(inst_25619);
var state_25678__$1 = (function (){var statearr_25702 = state_25678;
(statearr_25702[(10)] = inst_25633__$1);

return statearr_25702;
})();
if(inst_25633__$1){
var statearr_25703_25743 = state_25678__$1;
(statearr_25703_25743[(1)] = (13));

} else {
var statearr_25704_25744 = state_25678__$1;
(statearr_25704_25744[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25679 === (9))){
var inst_25655 = (state_25678[(2)]);
var state_25678__$1 = state_25678;
var statearr_25705_25745 = state_25678__$1;
(statearr_25705_25745[(2)] = inst_25655);

(statearr_25705_25745[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25679 === (5))){
var inst_25616 = cljs.core.deref(mults);
var inst_25617 = cljs.core.vals(inst_25616);
var inst_25618 = cljs.core.seq(inst_25617);
var inst_25619 = inst_25618;
var inst_25620 = null;
var inst_25621 = (0);
var inst_25622 = (0);
var state_25678__$1 = (function (){var statearr_25706 = state_25678;
(statearr_25706[(12)] = inst_25622);

(statearr_25706[(14)] = inst_25619);

(statearr_25706[(15)] = inst_25620);

(statearr_25706[(16)] = inst_25621);

return statearr_25706;
})();
var statearr_25707_25746 = state_25678__$1;
(statearr_25707_25746[(2)] = null);

(statearr_25707_25746[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25679 === (14))){
var state_25678__$1 = state_25678;
var statearr_25711_25747 = state_25678__$1;
(statearr_25711_25747[(2)] = null);

(statearr_25711_25747[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25679 === (16))){
var inst_25633 = (state_25678[(10)]);
var inst_25637 = cljs.core.chunk_first(inst_25633);
var inst_25638 = cljs.core.chunk_rest(inst_25633);
var inst_25639 = cljs.core.count(inst_25637);
var inst_25619 = inst_25638;
var inst_25620 = inst_25637;
var inst_25621 = inst_25639;
var inst_25622 = (0);
var state_25678__$1 = (function (){var statearr_25712 = state_25678;
(statearr_25712[(12)] = inst_25622);

(statearr_25712[(14)] = inst_25619);

(statearr_25712[(15)] = inst_25620);

(statearr_25712[(16)] = inst_25621);

return statearr_25712;
})();
var statearr_25713_25748 = state_25678__$1;
(statearr_25713_25748[(2)] = null);

(statearr_25713_25748[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25679 === (10))){
var inst_25622 = (state_25678[(12)]);
var inst_25619 = (state_25678[(14)]);
var inst_25620 = (state_25678[(15)]);
var inst_25621 = (state_25678[(16)]);
var inst_25627 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25620,inst_25622);
var inst_25628 = cljs.core.async.muxch_STAR_(inst_25627);
var inst_25629 = cljs.core.async.close_BANG_(inst_25628);
var inst_25630 = (inst_25622 + (1));
var tmp25708 = inst_25619;
var tmp25709 = inst_25620;
var tmp25710 = inst_25621;
var inst_25619__$1 = tmp25708;
var inst_25620__$1 = tmp25709;
var inst_25621__$1 = tmp25710;
var inst_25622__$1 = inst_25630;
var state_25678__$1 = (function (){var statearr_25714 = state_25678;
(statearr_25714[(12)] = inst_25622__$1);

(statearr_25714[(17)] = inst_25629);

(statearr_25714[(14)] = inst_25619__$1);

(statearr_25714[(15)] = inst_25620__$1);

(statearr_25714[(16)] = inst_25621__$1);

return statearr_25714;
})();
var statearr_25715_25749 = state_25678__$1;
(statearr_25715_25749[(2)] = null);

(statearr_25715_25749[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25679 === (18))){
var inst_25648 = (state_25678[(2)]);
var state_25678__$1 = state_25678;
var statearr_25716_25750 = state_25678__$1;
(statearr_25716_25750[(2)] = inst_25648);

(statearr_25716_25750[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25679 === (8))){
var inst_25622 = (state_25678[(12)]);
var inst_25621 = (state_25678[(16)]);
var inst_25624 = (inst_25622 < inst_25621);
var inst_25625 = inst_25624;
var state_25678__$1 = state_25678;
if(cljs.core.truth_(inst_25625)){
var statearr_25717_25751 = state_25678__$1;
(statearr_25717_25751[(1)] = (10));

} else {
var statearr_25718_25752 = state_25678__$1;
(statearr_25718_25752[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24488__auto___25724,mults,ensure_mult,p))
;
return ((function (switch__24386__auto__,c__24488__auto___25724,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24387__auto__ = null;
var cljs$core$async$state_machine__24387__auto____0 = (function (){
var statearr_25719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25719[(0)] = cljs$core$async$state_machine__24387__auto__);

(statearr_25719[(1)] = (1));

return statearr_25719;
});
var cljs$core$async$state_machine__24387__auto____1 = (function (state_25678){
while(true){
var ret_value__24388__auto__ = (function (){try{while(true){
var result__24389__auto__ = switch__24386__auto__(state_25678);
if(cljs.core.keyword_identical_QMARK_(result__24389__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24389__auto__;
}
break;
}
}catch (e25720){if((e25720 instanceof Object)){
var ex__24390__auto__ = e25720;
var statearr_25721_25753 = state_25678;
(statearr_25721_25753[(5)] = ex__24390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25678);

return cljs.core.cst$kw$recur;
} else {
throw e25720;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24388__auto__,cljs.core.cst$kw$recur)){
var G__25754 = state_25678;
state_25678 = G__25754;
continue;
} else {
return ret_value__24388__auto__;
}
break;
}
});
cljs$core$async$state_machine__24387__auto__ = function(state_25678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24387__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24387__auto____1.call(this,state_25678);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24387__auto____0;
cljs$core$async$state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24387__auto____1;
return cljs$core$async$state_machine__24387__auto__;
})()
;})(switch__24386__auto__,c__24488__auto___25724,mults,ensure_mult,p))
})();
var state__24490__auto__ = (function (){var statearr_25722 = (f__24489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24489__auto__.cljs$core$IFn$_invoke$arity$0() : f__24489__auto__.call(null));
(statearr_25722[(6)] = c__24488__auto___25724);

return statearr_25722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24490__auto__);
});})(c__24488__auto___25724,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25756 = arguments.length;
switch (G__25756) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25759 = arguments.length;
switch (G__25759) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25762 = arguments.length;
switch (G__25762) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__24488__auto___25829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24488__auto___25829,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24489__auto__ = (function (){var switch__24386__auto__ = ((function (c__24488__auto___25829,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25801){
var state_val_25802 = (state_25801[(1)]);
if((state_val_25802 === (7))){
var state_25801__$1 = state_25801;
var statearr_25803_25830 = state_25801__$1;
(statearr_25803_25830[(2)] = null);

(statearr_25803_25830[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25802 === (1))){
var state_25801__$1 = state_25801;
var statearr_25804_25831 = state_25801__$1;
(statearr_25804_25831[(2)] = null);

(statearr_25804_25831[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25802 === (4))){
var inst_25765 = (state_25801[(7)]);
var inst_25767 = (inst_25765 < cnt);
var state_25801__$1 = state_25801;
if(cljs.core.truth_(inst_25767)){
var statearr_25805_25832 = state_25801__$1;
(statearr_25805_25832[(1)] = (6));

} else {
var statearr_25806_25833 = state_25801__$1;
(statearr_25806_25833[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25802 === (15))){
var inst_25797 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
var statearr_25807_25834 = state_25801__$1;
(statearr_25807_25834[(2)] = inst_25797);

(statearr_25807_25834[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25802 === (13))){
var inst_25790 = cljs.core.async.close_BANG_(out);
var state_25801__$1 = state_25801;
var statearr_25808_25835 = state_25801__$1;
(statearr_25808_25835[(2)] = inst_25790);

(statearr_25808_25835[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25802 === (6))){
var state_25801__$1 = state_25801;
var statearr_25809_25836 = state_25801__$1;
(statearr_25809_25836[(2)] = null);

(statearr_25809_25836[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25802 === (3))){
var inst_25799 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25801__$1,inst_25799);
} else {
if((state_val_25802 === (12))){
var inst_25787 = (state_25801[(8)]);
var inst_25787__$1 = (state_25801[(2)]);
var inst_25788 = cljs.core.some(cljs.core.nil_QMARK_,inst_25787__$1);
var state_25801__$1 = (function (){var statearr_25810 = state_25801;
(statearr_25810[(8)] = inst_25787__$1);

return statearr_25810;
})();
if(cljs.core.truth_(inst_25788)){
var statearr_25811_25837 = state_25801__$1;
(statearr_25811_25837[(1)] = (13));

} else {
var statearr_25812_25838 = state_25801__$1;
(statearr_25812_25838[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25802 === (2))){
var inst_25764 = cljs.core.reset_BANG_(dctr,cnt);
var inst_25765 = (0);
var state_25801__$1 = (function (){var statearr_25813 = state_25801;
(statearr_25813[(7)] = inst_25765);

(statearr_25813[(9)] = inst_25764);

return statearr_25813;
})();
var statearr_25814_25839 = state_25801__$1;
(statearr_25814_25839[(2)] = null);

(statearr_25814_25839[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25802 === (11))){
var inst_25765 = (state_25801[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25801,(10),Object,null,(9));
var inst_25774 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25765) : chs__$1.call(null,inst_25765));
var inst_25775 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25765) : done.call(null,inst_25765));
var inst_25776 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25774,inst_25775);
var state_25801__$1 = state_25801;
var statearr_25815_25840 = state_25801__$1;
(statearr_25815_25840[(2)] = inst_25776);


cljs.core.async.impl.ioc_helpers.process_exception(state_25801__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_25802 === (9))){
var inst_25765 = (state_25801[(7)]);
var inst_25778 = (state_25801[(2)]);
var inst_25779 = (inst_25765 + (1));
var inst_25765__$1 = inst_25779;
var state_25801__$1 = (function (){var statearr_25816 = state_25801;
(statearr_25816[(7)] = inst_25765__$1);

(statearr_25816[(10)] = inst_25778);

return statearr_25816;
})();
var statearr_25817_25841 = state_25801__$1;
(statearr_25817_25841[(2)] = null);

(statearr_25817_25841[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25802 === (5))){
var inst_25785 = (state_25801[(2)]);
var state_25801__$1 = (function (){var statearr_25818 = state_25801;
(statearr_25818[(11)] = inst_25785);

return statearr_25818;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25801__$1,(12),dchan);
} else {
if((state_val_25802 === (14))){
var inst_25787 = (state_25801[(8)]);
var inst_25792 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25787);
var state_25801__$1 = state_25801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25801__$1,(16),out,inst_25792);
} else {
if((state_val_25802 === (16))){
var inst_25794 = (state_25801[(2)]);
var state_25801__$1 = (function (){var statearr_25819 = state_25801;
(statearr_25819[(12)] = inst_25794);

return statearr_25819;
})();
var statearr_25820_25842 = state_25801__$1;
(statearr_25820_25842[(2)] = null);

(statearr_25820_25842[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25802 === (10))){
var inst_25769 = (state_25801[(2)]);
var inst_25770 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_25801__$1 = (function (){var statearr_25821 = state_25801;
(statearr_25821[(13)] = inst_25769);

return statearr_25821;
})();
var statearr_25822_25843 = state_25801__$1;
(statearr_25822_25843[(2)] = inst_25770);


cljs.core.async.impl.ioc_helpers.process_exception(state_25801__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_25802 === (8))){
var inst_25783 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
var statearr_25823_25844 = state_25801__$1;
(statearr_25823_25844[(2)] = inst_25783);

(statearr_25823_25844[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24488__auto___25829,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24386__auto__,c__24488__auto___25829,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24387__auto__ = null;
var cljs$core$async$state_machine__24387__auto____0 = (function (){
var statearr_25824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25824[(0)] = cljs$core$async$state_machine__24387__auto__);

(statearr_25824[(1)] = (1));

return statearr_25824;
});
var cljs$core$async$state_machine__24387__auto____1 = (function (state_25801){
while(true){
var ret_value__24388__auto__ = (function (){try{while(true){
var result__24389__auto__ = switch__24386__auto__(state_25801);
if(cljs.core.keyword_identical_QMARK_(result__24389__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24389__auto__;
}
break;
}
}catch (e25825){if((e25825 instanceof Object)){
var ex__24390__auto__ = e25825;
var statearr_25826_25845 = state_25801;
(statearr_25826_25845[(5)] = ex__24390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25801);

return cljs.core.cst$kw$recur;
} else {
throw e25825;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24388__auto__,cljs.core.cst$kw$recur)){
var G__25846 = state_25801;
state_25801 = G__25846;
continue;
} else {
return ret_value__24388__auto__;
}
break;
}
});
cljs$core$async$state_machine__24387__auto__ = function(state_25801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24387__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24387__auto____1.call(this,state_25801);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24387__auto____0;
cljs$core$async$state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24387__auto____1;
return cljs$core$async$state_machine__24387__auto__;
})()
;})(switch__24386__auto__,c__24488__auto___25829,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24490__auto__ = (function (){var statearr_25827 = (f__24489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24489__auto__.cljs$core$IFn$_invoke$arity$0() : f__24489__auto__.call(null));
(statearr_25827[(6)] = c__24488__auto___25829);

return statearr_25827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24490__auto__);
});})(c__24488__auto___25829,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25849 = arguments.length;
switch (G__25849) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24488__auto___25903 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24488__auto___25903,out){
return (function (){
var f__24489__auto__ = (function (){var switch__24386__auto__ = ((function (c__24488__auto___25903,out){
return (function (state_25881){
var state_val_25882 = (state_25881[(1)]);
if((state_val_25882 === (7))){
var inst_25860 = (state_25881[(7)]);
var inst_25861 = (state_25881[(8)]);
var inst_25860__$1 = (state_25881[(2)]);
var inst_25861__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25860__$1,(0),null);
var inst_25862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25860__$1,(1),null);
var inst_25863 = (inst_25861__$1 == null);
var state_25881__$1 = (function (){var statearr_25883 = state_25881;
(statearr_25883[(7)] = inst_25860__$1);

(statearr_25883[(8)] = inst_25861__$1);

(statearr_25883[(9)] = inst_25862);

return statearr_25883;
})();
if(cljs.core.truth_(inst_25863)){
var statearr_25884_25904 = state_25881__$1;
(statearr_25884_25904[(1)] = (8));

} else {
var statearr_25885_25905 = state_25881__$1;
(statearr_25885_25905[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25882 === (1))){
var inst_25850 = cljs.core.vec(chs);
var inst_25851 = inst_25850;
var state_25881__$1 = (function (){var statearr_25886 = state_25881;
(statearr_25886[(10)] = inst_25851);

return statearr_25886;
})();
var statearr_25887_25906 = state_25881__$1;
(statearr_25887_25906[(2)] = null);

(statearr_25887_25906[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25882 === (4))){
var inst_25851 = (state_25881[(10)]);
var state_25881__$1 = state_25881;
return cljs.core.async.ioc_alts_BANG_(state_25881__$1,(7),inst_25851);
} else {
if((state_val_25882 === (6))){
var inst_25877 = (state_25881[(2)]);
var state_25881__$1 = state_25881;
var statearr_25888_25907 = state_25881__$1;
(statearr_25888_25907[(2)] = inst_25877);

(statearr_25888_25907[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25882 === (3))){
var inst_25879 = (state_25881[(2)]);
var state_25881__$1 = state_25881;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25881__$1,inst_25879);
} else {
if((state_val_25882 === (2))){
var inst_25851 = (state_25881[(10)]);
var inst_25853 = cljs.core.count(inst_25851);
var inst_25854 = (inst_25853 > (0));
var state_25881__$1 = state_25881;
if(cljs.core.truth_(inst_25854)){
var statearr_25890_25908 = state_25881__$1;
(statearr_25890_25908[(1)] = (4));

} else {
var statearr_25891_25909 = state_25881__$1;
(statearr_25891_25909[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25882 === (11))){
var inst_25851 = (state_25881[(10)]);
var inst_25870 = (state_25881[(2)]);
var tmp25889 = inst_25851;
var inst_25851__$1 = tmp25889;
var state_25881__$1 = (function (){var statearr_25892 = state_25881;
(statearr_25892[(10)] = inst_25851__$1);

(statearr_25892[(11)] = inst_25870);

return statearr_25892;
})();
var statearr_25893_25910 = state_25881__$1;
(statearr_25893_25910[(2)] = null);

(statearr_25893_25910[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25882 === (9))){
var inst_25861 = (state_25881[(8)]);
var state_25881__$1 = state_25881;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25881__$1,(11),out,inst_25861);
} else {
if((state_val_25882 === (5))){
var inst_25875 = cljs.core.async.close_BANG_(out);
var state_25881__$1 = state_25881;
var statearr_25894_25911 = state_25881__$1;
(statearr_25894_25911[(2)] = inst_25875);

(statearr_25894_25911[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25882 === (10))){
var inst_25873 = (state_25881[(2)]);
var state_25881__$1 = state_25881;
var statearr_25895_25912 = state_25881__$1;
(statearr_25895_25912[(2)] = inst_25873);

(statearr_25895_25912[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25882 === (8))){
var inst_25860 = (state_25881[(7)]);
var inst_25851 = (state_25881[(10)]);
var inst_25861 = (state_25881[(8)]);
var inst_25862 = (state_25881[(9)]);
var inst_25865 = (function (){var cs = inst_25851;
var vec__25856 = inst_25860;
var v = inst_25861;
var c = inst_25862;
return ((function (cs,vec__25856,v,c,inst_25860,inst_25851,inst_25861,inst_25862,state_val_25882,c__24488__auto___25903,out){
return (function (p1__25847_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25847_SHARP_);
});
;})(cs,vec__25856,v,c,inst_25860,inst_25851,inst_25861,inst_25862,state_val_25882,c__24488__auto___25903,out))
})();
var inst_25866 = cljs.core.filterv(inst_25865,inst_25851);
var inst_25851__$1 = inst_25866;
var state_25881__$1 = (function (){var statearr_25896 = state_25881;
(statearr_25896[(10)] = inst_25851__$1);

return statearr_25896;
})();
var statearr_25897_25913 = state_25881__$1;
(statearr_25897_25913[(2)] = null);

(statearr_25897_25913[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24488__auto___25903,out))
;
return ((function (switch__24386__auto__,c__24488__auto___25903,out){
return (function() {
var cljs$core$async$state_machine__24387__auto__ = null;
var cljs$core$async$state_machine__24387__auto____0 = (function (){
var statearr_25898 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25898[(0)] = cljs$core$async$state_machine__24387__auto__);

(statearr_25898[(1)] = (1));

return statearr_25898;
});
var cljs$core$async$state_machine__24387__auto____1 = (function (state_25881){
while(true){
var ret_value__24388__auto__ = (function (){try{while(true){
var result__24389__auto__ = switch__24386__auto__(state_25881);
if(cljs.core.keyword_identical_QMARK_(result__24389__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24389__auto__;
}
break;
}
}catch (e25899){if((e25899 instanceof Object)){
var ex__24390__auto__ = e25899;
var statearr_25900_25914 = state_25881;
(statearr_25900_25914[(5)] = ex__24390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25881);

return cljs.core.cst$kw$recur;
} else {
throw e25899;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24388__auto__,cljs.core.cst$kw$recur)){
var G__25915 = state_25881;
state_25881 = G__25915;
continue;
} else {
return ret_value__24388__auto__;
}
break;
}
});
cljs$core$async$state_machine__24387__auto__ = function(state_25881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24387__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24387__auto____1.call(this,state_25881);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24387__auto____0;
cljs$core$async$state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24387__auto____1;
return cljs$core$async$state_machine__24387__auto__;
})()
;})(switch__24386__auto__,c__24488__auto___25903,out))
})();
var state__24490__auto__ = (function (){var statearr_25901 = (f__24489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24489__auto__.cljs$core$IFn$_invoke$arity$0() : f__24489__auto__.call(null));
(statearr_25901[(6)] = c__24488__auto___25903);

return statearr_25901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24490__auto__);
});})(c__24488__auto___25903,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25917 = arguments.length;
switch (G__25917) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24488__auto___25962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24488__auto___25962,out){
return (function (){
var f__24489__auto__ = (function (){var switch__24386__auto__ = ((function (c__24488__auto___25962,out){
return (function (state_25941){
var state_val_25942 = (state_25941[(1)]);
if((state_val_25942 === (7))){
var inst_25923 = (state_25941[(7)]);
var inst_25923__$1 = (state_25941[(2)]);
var inst_25924 = (inst_25923__$1 == null);
var inst_25925 = cljs.core.not(inst_25924);
var state_25941__$1 = (function (){var statearr_25943 = state_25941;
(statearr_25943[(7)] = inst_25923__$1);

return statearr_25943;
})();
if(inst_25925){
var statearr_25944_25963 = state_25941__$1;
(statearr_25944_25963[(1)] = (8));

} else {
var statearr_25945_25964 = state_25941__$1;
(statearr_25945_25964[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25942 === (1))){
var inst_25918 = (0);
var state_25941__$1 = (function (){var statearr_25946 = state_25941;
(statearr_25946[(8)] = inst_25918);

return statearr_25946;
})();
var statearr_25947_25965 = state_25941__$1;
(statearr_25947_25965[(2)] = null);

(statearr_25947_25965[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25942 === (4))){
var state_25941__$1 = state_25941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25941__$1,(7),ch);
} else {
if((state_val_25942 === (6))){
var inst_25936 = (state_25941[(2)]);
var state_25941__$1 = state_25941;
var statearr_25948_25966 = state_25941__$1;
(statearr_25948_25966[(2)] = inst_25936);

(statearr_25948_25966[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25942 === (3))){
var inst_25938 = (state_25941[(2)]);
var inst_25939 = cljs.core.async.close_BANG_(out);
var state_25941__$1 = (function (){var statearr_25949 = state_25941;
(statearr_25949[(9)] = inst_25938);

return statearr_25949;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25941__$1,inst_25939);
} else {
if((state_val_25942 === (2))){
var inst_25918 = (state_25941[(8)]);
var inst_25920 = (inst_25918 < n);
var state_25941__$1 = state_25941;
if(cljs.core.truth_(inst_25920)){
var statearr_25950_25967 = state_25941__$1;
(statearr_25950_25967[(1)] = (4));

} else {
var statearr_25951_25968 = state_25941__$1;
(statearr_25951_25968[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25942 === (11))){
var inst_25918 = (state_25941[(8)]);
var inst_25928 = (state_25941[(2)]);
var inst_25929 = (inst_25918 + (1));
var inst_25918__$1 = inst_25929;
var state_25941__$1 = (function (){var statearr_25952 = state_25941;
(statearr_25952[(10)] = inst_25928);

(statearr_25952[(8)] = inst_25918__$1);

return statearr_25952;
})();
var statearr_25953_25969 = state_25941__$1;
(statearr_25953_25969[(2)] = null);

(statearr_25953_25969[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25942 === (9))){
var state_25941__$1 = state_25941;
var statearr_25954_25970 = state_25941__$1;
(statearr_25954_25970[(2)] = null);

(statearr_25954_25970[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25942 === (5))){
var state_25941__$1 = state_25941;
var statearr_25955_25971 = state_25941__$1;
(statearr_25955_25971[(2)] = null);

(statearr_25955_25971[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25942 === (10))){
var inst_25933 = (state_25941[(2)]);
var state_25941__$1 = state_25941;
var statearr_25956_25972 = state_25941__$1;
(statearr_25956_25972[(2)] = inst_25933);

(statearr_25956_25972[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25942 === (8))){
var inst_25923 = (state_25941[(7)]);
var state_25941__$1 = state_25941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25941__$1,(11),out,inst_25923);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24488__auto___25962,out))
;
return ((function (switch__24386__auto__,c__24488__auto___25962,out){
return (function() {
var cljs$core$async$state_machine__24387__auto__ = null;
var cljs$core$async$state_machine__24387__auto____0 = (function (){
var statearr_25957 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25957[(0)] = cljs$core$async$state_machine__24387__auto__);

(statearr_25957[(1)] = (1));

return statearr_25957;
});
var cljs$core$async$state_machine__24387__auto____1 = (function (state_25941){
while(true){
var ret_value__24388__auto__ = (function (){try{while(true){
var result__24389__auto__ = switch__24386__auto__(state_25941);
if(cljs.core.keyword_identical_QMARK_(result__24389__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24389__auto__;
}
break;
}
}catch (e25958){if((e25958 instanceof Object)){
var ex__24390__auto__ = e25958;
var statearr_25959_25973 = state_25941;
(statearr_25959_25973[(5)] = ex__24390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25941);

return cljs.core.cst$kw$recur;
} else {
throw e25958;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24388__auto__,cljs.core.cst$kw$recur)){
var G__25974 = state_25941;
state_25941 = G__25974;
continue;
} else {
return ret_value__24388__auto__;
}
break;
}
});
cljs$core$async$state_machine__24387__auto__ = function(state_25941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24387__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24387__auto____1.call(this,state_25941);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24387__auto____0;
cljs$core$async$state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24387__auto____1;
return cljs$core$async$state_machine__24387__auto__;
})()
;})(switch__24386__auto__,c__24488__auto___25962,out))
})();
var state__24490__auto__ = (function (){var statearr_25960 = (f__24489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24489__auto__.cljs$core$IFn$_invoke$arity$0() : f__24489__auto__.call(null));
(statearr_25960[(6)] = c__24488__auto___25962);

return statearr_25960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24490__auto__);
});})(c__24488__auto___25962,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25976 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25976 = (function (f,ch,meta25977){
this.f = f;
this.ch = ch;
this.meta25977 = meta25977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25978,meta25977__$1){
var self__ = this;
var _25978__$1 = this;
return (new cljs.core.async.t_cljs$core$async25976(self__.f,self__.ch,meta25977__$1));
});

cljs.core.async.t_cljs$core$async25976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25978){
var self__ = this;
var _25978__$1 = this;
return self__.meta25977;
});

cljs.core.async.t_cljs$core$async25976.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25976.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async25976.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async25976.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25976.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25979 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25979 = (function (f,ch,meta25977,_,fn1,meta25980){
this.f = f;
this.ch = ch;
this.meta25977 = meta25977;
this._ = _;
this.fn1 = fn1;
this.meta25980 = meta25980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25981,meta25980__$1){
var self__ = this;
var _25981__$1 = this;
return (new cljs.core.async.t_cljs$core$async25979(self__.f,self__.ch,self__.meta25977,self__._,self__.fn1,meta25980__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25981){
var self__ = this;
var _25981__$1 = this;
return self__.meta25980;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25975_SHARP_){
var G__25982 = (((p1__25975_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__25975_SHARP_) : self__.f.call(null,p1__25975_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__25982) : f1.call(null,G__25982));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25979.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25977,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async25976], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta25980], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25979.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25979";

cljs.core.async.t_cljs$core$async25979.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async/t_cljs$core$async25979");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25979 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25979(f__$1,ch__$1,meta25977__$1,___$2,fn1__$1,meta25980){
return (new cljs.core.async.t_cljs$core$async25979(f__$1,ch__$1,meta25977__$1,___$2,fn1__$1,meta25980));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25979(self__.f,self__.ch,self__.meta25977,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__11731__auto__ = ret;
if(cljs.core.truth_(and__11731__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__11731__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__25983 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25983) : self__.f.call(null,G__25983));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25976.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25976.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25977], null);
});

cljs.core.async.t_cljs$core$async25976.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25976";

cljs.core.async.t_cljs$core$async25976.cljs$lang$ctorPrWriter = (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async/t_cljs$core$async25976");
});

cljs.core.async.__GT_t_cljs$core$async25976 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25976(f__$1,ch__$1,meta25977){
return (new cljs.core.async.t_cljs$core$async25976(f__$1,ch__$1,meta25977));
});

}

return (new cljs.core.async.t_cljs$core$async25976(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25984 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25984 = (function (f,ch,meta25985){
this.f = f;
this.ch = ch;
this.meta25985 = meta25985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25986,meta25985__$1){
var self__ = this;
var _25986__$1 = this;
return (new cljs.core.async.t_cljs$core$async25984(self__.f,self__.ch,meta25985__$1));
});

cljs.core.async.t_cljs$core$async25984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25986){
var self__ = this;
var _25986__$1 = this;
return self__.meta25985;
});

cljs.core.async.t_cljs$core$async25984.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25984.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async25984.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25984.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25984.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25984.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async25984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25985], null);
});

cljs.core.async.t_cljs$core$async25984.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25984";

cljs.core.async.t_cljs$core$async25984.cljs$lang$ctorPrWriter = (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async/t_cljs$core$async25984");
});

cljs.core.async.__GT_t_cljs$core$async25984 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25984(f__$1,ch__$1,meta25985){
return (new cljs.core.async.t_cljs$core$async25984(f__$1,ch__$1,meta25985));
});

}

return (new cljs.core.async.t_cljs$core$async25984(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25987 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25987 = (function (p,ch,meta25988){
this.p = p;
this.ch = ch;
this.meta25988 = meta25988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25989,meta25988__$1){
var self__ = this;
var _25989__$1 = this;
return (new cljs.core.async.t_cljs$core$async25987(self__.p,self__.ch,meta25988__$1));
});

cljs.core.async.t_cljs$core$async25987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25989){
var self__ = this;
var _25989__$1 = this;
return self__.meta25988;
});

cljs.core.async.t_cljs$core$async25987.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25987.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async25987.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async25987.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25987.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25987.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25987.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25987.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25988], null);
});

cljs.core.async.t_cljs$core$async25987.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25987.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25987";

cljs.core.async.t_cljs$core$async25987.cljs$lang$ctorPrWriter = (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async/t_cljs$core$async25987");
});

cljs.core.async.__GT_t_cljs$core$async25987 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25987(p__$1,ch__$1,meta25988){
return (new cljs.core.async.t_cljs$core$async25987(p__$1,ch__$1,meta25988));
});

}

return (new cljs.core.async.t_cljs$core$async25987(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25991 = arguments.length;
switch (G__25991) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24488__auto___26031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24488__auto___26031,out){
return (function (){
var f__24489__auto__ = (function (){var switch__24386__auto__ = ((function (c__24488__auto___26031,out){
return (function (state_26012){
var state_val_26013 = (state_26012[(1)]);
if((state_val_26013 === (7))){
var inst_26008 = (state_26012[(2)]);
var state_26012__$1 = state_26012;
var statearr_26014_26032 = state_26012__$1;
(statearr_26014_26032[(2)] = inst_26008);

(statearr_26014_26032[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (1))){
var state_26012__$1 = state_26012;
var statearr_26015_26033 = state_26012__$1;
(statearr_26015_26033[(2)] = null);

(statearr_26015_26033[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (4))){
var inst_25994 = (state_26012[(7)]);
var inst_25994__$1 = (state_26012[(2)]);
var inst_25995 = (inst_25994__$1 == null);
var state_26012__$1 = (function (){var statearr_26016 = state_26012;
(statearr_26016[(7)] = inst_25994__$1);

return statearr_26016;
})();
if(cljs.core.truth_(inst_25995)){
var statearr_26017_26034 = state_26012__$1;
(statearr_26017_26034[(1)] = (5));

} else {
var statearr_26018_26035 = state_26012__$1;
(statearr_26018_26035[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (6))){
var inst_25994 = (state_26012[(7)]);
var inst_25999 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_25994) : p.call(null,inst_25994));
var state_26012__$1 = state_26012;
if(cljs.core.truth_(inst_25999)){
var statearr_26019_26036 = state_26012__$1;
(statearr_26019_26036[(1)] = (8));

} else {
var statearr_26020_26037 = state_26012__$1;
(statearr_26020_26037[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (3))){
var inst_26010 = (state_26012[(2)]);
var state_26012__$1 = state_26012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26012__$1,inst_26010);
} else {
if((state_val_26013 === (2))){
var state_26012__$1 = state_26012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26012__$1,(4),ch);
} else {
if((state_val_26013 === (11))){
var inst_26002 = (state_26012[(2)]);
var state_26012__$1 = state_26012;
var statearr_26021_26038 = state_26012__$1;
(statearr_26021_26038[(2)] = inst_26002);

(statearr_26021_26038[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (9))){
var state_26012__$1 = state_26012;
var statearr_26022_26039 = state_26012__$1;
(statearr_26022_26039[(2)] = null);

(statearr_26022_26039[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (5))){
var inst_25997 = cljs.core.async.close_BANG_(out);
var state_26012__$1 = state_26012;
var statearr_26023_26040 = state_26012__$1;
(statearr_26023_26040[(2)] = inst_25997);

(statearr_26023_26040[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (10))){
var inst_26005 = (state_26012[(2)]);
var state_26012__$1 = (function (){var statearr_26024 = state_26012;
(statearr_26024[(8)] = inst_26005);

return statearr_26024;
})();
var statearr_26025_26041 = state_26012__$1;
(statearr_26025_26041[(2)] = null);

(statearr_26025_26041[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (8))){
var inst_25994 = (state_26012[(7)]);
var state_26012__$1 = state_26012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26012__$1,(11),out,inst_25994);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24488__auto___26031,out))
;
return ((function (switch__24386__auto__,c__24488__auto___26031,out){
return (function() {
var cljs$core$async$state_machine__24387__auto__ = null;
var cljs$core$async$state_machine__24387__auto____0 = (function (){
var statearr_26026 = [null,null,null,null,null,null,null,null,null];
(statearr_26026[(0)] = cljs$core$async$state_machine__24387__auto__);

(statearr_26026[(1)] = (1));

return statearr_26026;
});
var cljs$core$async$state_machine__24387__auto____1 = (function (state_26012){
while(true){
var ret_value__24388__auto__ = (function (){try{while(true){
var result__24389__auto__ = switch__24386__auto__(state_26012);
if(cljs.core.keyword_identical_QMARK_(result__24389__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24389__auto__;
}
break;
}
}catch (e26027){if((e26027 instanceof Object)){
var ex__24390__auto__ = e26027;
var statearr_26028_26042 = state_26012;
(statearr_26028_26042[(5)] = ex__24390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26012);

return cljs.core.cst$kw$recur;
} else {
throw e26027;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24388__auto__,cljs.core.cst$kw$recur)){
var G__26043 = state_26012;
state_26012 = G__26043;
continue;
} else {
return ret_value__24388__auto__;
}
break;
}
});
cljs$core$async$state_machine__24387__auto__ = function(state_26012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24387__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24387__auto____1.call(this,state_26012);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24387__auto____0;
cljs$core$async$state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24387__auto____1;
return cljs$core$async$state_machine__24387__auto__;
})()
;})(switch__24386__auto__,c__24488__auto___26031,out))
})();
var state__24490__auto__ = (function (){var statearr_26029 = (f__24489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24489__auto__.cljs$core$IFn$_invoke$arity$0() : f__24489__auto__.call(null));
(statearr_26029[(6)] = c__24488__auto___26031);

return statearr_26029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24490__auto__);
});})(c__24488__auto___26031,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26045 = arguments.length;
switch (G__26045) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24488__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24488__auto__){
return (function (){
var f__24489__auto__ = (function (){var switch__24386__auto__ = ((function (c__24488__auto__){
return (function (state_26108){
var state_val_26109 = (state_26108[(1)]);
if((state_val_26109 === (7))){
var inst_26104 = (state_26108[(2)]);
var state_26108__$1 = state_26108;
var statearr_26110_26148 = state_26108__$1;
(statearr_26110_26148[(2)] = inst_26104);

(statearr_26110_26148[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26109 === (20))){
var inst_26074 = (state_26108[(7)]);
var inst_26085 = (state_26108[(2)]);
var inst_26086 = cljs.core.next(inst_26074);
var inst_26060 = inst_26086;
var inst_26061 = null;
var inst_26062 = (0);
var inst_26063 = (0);
var state_26108__$1 = (function (){var statearr_26111 = state_26108;
(statearr_26111[(8)] = inst_26060);

(statearr_26111[(9)] = inst_26061);

(statearr_26111[(10)] = inst_26085);

(statearr_26111[(11)] = inst_26062);

(statearr_26111[(12)] = inst_26063);

return statearr_26111;
})();
var statearr_26112_26149 = state_26108__$1;
(statearr_26112_26149[(2)] = null);

(statearr_26112_26149[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26109 === (1))){
var state_26108__$1 = state_26108;
var statearr_26113_26150 = state_26108__$1;
(statearr_26113_26150[(2)] = null);

(statearr_26113_26150[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26109 === (4))){
var inst_26049 = (state_26108[(13)]);
var inst_26049__$1 = (state_26108[(2)]);
var inst_26050 = (inst_26049__$1 == null);
var state_26108__$1 = (function (){var statearr_26114 = state_26108;
(statearr_26114[(13)] = inst_26049__$1);

return statearr_26114;
})();
if(cljs.core.truth_(inst_26050)){
var statearr_26115_26151 = state_26108__$1;
(statearr_26115_26151[(1)] = (5));

} else {
var statearr_26116_26152 = state_26108__$1;
(statearr_26116_26152[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26109 === (15))){
var state_26108__$1 = state_26108;
var statearr_26120_26153 = state_26108__$1;
(statearr_26120_26153[(2)] = null);

(statearr_26120_26153[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26109 === (21))){
var state_26108__$1 = state_26108;
var statearr_26121_26154 = state_26108__$1;
(statearr_26121_26154[(2)] = null);

(statearr_26121_26154[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26109 === (13))){
var inst_26060 = (state_26108[(8)]);
var inst_26061 = (state_26108[(9)]);
var inst_26062 = (state_26108[(11)]);
var inst_26063 = (state_26108[(12)]);
var inst_26070 = (state_26108[(2)]);
var inst_26071 = (inst_26063 + (1));
var tmp26117 = inst_26060;
var tmp26118 = inst_26061;
var tmp26119 = inst_26062;
var inst_26060__$1 = tmp26117;
var inst_26061__$1 = tmp26118;
var inst_26062__$1 = tmp26119;
var inst_26063__$1 = inst_26071;
var state_26108__$1 = (function (){var statearr_26122 = state_26108;
(statearr_26122[(8)] = inst_26060__$1);

(statearr_26122[(9)] = inst_26061__$1);

(statearr_26122[(14)] = inst_26070);

(statearr_26122[(11)] = inst_26062__$1);

(statearr_26122[(12)] = inst_26063__$1);

return statearr_26122;
})();
var statearr_26123_26155 = state_26108__$1;
(statearr_26123_26155[(2)] = null);

(statearr_26123_26155[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26109 === (22))){
var state_26108__$1 = state_26108;
var statearr_26124_26156 = state_26108__$1;
(statearr_26124_26156[(2)] = null);

(statearr_26124_26156[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26109 === (6))){
var inst_26049 = (state_26108[(13)]);
var inst_26058 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26049) : f.call(null,inst_26049));
var inst_26059 = cljs.core.seq(inst_26058);
var inst_26060 = inst_26059;
var inst_26061 = null;
var inst_26062 = (0);
var inst_26063 = (0);
var state_26108__$1 = (function (){var statearr_26125 = state_26108;
(statearr_26125[(8)] = inst_26060);

(statearr_26125[(9)] = inst_26061);

(statearr_26125[(11)] = inst_26062);

(statearr_26125[(12)] = inst_26063);

return statearr_26125;
})();
var statearr_26126_26157 = state_26108__$1;
(statearr_26126_26157[(2)] = null);

(statearr_26126_26157[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26109 === (17))){
var inst_26074 = (state_26108[(7)]);
var inst_26078 = cljs.core.chunk_first(inst_26074);
var inst_26079 = cljs.core.chunk_rest(inst_26074);
var inst_26080 = cljs.core.count(inst_26078);
var inst_26060 = inst_26079;
var inst_26061 = inst_26078;
var inst_26062 = inst_26080;
var inst_26063 = (0);
var state_26108__$1 = (function (){var statearr_26127 = state_26108;
(statearr_26127[(8)] = inst_26060);

(statearr_26127[(9)] = inst_26061);

(statearr_26127[(11)] = inst_26062);

(statearr_26127[(12)] = inst_26063);

return statearr_26127;
})();
var statearr_26128_26158 = state_26108__$1;
(statearr_26128_26158[(2)] = null);

(statearr_26128_26158[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26109 === (3))){
var inst_26106 = (state_26108[(2)]);
var state_26108__$1 = state_26108;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26108__$1,inst_26106);
} else {
if((state_val_26109 === (12))){
var inst_26094 = (state_26108[(2)]);
var state_26108__$1 = state_26108;
var statearr_26129_26159 = state_26108__$1;
(statearr_26129_26159[(2)] = inst_26094);

(statearr_26129_26159[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26109 === (2))){
var state_26108__$1 = state_26108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26108__$1,(4),in$);
} else {
if((state_val_26109 === (23))){
var inst_26102 = (state_26108[(2)]);
var state_26108__$1 = state_26108;
var statearr_26130_26160 = state_26108__$1;
(statearr_26130_26160[(2)] = inst_26102);

(statearr_26130_26160[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26109 === (19))){
var inst_26089 = (state_26108[(2)]);
var state_26108__$1 = state_26108;
var statearr_26131_26161 = state_26108__$1;
(statearr_26131_26161[(2)] = inst_26089);

(statearr_26131_26161[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26109 === (11))){
var inst_26060 = (state_26108[(8)]);
var inst_26074 = (state_26108[(7)]);
var inst_26074__$1 = cljs.core.seq(inst_26060);
var state_26108__$1 = (function (){var statearr_26132 = state_26108;
(statearr_26132[(7)] = inst_26074__$1);

return statearr_26132;
})();
if(inst_26074__$1){
var statearr_26133_26162 = state_26108__$1;
(statearr_26133_26162[(1)] = (14));

} else {
var statearr_26134_26163 = state_26108__$1;
(statearr_26134_26163[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26109 === (9))){
var inst_26096 = (state_26108[(2)]);
var inst_26097 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26108__$1 = (function (){var statearr_26135 = state_26108;
(statearr_26135[(15)] = inst_26096);

return statearr_26135;
})();
if(cljs.core.truth_(inst_26097)){
var statearr_26136_26164 = state_26108__$1;
(statearr_26136_26164[(1)] = (21));

} else {
var statearr_26137_26165 = state_26108__$1;
(statearr_26137_26165[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26109 === (5))){
var inst_26052 = cljs.core.async.close_BANG_(out);
var state_26108__$1 = state_26108;
var statearr_26138_26166 = state_26108__$1;
(statearr_26138_26166[(2)] = inst_26052);

(statearr_26138_26166[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26109 === (14))){
var inst_26074 = (state_26108[(7)]);
var inst_26076 = cljs.core.chunked_seq_QMARK_(inst_26074);
var state_26108__$1 = state_26108;
if(inst_26076){
var statearr_26139_26167 = state_26108__$1;
(statearr_26139_26167[(1)] = (17));

} else {
var statearr_26140_26168 = state_26108__$1;
(statearr_26140_26168[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26109 === (16))){
var inst_26092 = (state_26108[(2)]);
var state_26108__$1 = state_26108;
var statearr_26141_26169 = state_26108__$1;
(statearr_26141_26169[(2)] = inst_26092);

(statearr_26141_26169[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26109 === (10))){
var inst_26061 = (state_26108[(9)]);
var inst_26063 = (state_26108[(12)]);
var inst_26068 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26061,inst_26063);
var state_26108__$1 = state_26108;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26108__$1,(13),out,inst_26068);
} else {
if((state_val_26109 === (18))){
var inst_26074 = (state_26108[(7)]);
var inst_26083 = cljs.core.first(inst_26074);
var state_26108__$1 = state_26108;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26108__$1,(20),out,inst_26083);
} else {
if((state_val_26109 === (8))){
var inst_26062 = (state_26108[(11)]);
var inst_26063 = (state_26108[(12)]);
var inst_26065 = (inst_26063 < inst_26062);
var inst_26066 = inst_26065;
var state_26108__$1 = state_26108;
if(cljs.core.truth_(inst_26066)){
var statearr_26142_26170 = state_26108__$1;
(statearr_26142_26170[(1)] = (10));

} else {
var statearr_26143_26171 = state_26108__$1;
(statearr_26143_26171[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24488__auto__))
;
return ((function (switch__24386__auto__,c__24488__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24387__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24387__auto____0 = (function (){
var statearr_26144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26144[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24387__auto__);

(statearr_26144[(1)] = (1));

return statearr_26144;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24387__auto____1 = (function (state_26108){
while(true){
var ret_value__24388__auto__ = (function (){try{while(true){
var result__24389__auto__ = switch__24386__auto__(state_26108);
if(cljs.core.keyword_identical_QMARK_(result__24389__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24389__auto__;
}
break;
}
}catch (e26145){if((e26145 instanceof Object)){
var ex__24390__auto__ = e26145;
var statearr_26146_26172 = state_26108;
(statearr_26146_26172[(5)] = ex__24390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26108);

return cljs.core.cst$kw$recur;
} else {
throw e26145;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24388__auto__,cljs.core.cst$kw$recur)){
var G__26173 = state_26108;
state_26108 = G__26173;
continue;
} else {
return ret_value__24388__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24387__auto__ = function(state_26108){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24387__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24387__auto____1.call(this,state_26108);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24387__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24387__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24387__auto__;
})()
;})(switch__24386__auto__,c__24488__auto__))
})();
var state__24490__auto__ = (function (){var statearr_26147 = (f__24489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24489__auto__.cljs$core$IFn$_invoke$arity$0() : f__24489__auto__.call(null));
(statearr_26147[(6)] = c__24488__auto__);

return statearr_26147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24490__auto__);
});})(c__24488__auto__))
);

return c__24488__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26175 = arguments.length;
switch (G__26175) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26178 = arguments.length;
switch (G__26178) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26181 = arguments.length;
switch (G__26181) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24488__auto___26228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24488__auto___26228,out){
return (function (){
var f__24489__auto__ = (function (){var switch__24386__auto__ = ((function (c__24488__auto___26228,out){
return (function (state_26205){
var state_val_26206 = (state_26205[(1)]);
if((state_val_26206 === (7))){
var inst_26200 = (state_26205[(2)]);
var state_26205__$1 = state_26205;
var statearr_26207_26229 = state_26205__$1;
(statearr_26207_26229[(2)] = inst_26200);

(statearr_26207_26229[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26206 === (1))){
var inst_26182 = null;
var state_26205__$1 = (function (){var statearr_26208 = state_26205;
(statearr_26208[(7)] = inst_26182);

return statearr_26208;
})();
var statearr_26209_26230 = state_26205__$1;
(statearr_26209_26230[(2)] = null);

(statearr_26209_26230[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26206 === (4))){
var inst_26185 = (state_26205[(8)]);
var inst_26185__$1 = (state_26205[(2)]);
var inst_26186 = (inst_26185__$1 == null);
var inst_26187 = cljs.core.not(inst_26186);
var state_26205__$1 = (function (){var statearr_26210 = state_26205;
(statearr_26210[(8)] = inst_26185__$1);

return statearr_26210;
})();
if(inst_26187){
var statearr_26211_26231 = state_26205__$1;
(statearr_26211_26231[(1)] = (5));

} else {
var statearr_26212_26232 = state_26205__$1;
(statearr_26212_26232[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26206 === (6))){
var state_26205__$1 = state_26205;
var statearr_26213_26233 = state_26205__$1;
(statearr_26213_26233[(2)] = null);

(statearr_26213_26233[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26206 === (3))){
var inst_26202 = (state_26205[(2)]);
var inst_26203 = cljs.core.async.close_BANG_(out);
var state_26205__$1 = (function (){var statearr_26214 = state_26205;
(statearr_26214[(9)] = inst_26202);

return statearr_26214;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26205__$1,inst_26203);
} else {
if((state_val_26206 === (2))){
var state_26205__$1 = state_26205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26205__$1,(4),ch);
} else {
if((state_val_26206 === (11))){
var inst_26185 = (state_26205[(8)]);
var inst_26194 = (state_26205[(2)]);
var inst_26182 = inst_26185;
var state_26205__$1 = (function (){var statearr_26215 = state_26205;
(statearr_26215[(10)] = inst_26194);

(statearr_26215[(7)] = inst_26182);

return statearr_26215;
})();
var statearr_26216_26234 = state_26205__$1;
(statearr_26216_26234[(2)] = null);

(statearr_26216_26234[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26206 === (9))){
var inst_26185 = (state_26205[(8)]);
var state_26205__$1 = state_26205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26205__$1,(11),out,inst_26185);
} else {
if((state_val_26206 === (5))){
var inst_26185 = (state_26205[(8)]);
var inst_26182 = (state_26205[(7)]);
var inst_26189 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26185,inst_26182);
var state_26205__$1 = state_26205;
if(inst_26189){
var statearr_26218_26235 = state_26205__$1;
(statearr_26218_26235[(1)] = (8));

} else {
var statearr_26219_26236 = state_26205__$1;
(statearr_26219_26236[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26206 === (10))){
var inst_26197 = (state_26205[(2)]);
var state_26205__$1 = state_26205;
var statearr_26220_26237 = state_26205__$1;
(statearr_26220_26237[(2)] = inst_26197);

(statearr_26220_26237[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26206 === (8))){
var inst_26182 = (state_26205[(7)]);
var tmp26217 = inst_26182;
var inst_26182__$1 = tmp26217;
var state_26205__$1 = (function (){var statearr_26221 = state_26205;
(statearr_26221[(7)] = inst_26182__$1);

return statearr_26221;
})();
var statearr_26222_26238 = state_26205__$1;
(statearr_26222_26238[(2)] = null);

(statearr_26222_26238[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24488__auto___26228,out))
;
return ((function (switch__24386__auto__,c__24488__auto___26228,out){
return (function() {
var cljs$core$async$state_machine__24387__auto__ = null;
var cljs$core$async$state_machine__24387__auto____0 = (function (){
var statearr_26223 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26223[(0)] = cljs$core$async$state_machine__24387__auto__);

(statearr_26223[(1)] = (1));

return statearr_26223;
});
var cljs$core$async$state_machine__24387__auto____1 = (function (state_26205){
while(true){
var ret_value__24388__auto__ = (function (){try{while(true){
var result__24389__auto__ = switch__24386__auto__(state_26205);
if(cljs.core.keyword_identical_QMARK_(result__24389__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24389__auto__;
}
break;
}
}catch (e26224){if((e26224 instanceof Object)){
var ex__24390__auto__ = e26224;
var statearr_26225_26239 = state_26205;
(statearr_26225_26239[(5)] = ex__24390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26205);

return cljs.core.cst$kw$recur;
} else {
throw e26224;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24388__auto__,cljs.core.cst$kw$recur)){
var G__26240 = state_26205;
state_26205 = G__26240;
continue;
} else {
return ret_value__24388__auto__;
}
break;
}
});
cljs$core$async$state_machine__24387__auto__ = function(state_26205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24387__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24387__auto____1.call(this,state_26205);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24387__auto____0;
cljs$core$async$state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24387__auto____1;
return cljs$core$async$state_machine__24387__auto__;
})()
;})(switch__24386__auto__,c__24488__auto___26228,out))
})();
var state__24490__auto__ = (function (){var statearr_26226 = (f__24489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24489__auto__.cljs$core$IFn$_invoke$arity$0() : f__24489__auto__.call(null));
(statearr_26226[(6)] = c__24488__auto___26228);

return statearr_26226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24490__auto__);
});})(c__24488__auto___26228,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26242 = arguments.length;
switch (G__26242) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24488__auto___26308 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24488__auto___26308,out){
return (function (){
var f__24489__auto__ = (function (){var switch__24386__auto__ = ((function (c__24488__auto___26308,out){
return (function (state_26280){
var state_val_26281 = (state_26280[(1)]);
if((state_val_26281 === (7))){
var inst_26276 = (state_26280[(2)]);
var state_26280__$1 = state_26280;
var statearr_26282_26309 = state_26280__$1;
(statearr_26282_26309[(2)] = inst_26276);

(statearr_26282_26309[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26281 === (1))){
var inst_26243 = (new Array(n));
var inst_26244 = inst_26243;
var inst_26245 = (0);
var state_26280__$1 = (function (){var statearr_26283 = state_26280;
(statearr_26283[(7)] = inst_26245);

(statearr_26283[(8)] = inst_26244);

return statearr_26283;
})();
var statearr_26284_26310 = state_26280__$1;
(statearr_26284_26310[(2)] = null);

(statearr_26284_26310[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26281 === (4))){
var inst_26248 = (state_26280[(9)]);
var inst_26248__$1 = (state_26280[(2)]);
var inst_26249 = (inst_26248__$1 == null);
var inst_26250 = cljs.core.not(inst_26249);
var state_26280__$1 = (function (){var statearr_26285 = state_26280;
(statearr_26285[(9)] = inst_26248__$1);

return statearr_26285;
})();
if(inst_26250){
var statearr_26286_26311 = state_26280__$1;
(statearr_26286_26311[(1)] = (5));

} else {
var statearr_26287_26312 = state_26280__$1;
(statearr_26287_26312[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26281 === (15))){
var inst_26270 = (state_26280[(2)]);
var state_26280__$1 = state_26280;
var statearr_26288_26313 = state_26280__$1;
(statearr_26288_26313[(2)] = inst_26270);

(statearr_26288_26313[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26281 === (13))){
var state_26280__$1 = state_26280;
var statearr_26289_26314 = state_26280__$1;
(statearr_26289_26314[(2)] = null);

(statearr_26289_26314[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26281 === (6))){
var inst_26245 = (state_26280[(7)]);
var inst_26266 = (inst_26245 > (0));
var state_26280__$1 = state_26280;
if(cljs.core.truth_(inst_26266)){
var statearr_26290_26315 = state_26280__$1;
(statearr_26290_26315[(1)] = (12));

} else {
var statearr_26291_26316 = state_26280__$1;
(statearr_26291_26316[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26281 === (3))){
var inst_26278 = (state_26280[(2)]);
var state_26280__$1 = state_26280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26280__$1,inst_26278);
} else {
if((state_val_26281 === (12))){
var inst_26244 = (state_26280[(8)]);
var inst_26268 = cljs.core.vec(inst_26244);
var state_26280__$1 = state_26280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26280__$1,(15),out,inst_26268);
} else {
if((state_val_26281 === (2))){
var state_26280__$1 = state_26280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26280__$1,(4),ch);
} else {
if((state_val_26281 === (11))){
var inst_26260 = (state_26280[(2)]);
var inst_26261 = (new Array(n));
var inst_26244 = inst_26261;
var inst_26245 = (0);
var state_26280__$1 = (function (){var statearr_26292 = state_26280;
(statearr_26292[(7)] = inst_26245);

(statearr_26292[(8)] = inst_26244);

(statearr_26292[(10)] = inst_26260);

return statearr_26292;
})();
var statearr_26293_26317 = state_26280__$1;
(statearr_26293_26317[(2)] = null);

(statearr_26293_26317[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26281 === (9))){
var inst_26244 = (state_26280[(8)]);
var inst_26258 = cljs.core.vec(inst_26244);
var state_26280__$1 = state_26280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26280__$1,(11),out,inst_26258);
} else {
if((state_val_26281 === (5))){
var inst_26248 = (state_26280[(9)]);
var inst_26245 = (state_26280[(7)]);
var inst_26244 = (state_26280[(8)]);
var inst_26253 = (state_26280[(11)]);
var inst_26252 = (inst_26244[inst_26245] = inst_26248);
var inst_26253__$1 = (inst_26245 + (1));
var inst_26254 = (inst_26253__$1 < n);
var state_26280__$1 = (function (){var statearr_26294 = state_26280;
(statearr_26294[(12)] = inst_26252);

(statearr_26294[(11)] = inst_26253__$1);

return statearr_26294;
})();
if(cljs.core.truth_(inst_26254)){
var statearr_26295_26318 = state_26280__$1;
(statearr_26295_26318[(1)] = (8));

} else {
var statearr_26296_26319 = state_26280__$1;
(statearr_26296_26319[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26281 === (14))){
var inst_26273 = (state_26280[(2)]);
var inst_26274 = cljs.core.async.close_BANG_(out);
var state_26280__$1 = (function (){var statearr_26298 = state_26280;
(statearr_26298[(13)] = inst_26273);

return statearr_26298;
})();
var statearr_26299_26320 = state_26280__$1;
(statearr_26299_26320[(2)] = inst_26274);

(statearr_26299_26320[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26281 === (10))){
var inst_26264 = (state_26280[(2)]);
var state_26280__$1 = state_26280;
var statearr_26300_26321 = state_26280__$1;
(statearr_26300_26321[(2)] = inst_26264);

(statearr_26300_26321[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26281 === (8))){
var inst_26244 = (state_26280[(8)]);
var inst_26253 = (state_26280[(11)]);
var tmp26297 = inst_26244;
var inst_26244__$1 = tmp26297;
var inst_26245 = inst_26253;
var state_26280__$1 = (function (){var statearr_26301 = state_26280;
(statearr_26301[(7)] = inst_26245);

(statearr_26301[(8)] = inst_26244__$1);

return statearr_26301;
})();
var statearr_26302_26322 = state_26280__$1;
(statearr_26302_26322[(2)] = null);

(statearr_26302_26322[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24488__auto___26308,out))
;
return ((function (switch__24386__auto__,c__24488__auto___26308,out){
return (function() {
var cljs$core$async$state_machine__24387__auto__ = null;
var cljs$core$async$state_machine__24387__auto____0 = (function (){
var statearr_26303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26303[(0)] = cljs$core$async$state_machine__24387__auto__);

(statearr_26303[(1)] = (1));

return statearr_26303;
});
var cljs$core$async$state_machine__24387__auto____1 = (function (state_26280){
while(true){
var ret_value__24388__auto__ = (function (){try{while(true){
var result__24389__auto__ = switch__24386__auto__(state_26280);
if(cljs.core.keyword_identical_QMARK_(result__24389__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24389__auto__;
}
break;
}
}catch (e26304){if((e26304 instanceof Object)){
var ex__24390__auto__ = e26304;
var statearr_26305_26323 = state_26280;
(statearr_26305_26323[(5)] = ex__24390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26280);

return cljs.core.cst$kw$recur;
} else {
throw e26304;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24388__auto__,cljs.core.cst$kw$recur)){
var G__26324 = state_26280;
state_26280 = G__26324;
continue;
} else {
return ret_value__24388__auto__;
}
break;
}
});
cljs$core$async$state_machine__24387__auto__ = function(state_26280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24387__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24387__auto____1.call(this,state_26280);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24387__auto____0;
cljs$core$async$state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24387__auto____1;
return cljs$core$async$state_machine__24387__auto__;
})()
;})(switch__24386__auto__,c__24488__auto___26308,out))
})();
var state__24490__auto__ = (function (){var statearr_26306 = (f__24489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24489__auto__.cljs$core$IFn$_invoke$arity$0() : f__24489__auto__.call(null));
(statearr_26306[(6)] = c__24488__auto___26308);

return statearr_26306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24490__auto__);
});})(c__24488__auto___26308,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26326 = arguments.length;
switch (G__26326) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24488__auto___26396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24488__auto___26396,out){
return (function (){
var f__24489__auto__ = (function (){var switch__24386__auto__ = ((function (c__24488__auto___26396,out){
return (function (state_26368){
var state_val_26369 = (state_26368[(1)]);
if((state_val_26369 === (7))){
var inst_26364 = (state_26368[(2)]);
var state_26368__$1 = state_26368;
var statearr_26370_26397 = state_26368__$1;
(statearr_26370_26397[(2)] = inst_26364);

(statearr_26370_26397[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26369 === (1))){
var inst_26327 = [];
var inst_26328 = inst_26327;
var inst_26329 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_26368__$1 = (function (){var statearr_26371 = state_26368;
(statearr_26371[(7)] = inst_26328);

(statearr_26371[(8)] = inst_26329);

return statearr_26371;
})();
var statearr_26372_26398 = state_26368__$1;
(statearr_26372_26398[(2)] = null);

(statearr_26372_26398[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26369 === (4))){
var inst_26332 = (state_26368[(9)]);
var inst_26332__$1 = (state_26368[(2)]);
var inst_26333 = (inst_26332__$1 == null);
var inst_26334 = cljs.core.not(inst_26333);
var state_26368__$1 = (function (){var statearr_26373 = state_26368;
(statearr_26373[(9)] = inst_26332__$1);

return statearr_26373;
})();
if(inst_26334){
var statearr_26374_26399 = state_26368__$1;
(statearr_26374_26399[(1)] = (5));

} else {
var statearr_26375_26400 = state_26368__$1;
(statearr_26375_26400[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26369 === (15))){
var inst_26358 = (state_26368[(2)]);
var state_26368__$1 = state_26368;
var statearr_26376_26401 = state_26368__$1;
(statearr_26376_26401[(2)] = inst_26358);

(statearr_26376_26401[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26369 === (13))){
var state_26368__$1 = state_26368;
var statearr_26377_26402 = state_26368__$1;
(statearr_26377_26402[(2)] = null);

(statearr_26377_26402[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26369 === (6))){
var inst_26328 = (state_26368[(7)]);
var inst_26353 = inst_26328.length;
var inst_26354 = (inst_26353 > (0));
var state_26368__$1 = state_26368;
if(cljs.core.truth_(inst_26354)){
var statearr_26378_26403 = state_26368__$1;
(statearr_26378_26403[(1)] = (12));

} else {
var statearr_26379_26404 = state_26368__$1;
(statearr_26379_26404[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26369 === (3))){
var inst_26366 = (state_26368[(2)]);
var state_26368__$1 = state_26368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26368__$1,inst_26366);
} else {
if((state_val_26369 === (12))){
var inst_26328 = (state_26368[(7)]);
var inst_26356 = cljs.core.vec(inst_26328);
var state_26368__$1 = state_26368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26368__$1,(15),out,inst_26356);
} else {
if((state_val_26369 === (2))){
var state_26368__$1 = state_26368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26368__$1,(4),ch);
} else {
if((state_val_26369 === (11))){
var inst_26336 = (state_26368[(10)]);
var inst_26332 = (state_26368[(9)]);
var inst_26346 = (state_26368[(2)]);
var inst_26347 = [];
var inst_26348 = inst_26347.push(inst_26332);
var inst_26328 = inst_26347;
var inst_26329 = inst_26336;
var state_26368__$1 = (function (){var statearr_26380 = state_26368;
(statearr_26380[(11)] = inst_26346);

(statearr_26380[(12)] = inst_26348);

(statearr_26380[(7)] = inst_26328);

(statearr_26380[(8)] = inst_26329);

return statearr_26380;
})();
var statearr_26381_26405 = state_26368__$1;
(statearr_26381_26405[(2)] = null);

(statearr_26381_26405[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26369 === (9))){
var inst_26328 = (state_26368[(7)]);
var inst_26344 = cljs.core.vec(inst_26328);
var state_26368__$1 = state_26368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26368__$1,(11),out,inst_26344);
} else {
if((state_val_26369 === (5))){
var inst_26336 = (state_26368[(10)]);
var inst_26329 = (state_26368[(8)]);
var inst_26332 = (state_26368[(9)]);
var inst_26336__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26332) : f.call(null,inst_26332));
var inst_26337 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26336__$1,inst_26329);
var inst_26338 = cljs.core.keyword_identical_QMARK_(inst_26329,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_26339 = (inst_26337) || (inst_26338);
var state_26368__$1 = (function (){var statearr_26382 = state_26368;
(statearr_26382[(10)] = inst_26336__$1);

return statearr_26382;
})();
if(cljs.core.truth_(inst_26339)){
var statearr_26383_26406 = state_26368__$1;
(statearr_26383_26406[(1)] = (8));

} else {
var statearr_26384_26407 = state_26368__$1;
(statearr_26384_26407[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26369 === (14))){
var inst_26361 = (state_26368[(2)]);
var inst_26362 = cljs.core.async.close_BANG_(out);
var state_26368__$1 = (function (){var statearr_26386 = state_26368;
(statearr_26386[(13)] = inst_26361);

return statearr_26386;
})();
var statearr_26387_26408 = state_26368__$1;
(statearr_26387_26408[(2)] = inst_26362);

(statearr_26387_26408[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26369 === (10))){
var inst_26351 = (state_26368[(2)]);
var state_26368__$1 = state_26368;
var statearr_26388_26409 = state_26368__$1;
(statearr_26388_26409[(2)] = inst_26351);

(statearr_26388_26409[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26369 === (8))){
var inst_26328 = (state_26368[(7)]);
var inst_26336 = (state_26368[(10)]);
var inst_26332 = (state_26368[(9)]);
var inst_26341 = inst_26328.push(inst_26332);
var tmp26385 = inst_26328;
var inst_26328__$1 = tmp26385;
var inst_26329 = inst_26336;
var state_26368__$1 = (function (){var statearr_26389 = state_26368;
(statearr_26389[(7)] = inst_26328__$1);

(statearr_26389[(8)] = inst_26329);

(statearr_26389[(14)] = inst_26341);

return statearr_26389;
})();
var statearr_26390_26410 = state_26368__$1;
(statearr_26390_26410[(2)] = null);

(statearr_26390_26410[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24488__auto___26396,out))
;
return ((function (switch__24386__auto__,c__24488__auto___26396,out){
return (function() {
var cljs$core$async$state_machine__24387__auto__ = null;
var cljs$core$async$state_machine__24387__auto____0 = (function (){
var statearr_26391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26391[(0)] = cljs$core$async$state_machine__24387__auto__);

(statearr_26391[(1)] = (1));

return statearr_26391;
});
var cljs$core$async$state_machine__24387__auto____1 = (function (state_26368){
while(true){
var ret_value__24388__auto__ = (function (){try{while(true){
var result__24389__auto__ = switch__24386__auto__(state_26368);
if(cljs.core.keyword_identical_QMARK_(result__24389__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24389__auto__;
}
break;
}
}catch (e26392){if((e26392 instanceof Object)){
var ex__24390__auto__ = e26392;
var statearr_26393_26411 = state_26368;
(statearr_26393_26411[(5)] = ex__24390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26368);

return cljs.core.cst$kw$recur;
} else {
throw e26392;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24388__auto__,cljs.core.cst$kw$recur)){
var G__26412 = state_26368;
state_26368 = G__26412;
continue;
} else {
return ret_value__24388__auto__;
}
break;
}
});
cljs$core$async$state_machine__24387__auto__ = function(state_26368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24387__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24387__auto____1.call(this,state_26368);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24387__auto____0;
cljs$core$async$state_machine__24387__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24387__auto____1;
return cljs$core$async$state_machine__24387__auto__;
})()
;})(switch__24386__auto__,c__24488__auto___26396,out))
})();
var state__24490__auto__ = (function (){var statearr_26394 = (f__24489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24489__auto__.cljs$core$IFn$_invoke$arity$0() : f__24489__auto__.call(null));
(statearr_26394[(6)] = c__24488__auto___26396);

return statearr_26394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24490__auto__);
});})(c__24488__auto___26396,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

