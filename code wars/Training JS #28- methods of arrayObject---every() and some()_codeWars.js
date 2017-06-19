function mirrorImage(arr){
  let x, y; 
  return arr.some((v, i) => {
    x = v; 
    y = arr[i+1];
    if (y !== undefined)
      return x === +y.toString().split('').reverse().join('');
  }) ? [x, y] : [-1, -1];  
}

/*
BEST PRACTICE: 

1) 

function mirrorImage(arr){
  for(var i=0;i<arr.length-1;i++){
    if(arr[i].toString().split('').reverse().join('')===arr[i+1].toString())return [arr[i],arr[i+1]]
  }
  return [-1,-1]
}

----------------------------------

2)

function mirrorImage(arr) {
    var a, b;
    var result = arr.some((x, i) => {
        a = x, b = arr[i + 1];
        return x === Number(String(b).split('').reverse().join(''));
    });

    return result ? [a, b] : [-1, -1];
} 

*/