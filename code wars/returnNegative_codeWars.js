function makeNegative(num) {
  return num > 0 ? 0 - num : num; 
}

/*
BEST PRACTICE: 

function makeNegative(num) {
  return -Math.abs(num);
}

*/