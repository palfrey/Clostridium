goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8437__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8437 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8438__i = 0, G__8438__a = new Array(arguments.length -  0);
while (G__8438__i < G__8438__a.length) {G__8438__a[G__8438__i] = arguments[G__8438__i + 0]; ++G__8438__i;}
  args = new cljs.core.IndexedSeq(G__8438__a,0);
} 
return G__8437__delegate.call(this,args);};
G__8437.cljs$lang$maxFixedArity = 0;
G__8437.cljs$lang$applyTo = (function (arglist__8439){
var args = cljs.core.seq(arglist__8439);
return G__8437__delegate(args);
});
G__8437.cljs$core$IFn$_invoke$arity$variadic = G__8437__delegate;
return G__8437;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8440__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8440 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8441__i = 0, G__8441__a = new Array(arguments.length -  0);
while (G__8441__i < G__8441__a.length) {G__8441__a[G__8441__i] = arguments[G__8441__i + 0]; ++G__8441__i;}
  args = new cljs.core.IndexedSeq(G__8441__a,0);
} 
return G__8440__delegate.call(this,args);};
G__8440.cljs$lang$maxFixedArity = 0;
G__8440.cljs$lang$applyTo = (function (arglist__8442){
var args = cljs.core.seq(arglist__8442);
return G__8440__delegate(args);
});
G__8440.cljs$core$IFn$_invoke$arity$variadic = G__8440__delegate;
return G__8440;
})()
;

return null;
});
