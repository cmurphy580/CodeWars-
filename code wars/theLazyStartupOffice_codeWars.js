function binRota(arr){
  let i = 0, j, output = []; 
  for (i; i < arr.length; i++) {
    output.push(arr[i]); 
    if (i % 2 !== 0) {
       j = arr[i].length-1; 
       while (j >= 0) {
         output.push(arr[i].splice(j));
         j--;
       }
    }
  }
  return output.reduce((a,b) => a.concat(b)); 
}

/*
BEST PRACTICE: 

function binRota(arr) {
    return arr.reduce(function(a, b, index) {
        return (index % 2 === 0) ? a.concat(b) : a.concat(b.reverse());
    });
}

*/