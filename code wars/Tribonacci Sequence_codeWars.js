function tribonacci(signature,n){
 let x, y, z = []; 
  if (n === 0) {
    return z; 
  } else if (n === 1) {
    return signature.slice(0,1);
  } else if (n === 2) {
    return signature.slice(0, 2);
  } else {
    n -= 3; 
    while (n > 0) {
      y = signature.slice(-3).reduce((a,b) => a + b);
      signature.push(y);
      n--;
    }
  }
  return signature; 
}


/*
BEST PRACTICE: 
1) 

function tribonacci(signature,n){  
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}
 
-------------------------------------------------------------

2)

function tribonacci(signature,n) {
  const result = signature.slice(0, n);
  while (result.length < n) {
    result[result.length] = result.slice(-3).reduce((p,c) => p + c, 0);
  }
  return result;
}
*/