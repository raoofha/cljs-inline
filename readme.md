# cljs-inline

## Features
* eval clojurescript in devtools console by 
	``e`(prn "hello world")` ``
* write clojurescript inside 
    ```<script type="text/cljs"></script>```
* load external clojurescript 
    ```<script type="text/cljs" src="myns.cljs"></script>```
     ( only works in firefox when opened directly ( without a http server )

## Tips
* write clojurescript without an external editor 
    * devtools Sources
    * Add folder to workspace
    * edit
    * Ctrl+S
    * Ctrl+R

* Take a look at [klipse](https://github.com/viebel/klipse) for faster experience
