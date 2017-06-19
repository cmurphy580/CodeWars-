function infiniteLoop(arr,d,n){
  let [x, y, z] = arr.map(a => a.length), 
      array = arr.reduce((a,b) => a.concat(b));
      
  if (d === 'left') {
    for (var i = 0; i < n; i++) {
      array.push(array.shift()); 
    }
  } else if (d === 'right') {
    for (var i = 0; i < n; i++) {
      array.unshift(array.pop());  
    }
  }
  //when exactly three arrays
  return [array.splice(0, x), array.splice(0,y), array]; 
  //more than three arrays
  /*
  var k=0;
  for (var i =0; i<arr.length; i++){
    for (var j =0; j<arr[i].length; j++){
      arr[i][j] = +(array[k]);
      k++;
    }
  */
}