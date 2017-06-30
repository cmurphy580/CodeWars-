function revrot(str, sz) {
  let a = '', b, c = [], temp;
    str = str.split(''); 
    if (str.length < sz || sz <= 0) {
      return a; 
    } else {
      for (var i = 0; i < str.length; i += sz) {
        b = str.slice(i, i + sz);
        c.push(b);
      }

      c.map(arr => {
        if (arr.length === sz) {
          if (arr.reduce((j,k) => +j + +k) % 2 !== 0) {
            temp = +arr.splice(0,1); 
            arr.push(temp)
          } else if (arr.reduce((j,k) => +j + +k) % 2 === 0) {
            arr.reverse();
          }
        }
      });
    }
    return c.filter(arr => arr.length === sz)
            .reduce((j, k) => j.concat(k))
            .join(''); 
}


/*
BEST PRACTICE: 

function revrot(str, sz) {
  if (sz < 1 || sz > str.length) 
    return '';

  let reverse = s => s.split('').reverse().join('');
  let rotate  = s => s.slice(1) + s.slice(0, 1);
  let sum_cubes = c => c.split('').reduce((a, b) => a + +b ** 3, 0); 

  return str
    .match(new RegExp('.{' + sz + '}', 'g'))
    .map(c => sum_cubes(c) % 2 ? rotate(c) : reverse(c))
    .join('');
}
*/