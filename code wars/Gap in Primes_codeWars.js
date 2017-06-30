const gap = (g, m, n) => {
  let x; 
  for (m; m <= n; m++) {
    if (isPrime(m)) {
      if (m - x === g) 
        return [x, m]; 
      else 
        x = m;
    }  
  }
  return null; 
}

const isPrime = (n) => {
  let j = 2; 
  for (j; j <= Math.sqrt(n); j++) {
    if (n % j === 0)
      return false
  }
  return true; 
}

/*
BEST PRACTICE: 

function gap(g, m, n) {
    var lastPrime = 0;
    var isPrime = function(x) { 
      for (var i=2; i*i<=x; i++) { if (x % i == 0) return false; } return true;
    }
    
    for(var i = m; i <= n; i++)
        if(isPrime(i)) {
            if(i - lastPrime == g) return [lastPrime, i];
            else lastPrime = i;
        }
      
    return null;
}


*/