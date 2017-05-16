const sum = (...array) => array.reduce((s,x) => typeof x === 'number' && ~~x === x ? s + x : s + 0, 0); 

/*
BEST PRACTICE: 

function sum(){
  var total = 0;
  for(var i=0; i<arguments.length; i++){
    if(typeof arguments[i] === 'number' && arguments[i] %1 === 0){
      total += arguments[i];
    }
  }
  return total;
}

*/