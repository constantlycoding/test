var r1 = require.config({
    context: "r1",
    baseUrl: "//raw.githubusercontent.com/dojo/dojo/master/"
});

r1([
    'dojo/dom',
    'dojo/dom-construct'
], function (dom, domConstruct) {
    var greetingNode = dom.byId('greeting');
    domConstruct.place('<em> Dojo!</em>', greetingNode);
});
