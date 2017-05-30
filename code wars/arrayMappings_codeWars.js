Array.prototype.map = function(method) {
  let result = [], i = 0; 
  for (i; i < this.length; i++) {
    result.push(method(this[i])); 
  }
  return result; 
}

/*
OTHER SOLUTIONS: 

1) 

const {runInNewContext} = require("vm")
Array.prototype.map = runInNewContext("Array.prototype.map")

---------------------------------------------------

2)

Array.prototype.map=function(f){
  var r=[];
  for(var e of this)
    r.push(f(e));
  return r;
}

---------------------------------------------------

3)

Array.prototype.map = function(func){
  var res = [];
  this.forEach(function(...args){res.push(func(...args));});
  return res;
}

*/