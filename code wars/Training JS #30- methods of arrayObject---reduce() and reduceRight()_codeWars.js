
function tailAndHead(arr){
  return arr.map((v, i) => +String(v)[String(v).length-1] + +String(arr[i+1])[0] || 1).reduce((a,b) => a * b); 
}



/*
BEST PRACTICE: 

1) 

function tailAndHead(arr){
  let result = 1, x, y; 
  arr.reduce((a, b) => {
    x = String(a); 
    y = String(b); 
    result *= +x[x.length-1] + +y[0]; 
    return b;
  }); 
  return result; 
}


------------------------

2) 





*/