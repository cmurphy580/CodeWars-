function Primes() {
}

const isPrime = (num) => {
    let i = 2;  
    for (i; i <= Math.sqrt(num); i++) {
      if (num % i === 0)  
        return false;  
    }
    return true; 
  }
  
Primes.first = (n) => {
  let series = [], j = 2;
  
  while (n > 0) {
    if (isPrime(j)) {
      series.push(j);
      n--;
    }
    j++;
  }
  return series; 
}

/*
BEST PRACTICE:

1)

function Primes() {
  this.primes = [2];

  this.first = function(n) {
    if (this.primes.length >= n) {
      return this.primes.slice(0, n)
    } else {
      var start = this.primes[this.primes.length - 1];
      for (start; this.primes.length < n; start++) {
        for (var i = 0; i < this.primes.length; i++) {
          var prime = false;
          if (start % this.primes[i] === 0) {
            break;
          } else {
            prime = true;
          }
        }
        if (prime) {this.primes.push(start)};
      }
    }
    return this.primes;
  }
}

var Primes = new Primes();





---------------------------------------

2)

const Primes = () => {
  const cache = [2, 3]
  let last = 3

  const isPrime = (n) => {
    for (let i = 3; i <= Math.ceil(Math.sqrt(n)); i += 2) {
      if (n % i === 0) return false
    }

    return true
  }
  
  const first = (n) => {
    while (cache.length < n) {
      if (isPrime(last += 2)) cache.push(last)
    }

    return cache.slice(0, n)
  }
  
  return {first}
}()


---------------------------------------

3)

function Primes(){
}

Primes.first = function(total){
  var res = [], num = 2;
  while(res.length < total){
    if(isPrime(num)){
      res.push(num);
    }
    num++;
  }
  return res;
};

Array.prototype.last = function(n){
  return this.slice(-n);
};

function isPrime(num){
  var half = Math.floor(Math.sqrt(num));
  for(var i = 2; i <= half; i++){
    if(num % i == 0)
      return false;
  }
  return num > 1;
}





---------------------------------------

4) 'USING "SIEVES" ALGORITHM'

function Primes(){


     function getPrimes(max) {
      var sieve = [], i, j, primes = [];
      for (i = 2; i <= max; ++i) {
              if (!sieve[i]) {
                  primes.push(i);
                  for (j = i << 1; j <= max; j += i) {
                      sieve[j] = true;
                  }
              }
          }
          return primes;
     }
     var primes = getPrimes(1000000);
    
     this.first =  function(n){
        return primes.slice(0,n); 
    }
}
var Primes = new Primes();


*/