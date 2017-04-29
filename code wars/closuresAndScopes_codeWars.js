function createFunctions(n){
  let callbacks = [];
  for (let i = 0; i < n; i++) callbacks.push(() => i);
  return callbacks;
}

/*
BEST PRACTICE: 

1) 

function createFunctions(n) {
  var callbacks = [];
  
  var factory = function(x){
    return function(){
      return x;
    };
  };

  for (var i=0; i<n; i++) {
    callbacks.push(factory(i));
  }
  
  return callbacks;
}

-------------------------------------

2)

function createFunctions(n){

  var callbacks = []

for (let i = 0; i < n; i++) {
  callbacks[i] = function () {
   return i
  };
}
   return callbacks
}

-------------------------------------

3)

function createFunctions(n){

  var callbacks = []

  for (var i = 0; i< n; i++){
    const a = i;
    callbacks.push(function(){      
      //console.log(a)
      return a;
    })
  }
  return callbacks
}

*/