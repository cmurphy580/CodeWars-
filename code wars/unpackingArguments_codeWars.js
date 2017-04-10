function spread(func, args) {
   
   return func(...args); 
}

/*
BEST PRACTICE: 
1)
function spread(func, args) {
  return func.apply(this, args);
}
----------------------------------
2)
function spread(func, args) {
  return func.apply(null, args);
}

*/