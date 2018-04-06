// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('clojure.browser.repl.preload');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.browser.repl');
if(typeof clojure.browser.repl.preload.conn !== 'undefined'){
} else {
clojure.browser.repl.preload.conn = clojure.browser.repl.connect("http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_();
