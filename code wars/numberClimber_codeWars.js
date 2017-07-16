const climb = (n) => {
 let result = [n];  
  while (n > 1) {
    n = ~~(n / 2); 
    result.push(n); 
  }
  return result.reverse();  
}