String.prototype.capitalize = function() {
  let first, capitalized, string; 
  first = this.slice(0, 1).charCodeAt();
  if (first >= 97 && first <= 122)
    first = first - 32; 
  capitalized = String.fromCharCode(first);
  string = this.slice(1); 
  return capitalized.concat(string); 
}

/*
BEST PRACTICE: 

String.prototype.capitalize = function () {
  let c = this.charCodeAt(0)
  if (97 <= c && c <= 122) c -= 32
  
  return String.fromCharCode(c) + this.slice(1)
}


*/