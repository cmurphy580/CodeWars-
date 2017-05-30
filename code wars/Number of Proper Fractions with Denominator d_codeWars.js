const properFractions = (n) => {
  return n === 1 ? 0 : eulerMethod(n);
}
const eulerMethod = (n) => {
  let result, i = 2; 
  result = 1.0 * n; 
  while (i * i <= n) {
    if (n % i === 0) {
      while (n % i === 0)
        n /= i; 
      result *= (1 - (1/i)); 
    }
    i++; 
  }
  if (n > 1) 
    result *= (1 - (1/n)); 
  return Math.floor(result); 
}

/*
BEST PRACTICE: 

1) 

function properFractions(n){
  if(n===1)return 0;
  var pf = [], m=n;
  for(let i=2; i*i<=m; i++) if(m%i===0){pf.push(i); while(m%i===0) m/=i;}
  if(m>1) pf.push(m);
  return pf.reduce((r,p)=>r*(p-1)/p,n);
}

-------------------------------

2)

function properFractions(n) {
  if(n === 1) return 0;
  let a = n, i = 2, primeFactors = [];
  
  while(a > 1) {
    if(a % i === 0) {
      a = a / i;
      if(primeFactors.indexOf(i) === -1) primeFactors.push(i);
    } else i++;
  }

  return Math.round(primeFactors
                .map(a => (1 - 1/a))
                .reduce((a, v) => { return a * v},1) * n)
}


*/