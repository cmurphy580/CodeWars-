function findNeedle(haystack) {
  let n = 'needle', i = haystack.indexOf(n); 
  return 'found the needle at position ' + i; 
}

/*
BEST PRACTICE: 

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

*/