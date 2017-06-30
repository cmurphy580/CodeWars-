function incrementString (string) {
  let regex = /\d+\b/g, x, y, z;
  if (!regex.test(string)) { 
    return string + '1';
  } else {
    x = string.match(regex); 
    y = x[0].length;
    z = String(+x[0] + 1); 
    if (z.length < y) {
      while (z.length < y) {
        z = '0' + z.slice(0, z.length)
      }
    }
    return string.split(regex)[0] + z;  
  }
}



/*
BEST PRACTICE: 

function incrementString(input) {
  return input.replace(/\d*$/, function(n) {
    var x = ~~n + 1
    return ('0000000' + x).slice(-Math.max(n.length, String(x).length))
  })
}

*/