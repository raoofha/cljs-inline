(require 
  'fs
  'path
  'express
  'minimist
  'chokidar
  'chalk
  '[ws :as WebSocket]
  '["body-parser" :as bodyParser]
  '["child_process" :refer [execSync]]
  'http
  '["readline-vim" :as rlv]
  'readline
  'cljs.js
  )

(def state (atom {:last-ns "cljs.user"}))
(def compiler-state (cljs.js/empty-state))

(def opts (minimist (.. js/process -argv (slice 2)) #js {:default
                                                         #js {:port 3000
                                                              }
                                                         }))

(def app (express))
(def server (.createServer http app))
(def wss (WebSocket/Server. #js {:server server}))

(def index-file-loc (.join path (.cwd js/process) "index.html"))


(def rl (.createInterface readline #js {:input (.-stdin js/process)
                                        :output (.-stdout js/process)
                                        }))
(def vim (rlv rl))

(.setPrompt rl (str (:last-ns @state) "=> "))
(.prompt rl)
(.on rl "line" (fn [line]
  (cond
    (= line "") (.prompt rl)
    )
  ))
(. rl on "close" #(. js/process exit 0))
