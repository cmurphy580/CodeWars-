function sc(exchange){
  let array = [null, 0, 1, 0];
  exchange.forEach(i => {
    i = i.split('-'); 
    [array[i[0]], array[i[1]]] = [array[i[1]], array[i[0]]]; 
  });
  return String(array.indexOf(1)); 
}

/*
BEST PRACTICE: 

1)

function sc(exchange){
  return exchange.reduce((s, v) => v[0] === s ? v[2] : v[2] === s ? v[0] : s, '2');
}


*/