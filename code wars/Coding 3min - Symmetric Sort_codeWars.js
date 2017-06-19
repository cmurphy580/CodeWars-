function sc(array){
  let x = []; 
  array.sort((a,b) => b - a); 
  for (var i = 0; i < array.length; i++) {
   if (i % 2) 
      x.push(array[i])
    else
      x.unshift(array[i])  
  }
  return x.length % 2 === 0 ? x.reverse() : x; 
}

/*
BEST PRACTICE: 

function sc(a) {
  a = a.slice().sort((x,y) => x - y);
  var left = a.filter((v,i) => i % 2 == 0);
  var right = a.filter((v,i) => i % 2 == 1).reverse();
  return left.concat(right);
}

*/