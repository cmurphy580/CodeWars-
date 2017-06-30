function xor(a, b) {
  if (a === false && b === false)
    return false;
  else if (a === true && b === true)
    return false; 
  else if (a === false && b === true || b === false && a === true) 
    return true; 
}

/*
BEST PRACTICE: 

function xor(a, b) {
  return a != b;
}

*/
