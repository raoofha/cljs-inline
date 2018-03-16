(ns cljs-inline.client
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.js :as cljs]
            [cljs.core.async :refer [put! <! chan]]
            [reagent.core]
            ;[devtools.core :as devtools]
))

;(devtools/install!)
(enable-console-print!)

(defn load [url cb]
  (let [xhr (js/XMLHttpRequest.)]
    (. xhr addEventListener "load" (fn []
                                     (cb (. xhr -responseText))))
    (. xhr open "GET" url)
    (. xhr overrideMimeType "text/plain")
    (. xhr send))
  #_(-> (js/fetch url)
        (.then (fn [data] (. data text)))
        (.then (fn [data] (cb data)))))

(defn eval [s]
  (cljs/eval-str
   (cljs/empty-state)
   s
   ""
   {:eval cljs/js-eval ;(fn [o] (prn o))
    :load (fn [{n :name} cb]
            (cb {:lang :js :source "" :cache {}})
            #_
            (load (cljs.analyzer/ns->relpath n) (fn [s]
                                                  (cb {:lang :clj :source s}))))}
   identity))

(set! js/e (fn [strings] (eval (. strings join ""))))

#_(defn run-scripts []
    (let [scripts (. js/document getElementsByTagName "script")]
      (doseq [i (range (. scripts -length))]
        (let [script (aget scripts i)]
          (when (= (. script -type) "text/cljs")
            (if (not= (. script -src) "")
              (load  (. script -src) eval)
              (eval (. script -innerHTML))))))))

(defn load-script [script]
  (let [c (chan)]
    (if (not= (. script -src) "")
      (load  (. script -src) #(put! c %))
      (put! c (. script -innerHTML)))
    c))

(defn run-scripts []
  (let [scripts (. js/document getElementsByTagName "script")]
    (go-loop [i 0]
      (when (< i (. scripts -length))
        (let [script (aget scripts i)]
          (if (= (. script -type) "text/cljs")
            (do
              (eval (<! (load-script script)))
              (recur (inc i)))
            (recur (inc i))))))))

(js/addEventListener "DOMContentLoaded" run-scripts false)
(goog.object/set js/window "e" (fn [strings] (:value (eval (. strings join "")))))
