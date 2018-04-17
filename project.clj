(defproject raoof/cljs-inline "0.0.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 ;[org.clojure/clojurescript "1.10.238"]
                 ;[andare "0.9.0"]
                 [org.clojure/core.async "0.4.474"]
                 ;[org.clojure/google-closure-library "0.0-20170809-b9c14c6b"]
                 ]
  :plugins [[lein-cljsbuild "1.1.7"]]
  :min-lein-version "2.5.3"
  :clean-targets ^{:protect false} [".stuff" "target" "resources/public/.stuff" "dist"]
  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["src"]
     :compiler     {:main            clojurescript.core
                    :output-to       "dist/cljs.js"
                    ;:output-dir      "dist/.cljs"
                    :output-dir      "dist/cljs"
                    :optimizations   :whitespace
                    :source-map      "dist/cljs.js.map"
                    ;:asset-path           ".cljs"
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false
                    :optimize-constants true
                    :static-fns true
                    :warnings {:single-segment-namespace false}}}]})
