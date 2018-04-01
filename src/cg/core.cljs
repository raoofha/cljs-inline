(ns cg.core)

(def canvas (.getElementById js/document "canvas"))
(def canvas-context (.getContext canvas "2d"))
(declare render)
(defn on-resize []
  (set! (. canvas -width) js/innerWidth)
  (set! (. canvas -height) js/innerHeight))

(when-not (.-onresize js/window)
  (set! (.-onresize js/window) on-resize))

(defn set-color [[r g b a]]
  (set! (. canvas-context -fillStyle)
        (str "#"  (.padStart (.toString r 16) 2 "0") 
             (.padStart (.toString g 16) 2 "0") 
             (.padStart (.toString b 16) 2 "0") 
             (.padStart (.toString (or a 255) 16) 2 "0"))))

(defn pixel [[x y] color]
  (set-color color)
  (.fillRect canvas-context x y 1 1))

(defn rectangle [[x y] [w h] color]
  (set-color color)
  (.fillRect canvas-context x y w h))

(defn clear []
  (set-color [0 0 0])
  (.fillRect canvas-context 0 0 js/innerWidth js/innerHeight))

(on-resize)
