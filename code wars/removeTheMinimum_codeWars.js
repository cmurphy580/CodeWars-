function removeSmallest(numbers) {
  var min; 
  
  if (numbers.length < 2) {
    return [];   
  } else {
     min = numbers.indexOf(Math.min(...numbers)); 
     numbers.splice(min, 1); 
     return numbers;
  }
}

/*
BEST PRACTICE: 

1)
function removeSmallest(numbers) {
  if(!numbers)return [];
  var min=Math.min.apply(null,numbers);
  numbers.splice(numbers.indexOf(min),1);
  return numbers;
}

------------------------------------------

2)

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}


*/