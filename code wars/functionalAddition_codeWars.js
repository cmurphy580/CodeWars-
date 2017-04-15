const add = (n) => (n2) => n + n2; 

/*
BEST PRACTICE: 

function add(n) {
  return function (x) { 
  	return x + n
  	};
}

*/