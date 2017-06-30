
function sc(obj){
  return Array.isArray(obj) ? obj.toString() === obj.reverse().toString() : obj.toString().split('').reverse().join('') === obj.toString();
}


/*
BEST PRACTICE: 

1)

function sc(r) {
  if (!Array.isArray(r)){
    r = (r + "").split("");
  }
  return r + "" == r.reverse() + "";
}

*/