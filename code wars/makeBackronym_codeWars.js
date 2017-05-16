//preload variable: dict

var makeBackronym = function(string){
  return string = string.toUpperCase().split('').map(l => dict[l]).join(' '); 
};

/*
DIFFERENT SOLUTIONS: 

1)

var makeBackronym = function(string){
var result = [];
for (var i =0; i < string.length; i++) {
   result.push(dict[string.toUpperCase()[i]]);
 }
return result.join(' ');
};

-------------------------------------------

2)

var makeBackronym = function(string){
  return [...string].reduce((a, b) => a + ` ${dict[b.toUpperCase()]}`, '').trim();
}


*/