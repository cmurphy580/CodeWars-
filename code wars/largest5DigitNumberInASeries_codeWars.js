function solution(digits){

  let highFive = 0; 

  for (var i = 0; i <= digits.length; i++) {
    highFive = Math.max(highFive, digits.slice(i, i + 5))
  }

  return highFive; 
}

/*
BEST PRACTICE: 

function solution(digits){

  if (digits.length <= 5) return Number(digits);

  return Math.max(Number(digits.substr(0, 5)), solution(digits.substr(1)));
}

*/