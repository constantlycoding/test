var r1 = require.config({
    context: "r1",
    baseUrl: "//raw.githubusercontent.com/dojo/dojo/master/"
});
r1([
    "dojo/dom-construct",
    "dojo/_base/window"
], function(domConstruct, win){
    var n = domConstruct.create("div", { innerHTML: "<p>hi</p>" }, win.body());
    console.log("test!");
});
