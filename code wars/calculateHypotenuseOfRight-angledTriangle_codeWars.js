function calculateHypotenuse(a,b){
   return (!+a || !+b || typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) ?  error : Math.sqrt(a * a + b * b).toFixed(3); 
}

/*
BEST PRACTICE: 

1)

function calculateHypotenuse(a,b){
  a = parseFloat(a);
  b = parseFloat(b);
  if (!a || !b || a <= 0 || b <= 0){
    throw new Error("Invalid arguments. Must be two numbers greater than 0.");
  }
  
  return Math.sqrt(Math.pow(a,2) + Math.pow(b,2)).toFixed(3);
}
----------------------------------------------------------
2)

const calculateHypotenuse = (a, b) => 
  Math.abs(a) === a && Math.abs(b) === b 
    ? Math.sqrt(a * a + b * b).toFixed(3)
    : raise('Invalid Input')

*/