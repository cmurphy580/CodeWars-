function isValidIP(str) {
  let regex = /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])){1}$/;
  return regex.test(str);
}










/*

BEST PRACTICE: 

1)

function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}

---------------------------------------------

2) 'a clever solution'


function isValidIP(str) {

  str = str.split('.'); 
  if (str.length !== 4) return false; 
  for (var i = 0; i < str.length; i++) {
  let n = +str[i]; 
  if (n < 0 || n > 255 || isNaN(n) || /\s/.test(str[i])) return false; 
  }
  return true;

}

*/