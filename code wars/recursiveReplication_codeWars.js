function replicate(times, number, output = []) {

   return times <= 0 ? output : replicate(times - 1, number, output.concat([number]));
   
}

/*
BEST PRACTICE: 

1)

/*
 function replicate(times, number) {
   return Array.from({length: times}).map(a => number);
 }
 */

//but according to request, I should use recursion, so...
/*

function replicate(times, number) {
  return times < 1 ? [] : [number].concat(replicate(times - 1, number));
}


//-------------------------------------------------

2)

function replicate(times, number) {
  return times > 0 ? Array(times).fill(number) : [];
}

// -----------------------------------------------

3)

function replicate(times, number) {
  return times < 1 ? [] : [number].concat(replicate(times - 1, number));
}

*/