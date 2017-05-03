function sumTwoSmallestNumbers(numbers) {  
   
  numbers = numbers.sort((a,b) => a - b); 
  return numbers.slice(0, 2).reduce((a,b) => a + b); 
 
};


/*
BEST PRACTICE: 

function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};


*/