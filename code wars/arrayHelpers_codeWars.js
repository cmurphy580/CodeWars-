
Array.prototype.square = function() { 
  let x = this; 
  return x.map((n) => Math.pow(n, 2));   
}

Array.prototype.cube = function() { 
  let x = this; 
  return x.map((n) => Math.pow(n, 3)); 
}

Array.prototype.sum = function() {
  let x = this;
  return x.reduce((a,b) => a + b); 
}

Array.prototype.average = function() {
  let x = this;
  return this.length > 0 ? x.reduce((a,b) => a + b) / this.length : NaN; 
}
  
Array.prototype.even = function() {
  let x = this;
  return x.filter((n) => n % 2 === 0);
}

Array.prototype.odd = function() {
  let x = this;
  return x.filter((n) => n % 2 !== 0); 
}


/*
BEST PRACTICE: 

Object.assign(Array.prototype, {

    square() {return this.map(n => n * n);},
    cube() {return this.map(n => Math.pow(n, 3));},
    sum() {return this.reduce((p,n) => p + n, 0);},
    average() {return this.reduce((p,n) => p + n, 0) / this.length;},
    even() {return this.filter(n => !(n % 2));},
    odd() {return this.filter(n => n % 2);

    }

*/
