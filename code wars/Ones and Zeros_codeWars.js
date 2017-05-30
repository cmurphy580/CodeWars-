const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2); 
};

/*
other solution: 

function binaryArrayToNumber(arr) {
  return arr.reduce( (a, b) => a << 1 | b );
}

*/