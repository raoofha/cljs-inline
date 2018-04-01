# hotreload : clojurescript development without jvm

```
npm i -g hotreload-cljs
hotreload
open http://localhost:3000
curl -d "(cg.core/rectangle [200 200] [20 20] [255 0 0])" http://localhost:3000/hotreload/test.cljs -H "Content-Type: text/plain"
```

## Flags
* -w watch current directory useful if you don't want to config your editor
* --port default to 3000

## Immidate feedback: vim config
```vimscript
func Hotreload()
  silent call system('/usr/bin/curl -H "Content-Type: text/plain" http://localhost:3000/hotreload/' . expand("%:p") . " -d " . shellescape(join(getline(1,'$'), "\n")) . " > /dev/null")
endfunc
au FileType clojure,html,javascript,css noremap <F5> :call Hotreload()<cr>
au TextChanged,TextChangedI *.cljs,*.js call Hotreload()
```

## Examples
### without index.html
```clojure
(ns main.core
  (:require [cg.core :refer [rectangle pixel clear]]
            [reagent.core :as r]))

(defn render []
  (clear)
  (rectangle [100 100] [10 10] [255 0 0])
  (rectangle [200 100] [20 20] [255 0 0 200])
  (rectangle [200 200] [20 20] [255 0 0 200])
  (pixel [111 111] [255 255 255])
  (pixel [211 111] [255 255 255])
  (pixel [211 211] [255 255 255])
  (pixel [111 211] [255 255 255])
  )

(defn root []
  [:div "hello world"]
  )

(r/render [root] (.getElementById js/document "root"))
(render)
```
### with index.html
```html
<html>
<head>
  <style> body { margin: 0; color: gray; background-color: black; } #root { position: absolute;} </style>
</head>
<body>
  <div id="root"></div>
  <canvas id="canvas"></canvas>
  <script type="text/cljs" src="some/ns/core.cljs"></script>
</body>
</html>
```

## cljs-inline

add this to your index.html
```html
<script src="https://unpkg.com/hotreload/dist/cljs-inline.js"></script>
```

### Features
* eval clojurescript in devtools console by 
	``e`(prn "hello world")` ``
* write clojurescript inside 
    ```<script type="text/cljs"></script>```
* load external clojurescript 
    ```<script type="text/cljs" src="myns.cljs"></script>```
     ( only works in firefox when opened directly without a http server )

### Tips
* write clojurescript without an external editor 
    * devtools Sources
    * Add folder to workspace
    * edit
    * Ctrl+S
    * Ctrl+R

* Take a look at [klipse](https://github.com/viebel/klipse) for faster experience
