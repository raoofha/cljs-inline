(ns cloter.client
  (:require system.io
            app.sh app.cljs app.js app.ts app.bs app.coffee app.a app.date app.clock app.counter))

(app.sh/main)
(defn simulate-keydown [& ks]
  (doseq [k ks]
  (let [e (js/CustomEvent. "keydown" #js {:detail k})]
    (. js/window dispatchEvent e)
    nil)))

(defonce init-handler
  (do
    ;(simulate-keydown "c")
    ;(simulate-keydown "l")
    ;(simulate-keydown "j")
    ;(simulate-keydown "s")
    ;(simulate-keydown "Enter")
    (simulate-keydown "c" "l" "j" "s" "Enter")

    (. js/document addEventListener "mouseup"
       (fn [e]
         (. js/document execCommand "copy")))

    (. js/document addEventListener "paste"
       (fn [e]
         (doseq [k (.. e -clipboardData (getData "text/plain"))]
           (simulate-keydown k))))

    (. js/document addEventListener "keydown"
       (fn [e]
         (when (and (.-shiftKey e) (= (.-key e) "Insert"))

           (let [e (js/CustomEvent. "paste")]
             (. js/window dispatchEvent e)
             nil))))))
