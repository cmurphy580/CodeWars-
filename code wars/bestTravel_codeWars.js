
function chooseBestSum(t, k, ls) {
    //ls = array of dist
    //t = 174 mi
    //k = distance to each location 
     
    if (ls.length < k) {
      return null; 
    } else {
      var x = reduceArray(createCombinations(ls, k)); 
      var remove = (value) => value <= t; 
      var filtered = x.filter(remove);
      if (filtered.length > 0) {
      //new spread operator for Math.max - works with arrays - real nice -- 
        var best = Math.max(...filtered);
        return best; 
      } else {
        return null;
      }
    }
} 

//Creates all possible combinations of arrays -- 
function createCombinations (array, n, p) { /////////////////
    var i,
    subI,
    output = [],
    sub,
    next;
    for(i = 0; i < array.length; i++){
        if(n === 1){ //
            output.push( [ array[i] ] );
        }else{
            sub = createCombinations(array.slice(i+1, array.length), n-1); //
            for(subI = 0; subI < sub.length; subI++ ){
                next = sub[subI];
                next.unshift(array[i]);
                output.push(next);
            }
        }
    }
    return output;
}

//totals the subarrays from the above function's output --
function reduceArray(array, n, p) {
  var sum = [];  
  for (var j = 0; j < array.length; j++) {
    sum.push(array[j].reduce(function(a,b) {
       return a+b; 
     }));  
  }
  return sum; 
}

/*TESTS: 




*/
/*BEST PRACTICE: 
1)

function chooseBestSum(t, k, ls) {
  if(ls.length < k)
    return null;
  ls.sort((a, b) => a - b);
  var comb = [];
  for(var i = 0; i < k; i++)
    comb[i] = i;
  var maxSum = comb.reduce((sum, cur) => sum + ls[cur], 0);
  if(maxSum > t)
    return null;
  while(true) {
    var j = k - 1;
    while(comb[j] == ls.length - k + j)
      j--;
    if(j < 0)
      break;
    comb[j]++;
    for(i = j + 1; i < comb.length; i++)
      comb[i] = comb[i - 1] + 1;
    
    var sum = comb.reduce((sum, cur) => sum + ls[cur], 0);
    if(sum > t) {
      comb[j] = ls.length - k + j;
      for(i = j + 1; i < comb.length; i++)
        comb[i] = comb[i - 1] + 1;
    } else if(sum > maxSum)
      maxSum = sum;
    if(maxSum == t)
      return t;
  }
  return maxSum;
}
---------------------------------------------------------------
2)

function chooseBestSum(t, k, ls) {
  if(k == 0) {
    return 0;
  }
  if(t <= 0 || k < 0 || ls.length < k) {
    return null;
  }
  var best = 0;
  for(var i = 0; i < ls.length; i++) {
    var l = ls.slice();
    l.splice(i, 1);
    var v = ls[i], c = chooseBestSum(t-v, k-1, l);
    if(c != null && c+v > best && c+v <= t) {
      best = c+v;
    }
  }
  return best > 0 ? best : null;
}

*/