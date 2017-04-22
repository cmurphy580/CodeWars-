
Function.prototype.clone = function() {
  
  return new Function('return ' + this.toString())();
          
};



/*
BEST PRACTICE (that doesn't use 'new Function'): 

Function.prototype.clone = function() {
  var that = this;
  var clone = Object.create(Function.prototype);
  
  clone.toString = function toString(){ return that.toString(); };
  clone.call = function call(){ return that.call.apply(that, arguments); };
  clone.apply = function apply(){ return that.apply.apply(that, arguments); };
  clone.name = that.name;
  
  return clone;
};

*/








//see link https://davidwalsh.name/new-function for more on new Function 