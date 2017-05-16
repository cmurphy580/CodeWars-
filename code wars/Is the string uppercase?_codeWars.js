//define the string prototype here
String.prototype.isUpperCase = function() {
  let string = this.toString().split(''); 
  return string.every(x => x === undefined ? undefined : x.toUpperCase() === x ? true : false); 
}

/*
BEST PRACTICE: 

String.prototype.isUpperCase= function() {

return this==this.toUpperCase()

}

*/