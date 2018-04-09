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
var G__24543 = arguments.length;
switch (G__24543) {
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
if(typeof cljs.core.async.t_cljs$core$async24544 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24544 = (function (f,blockable,meta24545){
this.f = f;
this.blockable = blockable;
this.meta24545 = meta24545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24546,meta24545__$1){
var self__ = this;
var _24546__$1 = this;
return (new cljs.core.async.t_cljs$core$async24544(self__.f,self__.blockable,meta24545__$1));
});

cljs.core.async.t_cljs$core$async24544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24546){
var self__ = this;
var _24546__$1 = this;
return self__.meta24545;
});

cljs.core.async.t_cljs$core$async24544.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24544.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24544.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24544.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta24545], null);
});

cljs.core.async.t_cljs$core$async24544.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24544";

cljs.core.async.t_cljs$core$async24544.cljs$lang$ctorPrWriter = (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async/t_cljs$core$async24544");
});

cljs.core.async.__GT_t_cljs$core$async24544 = (function cljs$core$async$__GT_t_cljs$core$async24544(f__$1,blockable__$1,meta24545){
return (new cljs.core.async.t_cljs$core$async24544(f__$1,blockable__$1,meta24545));
});

}

return (new cljs.core.async.t_cljs$core$async24544(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24550 = arguments.length;
switch (G__24550) {
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
var G__24553 = arguments.length;
switch (G__24553) {
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
var G__24556 = arguments.length;
switch (G__24556) {
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
var val_24558 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24558) : fn1.call(null,val_24558));
} else {
cljs.core.async.impl.dispatch.run(((function (val_24558,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24558) : fn1.call(null,val_24558));
});})(val_24558,ret))
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
var G__24560 = arguments.length;
switch (G__24560) {
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
var n__12788__auto___24562 = n;
var x_24563 = (0);
while(true){
if((x_24563 < n__12788__auto___24562)){
(a[x_24563] = (0));

var G__24564 = (x_24563 + (1));
x_24563 = G__24564;
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

var G__24565 = (i + (1));
i = G__24565;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async24566 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24566 = (function (flag,meta24567){
this.flag = flag;
this.meta24567 = meta24567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24568,meta24567__$1){
var self__ = this;
var _24568__$1 = this;
return (new cljs.core.async.t_cljs$core$async24566(self__.flag,meta24567__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24568){
var self__ = this;
var _24568__$1 = this;
return self__.meta24567;
});})(flag))
;

cljs.core.async.t_cljs$core$async24566.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24566.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24566.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24566.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24566.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta24567], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24566.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24566";

cljs.core.async.t_cljs$core$async24566.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async/t_cljs$core$async24566");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24566 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24566(flag__$1,meta24567){
return (new cljs.core.async.t_cljs$core$async24566(flag__$1,meta24567));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24566(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24569 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24569 = (function (flag,cb,meta24570){
this.flag = flag;
this.cb = cb;
this.meta24570 = meta24570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24571,meta24570__$1){
var self__ = this;
var _24571__$1 = this;
return (new cljs.core.async.t_cljs$core$async24569(self__.flag,self__.cb,meta24570__$1));
});

cljs.core.async.t_cljs$core$async24569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24571){
var self__ = this;
var _24571__$1 = this;
return self__.meta24570;
});

cljs.core.async.t_cljs$core$async24569.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24569.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async24569.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24569.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta24570], null);
});

cljs.core.async.t_cljs$core$async24569.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24569";

cljs.core.async.t_cljs$core$async24569.cljs$lang$ctorPrWriter = (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async/t_cljs$core$async24569");
});

cljs.core.async.__GT_t_cljs$core$async24569 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24569(flag__$1,cb__$1,meta24570){
return (new cljs.core.async.t_cljs$core$async24569(flag__$1,cb__$1,meta24570));
});

}

return (new cljs.core.async.t_cljs$core$async24569(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24572_SHARP_){
var G__24574 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24572_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24574) : fret.call(null,G__24574));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24573_SHARP_){
var G__24575 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24573_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24575) : fret.call(null,G__24575));
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
var G__24576 = (i + (1));
i = G__24576;
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
var len__13022__auto___24582 = arguments.length;
var i__13023__auto___24583 = (0);
while(true){
if((i__13023__auto___24583 < len__13022__auto___24582)){
args__13029__auto__.push((arguments[i__13023__auto___24583]));

var G__24584 = (i__13023__auto___24583 + (1));
i__13023__auto___24583 = G__24584;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((1) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__13030__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24579){
var map__24580 = p__24579;
var map__24580__$1 = ((((!((map__24580 == null)))?((((map__24580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24580):map__24580);
var opts = map__24580__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24577){
var G__24578 = cljs.core.first(seq24577);
var seq24577__$1 = cljs.core.next(seq24577);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24578,seq24577__$1);
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
var G__24586 = arguments.length;
switch (G__24586) {
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
var c__24483__auto___24632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24483__auto___24632){
return (function (){
var f__24484__auto__ = (function (){var switch__24381__auto__ = ((function (c__24483__auto___24632){
return (function (state_24610){
var state_val_24611 = (state_24610[(1)]);
if((state_val_24611 === (7))){
var inst_24606 = (state_24610[(2)]);
var state_24610__$1 = state_24610;
var statearr_24612_24633 = state_24610__$1;
(statearr_24612_24633[(2)] = inst_24606);

(statearr_24612_24633[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24611 === (1))){
var state_24610__$1 = state_24610;
var statearr_24613_24634 = state_24610__$1;
(statearr_24613_24634[(2)] = null);

(statearr_24613_24634[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24611 === (4))){
var inst_24589 = (state_24610[(7)]);
var inst_24589__$1 = (state_24610[(2)]);
var inst_24590 = (inst_24589__$1 == null);
var state_24610__$1 = (function (){var statearr_24614 = state_24610;
(statearr_24614[(7)] = inst_24589__$1);

return statearr_24614;
})();
if(cljs.core.truth_(inst_24590)){
var statearr_24615_24635 = state_24610__$1;
(statearr_24615_24635[(1)] = (5));

} else {
var statearr_24616_24636 = state_24610__$1;
(statearr_24616_24636[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24611 === (13))){
var state_24610__$1 = state_24610;
var statearr_24617_24637 = state_24610__$1;
(statearr_24617_24637[(2)] = null);

(statearr_24617_24637[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24611 === (6))){
var inst_24589 = (state_24610[(7)]);
var state_24610__$1 = state_24610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24610__$1,(11),to,inst_24589);
} else {
if((state_val_24611 === (3))){
var inst_24608 = (state_24610[(2)]);
var state_24610__$1 = state_24610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24610__$1,inst_24608);
} else {
if((state_val_24611 === (12))){
var state_24610__$1 = state_24610;
var statearr_24618_24638 = state_24610__$1;
(statearr_24618_24638[(2)] = null);

(statearr_24618_24638[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24611 === (2))){
var state_24610__$1 = state_24610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24610__$1,(4),from);
} else {
if((state_val_24611 === (11))){
var inst_24599 = (state_24610[(2)]);
var state_24610__$1 = state_24610;
if(cljs.core.truth_(inst_24599)){
var statearr_24619_24639 = state_24610__$1;
(statearr_24619_24639[(1)] = (12));

} else {
var statearr_24620_24640 = state_24610__$1;
(statearr_24620_24640[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24611 === (9))){
var state_24610__$1 = state_24610;
var statearr_24621_24641 = state_24610__$1;
(statearr_24621_24641[(2)] = null);

(statearr_24621_24641[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24611 === (5))){
var state_24610__$1 = state_24610;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24622_24642 = state_24610__$1;
(statearr_24622_24642[(1)] = (8));

} else {
var statearr_24623_24643 = state_24610__$1;
(statearr_24623_24643[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24611 === (14))){
var inst_24604 = (state_24610[(2)]);
var state_24610__$1 = state_24610;
var statearr_24624_24644 = state_24610__$1;
(statearr_24624_24644[(2)] = inst_24604);

(statearr_24624_24644[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24611 === (10))){
var inst_24596 = (state_24610[(2)]);
var state_24610__$1 = state_24610;
var statearr_24625_24645 = state_24610__$1;
(statearr_24625_24645[(2)] = inst_24596);

(statearr_24625_24645[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24611 === (8))){
var inst_24593 = cljs.core.async.close_BANG_(to);
var state_24610__$1 = state_24610;
var statearr_24626_24646 = state_24610__$1;
(statearr_24626_24646[(2)] = inst_24593);

(statearr_24626_24646[(1)] = (10));


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
});})(c__24483__auto___24632))
;
return ((function (switch__24381__auto__,c__24483__auto___24632){
return (function() {
var cljs$core$async$state_machine__24382__auto__ = null;
var cljs$core$async$state_machine__24382__auto____0 = (function (){
var statearr_24627 = [null,null,null,null,null,null,null,null];
(statearr_24627[(0)] = cljs$core$async$state_machine__24382__auto__);

(statearr_24627[(1)] = (1));

return statearr_24627;
});
var cljs$core$async$state_machine__24382__auto____1 = (function (state_24610){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__(state_24610);
if(cljs.core.keyword_identical_QMARK_(result__24384__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e24628){if((e24628 instanceof Object)){
var ex__24385__auto__ = e24628;
var statearr_24629_24647 = state_24610;
(statearr_24629_24647[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24610);

return cljs.core.cst$kw$recur;
} else {
throw e24628;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24383__auto__,cljs.core.cst$kw$recur)){
var G__24648 = state_24610;
state_24610 = G__24648;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$state_machine__24382__auto__ = function(state_24610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24382__auto____1.call(this,state_24610);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24382__auto____0;
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24382__auto____1;
return cljs$core$async$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24483__auto___24632))
})();
var state__24485__auto__ = (function (){var statearr_24630 = (f__24484__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24484__auto__.cljs$core$IFn$_invoke$arity$0() : f__24484__auto__.call(null));
(statearr_24630[(6)] = c__24483__auto___24632);

return statearr_24630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24485__auto__);
});})(c__24483__auto___24632))
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
return (function (p__24649){
var vec__24650 = p__24649;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24650,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24650,(1),null);
var job = vec__24650;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__24483__auto___24821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24483__auto___24821,res,vec__24650,v,p,job,jobs,results){
return (function (){
var f__24484__auto__ = (function (){var switch__24381__auto__ = ((function (c__24483__auto___24821,res,vec__24650,v,p,job,jobs,results){
return (function (state_24657){
var state_val_24658 = (state_24657[(1)]);
if((state_val_24658 === (1))){
var state_24657__$1 = state_24657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24657__$1,(2),res,v);
} else {
if((state_val_24658 === (2))){
var inst_24654 = (state_24657[(2)]);
var inst_24655 = cljs.core.async.close_BANG_(res);
var state_24657__$1 = (function (){var statearr_24659 = state_24657;
(statearr_24659[(7)] = inst_24654);

return statearr_24659;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24657__$1,inst_24655);
} else {
return null;
}
}
});})(c__24483__auto___24821,res,vec__24650,v,p,job,jobs,results))
;
return ((function (switch__24381__auto__,c__24483__auto___24821,res,vec__24650,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0 = (function (){
var statearr_24660 = [null,null,null,null,null,null,null,null];
(statearr_24660[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__);

(statearr_24660[(1)] = (1));

return statearr_24660;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1 = (function (state_24657){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__(state_24657);
if(cljs.core.keyword_identical_QMARK_(result__24384__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e24661){if((e24661 instanceof Object)){
var ex__24385__auto__ = e24661;
var statearr_24662_24822 = state_24657;
(statearr_24662_24822[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24657);

return cljs.core.cst$kw$recur;
} else {
throw e24661;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24383__auto__,cljs.core.cst$kw$recur)){
var G__24823 = state_24657;
state_24657 = G__24823;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__ = function(state_24657){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1.call(this,state_24657);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24483__auto___24821,res,vec__24650,v,p,job,jobs,results))
})();
var state__24485__auto__ = (function (){var statearr_24663 = (f__24484__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24484__auto__.cljs$core$IFn$_invoke$arity$0() : f__24484__auto__.call(null));
(statearr_24663[(6)] = c__24483__auto___24821);

return statearr_24663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24485__auto__);
});})(c__24483__auto___24821,res,vec__24650,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24664){
var vec__24665 = p__24664;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24665,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24665,(1),null);
var job = vec__24665;
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
var n__12788__auto___24824 = n;
var __24825 = (0);
while(true){
if((__24825 < n__12788__auto___24824)){
var G__24668_24826 = type;
var G__24668_24827__$1 = (((G__24668_24826 instanceof cljs.core.Keyword))?G__24668_24826.fqn:null);
switch (G__24668_24827__$1) {
case "compute":
var c__24483__auto___24829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24825,c__24483__auto___24829,G__24668_24826,G__24668_24827__$1,n__12788__auto___24824,jobs,results,process,async){
return (function (){
var f__24484__auto__ = (function (){var switch__24381__auto__ = ((function (__24825,c__24483__auto___24829,G__24668_24826,G__24668_24827__$1,n__12788__auto___24824,jobs,results,process,async){
return (function (state_24681){
var state_val_24682 = (state_24681[(1)]);
if((state_val_24682 === (1))){
var state_24681__$1 = state_24681;
var statearr_24683_24830 = state_24681__$1;
(statearr_24683_24830[(2)] = null);

(statearr_24683_24830[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24682 === (2))){
var state_24681__$1 = state_24681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24681__$1,(4),jobs);
} else {
if((state_val_24682 === (3))){
var inst_24679 = (state_24681[(2)]);
var state_24681__$1 = state_24681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24681__$1,inst_24679);
} else {
if((state_val_24682 === (4))){
var inst_24671 = (state_24681[(2)]);
var inst_24672 = process(inst_24671);
var state_24681__$1 = state_24681;
if(cljs.core.truth_(inst_24672)){
var statearr_24684_24831 = state_24681__$1;
(statearr_24684_24831[(1)] = (5));

} else {
var statearr_24685_24832 = state_24681__$1;
(statearr_24685_24832[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24682 === (5))){
var state_24681__$1 = state_24681;
var statearr_24686_24833 = state_24681__$1;
(statearr_24686_24833[(2)] = null);

(statearr_24686_24833[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24682 === (6))){
var state_24681__$1 = state_24681;
var statearr_24687_24834 = state_24681__$1;
(statearr_24687_24834[(2)] = null);

(statearr_24687_24834[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24682 === (7))){
var inst_24677 = (state_24681[(2)]);
var state_24681__$1 = state_24681;
var statearr_24688_24835 = state_24681__$1;
(statearr_24688_24835[(2)] = inst_24677);

(statearr_24688_24835[(1)] = (3));


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
});})(__24825,c__24483__auto___24829,G__24668_24826,G__24668_24827__$1,n__12788__auto___24824,jobs,results,process,async))
;
return ((function (__24825,switch__24381__auto__,c__24483__auto___24829,G__24668_24826,G__24668_24827__$1,n__12788__auto___24824,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0 = (function (){
var statearr_24689 = [null,null,null,null,null,null,null];
(statearr_24689[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__);

(statearr_24689[(1)] = (1));

return statearr_24689;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1 = (function (state_24681){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__(state_24681);
if(cljs.core.keyword_identical_QMARK_(result__24384__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e24690){if((e24690 instanceof Object)){
var ex__24385__auto__ = e24690;
var statearr_24691_24836 = state_24681;
(statearr_24691_24836[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24681);

return cljs.core.cst$kw$recur;
} else {
throw e24690;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24383__auto__,cljs.core.cst$kw$recur)){
var G__24837 = state_24681;
state_24681 = G__24837;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__ = function(state_24681){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1.call(this,state_24681);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__;
})()
;})(__24825,switch__24381__auto__,c__24483__auto___24829,G__24668_24826,G__24668_24827__$1,n__12788__auto___24824,jobs,results,process,async))
})();
var state__24485__auto__ = (function (){var statearr_24692 = (f__24484__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24484__auto__.cljs$core$IFn$_invoke$arity$0() : f__24484__auto__.call(null));
(statearr_24692[(6)] = c__24483__auto___24829);

return statearr_24692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24485__auto__);
});})(__24825,c__24483__auto___24829,G__24668_24826,G__24668_24827__$1,n__12788__auto___24824,jobs,results,process,async))
);


break;
case "async":
var c__24483__auto___24838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24825,c__24483__auto___24838,G__24668_24826,G__24668_24827__$1,n__12788__auto___24824,jobs,results,process,async){
return (function (){
var f__24484__auto__ = (function (){var switch__24381__auto__ = ((function (__24825,c__24483__auto___24838,G__24668_24826,G__24668_24827__$1,n__12788__auto___24824,jobs,results,process,async){
return (function (state_24705){
var state_val_24706 = (state_24705[(1)]);
if((state_val_24706 === (1))){
var state_24705__$1 = state_24705;
var statearr_24707_24839 = state_24705__$1;
(statearr_24707_24839[(2)] = null);

(statearr_24707_24839[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24706 === (2))){
var state_24705__$1 = state_24705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24705__$1,(4),jobs);
} else {
if((state_val_24706 === (3))){
var inst_24703 = (state_24705[(2)]);
var state_24705__$1 = state_24705;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24705__$1,inst_24703);
} else {
if((state_val_24706 === (4))){
var inst_24695 = (state_24705[(2)]);
var inst_24696 = async(inst_24695);
var state_24705__$1 = state_24705;
if(cljs.core.truth_(inst_24696)){
var statearr_24708_24840 = state_24705__$1;
(statearr_24708_24840[(1)] = (5));

} else {
var statearr_24709_24841 = state_24705__$1;
(statearr_24709_24841[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24706 === (5))){
var state_24705__$1 = state_24705;
var statearr_24710_24842 = state_24705__$1;
(statearr_24710_24842[(2)] = null);

(statearr_24710_24842[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24706 === (6))){
var state_24705__$1 = state_24705;
var statearr_24711_24843 = state_24705__$1;
(statearr_24711_24843[(2)] = null);

(statearr_24711_24843[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24706 === (7))){
var inst_24701 = (state_24705[(2)]);
var state_24705__$1 = state_24705;
var statearr_24712_24844 = state_24705__$1;
(statearr_24712_24844[(2)] = inst_24701);

(statearr_24712_24844[(1)] = (3));


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
});})(__24825,c__24483__auto___24838,G__24668_24826,G__24668_24827__$1,n__12788__auto___24824,jobs,results,process,async))
;
return ((function (__24825,switch__24381__auto__,c__24483__auto___24838,G__24668_24826,G__24668_24827__$1,n__12788__auto___24824,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0 = (function (){
var statearr_24713 = [null,null,null,null,null,null,null];
(statearr_24713[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__);

(statearr_24713[(1)] = (1));

return statearr_24713;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1 = (function (state_24705){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__(state_24705);
if(cljs.core.keyword_identical_QMARK_(result__24384__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e24714){if((e24714 instanceof Object)){
var ex__24385__auto__ = e24714;
var statearr_24715_24845 = state_24705;
(statearr_24715_24845[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24705);

return cljs.core.cst$kw$recur;
} else {
throw e24714;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24383__auto__,cljs.core.cst$kw$recur)){
var G__24846 = state_24705;
state_24705 = G__24846;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__ = function(state_24705){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1.call(this,state_24705);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__;
})()
;})(__24825,switch__24381__auto__,c__24483__auto___24838,G__24668_24826,G__24668_24827__$1,n__12788__auto___24824,jobs,results,process,async))
})();
var state__24485__auto__ = (function (){var statearr_24716 = (f__24484__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24484__auto__.cljs$core$IFn$_invoke$arity$0() : f__24484__auto__.call(null));
(statearr_24716[(6)] = c__24483__auto___24838);

return statearr_24716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24485__auto__);
});})(__24825,c__24483__auto___24838,G__24668_24826,G__24668_24827__$1,n__12788__auto___24824,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24668_24827__$1)].join('')));

}

var G__24847 = (__24825 + (1));
__24825 = G__24847;
continue;
} else {
}
break;
}

var c__24483__auto___24848 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24483__auto___24848,jobs,results,process,async){
return (function (){
var f__24484__auto__ = (function (){var switch__24381__auto__ = ((function (c__24483__auto___24848,jobs,results,process,async){
return (function (state_24738){
var state_val_24739 = (state_24738[(1)]);
if((state_val_24739 === (1))){
var state_24738__$1 = state_24738;
var statearr_24740_24849 = state_24738__$1;
(statearr_24740_24849[(2)] = null);

(statearr_24740_24849[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24739 === (2))){
var state_24738__$1 = state_24738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24738__$1,(4),from);
} else {
if((state_val_24739 === (3))){
var inst_24736 = (state_24738[(2)]);
var state_24738__$1 = state_24738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24738__$1,inst_24736);
} else {
if((state_val_24739 === (4))){
var inst_24719 = (state_24738[(7)]);
var inst_24719__$1 = (state_24738[(2)]);
var inst_24720 = (inst_24719__$1 == null);
var state_24738__$1 = (function (){var statearr_24741 = state_24738;
(statearr_24741[(7)] = inst_24719__$1);

return statearr_24741;
})();
if(cljs.core.truth_(inst_24720)){
var statearr_24742_24850 = state_24738__$1;
(statearr_24742_24850[(1)] = (5));

} else {
var statearr_24743_24851 = state_24738__$1;
(statearr_24743_24851[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24739 === (5))){
var inst_24722 = cljs.core.async.close_BANG_(jobs);
var state_24738__$1 = state_24738;
var statearr_24744_24852 = state_24738__$1;
(statearr_24744_24852[(2)] = inst_24722);

(statearr_24744_24852[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24739 === (6))){
var inst_24724 = (state_24738[(8)]);
var inst_24719 = (state_24738[(7)]);
var inst_24724__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24725 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24726 = [inst_24719,inst_24724__$1];
var inst_24727 = (new cljs.core.PersistentVector(null,2,(5),inst_24725,inst_24726,null));
var state_24738__$1 = (function (){var statearr_24745 = state_24738;
(statearr_24745[(8)] = inst_24724__$1);

return statearr_24745;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24738__$1,(8),jobs,inst_24727);
} else {
if((state_val_24739 === (7))){
var inst_24734 = (state_24738[(2)]);
var state_24738__$1 = state_24738;
var statearr_24746_24853 = state_24738__$1;
(statearr_24746_24853[(2)] = inst_24734);

(statearr_24746_24853[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24739 === (8))){
var inst_24724 = (state_24738[(8)]);
var inst_24729 = (state_24738[(2)]);
var state_24738__$1 = (function (){var statearr_24747 = state_24738;
(statearr_24747[(9)] = inst_24729);

return statearr_24747;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24738__$1,(9),results,inst_24724);
} else {
if((state_val_24739 === (9))){
var inst_24731 = (state_24738[(2)]);
var state_24738__$1 = (function (){var statearr_24748 = state_24738;
(statearr_24748[(10)] = inst_24731);

return statearr_24748;
})();
var statearr_24749_24854 = state_24738__$1;
(statearr_24749_24854[(2)] = null);

(statearr_24749_24854[(1)] = (2));


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
});})(c__24483__auto___24848,jobs,results,process,async))
;
return ((function (switch__24381__auto__,c__24483__auto___24848,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0 = (function (){
var statearr_24750 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24750[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__);

(statearr_24750[(1)] = (1));

return statearr_24750;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1 = (function (state_24738){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__(state_24738);
if(cljs.core.keyword_identical_QMARK_(result__24384__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e24751){if((e24751 instanceof Object)){
var ex__24385__auto__ = e24751;
var statearr_24752_24855 = state_24738;
(statearr_24752_24855[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24738);

return cljs.core.cst$kw$recur;
} else {
throw e24751;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24383__auto__,cljs.core.cst$kw$recur)){
var G__24856 = state_24738;
state_24738 = G__24856;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__ = function(state_24738){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1.call(this,state_24738);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24483__auto___24848,jobs,results,process,async))
})();
var state__24485__auto__ = (function (){var statearr_24753 = (f__24484__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24484__auto__.cljs$core$IFn$_invoke$arity$0() : f__24484__auto__.call(null));
(statearr_24753[(6)] = c__24483__auto___24848);

return statearr_24753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24485__auto__);
});})(c__24483__auto___24848,jobs,results,process,async))
);


var c__24483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24483__auto__,jobs,results,process,async){
return (function (){
var f__24484__auto__ = (function (){var switch__24381__auto__ = ((function (c__24483__auto__,jobs,results,process,async){
return (function (state_24791){
var state_val_24792 = (state_24791[(1)]);
if((state_val_24792 === (7))){
var inst_24787 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
var statearr_24793_24857 = state_24791__$1;
(statearr_24793_24857[(2)] = inst_24787);

(statearr_24793_24857[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24792 === (20))){
var state_24791__$1 = state_24791;
var statearr_24794_24858 = state_24791__$1;
(statearr_24794_24858[(2)] = null);

(statearr_24794_24858[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24792 === (1))){
var state_24791__$1 = state_24791;
var statearr_24795_24859 = state_24791__$1;
(statearr_24795_24859[(2)] = null);

(statearr_24795_24859[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24792 === (4))){
var inst_24756 = (state_24791[(7)]);
var inst_24756__$1 = (state_24791[(2)]);
var inst_24757 = (inst_24756__$1 == null);
var state_24791__$1 = (function (){var statearr_24796 = state_24791;
(statearr_24796[(7)] = inst_24756__$1);

return statearr_24796;
})();
if(cljs.core.truth_(inst_24757)){
var statearr_24797_24860 = state_24791__$1;
(statearr_24797_24860[(1)] = (5));

} else {
var statearr_24798_24861 = state_24791__$1;
(statearr_24798_24861[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24792 === (15))){
var inst_24769 = (state_24791[(8)]);
var state_24791__$1 = state_24791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24791__$1,(18),to,inst_24769);
} else {
if((state_val_24792 === (21))){
var inst_24782 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
var statearr_24799_24862 = state_24791__$1;
(statearr_24799_24862[(2)] = inst_24782);

(statearr_24799_24862[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24792 === (13))){
var inst_24784 = (state_24791[(2)]);
var state_24791__$1 = (function (){var statearr_24800 = state_24791;
(statearr_24800[(9)] = inst_24784);

return statearr_24800;
})();
var statearr_24801_24863 = state_24791__$1;
(statearr_24801_24863[(2)] = null);

(statearr_24801_24863[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24792 === (6))){
var inst_24756 = (state_24791[(7)]);
var state_24791__$1 = state_24791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24791__$1,(11),inst_24756);
} else {
if((state_val_24792 === (17))){
var inst_24777 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
if(cljs.core.truth_(inst_24777)){
var statearr_24802_24864 = state_24791__$1;
(statearr_24802_24864[(1)] = (19));

} else {
var statearr_24803_24865 = state_24791__$1;
(statearr_24803_24865[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24792 === (3))){
var inst_24789 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24791__$1,inst_24789);
} else {
if((state_val_24792 === (12))){
var inst_24766 = (state_24791[(10)]);
var state_24791__$1 = state_24791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24791__$1,(14),inst_24766);
} else {
if((state_val_24792 === (2))){
var state_24791__$1 = state_24791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24791__$1,(4),results);
} else {
if((state_val_24792 === (19))){
var state_24791__$1 = state_24791;
var statearr_24804_24866 = state_24791__$1;
(statearr_24804_24866[(2)] = null);

(statearr_24804_24866[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24792 === (11))){
var inst_24766 = (state_24791[(2)]);
var state_24791__$1 = (function (){var statearr_24805 = state_24791;
(statearr_24805[(10)] = inst_24766);

return statearr_24805;
})();
var statearr_24806_24867 = state_24791__$1;
(statearr_24806_24867[(2)] = null);

(statearr_24806_24867[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24792 === (9))){
var state_24791__$1 = state_24791;
var statearr_24807_24868 = state_24791__$1;
(statearr_24807_24868[(2)] = null);

(statearr_24807_24868[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24792 === (5))){
var state_24791__$1 = state_24791;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24808_24869 = state_24791__$1;
(statearr_24808_24869[(1)] = (8));

} else {
var statearr_24809_24870 = state_24791__$1;
(statearr_24809_24870[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24792 === (14))){
var inst_24769 = (state_24791[(8)]);
var inst_24771 = (state_24791[(11)]);
var inst_24769__$1 = (state_24791[(2)]);
var inst_24770 = (inst_24769__$1 == null);
var inst_24771__$1 = cljs.core.not(inst_24770);
var state_24791__$1 = (function (){var statearr_24810 = state_24791;
(statearr_24810[(8)] = inst_24769__$1);

(statearr_24810[(11)] = inst_24771__$1);

return statearr_24810;
})();
if(inst_24771__$1){
var statearr_24811_24871 = state_24791__$1;
(statearr_24811_24871[(1)] = (15));

} else {
var statearr_24812_24872 = state_24791__$1;
(statearr_24812_24872[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24792 === (16))){
var inst_24771 = (state_24791[(11)]);
var state_24791__$1 = state_24791;
var statearr_24813_24873 = state_24791__$1;
(statearr_24813_24873[(2)] = inst_24771);

(statearr_24813_24873[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24792 === (10))){
var inst_24763 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
var statearr_24814_24874 = state_24791__$1;
(statearr_24814_24874[(2)] = inst_24763);

(statearr_24814_24874[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24792 === (18))){
var inst_24774 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
var statearr_24815_24875 = state_24791__$1;
(statearr_24815_24875[(2)] = inst_24774);

(statearr_24815_24875[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24792 === (8))){
var inst_24760 = cljs.core.async.close_BANG_(to);
var state_24791__$1 = state_24791;
var statearr_24816_24876 = state_24791__$1;
(statearr_24816_24876[(2)] = inst_24760);

(statearr_24816_24876[(1)] = (10));


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
});})(c__24483__auto__,jobs,results,process,async))
;
return ((function (switch__24381__auto__,c__24483__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0 = (function (){
var statearr_24817 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24817[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__);

(statearr_24817[(1)] = (1));

return statearr_24817;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1 = (function (state_24791){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__(state_24791);
if(cljs.core.keyword_identical_QMARK_(result__24384__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e24818){if((e24818 instanceof Object)){
var ex__24385__auto__ = e24818;
var statearr_24819_24877 = state_24791;
(statearr_24819_24877[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24791);

return cljs.core.cst$kw$recur;
} else {
throw e24818;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24383__auto__,cljs.core.cst$kw$recur)){
var G__24878 = state_24791;
state_24791 = G__24878;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__ = function(state_24791){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1.call(this,state_24791);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24483__auto__,jobs,results,process,async))
})();
var state__24485__auto__ = (function (){var statearr_24820 = (f__24484__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24484__auto__.cljs$core$IFn$_invoke$arity$0() : f__24484__auto__.call(null));
(statearr_24820[(6)] = c__24483__auto__);

return statearr_24820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24485__auto__);
});})(c__24483__auto__,jobs,results,process,async))
);

return c__24483__auto__;
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
var G__24880 = arguments.length;
switch (G__24880) {
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
var G__24883 = arguments.length;
switch (G__24883) {
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
var G__24886 = arguments.length;
switch (G__24886) {
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
var c__24483__auto___24935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24483__auto___24935,tc,fc){
return (function (){
var f__24484__auto__ = (function (){var switch__24381__auto__ = ((function (c__24483__auto___24935,tc,fc){
return (function (state_24912){
var state_val_24913 = (state_24912[(1)]);
if((state_val_24913 === (7))){
var inst_24908 = (state_24912[(2)]);
var state_24912__$1 = state_24912;
var statearr_24914_24936 = state_24912__$1;
(statearr_24914_24936[(2)] = inst_24908);

(statearr_24914_24936[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24913 === (1))){
var state_24912__$1 = state_24912;
var statearr_24915_24937 = state_24912__$1;
(statearr_24915_24937[(2)] = null);

(statearr_24915_24937[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24913 === (4))){
var inst_24889 = (state_24912[(7)]);
var inst_24889__$1 = (state_24912[(2)]);
var inst_24890 = (inst_24889__$1 == null);
var state_24912__$1 = (function (){var statearr_24916 = state_24912;
(statearr_24916[(7)] = inst_24889__$1);

return statearr_24916;
})();
if(cljs.core.truth_(inst_24890)){
var statearr_24917_24938 = state_24912__$1;
(statearr_24917_24938[(1)] = (5));

} else {
var statearr_24918_24939 = state_24912__$1;
(statearr_24918_24939[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24913 === (13))){
var state_24912__$1 = state_24912;
var statearr_24919_24940 = state_24912__$1;
(statearr_24919_24940[(2)] = null);

(statearr_24919_24940[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24913 === (6))){
var inst_24889 = (state_24912[(7)]);
var inst_24895 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24889) : p.call(null,inst_24889));
var state_24912__$1 = state_24912;
if(cljs.core.truth_(inst_24895)){
var statearr_24920_24941 = state_24912__$1;
(statearr_24920_24941[(1)] = (9));

} else {
var statearr_24921_24942 = state_24912__$1;
(statearr_24921_24942[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24913 === (3))){
var inst_24910 = (state_24912[(2)]);
var state_24912__$1 = state_24912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24912__$1,inst_24910);
} else {
if((state_val_24913 === (12))){
var state_24912__$1 = state_24912;
var statearr_24922_24943 = state_24912__$1;
(statearr_24922_24943[(2)] = null);

(statearr_24922_24943[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24913 === (2))){
var state_24912__$1 = state_24912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24912__$1,(4),ch);
} else {
if((state_val_24913 === (11))){
var inst_24889 = (state_24912[(7)]);
var inst_24899 = (state_24912[(2)]);
var state_24912__$1 = state_24912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24912__$1,(8),inst_24899,inst_24889);
} else {
if((state_val_24913 === (9))){
var state_24912__$1 = state_24912;
var statearr_24923_24944 = state_24912__$1;
(statearr_24923_24944[(2)] = tc);

(statearr_24923_24944[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24913 === (5))){
var inst_24892 = cljs.core.async.close_BANG_(tc);
var inst_24893 = cljs.core.async.close_BANG_(fc);
var state_24912__$1 = (function (){var statearr_24924 = state_24912;
(statearr_24924[(8)] = inst_24892);

return statearr_24924;
})();
var statearr_24925_24945 = state_24912__$1;
(statearr_24925_24945[(2)] = inst_24893);

(statearr_24925_24945[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24913 === (14))){
var inst_24906 = (state_24912[(2)]);
var state_24912__$1 = state_24912;
var statearr_24926_24946 = state_24912__$1;
(statearr_24926_24946[(2)] = inst_24906);

(statearr_24926_24946[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24913 === (10))){
var state_24912__$1 = state_24912;
var statearr_24927_24947 = state_24912__$1;
(statearr_24927_24947[(2)] = fc);

(statearr_24927_24947[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24913 === (8))){
var inst_24901 = (state_24912[(2)]);
var state_24912__$1 = state_24912;
if(cljs.core.truth_(inst_24901)){
var statearr_24928_24948 = state_24912__$1;
(statearr_24928_24948[(1)] = (12));

} else {
var statearr_24929_24949 = state_24912__$1;
(statearr_24929_24949[(1)] = (13));

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
});})(c__24483__auto___24935,tc,fc))
;
return ((function (switch__24381__auto__,c__24483__auto___24935,tc,fc){
return (function() {
var cljs$core$async$state_machine__24382__auto__ = null;
var cljs$core$async$state_machine__24382__auto____0 = (function (){
var statearr_24930 = [null,null,null,null,null,null,null,null,null];
(statearr_24930[(0)] = cljs$core$async$state_machine__24382__auto__);

(statearr_24930[(1)] = (1));

return statearr_24930;
});
var cljs$core$async$state_machine__24382__auto____1 = (function (state_24912){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__(state_24912);
if(cljs.core.keyword_identical_QMARK_(result__24384__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e24931){if((e24931 instanceof Object)){
var ex__24385__auto__ = e24931;
var statearr_24932_24950 = state_24912;
(statearr_24932_24950[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24912);

return cljs.core.cst$kw$recur;
} else {
throw e24931;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24383__auto__,cljs.core.cst$kw$recur)){
var G__24951 = state_24912;
state_24912 = G__24951;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$state_machine__24382__auto__ = function(state_24912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24382__auto____1.call(this,state_24912);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24382__auto____0;
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24382__auto____1;
return cljs$core$async$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24483__auto___24935,tc,fc))
})();
var state__24485__auto__ = (function (){var statearr_24933 = (f__24484__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24484__auto__.cljs$core$IFn$_invoke$arity$0() : f__24484__auto__.call(null));
(statearr_24933[(6)] = c__24483__auto___24935);

return statearr_24933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24485__auto__);
});})(c__24483__auto___24935,tc,fc))
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
var c__24483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24483__auto__){
return (function (){
var f__24484__auto__ = (function (){var switch__24381__auto__ = ((function (c__24483__auto__){
return (function (state_24972){
var state_val_24973 = (state_24972[(1)]);
if((state_val_24973 === (7))){
var inst_24968 = (state_24972[(2)]);
var state_24972__$1 = state_24972;
var statearr_24974_24992 = state_24972__$1;
(statearr_24974_24992[(2)] = inst_24968);

(statearr_24974_24992[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24973 === (1))){
var inst_24952 = init;
var state_24972__$1 = (function (){var statearr_24975 = state_24972;
(statearr_24975[(7)] = inst_24952);

return statearr_24975;
})();
var statearr_24976_24993 = state_24972__$1;
(statearr_24976_24993[(2)] = null);

(statearr_24976_24993[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24973 === (4))){
var inst_24955 = (state_24972[(8)]);
var inst_24955__$1 = (state_24972[(2)]);
var inst_24956 = (inst_24955__$1 == null);
var state_24972__$1 = (function (){var statearr_24977 = state_24972;
(statearr_24977[(8)] = inst_24955__$1);

return statearr_24977;
})();
if(cljs.core.truth_(inst_24956)){
var statearr_24978_24994 = state_24972__$1;
(statearr_24978_24994[(1)] = (5));

} else {
var statearr_24979_24995 = state_24972__$1;
(statearr_24979_24995[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24973 === (6))){
var inst_24955 = (state_24972[(8)]);
var inst_24959 = (state_24972[(9)]);
var inst_24952 = (state_24972[(7)]);
var inst_24959__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24952,inst_24955) : f.call(null,inst_24952,inst_24955));
var inst_24960 = cljs.core.reduced_QMARK_(inst_24959__$1);
var state_24972__$1 = (function (){var statearr_24980 = state_24972;
(statearr_24980[(9)] = inst_24959__$1);

return statearr_24980;
})();
if(inst_24960){
var statearr_24981_24996 = state_24972__$1;
(statearr_24981_24996[(1)] = (8));

} else {
var statearr_24982_24997 = state_24972__$1;
(statearr_24982_24997[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24973 === (3))){
var inst_24970 = (state_24972[(2)]);
var state_24972__$1 = state_24972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24972__$1,inst_24970);
} else {
if((state_val_24973 === (2))){
var state_24972__$1 = state_24972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24972__$1,(4),ch);
} else {
if((state_val_24973 === (9))){
var inst_24959 = (state_24972[(9)]);
var inst_24952 = inst_24959;
var state_24972__$1 = (function (){var statearr_24983 = state_24972;
(statearr_24983[(7)] = inst_24952);

return statearr_24983;
})();
var statearr_24984_24998 = state_24972__$1;
(statearr_24984_24998[(2)] = null);

(statearr_24984_24998[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24973 === (5))){
var inst_24952 = (state_24972[(7)]);
var state_24972__$1 = state_24972;
var statearr_24985_24999 = state_24972__$1;
(statearr_24985_24999[(2)] = inst_24952);

(statearr_24985_24999[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24973 === (10))){
var inst_24966 = (state_24972[(2)]);
var state_24972__$1 = state_24972;
var statearr_24986_25000 = state_24972__$1;
(statearr_24986_25000[(2)] = inst_24966);

(statearr_24986_25000[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24973 === (8))){
var inst_24959 = (state_24972[(9)]);
var inst_24962 = cljs.core.deref(inst_24959);
var state_24972__$1 = state_24972;
var statearr_24987_25001 = state_24972__$1;
(statearr_24987_25001[(2)] = inst_24962);

(statearr_24987_25001[(1)] = (10));


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
});})(c__24483__auto__))
;
return ((function (switch__24381__auto__,c__24483__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24382__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24382__auto____0 = (function (){
var statearr_24988 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24988[(0)] = cljs$core$async$reduce_$_state_machine__24382__auto__);

(statearr_24988[(1)] = (1));

return statearr_24988;
});
var cljs$core$async$reduce_$_state_machine__24382__auto____1 = (function (state_24972){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__(state_24972);
if(cljs.core.keyword_identical_QMARK_(result__24384__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e24989){if((e24989 instanceof Object)){
var ex__24385__auto__ = e24989;
var statearr_24990_25002 = state_24972;
(statearr_24990_25002[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24972);

return cljs.core.cst$kw$recur;
} else {
throw e24989;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24383__auto__,cljs.core.cst$kw$recur)){
var G__25003 = state_24972;
state_24972 = G__25003;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24382__auto__ = function(state_24972){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24382__auto____1.call(this,state_24972);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24382__auto____0;
cljs$core$async$reduce_$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24382__auto____1;
return cljs$core$async$reduce_$_state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24483__auto__))
})();
var state__24485__auto__ = (function (){var statearr_24991 = (f__24484__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24484__auto__.cljs$core$IFn$_invoke$arity$0() : f__24484__auto__.call(null));
(statearr_24991[(6)] = c__24483__auto__);

return statearr_24991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24485__auto__);
});})(c__24483__auto__))
);

return c__24483__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__24483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24483__auto__,f__$1){
return (function (){
var f__24484__auto__ = (function (){var switch__24381__auto__ = ((function (c__24483__auto__,f__$1){
return (function (state_25009){
var state_val_25010 = (state_25009[(1)]);
if((state_val_25010 === (1))){
var inst_25004 = cljs.core.async.reduce(f__$1,init,ch);
var state_25009__$1 = state_25009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25009__$1,(2),inst_25004);
} else {
if((state_val_25010 === (2))){
var inst_25006 = (state_25009[(2)]);
var inst_25007 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_25006) : f__$1.call(null,inst_25006));
var state_25009__$1 = state_25009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25009__$1,inst_25007);
} else {
return null;
}
}
});})(c__24483__auto__,f__$1))
;
return ((function (switch__24381__auto__,c__24483__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24382__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24382__auto____0 = (function (){
var statearr_25011 = [null,null,null,null,null,null,null];
(statearr_25011[(0)] = cljs$core$async$transduce_$_state_machine__24382__auto__);

(statearr_25011[(1)] = (1));

return statearr_25011;
});
var cljs$core$async$transduce_$_state_machine__24382__auto____1 = (function (state_25009){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__(state_25009);
if(cljs.core.keyword_identical_QMARK_(result__24384__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e25012){if((e25012 instanceof Object)){
var ex__24385__auto__ = e25012;
var statearr_25013_25015 = state_25009;
(statearr_25013_25015[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25009);

return cljs.core.cst$kw$recur;
} else {
throw e25012;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24383__auto__,cljs.core.cst$kw$recur)){
var G__25016 = state_25009;
state_25009 = G__25016;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24382__auto__ = function(state_25009){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24382__auto____1.call(this,state_25009);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24382__auto____0;
cljs$core$async$transduce_$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24382__auto____1;
return cljs$core$async$transduce_$_state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24483__auto__,f__$1))
})();
var state__24485__auto__ = (function (){var statearr_25014 = (f__24484__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24484__auto__.cljs$core$IFn$_invoke$arity$0() : f__24484__auto__.call(null));
(statearr_25014[(6)] = c__24483__auto__);

return statearr_25014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24485__auto__);
});})(c__24483__auto__,f__$1))
);

return c__24483__auto__;
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
var G__25018 = arguments.length;
switch (G__25018) {
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
var c__24483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24483__auto__){
return (function (){
var f__24484__auto__ = (function (){var switch__24381__auto__ = ((function (c__24483__auto__){
return (function (state_25043){
var state_val_25044 = (state_25043[(1)]);
if((state_val_25044 === (7))){
var inst_25025 = (state_25043[(2)]);
var state_25043__$1 = state_25043;
var statearr_25045_25066 = state_25043__$1;
(statearr_25045_25066[(2)] = inst_25025);

(statearr_25045_25066[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25044 === (1))){
var inst_25019 = cljs.core.seq(coll);
var inst_25020 = inst_25019;
var state_25043__$1 = (function (){var statearr_25046 = state_25043;
(statearr_25046[(7)] = inst_25020);

return statearr_25046;
})();
var statearr_25047_25067 = state_25043__$1;
(statearr_25047_25067[(2)] = null);

(statearr_25047_25067[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25044 === (4))){
var inst_25020 = (state_25043[(7)]);
var inst_25023 = cljs.core.first(inst_25020);
var state_25043__$1 = state_25043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25043__$1,(7),ch,inst_25023);
} else {
if((state_val_25044 === (13))){
var inst_25037 = (state_25043[(2)]);
var state_25043__$1 = state_25043;
var statearr_25048_25068 = state_25043__$1;
(statearr_25048_25068[(2)] = inst_25037);

(statearr_25048_25068[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25044 === (6))){
var inst_25028 = (state_25043[(2)]);
var state_25043__$1 = state_25043;
if(cljs.core.truth_(inst_25028)){
var statearr_25049_25069 = state_25043__$1;
(statearr_25049_25069[(1)] = (8));

} else {
var statearr_25050_25070 = state_25043__$1;
(statearr_25050_25070[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25044 === (3))){
var inst_25041 = (state_25043[(2)]);
var state_25043__$1 = state_25043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25043__$1,inst_25041);
} else {
if((state_val_25044 === (12))){
var state_25043__$1 = state_25043;
var statearr_25051_25071 = state_25043__$1;
(statearr_25051_25071[(2)] = null);

(statearr_25051_25071[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25044 === (2))){
var inst_25020 = (state_25043[(7)]);
var state_25043__$1 = state_25043;
if(cljs.core.truth_(inst_25020)){
var statearr_25052_25072 = state_25043__$1;
(statearr_25052_25072[(1)] = (4));

} else {
var statearr_25053_25073 = state_25043__$1;
(statearr_25053_25073[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25044 === (11))){
var inst_25034 = cljs.core.async.close_BANG_(ch);
var state_25043__$1 = state_25043;
var statearr_25054_25074 = state_25043__$1;
(statearr_25054_25074[(2)] = inst_25034);

(statearr_25054_25074[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25044 === (9))){
var state_25043__$1 = state_25043;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25055_25075 = state_25043__$1;
(statearr_25055_25075[(1)] = (11));

} else {
var statearr_25056_25076 = state_25043__$1;
(statearr_25056_25076[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25044 === (5))){
var inst_25020 = (state_25043[(7)]);
var state_25043__$1 = state_25043;
var statearr_25057_25077 = state_25043__$1;
(statearr_25057_25077[(2)] = inst_25020);

(statearr_25057_25077[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25044 === (10))){
var inst_25039 = (state_25043[(2)]);
var state_25043__$1 = state_25043;
var statearr_25058_25078 = state_25043__$1;
(statearr_25058_25078[(2)] = inst_25039);

(statearr_25058_25078[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25044 === (8))){
var inst_25020 = (state_25043[(7)]);
var inst_25030 = cljs.core.next(inst_25020);
var inst_25020__$1 = inst_25030;
var state_25043__$1 = (function (){var statearr_25059 = state_25043;
(statearr_25059[(7)] = inst_25020__$1);

return statearr_25059;
})();
var statearr_25060_25079 = state_25043__$1;
(statearr_25060_25079[(2)] = null);

(statearr_25060_25079[(1)] = (2));


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
});})(c__24483__auto__))
;
return ((function (switch__24381__auto__,c__24483__auto__){
return (function() {
var cljs$core$async$state_machine__24382__auto__ = null;
var cljs$core$async$state_machine__24382__auto____0 = (function (){
var statearr_25061 = [null,null,null,null,null,null,null,null];
(statearr_25061[(0)] = cljs$core$async$state_machine__24382__auto__);

(statearr_25061[(1)] = (1));

return statearr_25061;
});
var cljs$core$async$state_machine__24382__auto____1 = (function (state_25043){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__(state_25043);
if(cljs.core.keyword_identical_QMARK_(result__24384__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e25062){if((e25062 instanceof Object)){
var ex__24385__auto__ = e25062;
var statearr_25063_25080 = state_25043;
(statearr_25063_25080[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25043);

return cljs.core.cst$kw$recur;
} else {
throw e25062;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24383__auto__,cljs.core.cst$kw$recur)){
var G__25081 = state_25043;
state_25043 = G__25081;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$state_machine__24382__auto__ = function(state_25043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24382__auto____1.call(this,state_25043);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24382__auto____0;
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24382__auto____1;
return cljs$core$async$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24483__auto__))
})();
var state__24485__auto__ = (function (){var statearr_25064 = (f__24484__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24484__auto__.cljs$core$IFn$_invoke$arity$0() : f__24484__auto__.call(null));
(statearr_25064[(6)] = c__24483__auto__);

return statearr_25064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24485__auto__);
});})(c__24483__auto__))
);

return c__24483__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async25082 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25082 = (function (ch,cs,meta25083){
this.ch = ch;
this.cs = cs;
this.meta25083 = meta25083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25084,meta25083__$1){
var self__ = this;
var _25084__$1 = this;
return (new cljs.core.async.t_cljs$core$async25082(self__.ch,self__.cs,meta25083__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25082.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25084){
var self__ = this;
var _25084__$1 = this;
return self__.meta25083;
});})(cs))
;

cljs.core.async.t_cljs$core$async25082.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25082.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25082.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25082.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25082.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25082.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25082.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta25083], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25082.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25082";

cljs.core.async.t_cljs$core$async25082.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async/t_cljs$core$async25082");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25082 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25082(ch__$1,cs__$1,meta25083){
return (new cljs.core.async.t_cljs$core$async25082(ch__$1,cs__$1,meta25083));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25082(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24483__auto___25304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24483__auto___25304,cs,m,dchan,dctr,done){
return (function (){
var f__24484__auto__ = (function (){var switch__24381__auto__ = ((function (c__24483__auto___25304,cs,m,dchan,dctr,done){
return (function (state_25219){
var state_val_25220 = (state_25219[(1)]);
if((state_val_25220 === (7))){
var inst_25215 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
var statearr_25221_25305 = state_25219__$1;
(statearr_25221_25305[(2)] = inst_25215);

(statearr_25221_25305[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (20))){
var inst_25118 = (state_25219[(7)]);
var inst_25130 = cljs.core.first(inst_25118);
var inst_25131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25130,(0),null);
var inst_25132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25130,(1),null);
var state_25219__$1 = (function (){var statearr_25222 = state_25219;
(statearr_25222[(8)] = inst_25131);

return statearr_25222;
})();
if(cljs.core.truth_(inst_25132)){
var statearr_25223_25306 = state_25219__$1;
(statearr_25223_25306[(1)] = (22));

} else {
var statearr_25224_25307 = state_25219__$1;
(statearr_25224_25307[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (27))){
var inst_25160 = (state_25219[(9)]);
var inst_25162 = (state_25219[(10)]);
var inst_25087 = (state_25219[(11)]);
var inst_25167 = (state_25219[(12)]);
var inst_25167__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25160,inst_25162);
var inst_25168 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25167__$1,inst_25087,done);
var state_25219__$1 = (function (){var statearr_25225 = state_25219;
(statearr_25225[(12)] = inst_25167__$1);

return statearr_25225;
})();
if(cljs.core.truth_(inst_25168)){
var statearr_25226_25308 = state_25219__$1;
(statearr_25226_25308[(1)] = (30));

} else {
var statearr_25227_25309 = state_25219__$1;
(statearr_25227_25309[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (1))){
var state_25219__$1 = state_25219;
var statearr_25228_25310 = state_25219__$1;
(statearr_25228_25310[(2)] = null);

(statearr_25228_25310[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (24))){
var inst_25118 = (state_25219[(7)]);
var inst_25137 = (state_25219[(2)]);
var inst_25138 = cljs.core.next(inst_25118);
var inst_25096 = inst_25138;
var inst_25097 = null;
var inst_25098 = (0);
var inst_25099 = (0);
var state_25219__$1 = (function (){var statearr_25229 = state_25219;
(statearr_25229[(13)] = inst_25097);

(statearr_25229[(14)] = inst_25098);

(statearr_25229[(15)] = inst_25099);

(statearr_25229[(16)] = inst_25137);

(statearr_25229[(17)] = inst_25096);

return statearr_25229;
})();
var statearr_25230_25311 = state_25219__$1;
(statearr_25230_25311[(2)] = null);

(statearr_25230_25311[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (39))){
var state_25219__$1 = state_25219;
var statearr_25234_25312 = state_25219__$1;
(statearr_25234_25312[(2)] = null);

(statearr_25234_25312[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (4))){
var inst_25087 = (state_25219[(11)]);
var inst_25087__$1 = (state_25219[(2)]);
var inst_25088 = (inst_25087__$1 == null);
var state_25219__$1 = (function (){var statearr_25235 = state_25219;
(statearr_25235[(11)] = inst_25087__$1);

return statearr_25235;
})();
if(cljs.core.truth_(inst_25088)){
var statearr_25236_25313 = state_25219__$1;
(statearr_25236_25313[(1)] = (5));

} else {
var statearr_25237_25314 = state_25219__$1;
(statearr_25237_25314[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (15))){
var inst_25097 = (state_25219[(13)]);
var inst_25098 = (state_25219[(14)]);
var inst_25099 = (state_25219[(15)]);
var inst_25096 = (state_25219[(17)]);
var inst_25114 = (state_25219[(2)]);
var inst_25115 = (inst_25099 + (1));
var tmp25231 = inst_25097;
var tmp25232 = inst_25098;
var tmp25233 = inst_25096;
var inst_25096__$1 = tmp25233;
var inst_25097__$1 = tmp25231;
var inst_25098__$1 = tmp25232;
var inst_25099__$1 = inst_25115;
var state_25219__$1 = (function (){var statearr_25238 = state_25219;
(statearr_25238[(18)] = inst_25114);

(statearr_25238[(13)] = inst_25097__$1);

(statearr_25238[(14)] = inst_25098__$1);

(statearr_25238[(15)] = inst_25099__$1);

(statearr_25238[(17)] = inst_25096__$1);

return statearr_25238;
})();
var statearr_25239_25315 = state_25219__$1;
(statearr_25239_25315[(2)] = null);

(statearr_25239_25315[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (21))){
var inst_25141 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
var statearr_25243_25316 = state_25219__$1;
(statearr_25243_25316[(2)] = inst_25141);

(statearr_25243_25316[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (31))){
var inst_25167 = (state_25219[(12)]);
var inst_25171 = done(null);
var inst_25172 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25167);
var state_25219__$1 = (function (){var statearr_25244 = state_25219;
(statearr_25244[(19)] = inst_25171);

return statearr_25244;
})();
var statearr_25245_25317 = state_25219__$1;
(statearr_25245_25317[(2)] = inst_25172);

(statearr_25245_25317[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (32))){
var inst_25159 = (state_25219[(20)]);
var inst_25160 = (state_25219[(9)]);
var inst_25162 = (state_25219[(10)]);
var inst_25161 = (state_25219[(21)]);
var inst_25174 = (state_25219[(2)]);
var inst_25175 = (inst_25162 + (1));
var tmp25240 = inst_25159;
var tmp25241 = inst_25160;
var tmp25242 = inst_25161;
var inst_25159__$1 = tmp25240;
var inst_25160__$1 = tmp25241;
var inst_25161__$1 = tmp25242;
var inst_25162__$1 = inst_25175;
var state_25219__$1 = (function (){var statearr_25246 = state_25219;
(statearr_25246[(20)] = inst_25159__$1);

(statearr_25246[(9)] = inst_25160__$1);

(statearr_25246[(10)] = inst_25162__$1);

(statearr_25246[(22)] = inst_25174);

(statearr_25246[(21)] = inst_25161__$1);

return statearr_25246;
})();
var statearr_25247_25318 = state_25219__$1;
(statearr_25247_25318[(2)] = null);

(statearr_25247_25318[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (40))){
var inst_25187 = (state_25219[(23)]);
var inst_25191 = done(null);
var inst_25192 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25187);
var state_25219__$1 = (function (){var statearr_25248 = state_25219;
(statearr_25248[(24)] = inst_25191);

return statearr_25248;
})();
var statearr_25249_25319 = state_25219__$1;
(statearr_25249_25319[(2)] = inst_25192);

(statearr_25249_25319[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (33))){
var inst_25178 = (state_25219[(25)]);
var inst_25180 = cljs.core.chunked_seq_QMARK_(inst_25178);
var state_25219__$1 = state_25219;
if(inst_25180){
var statearr_25250_25320 = state_25219__$1;
(statearr_25250_25320[(1)] = (36));

} else {
var statearr_25251_25321 = state_25219__$1;
(statearr_25251_25321[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (13))){
var inst_25108 = (state_25219[(26)]);
var inst_25111 = cljs.core.async.close_BANG_(inst_25108);
var state_25219__$1 = state_25219;
var statearr_25252_25322 = state_25219__$1;
(statearr_25252_25322[(2)] = inst_25111);

(statearr_25252_25322[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (22))){
var inst_25131 = (state_25219[(8)]);
var inst_25134 = cljs.core.async.close_BANG_(inst_25131);
var state_25219__$1 = state_25219;
var statearr_25253_25323 = state_25219__$1;
(statearr_25253_25323[(2)] = inst_25134);

(statearr_25253_25323[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (36))){
var inst_25178 = (state_25219[(25)]);
var inst_25182 = cljs.core.chunk_first(inst_25178);
var inst_25183 = cljs.core.chunk_rest(inst_25178);
var inst_25184 = cljs.core.count(inst_25182);
var inst_25159 = inst_25183;
var inst_25160 = inst_25182;
var inst_25161 = inst_25184;
var inst_25162 = (0);
var state_25219__$1 = (function (){var statearr_25254 = state_25219;
(statearr_25254[(20)] = inst_25159);

(statearr_25254[(9)] = inst_25160);

(statearr_25254[(10)] = inst_25162);

(statearr_25254[(21)] = inst_25161);

return statearr_25254;
})();
var statearr_25255_25324 = state_25219__$1;
(statearr_25255_25324[(2)] = null);

(statearr_25255_25324[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (41))){
var inst_25178 = (state_25219[(25)]);
var inst_25194 = (state_25219[(2)]);
var inst_25195 = cljs.core.next(inst_25178);
var inst_25159 = inst_25195;
var inst_25160 = null;
var inst_25161 = (0);
var inst_25162 = (0);
var state_25219__$1 = (function (){var statearr_25256 = state_25219;
(statearr_25256[(20)] = inst_25159);

(statearr_25256[(9)] = inst_25160);

(statearr_25256[(10)] = inst_25162);

(statearr_25256[(27)] = inst_25194);

(statearr_25256[(21)] = inst_25161);

return statearr_25256;
})();
var statearr_25257_25325 = state_25219__$1;
(statearr_25257_25325[(2)] = null);

(statearr_25257_25325[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (43))){
var state_25219__$1 = state_25219;
var statearr_25258_25326 = state_25219__$1;
(statearr_25258_25326[(2)] = null);

(statearr_25258_25326[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (29))){
var inst_25203 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
var statearr_25259_25327 = state_25219__$1;
(statearr_25259_25327[(2)] = inst_25203);

(statearr_25259_25327[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (44))){
var inst_25212 = (state_25219[(2)]);
var state_25219__$1 = (function (){var statearr_25260 = state_25219;
(statearr_25260[(28)] = inst_25212);

return statearr_25260;
})();
var statearr_25261_25328 = state_25219__$1;
(statearr_25261_25328[(2)] = null);

(statearr_25261_25328[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (6))){
var inst_25151 = (state_25219[(29)]);
var inst_25150 = cljs.core.deref(cs);
var inst_25151__$1 = cljs.core.keys(inst_25150);
var inst_25152 = cljs.core.count(inst_25151__$1);
var inst_25153 = cljs.core.reset_BANG_(dctr,inst_25152);
var inst_25158 = cljs.core.seq(inst_25151__$1);
var inst_25159 = inst_25158;
var inst_25160 = null;
var inst_25161 = (0);
var inst_25162 = (0);
var state_25219__$1 = (function (){var statearr_25262 = state_25219;
(statearr_25262[(20)] = inst_25159);

(statearr_25262[(9)] = inst_25160);

(statearr_25262[(10)] = inst_25162);

(statearr_25262[(30)] = inst_25153);

(statearr_25262[(29)] = inst_25151__$1);

(statearr_25262[(21)] = inst_25161);

return statearr_25262;
})();
var statearr_25263_25329 = state_25219__$1;
(statearr_25263_25329[(2)] = null);

(statearr_25263_25329[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (28))){
var inst_25159 = (state_25219[(20)]);
var inst_25178 = (state_25219[(25)]);
var inst_25178__$1 = cljs.core.seq(inst_25159);
var state_25219__$1 = (function (){var statearr_25264 = state_25219;
(statearr_25264[(25)] = inst_25178__$1);

return statearr_25264;
})();
if(inst_25178__$1){
var statearr_25265_25330 = state_25219__$1;
(statearr_25265_25330[(1)] = (33));

} else {
var statearr_25266_25331 = state_25219__$1;
(statearr_25266_25331[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (25))){
var inst_25162 = (state_25219[(10)]);
var inst_25161 = (state_25219[(21)]);
var inst_25164 = (inst_25162 < inst_25161);
var inst_25165 = inst_25164;
var state_25219__$1 = state_25219;
if(cljs.core.truth_(inst_25165)){
var statearr_25267_25332 = state_25219__$1;
(statearr_25267_25332[(1)] = (27));

} else {
var statearr_25268_25333 = state_25219__$1;
(statearr_25268_25333[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (34))){
var state_25219__$1 = state_25219;
var statearr_25269_25334 = state_25219__$1;
(statearr_25269_25334[(2)] = null);

(statearr_25269_25334[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (17))){
var state_25219__$1 = state_25219;
var statearr_25270_25335 = state_25219__$1;
(statearr_25270_25335[(2)] = null);

(statearr_25270_25335[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (3))){
var inst_25217 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25219__$1,inst_25217);
} else {
if((state_val_25220 === (12))){
var inst_25146 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
var statearr_25271_25336 = state_25219__$1;
(statearr_25271_25336[(2)] = inst_25146);

(statearr_25271_25336[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (2))){
var state_25219__$1 = state_25219;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25219__$1,(4),ch);
} else {
if((state_val_25220 === (23))){
var state_25219__$1 = state_25219;
var statearr_25272_25337 = state_25219__$1;
(statearr_25272_25337[(2)] = null);

(statearr_25272_25337[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (35))){
var inst_25201 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
var statearr_25273_25338 = state_25219__$1;
(statearr_25273_25338[(2)] = inst_25201);

(statearr_25273_25338[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (19))){
var inst_25118 = (state_25219[(7)]);
var inst_25122 = cljs.core.chunk_first(inst_25118);
var inst_25123 = cljs.core.chunk_rest(inst_25118);
var inst_25124 = cljs.core.count(inst_25122);
var inst_25096 = inst_25123;
var inst_25097 = inst_25122;
var inst_25098 = inst_25124;
var inst_25099 = (0);
var state_25219__$1 = (function (){var statearr_25274 = state_25219;
(statearr_25274[(13)] = inst_25097);

(statearr_25274[(14)] = inst_25098);

(statearr_25274[(15)] = inst_25099);

(statearr_25274[(17)] = inst_25096);

return statearr_25274;
})();
var statearr_25275_25339 = state_25219__$1;
(statearr_25275_25339[(2)] = null);

(statearr_25275_25339[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (11))){
var inst_25118 = (state_25219[(7)]);
var inst_25096 = (state_25219[(17)]);
var inst_25118__$1 = cljs.core.seq(inst_25096);
var state_25219__$1 = (function (){var statearr_25276 = state_25219;
(statearr_25276[(7)] = inst_25118__$1);

return statearr_25276;
})();
if(inst_25118__$1){
var statearr_25277_25340 = state_25219__$1;
(statearr_25277_25340[(1)] = (16));

} else {
var statearr_25278_25341 = state_25219__$1;
(statearr_25278_25341[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (9))){
var inst_25148 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
var statearr_25279_25342 = state_25219__$1;
(statearr_25279_25342[(2)] = inst_25148);

(statearr_25279_25342[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (5))){
var inst_25094 = cljs.core.deref(cs);
var inst_25095 = cljs.core.seq(inst_25094);
var inst_25096 = inst_25095;
var inst_25097 = null;
var inst_25098 = (0);
var inst_25099 = (0);
var state_25219__$1 = (function (){var statearr_25280 = state_25219;
(statearr_25280[(13)] = inst_25097);

(statearr_25280[(14)] = inst_25098);

(statearr_25280[(15)] = inst_25099);

(statearr_25280[(17)] = inst_25096);

return statearr_25280;
})();
var statearr_25281_25343 = state_25219__$1;
(statearr_25281_25343[(2)] = null);

(statearr_25281_25343[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (14))){
var state_25219__$1 = state_25219;
var statearr_25282_25344 = state_25219__$1;
(statearr_25282_25344[(2)] = null);

(statearr_25282_25344[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (45))){
var inst_25209 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
var statearr_25283_25345 = state_25219__$1;
(statearr_25283_25345[(2)] = inst_25209);

(statearr_25283_25345[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (26))){
var inst_25151 = (state_25219[(29)]);
var inst_25205 = (state_25219[(2)]);
var inst_25206 = cljs.core.seq(inst_25151);
var state_25219__$1 = (function (){var statearr_25284 = state_25219;
(statearr_25284[(31)] = inst_25205);

return statearr_25284;
})();
if(inst_25206){
var statearr_25285_25346 = state_25219__$1;
(statearr_25285_25346[(1)] = (42));

} else {
var statearr_25286_25347 = state_25219__$1;
(statearr_25286_25347[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (16))){
var inst_25118 = (state_25219[(7)]);
var inst_25120 = cljs.core.chunked_seq_QMARK_(inst_25118);
var state_25219__$1 = state_25219;
if(inst_25120){
var statearr_25287_25348 = state_25219__$1;
(statearr_25287_25348[(1)] = (19));

} else {
var statearr_25288_25349 = state_25219__$1;
(statearr_25288_25349[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (38))){
var inst_25198 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
var statearr_25289_25350 = state_25219__$1;
(statearr_25289_25350[(2)] = inst_25198);

(statearr_25289_25350[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (30))){
var state_25219__$1 = state_25219;
var statearr_25290_25351 = state_25219__$1;
(statearr_25290_25351[(2)] = null);

(statearr_25290_25351[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (10))){
var inst_25097 = (state_25219[(13)]);
var inst_25099 = (state_25219[(15)]);
var inst_25107 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25097,inst_25099);
var inst_25108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25107,(0),null);
var inst_25109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25107,(1),null);
var state_25219__$1 = (function (){var statearr_25291 = state_25219;
(statearr_25291[(26)] = inst_25108);

return statearr_25291;
})();
if(cljs.core.truth_(inst_25109)){
var statearr_25292_25352 = state_25219__$1;
(statearr_25292_25352[(1)] = (13));

} else {
var statearr_25293_25353 = state_25219__$1;
(statearr_25293_25353[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (18))){
var inst_25144 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
var statearr_25294_25354 = state_25219__$1;
(statearr_25294_25354[(2)] = inst_25144);

(statearr_25294_25354[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (42))){
var state_25219__$1 = state_25219;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25219__$1,(45),dchan);
} else {
if((state_val_25220 === (37))){
var inst_25087 = (state_25219[(11)]);
var inst_25178 = (state_25219[(25)]);
var inst_25187 = (state_25219[(23)]);
var inst_25187__$1 = cljs.core.first(inst_25178);
var inst_25188 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25187__$1,inst_25087,done);
var state_25219__$1 = (function (){var statearr_25295 = state_25219;
(statearr_25295[(23)] = inst_25187__$1);

return statearr_25295;
})();
if(cljs.core.truth_(inst_25188)){
var statearr_25296_25355 = state_25219__$1;
(statearr_25296_25355[(1)] = (39));

} else {
var statearr_25297_25356 = state_25219__$1;
(statearr_25297_25356[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25220 === (8))){
var inst_25098 = (state_25219[(14)]);
var inst_25099 = (state_25219[(15)]);
var inst_25101 = (inst_25099 < inst_25098);
var inst_25102 = inst_25101;
var state_25219__$1 = state_25219;
if(cljs.core.truth_(inst_25102)){
var statearr_25298_25357 = state_25219__$1;
(statearr_25298_25357[(1)] = (10));

} else {
var statearr_25299_25358 = state_25219__$1;
(statearr_25299_25358[(1)] = (11));

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
});})(c__24483__auto___25304,cs,m,dchan,dctr,done))
;
return ((function (switch__24381__auto__,c__24483__auto___25304,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24382__auto__ = null;
var cljs$core$async$mult_$_state_machine__24382__auto____0 = (function (){
var statearr_25300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25300[(0)] = cljs$core$async$mult_$_state_machine__24382__auto__);

(statearr_25300[(1)] = (1));

return statearr_25300;
});
var cljs$core$async$mult_$_state_machine__24382__auto____1 = (function (state_25219){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__(state_25219);
if(cljs.core.keyword_identical_QMARK_(result__24384__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e25301){if((e25301 instanceof Object)){
var ex__24385__auto__ = e25301;
var statearr_25302_25359 = state_25219;
(statearr_25302_25359[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25219);

return cljs.core.cst$kw$recur;
} else {
throw e25301;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24383__auto__,cljs.core.cst$kw$recur)){
var G__25360 = state_25219;
state_25219 = G__25360;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24382__auto__ = function(state_25219){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24382__auto____1.call(this,state_25219);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24382__auto____0;
cljs$core$async$mult_$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24382__auto____1;
return cljs$core$async$mult_$_state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24483__auto___25304,cs,m,dchan,dctr,done))
})();
var state__24485__auto__ = (function (){var statearr_25303 = (f__24484__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24484__auto__.cljs$core$IFn$_invoke$arity$0() : f__24484__auto__.call(null));
(statearr_25303[(6)] = c__24483__auto___25304);

return statearr_25303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24485__auto__);
});})(c__24483__auto___25304,cs,m,dchan,dctr,done))
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
var G__25362 = arguments.length;
switch (G__25362) {
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
var len__13022__auto___25374 = arguments.length;
var i__13023__auto___25375 = (0);
while(true){
if((i__13023__auto___25375 < len__13022__auto___25374)){
args__13029__auto__.push((arguments[i__13023__auto___25375]));

var G__25376 = (i__13023__auto___25375 + (1));
i__13023__auto___25375 = G__25376;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25368){
var map__25369 = p__25368;
var map__25369__$1 = ((((!((map__25369 == null)))?((((map__25369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25369):map__25369);
var opts = map__25369__$1;
var statearr_25371_25377 = state;
(statearr_25371_25377[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__25369,map__25369__$1,opts){
return (function (val){
var statearr_25372_25378 = state;
(statearr_25372_25378[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25369,map__25369__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_25373_25379 = state;
(statearr_25373_25379[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25364){
var G__25365 = cljs.core.first(seq25364);
var seq25364__$1 = cljs.core.next(seq25364);
var G__25366 = cljs.core.first(seq25364__$1);
var seq25364__$2 = cljs.core.next(seq25364__$1);
var G__25367 = cljs.core.first(seq25364__$2);
var seq25364__$3 = cljs.core.next(seq25364__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25365,G__25366,G__25367,seq25364__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25380 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25380 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25381){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25381 = meta25381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25382,meta25381__$1){
var self__ = this;
var _25382__$1 = this;
return (new cljs.core.async.t_cljs$core$async25380(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25381__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25380.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25382){
var self__ = this;
var _25382__$1 = this;
return self__.meta25381;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25380.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25380.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25380.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25380.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25380.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25380.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25380.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25380.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25380.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta25381], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25380.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25380";

cljs.core.async.t_cljs$core$async25380.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async/t_cljs$core$async25380");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25380 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25380(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25381){
return (new cljs.core.async.t_cljs$core$async25380(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25381));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25380(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24483__auto___25544 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24483__auto___25544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24484__auto__ = (function (){var switch__24381__auto__ = ((function (c__24483__auto___25544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25484){
var state_val_25485 = (state_25484[(1)]);
if((state_val_25485 === (7))){
var inst_25399 = (state_25484[(2)]);
var state_25484__$1 = state_25484;
var statearr_25486_25545 = state_25484__$1;
(statearr_25486_25545[(2)] = inst_25399);

(statearr_25486_25545[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (20))){
var inst_25411 = (state_25484[(7)]);
var state_25484__$1 = state_25484;
var statearr_25487_25546 = state_25484__$1;
(statearr_25487_25546[(2)] = inst_25411);

(statearr_25487_25546[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (27))){
var state_25484__$1 = state_25484;
var statearr_25488_25547 = state_25484__$1;
(statearr_25488_25547[(2)] = null);

(statearr_25488_25547[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (1))){
var inst_25386 = (state_25484[(8)]);
var inst_25386__$1 = calc_state();
var inst_25388 = (inst_25386__$1 == null);
var inst_25389 = cljs.core.not(inst_25388);
var state_25484__$1 = (function (){var statearr_25489 = state_25484;
(statearr_25489[(8)] = inst_25386__$1);

return statearr_25489;
})();
if(inst_25389){
var statearr_25490_25548 = state_25484__$1;
(statearr_25490_25548[(1)] = (2));

} else {
var statearr_25491_25549 = state_25484__$1;
(statearr_25491_25549[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (24))){
var inst_25458 = (state_25484[(9)]);
var inst_25444 = (state_25484[(10)]);
var inst_25435 = (state_25484[(11)]);
var inst_25458__$1 = (inst_25435.cljs$core$IFn$_invoke$arity$1 ? inst_25435.cljs$core$IFn$_invoke$arity$1(inst_25444) : inst_25435.call(null,inst_25444));
var state_25484__$1 = (function (){var statearr_25492 = state_25484;
(statearr_25492[(9)] = inst_25458__$1);

return statearr_25492;
})();
if(cljs.core.truth_(inst_25458__$1)){
var statearr_25493_25550 = state_25484__$1;
(statearr_25493_25550[(1)] = (29));

} else {
var statearr_25494_25551 = state_25484__$1;
(statearr_25494_25551[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (4))){
var inst_25402 = (state_25484[(2)]);
var state_25484__$1 = state_25484;
if(cljs.core.truth_(inst_25402)){
var statearr_25495_25552 = state_25484__$1;
(statearr_25495_25552[(1)] = (8));

} else {
var statearr_25496_25553 = state_25484__$1;
(statearr_25496_25553[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (15))){
var inst_25429 = (state_25484[(2)]);
var state_25484__$1 = state_25484;
if(cljs.core.truth_(inst_25429)){
var statearr_25497_25554 = state_25484__$1;
(statearr_25497_25554[(1)] = (19));

} else {
var statearr_25498_25555 = state_25484__$1;
(statearr_25498_25555[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (21))){
var inst_25434 = (state_25484[(12)]);
var inst_25434__$1 = (state_25484[(2)]);
var inst_25435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25434__$1,cljs.core.cst$kw$solos);
var inst_25436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25434__$1,cljs.core.cst$kw$mutes);
var inst_25437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25434__$1,cljs.core.cst$kw$reads);
var state_25484__$1 = (function (){var statearr_25499 = state_25484;
(statearr_25499[(13)] = inst_25436);

(statearr_25499[(12)] = inst_25434__$1);

(statearr_25499[(11)] = inst_25435);

return statearr_25499;
})();
return cljs.core.async.ioc_alts_BANG_(state_25484__$1,(22),inst_25437);
} else {
if((state_val_25485 === (31))){
var inst_25466 = (state_25484[(2)]);
var state_25484__$1 = state_25484;
if(cljs.core.truth_(inst_25466)){
var statearr_25500_25556 = state_25484__$1;
(statearr_25500_25556[(1)] = (32));

} else {
var statearr_25501_25557 = state_25484__$1;
(statearr_25501_25557[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (32))){
var inst_25443 = (state_25484[(14)]);
var state_25484__$1 = state_25484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25484__$1,(35),out,inst_25443);
} else {
if((state_val_25485 === (33))){
var inst_25434 = (state_25484[(12)]);
var inst_25411 = inst_25434;
var state_25484__$1 = (function (){var statearr_25502 = state_25484;
(statearr_25502[(7)] = inst_25411);

return statearr_25502;
})();
var statearr_25503_25558 = state_25484__$1;
(statearr_25503_25558[(2)] = null);

(statearr_25503_25558[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (13))){
var inst_25411 = (state_25484[(7)]);
var inst_25418 = inst_25411.cljs$lang$protocol_mask$partition0$;
var inst_25419 = (inst_25418 & (64));
var inst_25420 = inst_25411.cljs$core$ISeq$;
var inst_25421 = (cljs.core.PROTOCOL_SENTINEL === inst_25420);
var inst_25422 = (inst_25419) || (inst_25421);
var state_25484__$1 = state_25484;
if(cljs.core.truth_(inst_25422)){
var statearr_25504_25559 = state_25484__$1;
(statearr_25504_25559[(1)] = (16));

} else {
var statearr_25505_25560 = state_25484__$1;
(statearr_25505_25560[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (22))){
var inst_25443 = (state_25484[(14)]);
var inst_25444 = (state_25484[(10)]);
var inst_25442 = (state_25484[(2)]);
var inst_25443__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25442,(0),null);
var inst_25444__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25442,(1),null);
var inst_25445 = (inst_25443__$1 == null);
var inst_25446 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25444__$1,change);
var inst_25447 = (inst_25445) || (inst_25446);
var state_25484__$1 = (function (){var statearr_25506 = state_25484;
(statearr_25506[(14)] = inst_25443__$1);

(statearr_25506[(10)] = inst_25444__$1);

return statearr_25506;
})();
if(cljs.core.truth_(inst_25447)){
var statearr_25507_25561 = state_25484__$1;
(statearr_25507_25561[(1)] = (23));

} else {
var statearr_25508_25562 = state_25484__$1;
(statearr_25508_25562[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (36))){
var inst_25434 = (state_25484[(12)]);
var inst_25411 = inst_25434;
var state_25484__$1 = (function (){var statearr_25509 = state_25484;
(statearr_25509[(7)] = inst_25411);

return statearr_25509;
})();
var statearr_25510_25563 = state_25484__$1;
(statearr_25510_25563[(2)] = null);

(statearr_25510_25563[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (29))){
var inst_25458 = (state_25484[(9)]);
var state_25484__$1 = state_25484;
var statearr_25511_25564 = state_25484__$1;
(statearr_25511_25564[(2)] = inst_25458);

(statearr_25511_25564[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (6))){
var state_25484__$1 = state_25484;
var statearr_25512_25565 = state_25484__$1;
(statearr_25512_25565[(2)] = false);

(statearr_25512_25565[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (28))){
var inst_25454 = (state_25484[(2)]);
var inst_25455 = calc_state();
var inst_25411 = inst_25455;
var state_25484__$1 = (function (){var statearr_25513 = state_25484;
(statearr_25513[(7)] = inst_25411);

(statearr_25513[(15)] = inst_25454);

return statearr_25513;
})();
var statearr_25514_25566 = state_25484__$1;
(statearr_25514_25566[(2)] = null);

(statearr_25514_25566[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (25))){
var inst_25480 = (state_25484[(2)]);
var state_25484__$1 = state_25484;
var statearr_25515_25567 = state_25484__$1;
(statearr_25515_25567[(2)] = inst_25480);

(statearr_25515_25567[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (34))){
var inst_25478 = (state_25484[(2)]);
var state_25484__$1 = state_25484;
var statearr_25516_25568 = state_25484__$1;
(statearr_25516_25568[(2)] = inst_25478);

(statearr_25516_25568[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (17))){
var state_25484__$1 = state_25484;
var statearr_25517_25569 = state_25484__$1;
(statearr_25517_25569[(2)] = false);

(statearr_25517_25569[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (3))){
var state_25484__$1 = state_25484;
var statearr_25518_25570 = state_25484__$1;
(statearr_25518_25570[(2)] = false);

(statearr_25518_25570[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (12))){
var inst_25482 = (state_25484[(2)]);
var state_25484__$1 = state_25484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25484__$1,inst_25482);
} else {
if((state_val_25485 === (2))){
var inst_25386 = (state_25484[(8)]);
var inst_25391 = inst_25386.cljs$lang$protocol_mask$partition0$;
var inst_25392 = (inst_25391 & (64));
var inst_25393 = inst_25386.cljs$core$ISeq$;
var inst_25394 = (cljs.core.PROTOCOL_SENTINEL === inst_25393);
var inst_25395 = (inst_25392) || (inst_25394);
var state_25484__$1 = state_25484;
if(cljs.core.truth_(inst_25395)){
var statearr_25519_25571 = state_25484__$1;
(statearr_25519_25571[(1)] = (5));

} else {
var statearr_25520_25572 = state_25484__$1;
(statearr_25520_25572[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (23))){
var inst_25443 = (state_25484[(14)]);
var inst_25449 = (inst_25443 == null);
var state_25484__$1 = state_25484;
if(cljs.core.truth_(inst_25449)){
var statearr_25521_25573 = state_25484__$1;
(statearr_25521_25573[(1)] = (26));

} else {
var statearr_25522_25574 = state_25484__$1;
(statearr_25522_25574[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (35))){
var inst_25469 = (state_25484[(2)]);
var state_25484__$1 = state_25484;
if(cljs.core.truth_(inst_25469)){
var statearr_25523_25575 = state_25484__$1;
(statearr_25523_25575[(1)] = (36));

} else {
var statearr_25524_25576 = state_25484__$1;
(statearr_25524_25576[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (19))){
var inst_25411 = (state_25484[(7)]);
var inst_25431 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25411);
var state_25484__$1 = state_25484;
var statearr_25525_25577 = state_25484__$1;
(statearr_25525_25577[(2)] = inst_25431);

(statearr_25525_25577[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (11))){
var inst_25411 = (state_25484[(7)]);
var inst_25415 = (inst_25411 == null);
var inst_25416 = cljs.core.not(inst_25415);
var state_25484__$1 = state_25484;
if(inst_25416){
var statearr_25526_25578 = state_25484__$1;
(statearr_25526_25578[(1)] = (13));

} else {
var statearr_25527_25579 = state_25484__$1;
(statearr_25527_25579[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (9))){
var inst_25386 = (state_25484[(8)]);
var state_25484__$1 = state_25484;
var statearr_25528_25580 = state_25484__$1;
(statearr_25528_25580[(2)] = inst_25386);

(statearr_25528_25580[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (5))){
var state_25484__$1 = state_25484;
var statearr_25529_25581 = state_25484__$1;
(statearr_25529_25581[(2)] = true);

(statearr_25529_25581[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (14))){
var state_25484__$1 = state_25484;
var statearr_25530_25582 = state_25484__$1;
(statearr_25530_25582[(2)] = false);

(statearr_25530_25582[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (26))){
var inst_25444 = (state_25484[(10)]);
var inst_25451 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25444);
var state_25484__$1 = state_25484;
var statearr_25531_25583 = state_25484__$1;
(statearr_25531_25583[(2)] = inst_25451);

(statearr_25531_25583[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (16))){
var state_25484__$1 = state_25484;
var statearr_25532_25584 = state_25484__$1;
(statearr_25532_25584[(2)] = true);

(statearr_25532_25584[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (38))){
var inst_25474 = (state_25484[(2)]);
var state_25484__$1 = state_25484;
var statearr_25533_25585 = state_25484__$1;
(statearr_25533_25585[(2)] = inst_25474);

(statearr_25533_25585[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (30))){
var inst_25436 = (state_25484[(13)]);
var inst_25444 = (state_25484[(10)]);
var inst_25435 = (state_25484[(11)]);
var inst_25461 = cljs.core.empty_QMARK_(inst_25435);
var inst_25462 = (inst_25436.cljs$core$IFn$_invoke$arity$1 ? inst_25436.cljs$core$IFn$_invoke$arity$1(inst_25444) : inst_25436.call(null,inst_25444));
var inst_25463 = cljs.core.not(inst_25462);
var inst_25464 = (inst_25461) && (inst_25463);
var state_25484__$1 = state_25484;
var statearr_25534_25586 = state_25484__$1;
(statearr_25534_25586[(2)] = inst_25464);

(statearr_25534_25586[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (10))){
var inst_25386 = (state_25484[(8)]);
var inst_25407 = (state_25484[(2)]);
var inst_25408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25407,cljs.core.cst$kw$solos);
var inst_25409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25407,cljs.core.cst$kw$mutes);
var inst_25410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25407,cljs.core.cst$kw$reads);
var inst_25411 = inst_25386;
var state_25484__$1 = (function (){var statearr_25535 = state_25484;
(statearr_25535[(7)] = inst_25411);

(statearr_25535[(16)] = inst_25408);

(statearr_25535[(17)] = inst_25410);

(statearr_25535[(18)] = inst_25409);

return statearr_25535;
})();
var statearr_25536_25587 = state_25484__$1;
(statearr_25536_25587[(2)] = null);

(statearr_25536_25587[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (18))){
var inst_25426 = (state_25484[(2)]);
var state_25484__$1 = state_25484;
var statearr_25537_25588 = state_25484__$1;
(statearr_25537_25588[(2)] = inst_25426);

(statearr_25537_25588[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (37))){
var state_25484__$1 = state_25484;
var statearr_25538_25589 = state_25484__$1;
(statearr_25538_25589[(2)] = null);

(statearr_25538_25589[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25485 === (8))){
var inst_25386 = (state_25484[(8)]);
var inst_25404 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25386);
var state_25484__$1 = state_25484;
var statearr_25539_25590 = state_25484__$1;
(statearr_25539_25590[(2)] = inst_25404);

(statearr_25539_25590[(1)] = (10));


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
});})(c__24483__auto___25544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24381__auto__,c__24483__auto___25544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24382__auto__ = null;
var cljs$core$async$mix_$_state_machine__24382__auto____0 = (function (){
var statearr_25540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25540[(0)] = cljs$core$async$mix_$_state_machine__24382__auto__);

(statearr_25540[(1)] = (1));

return statearr_25540;
});
var cljs$core$async$mix_$_state_machine__24382__auto____1 = (function (state_25484){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__(state_25484);
if(cljs.core.keyword_identical_QMARK_(result__24384__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e25541){if((e25541 instanceof Object)){
var ex__24385__auto__ = e25541;
var statearr_25542_25591 = state_25484;
(statearr_25542_25591[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25484);

return cljs.core.cst$kw$recur;
} else {
throw e25541;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24383__auto__,cljs.core.cst$kw$recur)){
var G__25592 = state_25484;
state_25484 = G__25592;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24382__auto__ = function(state_25484){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24382__auto____1.call(this,state_25484);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24382__auto____0;
cljs$core$async$mix_$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24382__auto____1;
return cljs$core$async$mix_$_state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24483__auto___25544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24485__auto__ = (function (){var statearr_25543 = (f__24484__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24484__auto__.cljs$core$IFn$_invoke$arity$0() : f__24484__auto__.call(null));
(statearr_25543[(6)] = c__24483__auto___25544);

return statearr_25543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24485__auto__);
});})(c__24483__auto___25544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__25594 = arguments.length;
switch (G__25594) {
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
var G__25598 = arguments.length;
switch (G__25598) {
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
return (function (p1__25596_SHARP_){
if(cljs.core.truth_((p1__25596_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25596_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25596_SHARP_.call(null,topic)))){
return p1__25596_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25596_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__11743__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25599 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25599 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25600){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25600 = meta25600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25601,meta25600__$1){
var self__ = this;
var _25601__$1 = this;
return (new cljs.core.async.t_cljs$core$async25599(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25600__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25599.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25601){
var self__ = this;
var _25601__$1 = this;
return self__.meta25600;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25599.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25599.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25599.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25599.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25599.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25599.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25599.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25599.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta25600], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25599.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25599";

cljs.core.async.t_cljs$core$async25599.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async/t_cljs$core$async25599");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25599 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25599(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25600){
return (new cljs.core.async.t_cljs$core$async25599(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25600));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25599(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24483__auto___25719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24483__auto___25719,mults,ensure_mult,p){
return (function (){
var f__24484__auto__ = (function (){var switch__24381__auto__ = ((function (c__24483__auto___25719,mults,ensure_mult,p){
return (function (state_25673){
var state_val_25674 = (state_25673[(1)]);
if((state_val_25674 === (7))){
var inst_25669 = (state_25673[(2)]);
var state_25673__$1 = state_25673;
var statearr_25675_25720 = state_25673__$1;
(statearr_25675_25720[(2)] = inst_25669);

(statearr_25675_25720[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25674 === (20))){
var state_25673__$1 = state_25673;
var statearr_25676_25721 = state_25673__$1;
(statearr_25676_25721[(2)] = null);

(statearr_25676_25721[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25674 === (1))){
var state_25673__$1 = state_25673;
var statearr_25677_25722 = state_25673__$1;
(statearr_25677_25722[(2)] = null);

(statearr_25677_25722[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25674 === (24))){
var inst_25652 = (state_25673[(7)]);
var inst_25661 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25652);
var state_25673__$1 = state_25673;
var statearr_25678_25723 = state_25673__$1;
(statearr_25678_25723[(2)] = inst_25661);

(statearr_25678_25723[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25674 === (4))){
var inst_25604 = (state_25673[(8)]);
var inst_25604__$1 = (state_25673[(2)]);
var inst_25605 = (inst_25604__$1 == null);
var state_25673__$1 = (function (){var statearr_25679 = state_25673;
(statearr_25679[(8)] = inst_25604__$1);

return statearr_25679;
})();
if(cljs.core.truth_(inst_25605)){
var statearr_25680_25724 = state_25673__$1;
(statearr_25680_25724[(1)] = (5));

} else {
var statearr_25681_25725 = state_25673__$1;
(statearr_25681_25725[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25674 === (15))){
var inst_25646 = (state_25673[(2)]);
var state_25673__$1 = state_25673;
var statearr_25682_25726 = state_25673__$1;
(statearr_25682_25726[(2)] = inst_25646);

(statearr_25682_25726[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25674 === (21))){
var inst_25666 = (state_25673[(2)]);
var state_25673__$1 = (function (){var statearr_25683 = state_25673;
(statearr_25683[(9)] = inst_25666);

return statearr_25683;
})();
var statearr_25684_25727 = state_25673__$1;
(statearr_25684_25727[(2)] = null);

(statearr_25684_25727[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25674 === (13))){
var inst_25628 = (state_25673[(10)]);
var inst_25630 = cljs.core.chunked_seq_QMARK_(inst_25628);
var state_25673__$1 = state_25673;
if(inst_25630){
var statearr_25685_25728 = state_25673__$1;
(statearr_25685_25728[(1)] = (16));

} else {
var statearr_25686_25729 = state_25673__$1;
(statearr_25686_25729[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25674 === (22))){
var inst_25658 = (state_25673[(2)]);
var state_25673__$1 = state_25673;
if(cljs.core.truth_(inst_25658)){
var statearr_25687_25730 = state_25673__$1;
(statearr_25687_25730[(1)] = (23));

} else {
var statearr_25688_25731 = state_25673__$1;
(statearr_25688_25731[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25674 === (6))){
var inst_25604 = (state_25673[(8)]);
var inst_25652 = (state_25673[(7)]);
var inst_25654 = (state_25673[(11)]);
var inst_25652__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25604) : topic_fn.call(null,inst_25604));
var inst_25653 = cljs.core.deref(mults);
var inst_25654__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25653,inst_25652__$1);
var state_25673__$1 = (function (){var statearr_25689 = state_25673;
(statearr_25689[(7)] = inst_25652__$1);

(statearr_25689[(11)] = inst_25654__$1);

return statearr_25689;
})();
if(cljs.core.truth_(inst_25654__$1)){
var statearr_25690_25732 = state_25673__$1;
(statearr_25690_25732[(1)] = (19));

} else {
var statearr_25691_25733 = state_25673__$1;
(statearr_25691_25733[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25674 === (25))){
var inst_25663 = (state_25673[(2)]);
var state_25673__$1 = state_25673;
var statearr_25692_25734 = state_25673__$1;
(statearr_25692_25734[(2)] = inst_25663);

(statearr_25692_25734[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25674 === (17))){
var inst_25628 = (state_25673[(10)]);
var inst_25637 = cljs.core.first(inst_25628);
var inst_25638 = cljs.core.async.muxch_STAR_(inst_25637);
var inst_25639 = cljs.core.async.close_BANG_(inst_25638);
var inst_25640 = cljs.core.next(inst_25628);
var inst_25614 = inst_25640;
var inst_25615 = null;
var inst_25616 = (0);
var inst_25617 = (0);
var state_25673__$1 = (function (){var statearr_25693 = state_25673;
(statearr_25693[(12)] = inst_25616);

(statearr_25693[(13)] = inst_25639);

(statearr_25693[(14)] = inst_25615);

(statearr_25693[(15)] = inst_25614);

(statearr_25693[(16)] = inst_25617);

return statearr_25693;
})();
var statearr_25694_25735 = state_25673__$1;
(statearr_25694_25735[(2)] = null);

(statearr_25694_25735[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25674 === (3))){
var inst_25671 = (state_25673[(2)]);
var state_25673__$1 = state_25673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25673__$1,inst_25671);
} else {
if((state_val_25674 === (12))){
var inst_25648 = (state_25673[(2)]);
var state_25673__$1 = state_25673;
var statearr_25695_25736 = state_25673__$1;
(statearr_25695_25736[(2)] = inst_25648);

(statearr_25695_25736[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25674 === (2))){
var state_25673__$1 = state_25673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25673__$1,(4),ch);
} else {
if((state_val_25674 === (23))){
var state_25673__$1 = state_25673;
var statearr_25696_25737 = state_25673__$1;
(statearr_25696_25737[(2)] = null);

(statearr_25696_25737[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25674 === (19))){
var inst_25604 = (state_25673[(8)]);
var inst_25654 = (state_25673[(11)]);
var inst_25656 = cljs.core.async.muxch_STAR_(inst_25654);
var state_25673__$1 = state_25673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25673__$1,(22),inst_25656,inst_25604);
} else {
if((state_val_25674 === (11))){
var inst_25628 = (state_25673[(10)]);
var inst_25614 = (state_25673[(15)]);
var inst_25628__$1 = cljs.core.seq(inst_25614);
var state_25673__$1 = (function (){var statearr_25697 = state_25673;
(statearr_25697[(10)] = inst_25628__$1);

return statearr_25697;
})();
if(inst_25628__$1){
var statearr_25698_25738 = state_25673__$1;
(statearr_25698_25738[(1)] = (13));

} else {
var statearr_25699_25739 = state_25673__$1;
(statearr_25699_25739[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25674 === (9))){
var inst_25650 = (state_25673[(2)]);
var state_25673__$1 = state_25673;
var statearr_25700_25740 = state_25673__$1;
(statearr_25700_25740[(2)] = inst_25650);

(statearr_25700_25740[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25674 === (5))){
var inst_25611 = cljs.core.deref(mults);
var inst_25612 = cljs.core.vals(inst_25611);
var inst_25613 = cljs.core.seq(inst_25612);
var inst_25614 = inst_25613;
var inst_25615 = null;
var inst_25616 = (0);
var inst_25617 = (0);
var state_25673__$1 = (function (){var statearr_25701 = state_25673;
(statearr_25701[(12)] = inst_25616);

(statearr_25701[(14)] = inst_25615);

(statearr_25701[(15)] = inst_25614);

(statearr_25701[(16)] = inst_25617);

return statearr_25701;
})();
var statearr_25702_25741 = state_25673__$1;
(statearr_25702_25741[(2)] = null);

(statearr_25702_25741[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25674 === (14))){
var state_25673__$1 = state_25673;
var statearr_25706_25742 = state_25673__$1;
(statearr_25706_25742[(2)] = null);

(statearr_25706_25742[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25674 === (16))){
var inst_25628 = (state_25673[(10)]);
var inst_25632 = cljs.core.chunk_first(inst_25628);
var inst_25633 = cljs.core.chunk_rest(inst_25628);
var inst_25634 = cljs.core.count(inst_25632);
var inst_25614 = inst_25633;
var inst_25615 = inst_25632;
var inst_25616 = inst_25634;
var inst_25617 = (0);
var state_25673__$1 = (function (){var statearr_25707 = state_25673;
(statearr_25707[(12)] = inst_25616);

(statearr_25707[(14)] = inst_25615);

(statearr_25707[(15)] = inst_25614);

(statearr_25707[(16)] = inst_25617);

return statearr_25707;
})();
var statearr_25708_25743 = state_25673__$1;
(statearr_25708_25743[(2)] = null);

(statearr_25708_25743[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25674 === (10))){
var inst_25616 = (state_25673[(12)]);
var inst_25615 = (state_25673[(14)]);
var inst_25614 = (state_25673[(15)]);
var inst_25617 = (state_25673[(16)]);
var inst_25622 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25615,inst_25617);
var inst_25623 = cljs.core.async.muxch_STAR_(inst_25622);
var inst_25624 = cljs.core.async.close_BANG_(inst_25623);
var inst_25625 = (inst_25617 + (1));
var tmp25703 = inst_25616;
var tmp25704 = inst_25615;
var tmp25705 = inst_25614;
var inst_25614__$1 = tmp25705;
var inst_25615__$1 = tmp25704;
var inst_25616__$1 = tmp25703;
var inst_25617__$1 = inst_25625;
var state_25673__$1 = (function (){var statearr_25709 = state_25673;
(statearr_25709[(12)] = inst_25616__$1);

(statearr_25709[(17)] = inst_25624);

(statearr_25709[(14)] = inst_25615__$1);

(statearr_25709[(15)] = inst_25614__$1);

(statearr_25709[(16)] = inst_25617__$1);

return statearr_25709;
})();
var statearr_25710_25744 = state_25673__$1;
(statearr_25710_25744[(2)] = null);

(statearr_25710_25744[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25674 === (18))){
var inst_25643 = (state_25673[(2)]);
var state_25673__$1 = state_25673;
var statearr_25711_25745 = state_25673__$1;
(statearr_25711_25745[(2)] = inst_25643);

(statearr_25711_25745[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25674 === (8))){
var inst_25616 = (state_25673[(12)]);
var inst_25617 = (state_25673[(16)]);
var inst_25619 = (inst_25617 < inst_25616);
var inst_25620 = inst_25619;
var state_25673__$1 = state_25673;
if(cljs.core.truth_(inst_25620)){
var statearr_25712_25746 = state_25673__$1;
(statearr_25712_25746[(1)] = (10));

} else {
var statearr_25713_25747 = state_25673__$1;
(statearr_25713_25747[(1)] = (11));

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
});})(c__24483__auto___25719,mults,ensure_mult,p))
;
return ((function (switch__24381__auto__,c__24483__auto___25719,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24382__auto__ = null;
var cljs$core$async$state_machine__24382__auto____0 = (function (){
var statearr_25714 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25714[(0)] = cljs$core$async$state_machine__24382__auto__);

(statearr_25714[(1)] = (1));

return statearr_25714;
});
var cljs$core$async$state_machine__24382__auto____1 = (function (state_25673){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__(state_25673);
if(cljs.core.keyword_identical_QMARK_(result__24384__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e25715){if((e25715 instanceof Object)){
var ex__24385__auto__ = e25715;
var statearr_25716_25748 = state_25673;
(statearr_25716_25748[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25673);

return cljs.core.cst$kw$recur;
} else {
throw e25715;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24383__auto__,cljs.core.cst$kw$recur)){
var G__25749 = state_25673;
state_25673 = G__25749;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$state_machine__24382__auto__ = function(state_25673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24382__auto____1.call(this,state_25673);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24382__auto____0;
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24382__auto____1;
return cljs$core$async$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24483__auto___25719,mults,ensure_mult,p))
})();
var state__24485__auto__ = (function (){var statearr_25717 = (f__24484__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24484__auto__.cljs$core$IFn$_invoke$arity$0() : f__24484__auto__.call(null));
(statearr_25717[(6)] = c__24483__auto___25719);

return statearr_25717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24485__auto__);
});})(c__24483__auto___25719,mults,ensure_mult,p))
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
var G__25751 = arguments.length;
switch (G__25751) {
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
var G__25754 = arguments.length;
switch (G__25754) {
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
var G__25757 = arguments.length;
switch (G__25757) {
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
var c__24483__auto___25824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24483__auto___25824,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24484__auto__ = (function (){var switch__24381__auto__ = ((function (c__24483__auto___25824,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25796){
var state_val_25797 = (state_25796[(1)]);
if((state_val_25797 === (7))){
var state_25796__$1 = state_25796;
var statearr_25798_25825 = state_25796__$1;
(statearr_25798_25825[(2)] = null);

(statearr_25798_25825[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25797 === (1))){
var state_25796__$1 = state_25796;
var statearr_25799_25826 = state_25796__$1;
(statearr_25799_25826[(2)] = null);

(statearr_25799_25826[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25797 === (4))){
var inst_25760 = (state_25796[(7)]);
var inst_25762 = (inst_25760 < cnt);
var state_25796__$1 = state_25796;
if(cljs.core.truth_(inst_25762)){
var statearr_25800_25827 = state_25796__$1;
(statearr_25800_25827[(1)] = (6));

} else {
var statearr_25801_25828 = state_25796__$1;
(statearr_25801_25828[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25797 === (15))){
var inst_25792 = (state_25796[(2)]);
var state_25796__$1 = state_25796;
var statearr_25802_25829 = state_25796__$1;
(statearr_25802_25829[(2)] = inst_25792);

(statearr_25802_25829[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25797 === (13))){
var inst_25785 = cljs.core.async.close_BANG_(out);
var state_25796__$1 = state_25796;
var statearr_25803_25830 = state_25796__$1;
(statearr_25803_25830[(2)] = inst_25785);

(statearr_25803_25830[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25797 === (6))){
var state_25796__$1 = state_25796;
var statearr_25804_25831 = state_25796__$1;
(statearr_25804_25831[(2)] = null);

(statearr_25804_25831[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25797 === (3))){
var inst_25794 = (state_25796[(2)]);
var state_25796__$1 = state_25796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25796__$1,inst_25794);
} else {
if((state_val_25797 === (12))){
var inst_25782 = (state_25796[(8)]);
var inst_25782__$1 = (state_25796[(2)]);
var inst_25783 = cljs.core.some(cljs.core.nil_QMARK_,inst_25782__$1);
var state_25796__$1 = (function (){var statearr_25805 = state_25796;
(statearr_25805[(8)] = inst_25782__$1);

return statearr_25805;
})();
if(cljs.core.truth_(inst_25783)){
var statearr_25806_25832 = state_25796__$1;
(statearr_25806_25832[(1)] = (13));

} else {
var statearr_25807_25833 = state_25796__$1;
(statearr_25807_25833[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25797 === (2))){
var inst_25759 = cljs.core.reset_BANG_(dctr,cnt);
var inst_25760 = (0);
var state_25796__$1 = (function (){var statearr_25808 = state_25796;
(statearr_25808[(9)] = inst_25759);

(statearr_25808[(7)] = inst_25760);

return statearr_25808;
})();
var statearr_25809_25834 = state_25796__$1;
(statearr_25809_25834[(2)] = null);

(statearr_25809_25834[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25797 === (11))){
var inst_25760 = (state_25796[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25796,(10),Object,null,(9));
var inst_25769 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25760) : chs__$1.call(null,inst_25760));
var inst_25770 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25760) : done.call(null,inst_25760));
var inst_25771 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25769,inst_25770);
var state_25796__$1 = state_25796;
var statearr_25810_25835 = state_25796__$1;
(statearr_25810_25835[(2)] = inst_25771);


cljs.core.async.impl.ioc_helpers.process_exception(state_25796__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_25797 === (9))){
var inst_25760 = (state_25796[(7)]);
var inst_25773 = (state_25796[(2)]);
var inst_25774 = (inst_25760 + (1));
var inst_25760__$1 = inst_25774;
var state_25796__$1 = (function (){var statearr_25811 = state_25796;
(statearr_25811[(10)] = inst_25773);

(statearr_25811[(7)] = inst_25760__$1);

return statearr_25811;
})();
var statearr_25812_25836 = state_25796__$1;
(statearr_25812_25836[(2)] = null);

(statearr_25812_25836[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25797 === (5))){
var inst_25780 = (state_25796[(2)]);
var state_25796__$1 = (function (){var statearr_25813 = state_25796;
(statearr_25813[(11)] = inst_25780);

return statearr_25813;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25796__$1,(12),dchan);
} else {
if((state_val_25797 === (14))){
var inst_25782 = (state_25796[(8)]);
var inst_25787 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25782);
var state_25796__$1 = state_25796;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25796__$1,(16),out,inst_25787);
} else {
if((state_val_25797 === (16))){
var inst_25789 = (state_25796[(2)]);
var state_25796__$1 = (function (){var statearr_25814 = state_25796;
(statearr_25814[(12)] = inst_25789);

return statearr_25814;
})();
var statearr_25815_25837 = state_25796__$1;
(statearr_25815_25837[(2)] = null);

(statearr_25815_25837[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25797 === (10))){
var inst_25764 = (state_25796[(2)]);
var inst_25765 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_25796__$1 = (function (){var statearr_25816 = state_25796;
(statearr_25816[(13)] = inst_25764);

return statearr_25816;
})();
var statearr_25817_25838 = state_25796__$1;
(statearr_25817_25838[(2)] = inst_25765);


cljs.core.async.impl.ioc_helpers.process_exception(state_25796__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_25797 === (8))){
var inst_25778 = (state_25796[(2)]);
var state_25796__$1 = state_25796;
var statearr_25818_25839 = state_25796__$1;
(statearr_25818_25839[(2)] = inst_25778);

(statearr_25818_25839[(1)] = (5));


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
});})(c__24483__auto___25824,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24381__auto__,c__24483__auto___25824,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24382__auto__ = null;
var cljs$core$async$state_machine__24382__auto____0 = (function (){
var statearr_25819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25819[(0)] = cljs$core$async$state_machine__24382__auto__);

(statearr_25819[(1)] = (1));

return statearr_25819;
});
var cljs$core$async$state_machine__24382__auto____1 = (function (state_25796){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__(state_25796);
if(cljs.core.keyword_identical_QMARK_(result__24384__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e25820){if((e25820 instanceof Object)){
var ex__24385__auto__ = e25820;
var statearr_25821_25840 = state_25796;
(statearr_25821_25840[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25796);

return cljs.core.cst$kw$recur;
} else {
throw e25820;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24383__auto__,cljs.core.cst$kw$recur)){
var G__25841 = state_25796;
state_25796 = G__25841;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$state_machine__24382__auto__ = function(state_25796){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24382__auto____1.call(this,state_25796);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24382__auto____0;
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24382__auto____1;
return cljs$core$async$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24483__auto___25824,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24485__auto__ = (function (){var statearr_25822 = (f__24484__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24484__auto__.cljs$core$IFn$_invoke$arity$0() : f__24484__auto__.call(null));
(statearr_25822[(6)] = c__24483__auto___25824);

return statearr_25822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24485__auto__);
});})(c__24483__auto___25824,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__25844 = arguments.length;
switch (G__25844) {
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
var c__24483__auto___25898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24483__auto___25898,out){
return (function (){
var f__24484__auto__ = (function (){var switch__24381__auto__ = ((function (c__24483__auto___25898,out){
return (function (state_25876){
var state_val_25877 = (state_25876[(1)]);
if((state_val_25877 === (7))){
var inst_25855 = (state_25876[(7)]);
var inst_25856 = (state_25876[(8)]);
var inst_25855__$1 = (state_25876[(2)]);
var inst_25856__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25855__$1,(0),null);
var inst_25857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25855__$1,(1),null);
var inst_25858 = (inst_25856__$1 == null);
var state_25876__$1 = (function (){var statearr_25878 = state_25876;
(statearr_25878[(7)] = inst_25855__$1);

(statearr_25878[(9)] = inst_25857);

(statearr_25878[(8)] = inst_25856__$1);

return statearr_25878;
})();
if(cljs.core.truth_(inst_25858)){
var statearr_25879_25899 = state_25876__$1;
(statearr_25879_25899[(1)] = (8));

} else {
var statearr_25880_25900 = state_25876__$1;
(statearr_25880_25900[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25877 === (1))){
var inst_25845 = cljs.core.vec(chs);
var inst_25846 = inst_25845;
var state_25876__$1 = (function (){var statearr_25881 = state_25876;
(statearr_25881[(10)] = inst_25846);

return statearr_25881;
})();
var statearr_25882_25901 = state_25876__$1;
(statearr_25882_25901[(2)] = null);

(statearr_25882_25901[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25877 === (4))){
var inst_25846 = (state_25876[(10)]);
var state_25876__$1 = state_25876;
return cljs.core.async.ioc_alts_BANG_(state_25876__$1,(7),inst_25846);
} else {
if((state_val_25877 === (6))){
var inst_25872 = (state_25876[(2)]);
var state_25876__$1 = state_25876;
var statearr_25883_25902 = state_25876__$1;
(statearr_25883_25902[(2)] = inst_25872);

(statearr_25883_25902[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25877 === (3))){
var inst_25874 = (state_25876[(2)]);
var state_25876__$1 = state_25876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25876__$1,inst_25874);
} else {
if((state_val_25877 === (2))){
var inst_25846 = (state_25876[(10)]);
var inst_25848 = cljs.core.count(inst_25846);
var inst_25849 = (inst_25848 > (0));
var state_25876__$1 = state_25876;
if(cljs.core.truth_(inst_25849)){
var statearr_25885_25903 = state_25876__$1;
(statearr_25885_25903[(1)] = (4));

} else {
var statearr_25886_25904 = state_25876__$1;
(statearr_25886_25904[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25877 === (11))){
var inst_25846 = (state_25876[(10)]);
var inst_25865 = (state_25876[(2)]);
var tmp25884 = inst_25846;
var inst_25846__$1 = tmp25884;
var state_25876__$1 = (function (){var statearr_25887 = state_25876;
(statearr_25887[(11)] = inst_25865);

(statearr_25887[(10)] = inst_25846__$1);

return statearr_25887;
})();
var statearr_25888_25905 = state_25876__$1;
(statearr_25888_25905[(2)] = null);

(statearr_25888_25905[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25877 === (9))){
var inst_25856 = (state_25876[(8)]);
var state_25876__$1 = state_25876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25876__$1,(11),out,inst_25856);
} else {
if((state_val_25877 === (5))){
var inst_25870 = cljs.core.async.close_BANG_(out);
var state_25876__$1 = state_25876;
var statearr_25889_25906 = state_25876__$1;
(statearr_25889_25906[(2)] = inst_25870);

(statearr_25889_25906[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25877 === (10))){
var inst_25868 = (state_25876[(2)]);
var state_25876__$1 = state_25876;
var statearr_25890_25907 = state_25876__$1;
(statearr_25890_25907[(2)] = inst_25868);

(statearr_25890_25907[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25877 === (8))){
var inst_25855 = (state_25876[(7)]);
var inst_25857 = (state_25876[(9)]);
var inst_25846 = (state_25876[(10)]);
var inst_25856 = (state_25876[(8)]);
var inst_25860 = (function (){var cs = inst_25846;
var vec__25851 = inst_25855;
var v = inst_25856;
var c = inst_25857;
return ((function (cs,vec__25851,v,c,inst_25855,inst_25857,inst_25846,inst_25856,state_val_25877,c__24483__auto___25898,out){
return (function (p1__25842_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25842_SHARP_);
});
;})(cs,vec__25851,v,c,inst_25855,inst_25857,inst_25846,inst_25856,state_val_25877,c__24483__auto___25898,out))
})();
var inst_25861 = cljs.core.filterv(inst_25860,inst_25846);
var inst_25846__$1 = inst_25861;
var state_25876__$1 = (function (){var statearr_25891 = state_25876;
(statearr_25891[(10)] = inst_25846__$1);

return statearr_25891;
})();
var statearr_25892_25908 = state_25876__$1;
(statearr_25892_25908[(2)] = null);

(statearr_25892_25908[(1)] = (2));


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
});})(c__24483__auto___25898,out))
;
return ((function (switch__24381__auto__,c__24483__auto___25898,out){
return (function() {
var cljs$core$async$state_machine__24382__auto__ = null;
var cljs$core$async$state_machine__24382__auto____0 = (function (){
var statearr_25893 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25893[(0)] = cljs$core$async$state_machine__24382__auto__);

(statearr_25893[(1)] = (1));

return statearr_25893;
});
var cljs$core$async$state_machine__24382__auto____1 = (function (state_25876){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__(state_25876);
if(cljs.core.keyword_identical_QMARK_(result__24384__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e25894){if((e25894 instanceof Object)){
var ex__24385__auto__ = e25894;
var statearr_25895_25909 = state_25876;
(statearr_25895_25909[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25876);

return cljs.core.cst$kw$recur;
} else {
throw e25894;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24383__auto__,cljs.core.cst$kw$recur)){
var G__25910 = state_25876;
state_25876 = G__25910;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$state_machine__24382__auto__ = function(state_25876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24382__auto____1.call(this,state_25876);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24382__auto____0;
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24382__auto____1;
return cljs$core$async$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24483__auto___25898,out))
})();
var state__24485__auto__ = (function (){var statearr_25896 = (f__24484__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24484__auto__.cljs$core$IFn$_invoke$arity$0() : f__24484__auto__.call(null));
(statearr_25896[(6)] = c__24483__auto___25898);

return statearr_25896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24485__auto__);
});})(c__24483__auto___25898,out))
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
var G__25912 = arguments.length;
switch (G__25912) {
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
var c__24483__auto___25957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24483__auto___25957,out){
return (function (){
var f__24484__auto__ = (function (){var switch__24381__auto__ = ((function (c__24483__auto___25957,out){
return (function (state_25936){
var state_val_25937 = (state_25936[(1)]);
if((state_val_25937 === (7))){
var inst_25918 = (state_25936[(7)]);
var inst_25918__$1 = (state_25936[(2)]);
var inst_25919 = (inst_25918__$1 == null);
var inst_25920 = cljs.core.not(inst_25919);
var state_25936__$1 = (function (){var statearr_25938 = state_25936;
(statearr_25938[(7)] = inst_25918__$1);

return statearr_25938;
})();
if(inst_25920){
var statearr_25939_25958 = state_25936__$1;
(statearr_25939_25958[(1)] = (8));

} else {
var statearr_25940_25959 = state_25936__$1;
(statearr_25940_25959[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25937 === (1))){
var inst_25913 = (0);
var state_25936__$1 = (function (){var statearr_25941 = state_25936;
(statearr_25941[(8)] = inst_25913);

return statearr_25941;
})();
var statearr_25942_25960 = state_25936__$1;
(statearr_25942_25960[(2)] = null);

(statearr_25942_25960[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25937 === (4))){
var state_25936__$1 = state_25936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25936__$1,(7),ch);
} else {
if((state_val_25937 === (6))){
var inst_25931 = (state_25936[(2)]);
var state_25936__$1 = state_25936;
var statearr_25943_25961 = state_25936__$1;
(statearr_25943_25961[(2)] = inst_25931);

(statearr_25943_25961[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25937 === (3))){
var inst_25933 = (state_25936[(2)]);
var inst_25934 = cljs.core.async.close_BANG_(out);
var state_25936__$1 = (function (){var statearr_25944 = state_25936;
(statearr_25944[(9)] = inst_25933);

return statearr_25944;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25936__$1,inst_25934);
} else {
if((state_val_25937 === (2))){
var inst_25913 = (state_25936[(8)]);
var inst_25915 = (inst_25913 < n);
var state_25936__$1 = state_25936;
if(cljs.core.truth_(inst_25915)){
var statearr_25945_25962 = state_25936__$1;
(statearr_25945_25962[(1)] = (4));

} else {
var statearr_25946_25963 = state_25936__$1;
(statearr_25946_25963[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25937 === (11))){
var inst_25913 = (state_25936[(8)]);
var inst_25923 = (state_25936[(2)]);
var inst_25924 = (inst_25913 + (1));
var inst_25913__$1 = inst_25924;
var state_25936__$1 = (function (){var statearr_25947 = state_25936;
(statearr_25947[(8)] = inst_25913__$1);

(statearr_25947[(10)] = inst_25923);

return statearr_25947;
})();
var statearr_25948_25964 = state_25936__$1;
(statearr_25948_25964[(2)] = null);

(statearr_25948_25964[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25937 === (9))){
var state_25936__$1 = state_25936;
var statearr_25949_25965 = state_25936__$1;
(statearr_25949_25965[(2)] = null);

(statearr_25949_25965[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25937 === (5))){
var state_25936__$1 = state_25936;
var statearr_25950_25966 = state_25936__$1;
(statearr_25950_25966[(2)] = null);

(statearr_25950_25966[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25937 === (10))){
var inst_25928 = (state_25936[(2)]);
var state_25936__$1 = state_25936;
var statearr_25951_25967 = state_25936__$1;
(statearr_25951_25967[(2)] = inst_25928);

(statearr_25951_25967[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25937 === (8))){
var inst_25918 = (state_25936[(7)]);
var state_25936__$1 = state_25936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25936__$1,(11),out,inst_25918);
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
});})(c__24483__auto___25957,out))
;
return ((function (switch__24381__auto__,c__24483__auto___25957,out){
return (function() {
var cljs$core$async$state_machine__24382__auto__ = null;
var cljs$core$async$state_machine__24382__auto____0 = (function (){
var statearr_25952 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25952[(0)] = cljs$core$async$state_machine__24382__auto__);

(statearr_25952[(1)] = (1));

return statearr_25952;
});
var cljs$core$async$state_machine__24382__auto____1 = (function (state_25936){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__(state_25936);
if(cljs.core.keyword_identical_QMARK_(result__24384__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e25953){if((e25953 instanceof Object)){
var ex__24385__auto__ = e25953;
var statearr_25954_25968 = state_25936;
(statearr_25954_25968[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25936);

return cljs.core.cst$kw$recur;
} else {
throw e25953;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24383__auto__,cljs.core.cst$kw$recur)){
var G__25969 = state_25936;
state_25936 = G__25969;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$state_machine__24382__auto__ = function(state_25936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24382__auto____1.call(this,state_25936);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24382__auto____0;
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24382__auto____1;
return cljs$core$async$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24483__auto___25957,out))
})();
var state__24485__auto__ = (function (){var statearr_25955 = (f__24484__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24484__auto__.cljs$core$IFn$_invoke$arity$0() : f__24484__auto__.call(null));
(statearr_25955[(6)] = c__24483__auto___25957);

return statearr_25955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24485__auto__);
});})(c__24483__auto___25957,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25971 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25971 = (function (f,ch,meta25972){
this.f = f;
this.ch = ch;
this.meta25972 = meta25972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25973,meta25972__$1){
var self__ = this;
var _25973__$1 = this;
return (new cljs.core.async.t_cljs$core$async25971(self__.f,self__.ch,meta25972__$1));
});

cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25973){
var self__ = this;
var _25973__$1 = this;
return self__.meta25972;
});

cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25974 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25974 = (function (f,ch,meta25972,_,fn1,meta25975){
this.f = f;
this.ch = ch;
this.meta25972 = meta25972;
this._ = _;
this.fn1 = fn1;
this.meta25975 = meta25975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25976,meta25975__$1){
var self__ = this;
var _25976__$1 = this;
return (new cljs.core.async.t_cljs$core$async25974(self__.f,self__.ch,self__.meta25972,self__._,self__.fn1,meta25975__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25974.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25976){
var self__ = this;
var _25976__$1 = this;
return self__.meta25975;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25974.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25974.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25974.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25974.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25970_SHARP_){
var G__25977 = (((p1__25970_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__25970_SHARP_) : self__.f.call(null,p1__25970_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__25977) : f1.call(null,G__25977));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25974.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25972,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async25971], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta25975], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25974.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25974";

cljs.core.async.t_cljs$core$async25974.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async/t_cljs$core$async25974");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25974 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25974(f__$1,ch__$1,meta25972__$1,___$2,fn1__$1,meta25975){
return (new cljs.core.async.t_cljs$core$async25974(f__$1,ch__$1,meta25972__$1,___$2,fn1__$1,meta25975));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25974(self__.f,self__.ch,self__.meta25972,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__11731__auto__ = ret;
if(cljs.core.truth_(and__11731__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__11731__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__25978 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25978) : self__.f.call(null,G__25978));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25972], null);
});

cljs.core.async.t_cljs$core$async25971.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25971";

cljs.core.async.t_cljs$core$async25971.cljs$lang$ctorPrWriter = (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async/t_cljs$core$async25971");
});

cljs.core.async.__GT_t_cljs$core$async25971 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25971(f__$1,ch__$1,meta25972){
return (new cljs.core.async.t_cljs$core$async25971(f__$1,ch__$1,meta25972));
});

}

return (new cljs.core.async.t_cljs$core$async25971(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25979 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25979 = (function (f,ch,meta25980){
this.f = f;
this.ch = ch;
this.meta25980 = meta25980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25981,meta25980__$1){
var self__ = this;
var _25981__$1 = this;
return (new cljs.core.async.t_cljs$core$async25979(self__.f,self__.ch,meta25980__$1));
});

cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25981){
var self__ = this;
var _25981__$1 = this;
return self__.meta25980;
});

cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25979.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async25979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25980], null);
});

cljs.core.async.t_cljs$core$async25979.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25979";

cljs.core.async.t_cljs$core$async25979.cljs$lang$ctorPrWriter = (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async/t_cljs$core$async25979");
});

cljs.core.async.__GT_t_cljs$core$async25979 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25979(f__$1,ch__$1,meta25980){
return (new cljs.core.async.t_cljs$core$async25979(f__$1,ch__$1,meta25980));
});

}

return (new cljs.core.async.t_cljs$core$async25979(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25982 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25982 = (function (p,ch,meta25983){
this.p = p;
this.ch = ch;
this.meta25983 = meta25983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25984,meta25983__$1){
var self__ = this;
var _25984__$1 = this;
return (new cljs.core.async.t_cljs$core$async25982(self__.p,self__.ch,meta25983__$1));
});

cljs.core.async.t_cljs$core$async25982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25984){
var self__ = this;
var _25984__$1 = this;
return self__.meta25983;
});

cljs.core.async.t_cljs$core$async25982.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25982.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async25982.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async25982.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25982.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25982.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25982.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25983], null);
});

cljs.core.async.t_cljs$core$async25982.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25982";

cljs.core.async.t_cljs$core$async25982.cljs$lang$ctorPrWriter = (function (this__12414__auto__,writer__12415__auto__,opt__12416__auto__){
return cljs.core._write(writer__12415__auto__,"cljs.core.async/t_cljs$core$async25982");
});

cljs.core.async.__GT_t_cljs$core$async25982 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25982(p__$1,ch__$1,meta25983){
return (new cljs.core.async.t_cljs$core$async25982(p__$1,ch__$1,meta25983));
});

}

return (new cljs.core.async.t_cljs$core$async25982(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25986 = arguments.length;
switch (G__25986) {
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
var c__24483__auto___26026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24483__auto___26026,out){
return (function (){
var f__24484__auto__ = (function (){var switch__24381__auto__ = ((function (c__24483__auto___26026,out){
return (function (state_26007){
var state_val_26008 = (state_26007[(1)]);
if((state_val_26008 === (7))){
var inst_26003 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
var statearr_26009_26027 = state_26007__$1;
(statearr_26009_26027[(2)] = inst_26003);

(statearr_26009_26027[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (1))){
var state_26007__$1 = state_26007;
var statearr_26010_26028 = state_26007__$1;
(statearr_26010_26028[(2)] = null);

(statearr_26010_26028[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (4))){
var inst_25989 = (state_26007[(7)]);
var inst_25989__$1 = (state_26007[(2)]);
var inst_25990 = (inst_25989__$1 == null);
var state_26007__$1 = (function (){var statearr_26011 = state_26007;
(statearr_26011[(7)] = inst_25989__$1);

return statearr_26011;
})();
if(cljs.core.truth_(inst_25990)){
var statearr_26012_26029 = state_26007__$1;
(statearr_26012_26029[(1)] = (5));

} else {
var statearr_26013_26030 = state_26007__$1;
(statearr_26013_26030[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (6))){
var inst_25989 = (state_26007[(7)]);
var inst_25994 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_25989) : p.call(null,inst_25989));
var state_26007__$1 = state_26007;
if(cljs.core.truth_(inst_25994)){
var statearr_26014_26031 = state_26007__$1;
(statearr_26014_26031[(1)] = (8));

} else {
var statearr_26015_26032 = state_26007__$1;
(statearr_26015_26032[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (3))){
var inst_26005 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26007__$1,inst_26005);
} else {
if((state_val_26008 === (2))){
var state_26007__$1 = state_26007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26007__$1,(4),ch);
} else {
if((state_val_26008 === (11))){
var inst_25997 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
var statearr_26016_26033 = state_26007__$1;
(statearr_26016_26033[(2)] = inst_25997);

(statearr_26016_26033[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (9))){
var state_26007__$1 = state_26007;
var statearr_26017_26034 = state_26007__$1;
(statearr_26017_26034[(2)] = null);

(statearr_26017_26034[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (5))){
var inst_25992 = cljs.core.async.close_BANG_(out);
var state_26007__$1 = state_26007;
var statearr_26018_26035 = state_26007__$1;
(statearr_26018_26035[(2)] = inst_25992);

(statearr_26018_26035[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (10))){
var inst_26000 = (state_26007[(2)]);
var state_26007__$1 = (function (){var statearr_26019 = state_26007;
(statearr_26019[(8)] = inst_26000);

return statearr_26019;
})();
var statearr_26020_26036 = state_26007__$1;
(statearr_26020_26036[(2)] = null);

(statearr_26020_26036[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (8))){
var inst_25989 = (state_26007[(7)]);
var state_26007__$1 = state_26007;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26007__$1,(11),out,inst_25989);
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
});})(c__24483__auto___26026,out))
;
return ((function (switch__24381__auto__,c__24483__auto___26026,out){
return (function() {
var cljs$core$async$state_machine__24382__auto__ = null;
var cljs$core$async$state_machine__24382__auto____0 = (function (){
var statearr_26021 = [null,null,null,null,null,null,null,null,null];
(statearr_26021[(0)] = cljs$core$async$state_machine__24382__auto__);

(statearr_26021[(1)] = (1));

return statearr_26021;
});
var cljs$core$async$state_machine__24382__auto____1 = (function (state_26007){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__(state_26007);
if(cljs.core.keyword_identical_QMARK_(result__24384__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e26022){if((e26022 instanceof Object)){
var ex__24385__auto__ = e26022;
var statearr_26023_26037 = state_26007;
(statearr_26023_26037[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26007);

return cljs.core.cst$kw$recur;
} else {
throw e26022;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24383__auto__,cljs.core.cst$kw$recur)){
var G__26038 = state_26007;
state_26007 = G__26038;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$state_machine__24382__auto__ = function(state_26007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24382__auto____1.call(this,state_26007);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24382__auto____0;
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24382__auto____1;
return cljs$core$async$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24483__auto___26026,out))
})();
var state__24485__auto__ = (function (){var statearr_26024 = (f__24484__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24484__auto__.cljs$core$IFn$_invoke$arity$0() : f__24484__auto__.call(null));
(statearr_26024[(6)] = c__24483__auto___26026);

return statearr_26024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24485__auto__);
});})(c__24483__auto___26026,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26040 = arguments.length;
switch (G__26040) {
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
var c__24483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24483__auto__){
return (function (){
var f__24484__auto__ = (function (){var switch__24381__auto__ = ((function (c__24483__auto__){
return (function (state_26103){
var state_val_26104 = (state_26103[(1)]);
if((state_val_26104 === (7))){
var inst_26099 = (state_26103[(2)]);
var state_26103__$1 = state_26103;
var statearr_26105_26143 = state_26103__$1;
(statearr_26105_26143[(2)] = inst_26099);

(statearr_26105_26143[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26104 === (20))){
var inst_26069 = (state_26103[(7)]);
var inst_26080 = (state_26103[(2)]);
var inst_26081 = cljs.core.next(inst_26069);
var inst_26055 = inst_26081;
var inst_26056 = null;
var inst_26057 = (0);
var inst_26058 = (0);
var state_26103__$1 = (function (){var statearr_26106 = state_26103;
(statearr_26106[(8)] = inst_26058);

(statearr_26106[(9)] = inst_26056);

(statearr_26106[(10)] = inst_26057);

(statearr_26106[(11)] = inst_26080);

(statearr_26106[(12)] = inst_26055);

return statearr_26106;
})();
var statearr_26107_26144 = state_26103__$1;
(statearr_26107_26144[(2)] = null);

(statearr_26107_26144[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26104 === (1))){
var state_26103__$1 = state_26103;
var statearr_26108_26145 = state_26103__$1;
(statearr_26108_26145[(2)] = null);

(statearr_26108_26145[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26104 === (4))){
var inst_26044 = (state_26103[(13)]);
var inst_26044__$1 = (state_26103[(2)]);
var inst_26045 = (inst_26044__$1 == null);
var state_26103__$1 = (function (){var statearr_26109 = state_26103;
(statearr_26109[(13)] = inst_26044__$1);

return statearr_26109;
})();
if(cljs.core.truth_(inst_26045)){
var statearr_26110_26146 = state_26103__$1;
(statearr_26110_26146[(1)] = (5));

} else {
var statearr_26111_26147 = state_26103__$1;
(statearr_26111_26147[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26104 === (15))){
var state_26103__$1 = state_26103;
var statearr_26115_26148 = state_26103__$1;
(statearr_26115_26148[(2)] = null);

(statearr_26115_26148[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26104 === (21))){
var state_26103__$1 = state_26103;
var statearr_26116_26149 = state_26103__$1;
(statearr_26116_26149[(2)] = null);

(statearr_26116_26149[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26104 === (13))){
var inst_26058 = (state_26103[(8)]);
var inst_26056 = (state_26103[(9)]);
var inst_26057 = (state_26103[(10)]);
var inst_26055 = (state_26103[(12)]);
var inst_26065 = (state_26103[(2)]);
var inst_26066 = (inst_26058 + (1));
var tmp26112 = inst_26056;
var tmp26113 = inst_26057;
var tmp26114 = inst_26055;
var inst_26055__$1 = tmp26114;
var inst_26056__$1 = tmp26112;
var inst_26057__$1 = tmp26113;
var inst_26058__$1 = inst_26066;
var state_26103__$1 = (function (){var statearr_26117 = state_26103;
(statearr_26117[(8)] = inst_26058__$1);

(statearr_26117[(9)] = inst_26056__$1);

(statearr_26117[(14)] = inst_26065);

(statearr_26117[(10)] = inst_26057__$1);

(statearr_26117[(12)] = inst_26055__$1);

return statearr_26117;
})();
var statearr_26118_26150 = state_26103__$1;
(statearr_26118_26150[(2)] = null);

(statearr_26118_26150[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26104 === (22))){
var state_26103__$1 = state_26103;
var statearr_26119_26151 = state_26103__$1;
(statearr_26119_26151[(2)] = null);

(statearr_26119_26151[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26104 === (6))){
var inst_26044 = (state_26103[(13)]);
var inst_26053 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26044) : f.call(null,inst_26044));
var inst_26054 = cljs.core.seq(inst_26053);
var inst_26055 = inst_26054;
var inst_26056 = null;
var inst_26057 = (0);
var inst_26058 = (0);
var state_26103__$1 = (function (){var statearr_26120 = state_26103;
(statearr_26120[(8)] = inst_26058);

(statearr_26120[(9)] = inst_26056);

(statearr_26120[(10)] = inst_26057);

(statearr_26120[(12)] = inst_26055);

return statearr_26120;
})();
var statearr_26121_26152 = state_26103__$1;
(statearr_26121_26152[(2)] = null);

(statearr_26121_26152[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26104 === (17))){
var inst_26069 = (state_26103[(7)]);
var inst_26073 = cljs.core.chunk_first(inst_26069);
var inst_26074 = cljs.core.chunk_rest(inst_26069);
var inst_26075 = cljs.core.count(inst_26073);
var inst_26055 = inst_26074;
var inst_26056 = inst_26073;
var inst_26057 = inst_26075;
var inst_26058 = (0);
var state_26103__$1 = (function (){var statearr_26122 = state_26103;
(statearr_26122[(8)] = inst_26058);

(statearr_26122[(9)] = inst_26056);

(statearr_26122[(10)] = inst_26057);

(statearr_26122[(12)] = inst_26055);

return statearr_26122;
})();
var statearr_26123_26153 = state_26103__$1;
(statearr_26123_26153[(2)] = null);

(statearr_26123_26153[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26104 === (3))){
var inst_26101 = (state_26103[(2)]);
var state_26103__$1 = state_26103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26103__$1,inst_26101);
} else {
if((state_val_26104 === (12))){
var inst_26089 = (state_26103[(2)]);
var state_26103__$1 = state_26103;
var statearr_26124_26154 = state_26103__$1;
(statearr_26124_26154[(2)] = inst_26089);

(statearr_26124_26154[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26104 === (2))){
var state_26103__$1 = state_26103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26103__$1,(4),in$);
} else {
if((state_val_26104 === (23))){
var inst_26097 = (state_26103[(2)]);
var state_26103__$1 = state_26103;
var statearr_26125_26155 = state_26103__$1;
(statearr_26125_26155[(2)] = inst_26097);

(statearr_26125_26155[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26104 === (19))){
var inst_26084 = (state_26103[(2)]);
var state_26103__$1 = state_26103;
var statearr_26126_26156 = state_26103__$1;
(statearr_26126_26156[(2)] = inst_26084);

(statearr_26126_26156[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26104 === (11))){
var inst_26069 = (state_26103[(7)]);
var inst_26055 = (state_26103[(12)]);
var inst_26069__$1 = cljs.core.seq(inst_26055);
var state_26103__$1 = (function (){var statearr_26127 = state_26103;
(statearr_26127[(7)] = inst_26069__$1);

return statearr_26127;
})();
if(inst_26069__$1){
var statearr_26128_26157 = state_26103__$1;
(statearr_26128_26157[(1)] = (14));

} else {
var statearr_26129_26158 = state_26103__$1;
(statearr_26129_26158[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26104 === (9))){
var inst_26091 = (state_26103[(2)]);
var inst_26092 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26103__$1 = (function (){var statearr_26130 = state_26103;
(statearr_26130[(15)] = inst_26091);

return statearr_26130;
})();
if(cljs.core.truth_(inst_26092)){
var statearr_26131_26159 = state_26103__$1;
(statearr_26131_26159[(1)] = (21));

} else {
var statearr_26132_26160 = state_26103__$1;
(statearr_26132_26160[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26104 === (5))){
var inst_26047 = cljs.core.async.close_BANG_(out);
var state_26103__$1 = state_26103;
var statearr_26133_26161 = state_26103__$1;
(statearr_26133_26161[(2)] = inst_26047);

(statearr_26133_26161[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26104 === (14))){
var inst_26069 = (state_26103[(7)]);
var inst_26071 = cljs.core.chunked_seq_QMARK_(inst_26069);
var state_26103__$1 = state_26103;
if(inst_26071){
var statearr_26134_26162 = state_26103__$1;
(statearr_26134_26162[(1)] = (17));

} else {
var statearr_26135_26163 = state_26103__$1;
(statearr_26135_26163[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26104 === (16))){
var inst_26087 = (state_26103[(2)]);
var state_26103__$1 = state_26103;
var statearr_26136_26164 = state_26103__$1;
(statearr_26136_26164[(2)] = inst_26087);

(statearr_26136_26164[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26104 === (10))){
var inst_26058 = (state_26103[(8)]);
var inst_26056 = (state_26103[(9)]);
var inst_26063 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26056,inst_26058);
var state_26103__$1 = state_26103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26103__$1,(13),out,inst_26063);
} else {
if((state_val_26104 === (18))){
var inst_26069 = (state_26103[(7)]);
var inst_26078 = cljs.core.first(inst_26069);
var state_26103__$1 = state_26103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26103__$1,(20),out,inst_26078);
} else {
if((state_val_26104 === (8))){
var inst_26058 = (state_26103[(8)]);
var inst_26057 = (state_26103[(10)]);
var inst_26060 = (inst_26058 < inst_26057);
var inst_26061 = inst_26060;
var state_26103__$1 = state_26103;
if(cljs.core.truth_(inst_26061)){
var statearr_26137_26165 = state_26103__$1;
(statearr_26137_26165[(1)] = (10));

} else {
var statearr_26138_26166 = state_26103__$1;
(statearr_26138_26166[(1)] = (11));

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
});})(c__24483__auto__))
;
return ((function (switch__24381__auto__,c__24483__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24382__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24382__auto____0 = (function (){
var statearr_26139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26139[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24382__auto__);

(statearr_26139[(1)] = (1));

return statearr_26139;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24382__auto____1 = (function (state_26103){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__(state_26103);
if(cljs.core.keyword_identical_QMARK_(result__24384__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e26140){if((e26140 instanceof Object)){
var ex__24385__auto__ = e26140;
var statearr_26141_26167 = state_26103;
(statearr_26141_26167[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26103);

return cljs.core.cst$kw$recur;
} else {
throw e26140;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24383__auto__,cljs.core.cst$kw$recur)){
var G__26168 = state_26103;
state_26103 = G__26168;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24382__auto__ = function(state_26103){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24382__auto____1.call(this,state_26103);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24382__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24382__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24483__auto__))
})();
var state__24485__auto__ = (function (){var statearr_26142 = (f__24484__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24484__auto__.cljs$core$IFn$_invoke$arity$0() : f__24484__auto__.call(null));
(statearr_26142[(6)] = c__24483__auto__);

return statearr_26142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24485__auto__);
});})(c__24483__auto__))
);

return c__24483__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26170 = arguments.length;
switch (G__26170) {
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
var G__26173 = arguments.length;
switch (G__26173) {
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
var G__26176 = arguments.length;
switch (G__26176) {
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
var c__24483__auto___26223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24483__auto___26223,out){
return (function (){
var f__24484__auto__ = (function (){var switch__24381__auto__ = ((function (c__24483__auto___26223,out){
return (function (state_26200){
var state_val_26201 = (state_26200[(1)]);
if((state_val_26201 === (7))){
var inst_26195 = (state_26200[(2)]);
var state_26200__$1 = state_26200;
var statearr_26202_26224 = state_26200__$1;
(statearr_26202_26224[(2)] = inst_26195);

(statearr_26202_26224[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26201 === (1))){
var inst_26177 = null;
var state_26200__$1 = (function (){var statearr_26203 = state_26200;
(statearr_26203[(7)] = inst_26177);

return statearr_26203;
})();
var statearr_26204_26225 = state_26200__$1;
(statearr_26204_26225[(2)] = null);

(statearr_26204_26225[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26201 === (4))){
var inst_26180 = (state_26200[(8)]);
var inst_26180__$1 = (state_26200[(2)]);
var inst_26181 = (inst_26180__$1 == null);
var inst_26182 = cljs.core.not(inst_26181);
var state_26200__$1 = (function (){var statearr_26205 = state_26200;
(statearr_26205[(8)] = inst_26180__$1);

return statearr_26205;
})();
if(inst_26182){
var statearr_26206_26226 = state_26200__$1;
(statearr_26206_26226[(1)] = (5));

} else {
var statearr_26207_26227 = state_26200__$1;
(statearr_26207_26227[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26201 === (6))){
var state_26200__$1 = state_26200;
var statearr_26208_26228 = state_26200__$1;
(statearr_26208_26228[(2)] = null);

(statearr_26208_26228[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26201 === (3))){
var inst_26197 = (state_26200[(2)]);
var inst_26198 = cljs.core.async.close_BANG_(out);
var state_26200__$1 = (function (){var statearr_26209 = state_26200;
(statearr_26209[(9)] = inst_26197);

return statearr_26209;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26200__$1,inst_26198);
} else {
if((state_val_26201 === (2))){
var state_26200__$1 = state_26200;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26200__$1,(4),ch);
} else {
if((state_val_26201 === (11))){
var inst_26180 = (state_26200[(8)]);
var inst_26189 = (state_26200[(2)]);
var inst_26177 = inst_26180;
var state_26200__$1 = (function (){var statearr_26210 = state_26200;
(statearr_26210[(7)] = inst_26177);

(statearr_26210[(10)] = inst_26189);

return statearr_26210;
})();
var statearr_26211_26229 = state_26200__$1;
(statearr_26211_26229[(2)] = null);

(statearr_26211_26229[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26201 === (9))){
var inst_26180 = (state_26200[(8)]);
var state_26200__$1 = state_26200;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26200__$1,(11),out,inst_26180);
} else {
if((state_val_26201 === (5))){
var inst_26180 = (state_26200[(8)]);
var inst_26177 = (state_26200[(7)]);
var inst_26184 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26180,inst_26177);
var state_26200__$1 = state_26200;
if(inst_26184){
var statearr_26213_26230 = state_26200__$1;
(statearr_26213_26230[(1)] = (8));

} else {
var statearr_26214_26231 = state_26200__$1;
(statearr_26214_26231[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26201 === (10))){
var inst_26192 = (state_26200[(2)]);
var state_26200__$1 = state_26200;
var statearr_26215_26232 = state_26200__$1;
(statearr_26215_26232[(2)] = inst_26192);

(statearr_26215_26232[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26201 === (8))){
var inst_26177 = (state_26200[(7)]);
var tmp26212 = inst_26177;
var inst_26177__$1 = tmp26212;
var state_26200__$1 = (function (){var statearr_26216 = state_26200;
(statearr_26216[(7)] = inst_26177__$1);

return statearr_26216;
})();
var statearr_26217_26233 = state_26200__$1;
(statearr_26217_26233[(2)] = null);

(statearr_26217_26233[(1)] = (2));


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
});})(c__24483__auto___26223,out))
;
return ((function (switch__24381__auto__,c__24483__auto___26223,out){
return (function() {
var cljs$core$async$state_machine__24382__auto__ = null;
var cljs$core$async$state_machine__24382__auto____0 = (function (){
var statearr_26218 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26218[(0)] = cljs$core$async$state_machine__24382__auto__);

(statearr_26218[(1)] = (1));

return statearr_26218;
});
var cljs$core$async$state_machine__24382__auto____1 = (function (state_26200){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__(state_26200);
if(cljs.core.keyword_identical_QMARK_(result__24384__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e26219){if((e26219 instanceof Object)){
var ex__24385__auto__ = e26219;
var statearr_26220_26234 = state_26200;
(statearr_26220_26234[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26200);

return cljs.core.cst$kw$recur;
} else {
throw e26219;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24383__auto__,cljs.core.cst$kw$recur)){
var G__26235 = state_26200;
state_26200 = G__26235;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$state_machine__24382__auto__ = function(state_26200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24382__auto____1.call(this,state_26200);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24382__auto____0;
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24382__auto____1;
return cljs$core$async$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24483__auto___26223,out))
})();
var state__24485__auto__ = (function (){var statearr_26221 = (f__24484__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24484__auto__.cljs$core$IFn$_invoke$arity$0() : f__24484__auto__.call(null));
(statearr_26221[(6)] = c__24483__auto___26223);

return statearr_26221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24485__auto__);
});})(c__24483__auto___26223,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26237 = arguments.length;
switch (G__26237) {
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
var c__24483__auto___26303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24483__auto___26303,out){
return (function (){
var f__24484__auto__ = (function (){var switch__24381__auto__ = ((function (c__24483__auto___26303,out){
return (function (state_26275){
var state_val_26276 = (state_26275[(1)]);
if((state_val_26276 === (7))){
var inst_26271 = (state_26275[(2)]);
var state_26275__$1 = state_26275;
var statearr_26277_26304 = state_26275__$1;
(statearr_26277_26304[(2)] = inst_26271);

(statearr_26277_26304[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26276 === (1))){
var inst_26238 = (new Array(n));
var inst_26239 = inst_26238;
var inst_26240 = (0);
var state_26275__$1 = (function (){var statearr_26278 = state_26275;
(statearr_26278[(7)] = inst_26240);

(statearr_26278[(8)] = inst_26239);

return statearr_26278;
})();
var statearr_26279_26305 = state_26275__$1;
(statearr_26279_26305[(2)] = null);

(statearr_26279_26305[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26276 === (4))){
var inst_26243 = (state_26275[(9)]);
var inst_26243__$1 = (state_26275[(2)]);
var inst_26244 = (inst_26243__$1 == null);
var inst_26245 = cljs.core.not(inst_26244);
var state_26275__$1 = (function (){var statearr_26280 = state_26275;
(statearr_26280[(9)] = inst_26243__$1);

return statearr_26280;
})();
if(inst_26245){
var statearr_26281_26306 = state_26275__$1;
(statearr_26281_26306[(1)] = (5));

} else {
var statearr_26282_26307 = state_26275__$1;
(statearr_26282_26307[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26276 === (15))){
var inst_26265 = (state_26275[(2)]);
var state_26275__$1 = state_26275;
var statearr_26283_26308 = state_26275__$1;
(statearr_26283_26308[(2)] = inst_26265);

(statearr_26283_26308[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26276 === (13))){
var state_26275__$1 = state_26275;
var statearr_26284_26309 = state_26275__$1;
(statearr_26284_26309[(2)] = null);

(statearr_26284_26309[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26276 === (6))){
var inst_26240 = (state_26275[(7)]);
var inst_26261 = (inst_26240 > (0));
var state_26275__$1 = state_26275;
if(cljs.core.truth_(inst_26261)){
var statearr_26285_26310 = state_26275__$1;
(statearr_26285_26310[(1)] = (12));

} else {
var statearr_26286_26311 = state_26275__$1;
(statearr_26286_26311[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26276 === (3))){
var inst_26273 = (state_26275[(2)]);
var state_26275__$1 = state_26275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26275__$1,inst_26273);
} else {
if((state_val_26276 === (12))){
var inst_26239 = (state_26275[(8)]);
var inst_26263 = cljs.core.vec(inst_26239);
var state_26275__$1 = state_26275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26275__$1,(15),out,inst_26263);
} else {
if((state_val_26276 === (2))){
var state_26275__$1 = state_26275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26275__$1,(4),ch);
} else {
if((state_val_26276 === (11))){
var inst_26255 = (state_26275[(2)]);
var inst_26256 = (new Array(n));
var inst_26239 = inst_26256;
var inst_26240 = (0);
var state_26275__$1 = (function (){var statearr_26287 = state_26275;
(statearr_26287[(7)] = inst_26240);

(statearr_26287[(10)] = inst_26255);

(statearr_26287[(8)] = inst_26239);

return statearr_26287;
})();
var statearr_26288_26312 = state_26275__$1;
(statearr_26288_26312[(2)] = null);

(statearr_26288_26312[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26276 === (9))){
var inst_26239 = (state_26275[(8)]);
var inst_26253 = cljs.core.vec(inst_26239);
var state_26275__$1 = state_26275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26275__$1,(11),out,inst_26253);
} else {
if((state_val_26276 === (5))){
var inst_26248 = (state_26275[(11)]);
var inst_26240 = (state_26275[(7)]);
var inst_26239 = (state_26275[(8)]);
var inst_26243 = (state_26275[(9)]);
var inst_26247 = (inst_26239[inst_26240] = inst_26243);
var inst_26248__$1 = (inst_26240 + (1));
var inst_26249 = (inst_26248__$1 < n);
var state_26275__$1 = (function (){var statearr_26289 = state_26275;
(statearr_26289[(11)] = inst_26248__$1);

(statearr_26289[(12)] = inst_26247);

return statearr_26289;
})();
if(cljs.core.truth_(inst_26249)){
var statearr_26290_26313 = state_26275__$1;
(statearr_26290_26313[(1)] = (8));

} else {
var statearr_26291_26314 = state_26275__$1;
(statearr_26291_26314[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26276 === (14))){
var inst_26268 = (state_26275[(2)]);
var inst_26269 = cljs.core.async.close_BANG_(out);
var state_26275__$1 = (function (){var statearr_26293 = state_26275;
(statearr_26293[(13)] = inst_26268);

return statearr_26293;
})();
var statearr_26294_26315 = state_26275__$1;
(statearr_26294_26315[(2)] = inst_26269);

(statearr_26294_26315[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26276 === (10))){
var inst_26259 = (state_26275[(2)]);
var state_26275__$1 = state_26275;
var statearr_26295_26316 = state_26275__$1;
(statearr_26295_26316[(2)] = inst_26259);

(statearr_26295_26316[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26276 === (8))){
var inst_26248 = (state_26275[(11)]);
var inst_26239 = (state_26275[(8)]);
var tmp26292 = inst_26239;
var inst_26239__$1 = tmp26292;
var inst_26240 = inst_26248;
var state_26275__$1 = (function (){var statearr_26296 = state_26275;
(statearr_26296[(7)] = inst_26240);

(statearr_26296[(8)] = inst_26239__$1);

return statearr_26296;
})();
var statearr_26297_26317 = state_26275__$1;
(statearr_26297_26317[(2)] = null);

(statearr_26297_26317[(1)] = (2));


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
});})(c__24483__auto___26303,out))
;
return ((function (switch__24381__auto__,c__24483__auto___26303,out){
return (function() {
var cljs$core$async$state_machine__24382__auto__ = null;
var cljs$core$async$state_machine__24382__auto____0 = (function (){
var statearr_26298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26298[(0)] = cljs$core$async$state_machine__24382__auto__);

(statearr_26298[(1)] = (1));

return statearr_26298;
});
var cljs$core$async$state_machine__24382__auto____1 = (function (state_26275){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__(state_26275);
if(cljs.core.keyword_identical_QMARK_(result__24384__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e26299){if((e26299 instanceof Object)){
var ex__24385__auto__ = e26299;
var statearr_26300_26318 = state_26275;
(statearr_26300_26318[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26275);

return cljs.core.cst$kw$recur;
} else {
throw e26299;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24383__auto__,cljs.core.cst$kw$recur)){
var G__26319 = state_26275;
state_26275 = G__26319;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$state_machine__24382__auto__ = function(state_26275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24382__auto____1.call(this,state_26275);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24382__auto____0;
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24382__auto____1;
return cljs$core$async$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24483__auto___26303,out))
})();
var state__24485__auto__ = (function (){var statearr_26301 = (f__24484__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24484__auto__.cljs$core$IFn$_invoke$arity$0() : f__24484__auto__.call(null));
(statearr_26301[(6)] = c__24483__auto___26303);

return statearr_26301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24485__auto__);
});})(c__24483__auto___26303,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26321 = arguments.length;
switch (G__26321) {
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
var c__24483__auto___26391 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24483__auto___26391,out){
return (function (){
var f__24484__auto__ = (function (){var switch__24381__auto__ = ((function (c__24483__auto___26391,out){
return (function (state_26363){
var state_val_26364 = (state_26363[(1)]);
if((state_val_26364 === (7))){
var inst_26359 = (state_26363[(2)]);
var state_26363__$1 = state_26363;
var statearr_26365_26392 = state_26363__$1;
(statearr_26365_26392[(2)] = inst_26359);

(statearr_26365_26392[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26364 === (1))){
var inst_26322 = [];
var inst_26323 = inst_26322;
var inst_26324 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_26363__$1 = (function (){var statearr_26366 = state_26363;
(statearr_26366[(7)] = inst_26323);

(statearr_26366[(8)] = inst_26324);

return statearr_26366;
})();
var statearr_26367_26393 = state_26363__$1;
(statearr_26367_26393[(2)] = null);

(statearr_26367_26393[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26364 === (4))){
var inst_26327 = (state_26363[(9)]);
var inst_26327__$1 = (state_26363[(2)]);
var inst_26328 = (inst_26327__$1 == null);
var inst_26329 = cljs.core.not(inst_26328);
var state_26363__$1 = (function (){var statearr_26368 = state_26363;
(statearr_26368[(9)] = inst_26327__$1);

return statearr_26368;
})();
if(inst_26329){
var statearr_26369_26394 = state_26363__$1;
(statearr_26369_26394[(1)] = (5));

} else {
var statearr_26370_26395 = state_26363__$1;
(statearr_26370_26395[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26364 === (15))){
var inst_26353 = (state_26363[(2)]);
var state_26363__$1 = state_26363;
var statearr_26371_26396 = state_26363__$1;
(statearr_26371_26396[(2)] = inst_26353);

(statearr_26371_26396[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26364 === (13))){
var state_26363__$1 = state_26363;
var statearr_26372_26397 = state_26363__$1;
(statearr_26372_26397[(2)] = null);

(statearr_26372_26397[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26364 === (6))){
var inst_26323 = (state_26363[(7)]);
var inst_26348 = inst_26323.length;
var inst_26349 = (inst_26348 > (0));
var state_26363__$1 = state_26363;
if(cljs.core.truth_(inst_26349)){
var statearr_26373_26398 = state_26363__$1;
(statearr_26373_26398[(1)] = (12));

} else {
var statearr_26374_26399 = state_26363__$1;
(statearr_26374_26399[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26364 === (3))){
var inst_26361 = (state_26363[(2)]);
var state_26363__$1 = state_26363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26363__$1,inst_26361);
} else {
if((state_val_26364 === (12))){
var inst_26323 = (state_26363[(7)]);
var inst_26351 = cljs.core.vec(inst_26323);
var state_26363__$1 = state_26363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26363__$1,(15),out,inst_26351);
} else {
if((state_val_26364 === (2))){
var state_26363__$1 = state_26363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26363__$1,(4),ch);
} else {
if((state_val_26364 === (11))){
var inst_26327 = (state_26363[(9)]);
var inst_26331 = (state_26363[(10)]);
var inst_26341 = (state_26363[(2)]);
var inst_26342 = [];
var inst_26343 = inst_26342.push(inst_26327);
var inst_26323 = inst_26342;
var inst_26324 = inst_26331;
var state_26363__$1 = (function (){var statearr_26375 = state_26363;
(statearr_26375[(7)] = inst_26323);

(statearr_26375[(8)] = inst_26324);

(statearr_26375[(11)] = inst_26343);

(statearr_26375[(12)] = inst_26341);

return statearr_26375;
})();
var statearr_26376_26400 = state_26363__$1;
(statearr_26376_26400[(2)] = null);

(statearr_26376_26400[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26364 === (9))){
var inst_26323 = (state_26363[(7)]);
var inst_26339 = cljs.core.vec(inst_26323);
var state_26363__$1 = state_26363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26363__$1,(11),out,inst_26339);
} else {
if((state_val_26364 === (5))){
var inst_26327 = (state_26363[(9)]);
var inst_26331 = (state_26363[(10)]);
var inst_26324 = (state_26363[(8)]);
var inst_26331__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26327) : f.call(null,inst_26327));
var inst_26332 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26331__$1,inst_26324);
var inst_26333 = cljs.core.keyword_identical_QMARK_(inst_26324,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_26334 = (inst_26332) || (inst_26333);
var state_26363__$1 = (function (){var statearr_26377 = state_26363;
(statearr_26377[(10)] = inst_26331__$1);

return statearr_26377;
})();
if(cljs.core.truth_(inst_26334)){
var statearr_26378_26401 = state_26363__$1;
(statearr_26378_26401[(1)] = (8));

} else {
var statearr_26379_26402 = state_26363__$1;
(statearr_26379_26402[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26364 === (14))){
var inst_26356 = (state_26363[(2)]);
var inst_26357 = cljs.core.async.close_BANG_(out);
var state_26363__$1 = (function (){var statearr_26381 = state_26363;
(statearr_26381[(13)] = inst_26356);

return statearr_26381;
})();
var statearr_26382_26403 = state_26363__$1;
(statearr_26382_26403[(2)] = inst_26357);

(statearr_26382_26403[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26364 === (10))){
var inst_26346 = (state_26363[(2)]);
var state_26363__$1 = state_26363;
var statearr_26383_26404 = state_26363__$1;
(statearr_26383_26404[(2)] = inst_26346);

(statearr_26383_26404[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26364 === (8))){
var inst_26323 = (state_26363[(7)]);
var inst_26327 = (state_26363[(9)]);
var inst_26331 = (state_26363[(10)]);
var inst_26336 = inst_26323.push(inst_26327);
var tmp26380 = inst_26323;
var inst_26323__$1 = tmp26380;
var inst_26324 = inst_26331;
var state_26363__$1 = (function (){var statearr_26384 = state_26363;
(statearr_26384[(7)] = inst_26323__$1);

(statearr_26384[(8)] = inst_26324);

(statearr_26384[(14)] = inst_26336);

return statearr_26384;
})();
var statearr_26385_26405 = state_26363__$1;
(statearr_26385_26405[(2)] = null);

(statearr_26385_26405[(1)] = (2));


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
});})(c__24483__auto___26391,out))
;
return ((function (switch__24381__auto__,c__24483__auto___26391,out){
return (function() {
var cljs$core$async$state_machine__24382__auto__ = null;
var cljs$core$async$state_machine__24382__auto____0 = (function (){
var statearr_26386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26386[(0)] = cljs$core$async$state_machine__24382__auto__);

(statearr_26386[(1)] = (1));

return statearr_26386;
});
var cljs$core$async$state_machine__24382__auto____1 = (function (state_26363){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__(state_26363);
if(cljs.core.keyword_identical_QMARK_(result__24384__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e26387){if((e26387 instanceof Object)){
var ex__24385__auto__ = e26387;
var statearr_26388_26406 = state_26363;
(statearr_26388_26406[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26363);

return cljs.core.cst$kw$recur;
} else {
throw e26387;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24383__auto__,cljs.core.cst$kw$recur)){
var G__26407 = state_26363;
state_26363 = G__26407;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
cljs$core$async$state_machine__24382__auto__ = function(state_26363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24382__auto____1.call(this,state_26363);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24382__auto____0;
cljs$core$async$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24382__auto____1;
return cljs$core$async$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24483__auto___26391,out))
})();
var state__24485__auto__ = (function (){var statearr_26389 = (f__24484__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24484__auto__.cljs$core$IFn$_invoke$arity$0() : f__24484__auto__.call(null));
(statearr_26389[(6)] = c__24483__auto___26391);

return statearr_26389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24485__auto__);
});})(c__24483__auto___26391,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

