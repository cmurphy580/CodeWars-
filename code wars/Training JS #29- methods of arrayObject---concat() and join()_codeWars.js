
function bigToSmall(arr) {
  return arr.reduce((a,b) => a.concat(b)).sort((a,b) => b - a).join('>'); 
}


/*

BEST PRACTICE: 

function bigToSmall(arr) {
  return [].concat(...arr).sort((a, b) => b - a).join('>');
}

*/