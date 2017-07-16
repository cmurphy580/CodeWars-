function dashatize(num) {
  let x, y = /--/gm;
  if (num < 0) 
    num = num * -1; 
  if (!Number.isInteger(num)) {
    return 'NaN';
  } else if (num < 10 && num >= 0) {
    return String(num); 
  } else {
  num = String(num)
  x = num.split('').map((v,i) => {
    if (+v % 2 !== 0) {
      if (i === 0)
        v = v + '-'; 
      else if (i === num.length-1)
        v = '-' + v; 
      else 
        v = '-' + v + '-'; 
    }
    return v; 
  }).join('');
    return x.replace(y, '-'); 
  }
};


/*
BEST PRACTICE: 

function dashatize(num) {
  return String(num)
    .replace(/([13579])/g, "-$1-")
    .replace(/--+/g, "-")
    .replace(/(^-|-$)/g, "")
}
*/