function persistence(num) {
  var count = 0; 
  if (num<9){ 
  return 0;
  }
  while(!(num < 9)){
    num = num.toString().split("");
    num = Number(num.reduce((a,b) => a*b));
    count++
  }
  
  return count;
}

/*
Best Practice: 

function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}

*/