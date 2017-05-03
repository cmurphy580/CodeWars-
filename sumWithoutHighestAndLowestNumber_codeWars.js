function sumArray(array) {
  if (array === null) { return 0; 
  } else if (array.length < 2) {
    return 0;
  } else {
  array.sort((a,b) => a - b); 
  array.splice(0,1); 
  array.splice(array.length-1);
    if (array.length > 2) {
      return array.reduce((a,b) => a + b); 
    } else { 
      return 0; 
    }
  }


  /*
  BEST PRACTICE: 

  1)

  function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function(a,b) {return a - b;});
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}

----------------------------------------------------

2)

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0


  */