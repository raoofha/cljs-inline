(ns hotreload.client
  (:require cljs.js))

(defn -main []
  (let [url (str "ws://" (.-host js/location) "/hotreload")
        ws (js/WebSocket. url)]
    (.addEventListener ws "message"
                       (fn [m]
                         (let [cmd (if (.-cmd m) (.-cmd m)
                                     (cond
                                       (.endsWith (.-path m) ".html") "reload"
                                       (.endsWith (.-path m) ".js") "eval-js"
                                       (.endsWith (.-path m) ".cljs") "eval-cljs-repl"
                                       )
                                     )
                               ]
                               )
                         )
                       )
    )
  )

(-main)


