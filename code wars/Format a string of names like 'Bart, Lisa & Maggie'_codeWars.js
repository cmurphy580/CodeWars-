function list(names){
  let output = [];
  names.forEach(person => output.push(person.name)); 
  if (output.length === 0) {
    return ''; 
  } else if (output.length === 1) {
    return output[0];
  } else if (output.length === 2) {
    return output.join(' & ');
  } else if (output.length > 2) {
    let a, b;
    a = output.slice(0, output.length - 1).join(', ')
    b = output[output.length-1]; 
    return a + ' & ' + b;
  } 
}

/*
BEST PRACTICE: 

1) 

function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }

----------------------------

2) 

function list(names) {
  var xs = names.map(p => p.name)
  var x = xs.pop()
  return xs.length ? xs.join(", ") + " & " + x : x || ""
}


----------------------------

3)

var list = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 & $2")

*/