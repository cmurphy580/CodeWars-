function numbers( ) {
  let args = Array.prototype.slice.call(arguments); 
   return args.every((x) => typeof x === 'number');
}


/*
Best Practice: 

function numbers() {
  return [].every.call(arguments, function(value) {
    return typeof value === "number";
  });
}


*/