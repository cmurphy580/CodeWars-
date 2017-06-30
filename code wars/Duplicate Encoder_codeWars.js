function duplicateEncode(word){
  let x = {}, y = [], z; 
  word = word.toLowerCase().split(''); 
  word.map(v => {
    x[v] = 1 + (x[v] || 0);
  });
  word.map(v => {
    if (x[v] > 1) 
      y.push(')'); 
    else 
      y.push('('); 
  });
  return y.join(''); 
}


/*
BEST PRACTICE:

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

*/