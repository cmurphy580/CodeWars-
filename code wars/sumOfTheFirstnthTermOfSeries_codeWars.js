function SeriesSum(n) {
  let sum = 0, j = 1; 
   
  for (var i = 1; i <= n; i++) { 
    sum += (1/j); 
    j += 3;
  } 
  return sum.toFixed(2); 
}

/*
BEST PRACTICE: 

function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }
  
  return s.toFixed(2)
}


*/