//CLOSURES

// return a function that returns n
function always (n) {
  return function() {
    return n; 
    }; 
}

/*
BEST PRACTICE: 

const always = (n) => () => n;

*/