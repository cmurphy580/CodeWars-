function XO(str) {
   let x = {}; 
   str.toLowerCase().split('').map(v => {
     x[v] = 1 + (x[v] || 0)
   });
   return x.x === x.o; 
}

/*
BEST PRACTICE: 

1)

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

----------------------------------------------------

2)

const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}


*/