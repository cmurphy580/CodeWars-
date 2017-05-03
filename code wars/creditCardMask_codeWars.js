
function maskify(cc) {
  if (cc <= 4) { 
    return cc; 
  } else {
    for (var i = 0; i < cc.length - 4; i++) {
      cc = cc.replace(cc[i], '#'); 
    }
   }
   return cc; 
}


/*

BEST PRACTICE: 

1)

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

-------------------------------------------------------

2)

function maskify(cc) {
  return cc.replace(/.(?=....)/g, '#');
}

-------------------------------------------------------

3)

function maskify(cc) {
  return cc.replace(/.(?=.{4})/g, "#");
}


*/