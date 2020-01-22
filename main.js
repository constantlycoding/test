var r1 = require.config({
  paths: {
    dojo: "external/dojo"
  }
});
r1([
  'dojo'
],function(dojo){
  if(dojo) console.log ("dojo: loaded");
});
