(ns clostridium.core
  (:require [reagent.core :as r]))

(def click-count (r/atom 0))

(defn counting-component []
  [:div
   "The atom " [:code "click-count"] " has value: "
   @click-count ". "
   [:input {:type "button" :value "Click me!"
            :on-click #(swap! click-count inc)}]])

(defn dev-setup []
  (when ^boolean js/goog.DEBUG
    (enable-console-print!)))

(defn reload []
  (r/render [counting-component]
            (.getElementById js/document "app")))

(defn ^:export main []
  (dev-setup)
  (reload))