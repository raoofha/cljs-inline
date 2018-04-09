(ns clojurescript.core
  (:require-macros ;[clojurescript.core :refer [dump-analysis-cache dump-analysis-cache-cljs-js dump-analysis-cache-cljs-reader]]
                   [cljs.core.async.macros :refer [go go-loop]])
  (:require cljs.js
            cljs.reader
            [cljs.core.async :refer [put! <! chan]]
            ;clojure.browser.repl
            [cljs.analyzer :as ana]))

(enable-console-print!)
(set! js/goog.isProvided_ (fn [] false))

(def compiler-state
  (cljs.js/empty-state))

(def root-classpath "/.cljs/")

#_(doto (cljs.js/empty-state)
    (swap!
     (fn [state]
       (-> state
           (assoc-in [::ana/namespaces] (dump-analysis-cache))))))

(defn load [url cb]
  (-> (js/fetch url)
      (.then (fn [d] (.text d)))
      (.then cb))
  #_(let [xhr (js/XMLHttpRequest.)]
      (. xhr addEventListener "load" (fn []
                                       (cb (. xhr -responseText))))
      (. xhr open "GET" url)
      (. xhr overrideMimeType "text/plain")
      (. xhr send)))

(defn eval-str
  ([s]
   (eval-str s 'cljs.user))
  ([s ns]
   (eval-str s ns js/eval))
  ([s ns js-eval]
   (cljs.js/analyze-str
    compiler-state
    s
    ""
    {:ns ns
     :context :statment}
    identity)
  ;(prn ('cg.core (:cljs.analyzer/namespaces @compiler-state)))
   (cljs.js/eval-str
    compiler-state
    s
    ""
    {:context :statment
     :def-emits-var true
     :eval #(js-eval (:source %))
     :load (fn [{n :name path :path macros :macros} cb]
             (let [paths (if macros
                           [(str root-classpath path ".clj") (str root-classpath path ".cljc")]
                           [(str root-classpath path ".cljs") (str root-classpath path ".cljc")])]
               (->
                (load (first paths) #(cb {:lang :clj :source % :cache (get-in @compiler-state [:cljs.analyzer/namespaces n])}))
                (.catch (fn []
                          (load (second paths) #(cb {:lang :clj :source % :cache (get-in @compiler-state [:cljs.analyzer/namespaces n])}))))
                (.catch #(throw (js/Error. (str "path " paths " not found")))))))}
    identity)))

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
          (cond
            (= (. script -type) "text/cljs")
            (do
              (eval-str (<! (load-script script)))
              (recur (inc i)))
            (= (. script -type) "text/js")
            (do
              (js/eval (<! (load-script script)))
              (recur (inc i)))
            :else (recur (inc i))))))))

(js/addEventListener "DOMContentLoaded" run-scripts false)
(goog.object/set js/window "e" (fn [strings] (:value (eval-str (. strings join "")))))
