Function.prototype.bind = function (ctx) {

  var oldFn = this; 
  
  var newFn = function() {
    return oldFn.apply(ctx, arguments); 
  }; 
  
  newFn.bind = function(newContext) {
    return Function.prototype.bind.call(oldFn, newContext); 
  };
  
  return newFn; 

};



/*
BEST PRACTICE: 

1)

Function.prototype.bind = function (ctx) {
  var ret = function() {
    return ret._fn.call(ctx);
  };
  ret._fn = this._fn || this;
  return ret;
};

------------------------------------------------
2)

Function.prototype.bind = function (ctx) {
  var self = this;
  var bound = function () { return self.apply(ctx, [].slice.call(arguments, 1)) };
  bound.bind = function (ctx) { return self.bind(ctx) };
  return bound;
};

------------------------------------------------
3)

Function.prototype.bind = function(ctx) {
  let o = this.__orig || this;
  let b = () => o.call(ctx);
  b.__orig = o;
  return b;
};
*/