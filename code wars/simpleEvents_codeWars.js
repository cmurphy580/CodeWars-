function Event() {

  var output = [];

//Subscribe method, which takes a function and stores it as its handler, 
  this.subscribe = (event) => output.push(event); 

//Unsubscribe method, which takes a function and remove it from its handlers,
  this.unsubscribe = function(event) {
    if (output.indexOf(event) > 0) {
      output.splice(output.indexOf(event), 1); 
    }
  }
  
//Emit method, which takes an arbitrary number of arguments and calls all the store functions with these arguments,
  this.emit = function() {
    for (var i=0; i < output.length; i++) {
      output[i].apply(this, arguments); 
    }
  }
}





/*
BEST PRACTICE : 


class Event {
  constructor() {
    this.subscribers = new Set();
  }

  subscribe(func) {
    this.subscribers.add(func);
  }
  
  unsubscribe(func) {
    this.subscribers.delete(func);
  }
  
  emit(...args) {
    this.subscribers.forEach(s => s(...args));
  }
}


*/