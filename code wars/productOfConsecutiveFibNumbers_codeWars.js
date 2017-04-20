
function productFib(prod){
  
  let sequence = [1, 1],
      result = [];
      
  const last = (seq) => seq[seq.length-1]; 
  const secondToLast = (seq) => seq[seq.length-2]; 
  
  while (last(sequence) + secondToLast(sequence) <= prod) {
    sequence.push(last(sequence) + secondToLast(sequence)); 
  } 
  
  for (var i = 0; i + 1 < sequence.length; i++) {
    if (sequence[i] * sequence[i+1] === prod) {
      return [sequence[i], sequence[i+1], true]; 
    } else if (sequence[i] * sequence[i+1] > prod && sequence[i] * sequence[i+1] !== prod)
      return [sequence[i], sequence[i+1], false];
  }
}

/*
BEST PRACTICE: 

1) 

function productFib(prod){
  var n = 0;
  var nPlus = 1;  
  while(n*nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n*nPlus===prod];
}

-----------------------------------------

2)

function productFib(prod){
  let [a, b] = [0, 1];
  while(a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}

-------------------------------------------

3)

function productFib(prod){
  var a = 1
  var b = 1;
  while (a*b < prod) {
    var next = a+b;
    a = b;
    b = next;
  }
  return [a, b, a*b===prod];
}

*/