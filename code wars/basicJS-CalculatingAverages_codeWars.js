var Calculator = {
 average: function(...args) {
   let y = args.length, x;
   if (y > 0) { 
   x = args.reduce((a,b) => a+b); 
     return x/y; 
     } else {
     return 0;  
    }
 }
};


/*
BEST PRACTICE: 
1) 
var Calculator = {
 average: function() {
   
  return Array.prototype.slice.call(arguments).reduce(function(prev, next) {
    return prev + next;
  }, 0) / (arguments.length || 1);
 }
};

---------------------------------------------------------
2)
var Calculator = {
 average: function() {
 
  return [].reduce.call(arguments, function(pv, cv) {return pv + cv}, 0) / arguments.length || 0;
 }
};




*/