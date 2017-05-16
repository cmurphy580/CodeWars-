function Counter(){
  this.count = 0; 
}

Counter.prototype.incr = function() {
  this.count++; 
}

Counter.prototype.toString = function() {
  return this.count;
}

/*
OTHER SOLUTIONS: 

1) 

var Counter = function() {
  this.value = 0;
  this.incr = function() { this.value++; };
  this.valueOf = function() { return this.value; };
};

--------------------------------------------------

2)

class Counter {
  constructor() {
    this.counter = 0;
  }
  
  incr() {
    this.counter++;
  }
  
  valueOf() {
    return this.counter;
  }
}


*/