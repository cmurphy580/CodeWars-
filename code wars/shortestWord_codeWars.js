function findShort(s){
  let output = [], i; 
  s = s.split(' '); 
  for (i = 0; i < s.length; i++) {
    output.push(s[i].length); 
  } 
  return Math.min(...output); 
}

/*
BEST PRACTICE: 

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}


*/