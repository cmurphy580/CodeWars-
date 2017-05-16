function splitTheBill(x) {
  let total = 0, key, count = 0, owed;  
  for(key in x) {
    total += x[key];
    count++;
  } 
  owed = total / count;
 
 for (key in x) {
    x[key] = Math.round((x[key] - owed) * 100)/ 100; 
  }

  return x; 
}

/*
BEST PRACTICE: 

1)
//NOT WORKING 

const splitTheBill = x => {
  let vals = Object.values(x),
      avg  = vals.reduce((s, v) => s + v) / vals.length;
  return Object.keys(x).reduce((y, v) => (y[v] = +(x[v] - avg).toFixed(2), y), {});
}

----------------------------------------------------------------

2)

function splitTheBill(x) {;
  const sum = Object.keys(x).reduce((previous, next) => previous + x[next], 0) / Object.keys(x).length;
  Object.keys(x).forEach(v => x[v] = Number((x[v] - sum).toFixed(2)));
  return x;
}


*/