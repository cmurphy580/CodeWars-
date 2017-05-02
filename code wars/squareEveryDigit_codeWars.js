function squareDigits(num){
  num = num.toString().split(''); 
  num = num.map((v) => +v * +v).join(''); 
  return +num; 
}

/*

BEST PRACTICE: 

function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}


*/