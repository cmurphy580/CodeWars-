function findOdd(A) {

 let obj = {}, n = 0; 
 
 A.forEach((n) => { obj[n] ? obj[n]++ : obj[n] = 1; }); 
 
 for (n in obj) {
   if (obj[n] % 2 !== 0) return +n; 
 }
 
}

/*
BEST PRACTICE: 
1)

const findOdd = (A) => A.reduce((a,b) => A.filter((c) => b === c).length % 2 === 0 ? a : b); 

--------------------------------------------

2)

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);


*/