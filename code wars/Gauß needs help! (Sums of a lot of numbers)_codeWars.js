function f(n){
  let result = 0; 
  if (n > 0 && Number.isInteger(n)) {
  for (var i = 1; i <= n; i++) {
    result += i; 
  }
  return result; 
} else {
  return false;
}
};

/*
BEST PRACTICE: 

function f(n){
  return (parseInt(n) === n && n > 0) ? n*(n+1)/2 : false;
};

*/