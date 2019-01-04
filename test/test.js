const JMM = require('../');

let x = {
  data:"result"
},
y = JSON.stringify(x),
z = JSON.stringify(x,0,2);

console.log("beautify:" + JMM.beautify(y,2))
console.log("minify:" + JMM.minify(z))
