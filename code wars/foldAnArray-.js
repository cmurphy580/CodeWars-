
function foldArray(array, runs){

while (runs > 0){
runs--;

//empty array
var result = [];

if(array.length === 1){
  result.push(array[0]); 
} else if (array.length === 2){
  result.push(array[0] + array[1]); 
} else if (array.length > 2) {


//first half of the array
var one = array.slice(0, (array.length/2));
//second half of array reversed 
var two = array.slice((array.length/2), array.length).reverse();

  //if array is odd length
  if (one.length < two.length){
    one.push(0);
  }
  //add the two arrays
  for (var i=0; i<(array.length/2); i++){
    result.push(one[i]+two[i]);
  }
}   

return (runs === 0) ? result : foldArray(result, runs);

}
}




