function expandedForm(num) {
  let numbers = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1000000000000, 10000000000000],
  x = []; 
  num = String(num).split('').reverse();
  num.forEach((v,i) => {
    x.push(numbers[i] * v);  
  });
  return x.filter(v => v !== 0).reverse().join(' + '); 
}



/*
BEST PRACTICE: 

const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");
*/