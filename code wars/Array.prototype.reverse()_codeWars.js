Array.prototype.reverse = function(array) {  
  array = this; 
  var i, temp; 
  for (i = 0; i < array.length; i++) {
    temp = array.splice(i, 1)[0]; 
    //.unshift() -- add new items to the beginning of an array
    array.unshift(temp);  
  }
  return array; 
};

/*
BEST PRACTICE: 

1)

Array.prototype.reverse = function() {
  for(var i = 0, j = this.length-1; i < j; i++, j--) {
    var tmp = this[i];
    this[i] = this[j];
    this[j] = tmp;
  }
  return this;
};

------------------------------------------------

2)

Array.prototype.reverse = function() {
  var arr = this.splice(0);  
  
  while(arr.length) {
    this.push(arr.pop());
  }   
  
  return this;
};

------------------------------------------------

3)


Array.prototype.reverse = require('vm').runInNewContext('Array.prototype.reverse');



*/