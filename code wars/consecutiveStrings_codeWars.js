function longestConsec(array, k) {
  let x = array.slice(), y = [];
  if (k <= 0 || k > array.length) {
    return ''; 
  } else {
    return array.map((v, i) => array.slice(i, i+k).join(''))
                .reduce((l, c) => c.length > l.length ? c : l); 
  }
}