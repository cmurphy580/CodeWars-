function sc(arr){
  let x = {}, y = 0, z = []; 
  arr.map(a => a.map(v => { x[v] = 1 + (x[v] || 0) })); 
  for (v in x) {
    if (x[v] > y) {
      y = x[v];
      z = [];
    }
    if (x[v] >= y) 
      z.push(v);
  }
  return arr.map(a => a.filter(v => z.indexOf(String(v)) === -1));  
}

/*
OTHER SOLUTION: 

function sc(arr){
  let hash = {}, max = 0;
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      if(hash[arr[i][j]]) hash[arr[i][j]]++;
      else hash[arr[i][j]] = 1;
      if(hash[arr[i][j]] > max) max = hash[arr[i][j]];
    }
  }
  return arr.map(v=>v.filter(w=>hash[w] !== max));
}

*/