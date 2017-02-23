//Luhn Check // Luhn Algorithm 

function validate(n){
  var array = n.toString().split(""); 
  
  for (var i=array.length-2; i>=0; i--) { // to get rid of the next line change the for loop to this, "for (var i = numArray.length - 2; i >= 0; i = i - 2) {"
    if(i%2 === 0){
    array[i]*=2;
    if (array[i] > 9){
      array[i] = Math.floor(array[i]/10) + array[i] % 10; //or -- array[i] == array[i] - 9; 
      }
    }
  }
  
  var sumTotal = 0; 
  
  for (var j=0; j<array.length; j++){
    sumTotal += parseInt(array[j]); 
  }
  return (sumTotal % 10 === 0); 
}

//Best Practice // another way to do it -- 
/*
function validate(n){
  var sum = 0;

  while (n > 0) {
    var a = n % 10;
    n = Math.floor(n / 10);
    
    var b = (n % 10) * 2;
    n = Math.floor(n / 10);
    
    if (b > 9) {
      b -= 9;
    }
    
    sum += a + b;
  }
  
  return sum % 10 == 0;
}
*/

//Best Practice // another way to do it -- 
/*
function validate(n) {
  n = n.toString().split('').map(Number).reverse();
  return n.reduce(function (sum, digit, index) {
    if (index & 1) digit <<= 1;
    if (digit > 9) digit -= 9;
    return sum + digit;
  }, 0) % 10 == 0;
}
*/

