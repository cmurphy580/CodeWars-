function maxMin(arr1,arr2){
  let output = []; 
  arr1.forEach((v, i) => output.push(Math.abs(v - arr2[i]))); 
  return [Math.max(...output), Math.min(...output)];  
}

/*
BEST PRACTICE: 

function maxMin(arr1,arr2){
  var rs=arr1.map((x,i)=>Math.abs(x-arr2[i]));
  return [Math.max(...rs),Math.min(...rs)];
}

*/