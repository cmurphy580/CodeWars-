function positiveSum(arr) {
  const isPos = (x) => x > 0; 
  let y = arr.filter(isPos); 
  return y.length > 0 ? y.reduce((a,b) => a + b) : 0; 
}

/*
BEST PRACTICE: 

function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

*/