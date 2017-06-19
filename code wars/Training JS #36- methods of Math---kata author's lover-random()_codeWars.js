function rndCode(){
   let result = [], symbols = '~!@#$%^&*'; 
   for (var i=0;i<2;i++) {
     if (i === 1) 
       result.push(String.fromCharCode(~~(13 * Math.random() + 65)));
     else 
       result.push(String.fromCharCode(~~(26 * Math.random() + 65)));
  }
  for (var i=0;i<4;i++) {
    result.push(String(~~(Math.random() * 10)));
  }
  for (var i=0;i<2;i++) {
    result.push(symbols[~~(Math.random() * symbols.length)]);
    
  }
  return result.join('');
}

/*
BEST PRACTICE: 

function rndCode(){
  var randomRange = function (range, count) {
    var sequence = [];
    for (var i=0; i<count; i++) {
      sequence.push(range[~~(range.length*Math.random())]);
    }
    
    return sequence.join("");
  }
  
  return randomRange('ABCDEFGHIJKLM', 2) + randomRange('0123456789', 4) + randomRange('~!@#$%^&*', 2);
}

*/