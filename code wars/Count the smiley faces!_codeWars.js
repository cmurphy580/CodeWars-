function countSmileys(arr) {
  return arr.filter(v => v.match(/[:;][-~]?[\)D]/g)).length; 
}
/*
BEST PRACTICE: 

const countSmileys = ss => ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);
*/