function solution(number){
  let A = 0, B = 0, C = 0;
  for (var i = 1; i < number; i++) {
    if (i % 15 === 0) {
      C++; 
    } else if (i % 5 === 0) {
      B++; 
    } else if (i % 3 === 0) {
      A++; 
    }
  } 
  return [A, B, C]; 
}

/*
BEST PRACTICE: 

function solution(n) {
  --n;
  const c15 = Math.floor(n / 15);
  const c3 = Math.floor(n / 3) - c15;
  const c5 = Math.floor(n / 5) - c15;
  return [c3, c5, c15];
}

*/