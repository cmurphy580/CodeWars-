Array.prototype.reduce = function(process, initial) {
  let x = this;
  for (var i = 0; i < this.length; i++) {
    if (initial === undefined) {
      initial = x[i]; 
      i++; 
    }
    initial =  process(initial, this[i]);
 }
 
 return initial; 
 
 }



/*
BEST PRACTICES: 

1)

Array.prototype.reduce = function(process, initial) {
  var init = {'string': '', 'number': 0}[typeof(this[0])];
  this.forEach(function(e, i) {
    initial = process(initial || init, e, i, this);
  });
  return initial;
}


----------------------------------------

2)

Array.prototype.reduce = function(process, initial) {
  this.forEach(function (x) {
    initial = typeof initial == 'undefined' ? x : process.call(this, initial, x);
  });
  return initial;
}

*/