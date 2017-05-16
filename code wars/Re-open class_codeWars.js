String.prototype.myNewMethod = function() { 
  return this.toUpperCase(); 
} 

/*
BEST PRACTICE: 

String.prototype.myNewMethod = String.prototype.toUpperCase;

*/