var uniqueInOrder = function(iterable){
  let i = 0, z = [];
  (typeof iterable === 'string' ? iterable = iterable.split('') : iterable);
  for (i; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i+1])
      z.push(iterable[i]); 
  }
  return z; 
}

/*
BEST PRACTICE: 
1)

function uniqueInOrder(it) {
  var result = []
  var last
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }
  
  return result
}
----------------------------------------
2)

var uniqueInOrder = function (iterable)
{
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}

-----------------------------------------
3)

var uniqueInOrder=function(iterable){
  return Array.prototype.reduce.call(iterable, function(a,b) { if (a[a.length-1] !== b) a.push(b); return a; }, []);
}

------------------------------------------
4)

var uniqueInOrder=function(iterable){
  return Array.prototype.filter.call(iterable, function(current, index){ return iterable[index - 1] !== current})
}


*/