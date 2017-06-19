function sc(floor){
  let x = 'Aa~ ', y = 'Pa!', z = 'Aa!', result = ''; 
  if (floor <= 1) {
    return result; 
  } else {
    for (var i = 0; i < floor - 1; i++) {
      result += x; 
    }
  }
  if (i = floor - 1) {
    result += y;
  }
  if (floor < 7) {
    result +=  ' ' + z; 
  }
  return result; 
}

/*
BEST PRACTICE: 

1)

function sc(floor) {
  if (floor <= 1) return "";
  var SCREAM = "";
  for (let i = 0; i < floor - 1; i++) {
    SCREAM += "Aa~ ";
  }
  SCREAM += "Pa!";
  if (floor <= 6) SCREAM += " Aa!";
  return SCREAM;
}

------------------------------------------

2)

const sc = floor => floor > 1 ? Array.from({length: floor - 1}, () => "Aa~").concat(floor > 6 ? ["Pa!"] : ["Pa!", "Aa!"]).join(" ") : "";

*/