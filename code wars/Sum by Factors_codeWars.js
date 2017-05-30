const sumOfDivided = (lst) => {
  let i = 2, max = Math.max(...lst.map(v => Math.abs(v))), result = {}; 
  for (i; i <= max; i++) {
    if (isPrime(i))
      lst.forEach(v => {
        if (v % i === 0) 
          result[i] = v + (result[i] || 0); 
      }); 
  }
  return Object.keys(result).map(i => result[i] = [+i, result[i]]); 
}
const isPrime = (n) => {
  let i = 2; 
  for (i; i <= Math.sqrt(n); i++) {
    if (n % i === 0) 
      return false; 
  }
  return true; 
}


/*
BEST PRACTICE: 

function sumOfDivided(lst) {
    if(lst.length == 0) { return []; }
    var m = Math.max.apply(null, lst.map(Math.abs)),
        primes = [],
        marked = Array(m+1);

    for(var i = 2; i <= m; ++i) {
        if(marked[i]) continue;

        var sum = 0, isMul = false;
        lst.forEach(function(n) { if(n % i == 0) { sum += n; isMul = true; } });
        if(isMul) primes.push([i, sum]);

        for(var j = 2*i; j <= m; j += i) {
            marked[j] = true;
        }
    }

    return primes;
}


*/