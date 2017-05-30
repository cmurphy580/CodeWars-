const shuffleIt = (a,...b) => {
  b.forEach(([i, j]) => [a[i], a[j]] = [a[j], a[i]]); 
  return a; 
}

/*
SOLUTIONS: 
1) 

var shuffleIt =(arr,...ex) => {
  for ([a,b] of ex) [arr[a],arr[b]]=[arr[b],arr[a]];
  return arr;
}

--------------------------------------------

2) 

function shuffleIt(arr, ...rest) {
  rest.forEach(function (a) {
    [arr[a[0]], arr[a[1]]] = [arr[a[1]], arr[a[0]]]
  })
  return arr
}

*/