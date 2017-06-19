function sc(n) {
 let nums = [], i = 0, bn, binary; 
 for (i; i <= n; i++) {
   if (n % i === 0) 
     nums.push(i); 
 }
 bn = n.toString(2); 
 binary = nums.map(v => v.toString(2)).filter(v => RegExp(v).test(bn)); 
 return binary.map(v => parseInt(v, 2)); 
}

//binary to decimal
//parseInt(v, 2)


/*
BEST PRACTICE: 
1)

sc = (n, i, a = []) => {
  for (i = 1; i <= n; i++) if (!(n % i)) a = a.concat(i);
  return a.filter(e => (new RegExp(e.toString(2))).test(n.toString(2)));
}

--------------------------------------------------------

2)

function sc(n){
  var res = [];
  for(let i = 1; i <= (n / 2); i++) {
    if(n % i === 0 && n.toString(2).includes(i.toString(2))) {
      res.push(i);
    }
  }
  res.push(n);
  return res;
}

*/