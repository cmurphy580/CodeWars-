function findOutlier(integers){

  var i=0, even=[], odd=[], x=integers.length;

  for (i; i<x; i++){
    if(integers[i]%2 === 0){
       even.push(integers[i]); 
    } else {
       odd.push(integers[i]); 
    }
  }

  return even.length > odd.length ? Number(odd) : Number(even); 
}


/*
BEST PRACTICE: 
1)

function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}

//--------------------
2)

function findOutlier(integers){
  return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
}
function even(num){
  return (num % 2 == 0);
}
function odd(num){
  return !even(num)
}

*/