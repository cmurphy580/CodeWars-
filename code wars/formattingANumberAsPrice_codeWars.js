var numberToPrice = function(number) {

let one, two; 

  if (typeof number !== 'number') {
  
    return 'NaN';
    
  } else {
    
    number = number.toFixed(3); // fix number after decimal to three, because of rounding issues
    one = number.toString().split('.')[0]; //number before the decimal
    two = number.toString().split('.')[1]; //number after the decimal
    two = two.slice(0, 2); //slice off third number after decimal
    one = Number(one).toLocaleString().concat('.'); //put commas in one and add decimal pt
    number = one.concat(two); //join the two. 
    
    return number; 

  }
}


/*
BEST PRACTICE: 

1)

var numberToPrice = function(n) {
   return typeof n != 'number' ? 'NaN' : n.toFixed(3).replace(/\d$/, '').replace(/(\d)(?=(?:\d{3})+\.)/g, '$1,')
}

----------------------

2)

function numberToPrice(number) {
  if (isNaN(number) || number === '') {
    return NaN.toString();
  }
  let sign = (number < 0 ? '-' : '');
  number = Math.abs(number).toFixed(3).slice(0, -1);
  let chars = number.toString().split('');
  for (let i = chars.length - 6; i > 0; i -= 3) {
    chars.splice(i, 0, ',');
  }
  return sign + chars.join('');
}

*/