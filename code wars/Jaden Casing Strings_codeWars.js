String.prototype.toJadenCase = function () {
  let x, y; 
  return this.toString().split(' ').map(s => {
    x = s.slice(0,1).toUpperCase(); 
    y = s.slice(1, s.length);
    return x + y; 
  }).join(' '); 
};

/*
BEST PRACTICE: 
N
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}
*/