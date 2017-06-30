function sc(array){
  let output = [];
    output.push(add(array));
    output.push(subtract(array));
    output.push(multiply(array));
    output.push(divide(array));
  return Math.max(...output); 
}
function add(array) {
  if (array.length === 2) {
    array = array.reduce((a,b) => a + b); 
  } else { 
    array.sort((a,b) => b - a); 
    array = array[0] + array[1];
  }
  return array; 
}
function subtract(array) {
  if (array.length === 2) {
    array = array.reduce((a,b) => b - a); 
  } else { 
    array = Math.max(...array) - Math.min(...array);
  }
  return array; 
}
function multiply(array) {
  if (array.length === 2) {
    array = array.reduce((a,b) => a * b); 
  } else { 
    array.sort((a,b) => b - a); 
    array = array[0] * array[1]; 
  }
  return array; 
}
function divide(array) {
  let x; 
  if (array.length === 2) {
    array = Math.max(...array) / Math.min(...array); 
    if (array === Infinity) 
      array = 1; 
  } else { 
    x = Math.min(...array.filter(v => !Number.isInteger(v)));
    if (x.length === 0) 
      x = 1; 
    array = Math.max(...array) / x;
  }
  return array; 
}


/*
BEST PRACTICE: 

1)

sc = a => Math.max((a = a.sort((x, y) => y - x))[0] + a[1], a[0] * a[1], a[0] - Math.min.apply(null,a), a[0] * Math.max.apply(null,a.map(e => e == 0 ? 0:1/e)) )

----------------------------------

2)

function sc(a) {
  a.sort((a,b) => b - a);
  b = a.filter(x => x > 0 && x < 1).sort((a, b) => a - b)[0];
  return Math.max(a[0]+a[1],
                  a[0]*a[1],
                  b ? a[0]/b : 0,
                  a[0] - Math.min(...a));
}
*/