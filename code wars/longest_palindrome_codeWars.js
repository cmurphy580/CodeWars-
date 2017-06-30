function longestPalindrome(s) {
  var longest = 0, x, y; 
  for (var i = 0; i < s.length; i++) {
    for (var j = i + 1; j <= s.length; j++) {
      x = s.slice(i,j); 
      y = x.length; 
      if (isPalindrome(x) && longest < y)
        longest = y;   
    }
  }
  return longest; 
}


function isPalindrome(s) {
  var x = s.split('').reverse().join(''); 
  return s === x; 
}

/*
BEST PRACTICE: 

1) 

var longestPalindrome=function(s){
  if (!s) return 0;
  for (let c = s.length; c > 0; c--) {
    for (let i = 0; i <= s.length - c; i++) {
      var check = s.substr(i, c);
      if (check === check.split("").reverse().join("")) return c;
    }
  }
}
-------------------------------------------------

2)

longestPalindrome=function(s){
  var l = 0;
  for (var i = 0; i<s.length; i++)
    for(var j = i; j<=s.length; j++)
      if(s.substring(i,j) === s.substring(i,j).split('').reverse().join('') && s.substring(i,j).length > l)
        l = s.substring(i,j).length;

  return l;
}

*/