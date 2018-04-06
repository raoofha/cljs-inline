(defproject raoof/cljs-inline "0.0.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 ;[org.clojure/clojurescript "1.10.238"]
                 [reagent "0.7.0"]
                 ;[reagent "0.7.0" :exclusions [cljsjs/react]]
                 ;[andare "0.9.0"]
                 [org.clojure/core.async "0.4.474"]
                 ]
  :plugins [[lein-cljsbuild "1.1.7"]]
  :min-lein-version "2.5.3"
  :clean-targets ^{:protect false} [".stuff" "target" "resources/public/.stuff"]

  :figwheel {:css-dirs ["resources/public"]
             :server-port   3000
             :server-logfile ".stuff/figwheel-server.log"}

  :profiles
  {:dev
   {:dependencies [[binaryage/devtools "0.9.9"]
                   [figwheel-sidecar "0.5.15"]
                   [com.cemerick/piggieback "0.2.2"]
                   [org.clojure/tools.nrepl "0.2.13"]]
    :plugins      [[lein-figwheel "0.5.15"]]
    :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}}

  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["src"]
     :figwheel     true ;{:on-jsload "cljs-inline.client/render"}
     :compiler     {:main                 cljs-inline.client
                    :output-to            "resources/public/cljs-inline.js"
                    :output-dir           "resources/public/.stuff/out"
                    :asset-path           ".stuff/out"
                    :source-map-timestamp true
                    :preloads             [devtools.preload]
                    :external-config      {:devtools/config {:features-to-install :all}}}}
    {:id           "min"
     :source-paths ["src"]
     :compiler     {:main            cljs-inline.client
                    :output-to       "dist/cljs-inline.min.js"
                    :optimizations   :simple
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false
                    :optimize-constants true
                    :static-fns true}}
    {:id           "white"
     :source-paths ["src"]
     :compiler     {:main            cljs-inline.client
                    :output-to       "dist/cljs-inline.js"
                    :output-dir      "dist/cljs-inline-out"
                    :optimizations   :whitespace
                    :source-map      "dist/cljs-inline.js.map"
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false
                    :optimize-constants true
                    :static-fns true}}
    {:id           "cljs"
     :source-paths ["src"]
     :compiler     {:main            clojurescript.core
                    :output-to       "dist/cljs.js"
                    :output-dir      "dist/cljs"
                    :optimizations   :whitespace
                    :source-map      "dist/cljs.js.map"
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false
                    :optimize-constants true
                    :static-fns true}}   ]})
