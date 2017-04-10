function nouveau (Constructor, ...args) {
  var instance, result; 
  
  if(typeof Reflect !== 'undefined') {
    return Reflect.construct(Constructor, args); 
  }
  
  instance = Object.create(Constructor.prototype); 
  result = Object.apply(instance, args); 
  
  return result === {result} ? result : instance; 
  
}

/*
BEST PRACTICE: 
1) 
function nouveau (Constructor, ...args) {
  const instance = Object.create(Constructor.prototype);
  const result = Constructor.apply(instance, args);
  return result === Object(result) ? result : instance;
}

//-------------------------

2)
const nouveau = (Constructor, ...args) => Reflect.construct(Constructor, args);


*/

