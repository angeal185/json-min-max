(function(exports){
  //beautify json
  exports.beautify = function(i,e){
    try {
        return JSON.stringify(JSON.parse(i),0,e)
      }
      catch(error) {
        return error;
      }
  }
  //minify json
  exports.minify = function(i){
    try {
        return JSON.stringify(JSON.parse(i))
      }
      catch(error) {
        return error;
      }
  }
}(typeof exports === 'undefined' ? this.JMM = {} : exports));
