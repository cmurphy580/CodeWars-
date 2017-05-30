function grabDoll(dolls){
  var bag=[];
  for (var i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i]); 
      if (bag.length === 3) 
        break; 
    } else { 
      continue;
    }
  }

/*
BEST SOLUTION: 

function grabDoll(dolls){
  var bag=[];
  
  for(var i = 0; i < dolls.length; i++) {
  
    if(dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll")
      bag.push(dolls[i]);
    else
      continue;
      
    if(bag.length === 3) break;
  }
  
  return bag;
}

*/











  /*
In this example, for loop traverse the array arr. when the first odd number found, break statement will jump out the for loop.

In the loop statement, we can use continue skipping some code. for example, the following code ignores negative values:

function dontDisplayNegative(arr){
  for (var i=0;i<arr.length;i++){
    if (arr[i]<0) continue;   
    console.log(arr[i])
  }
}
In this example, console.log(arr[i]) is never executed for negative element. thanks to continue.
  */