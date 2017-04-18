const sum = (array) => array.reduce((a,b) => a+b); 

 // Use array.reduce() to calculate and return the
// sum of the values in array.

/*
BEST PRACTICE: 

function sum(arr) {
  return arr.reduce(function(prev, curr) {
    return prev + curr;
  });
};

*/