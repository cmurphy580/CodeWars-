function cache(func) {
  let result = {}; 
  return function() {
    let args = JSON.stringify(arguments); 
    if (!result.hasOwnProperty(args)) {
      result[args] = func.apply(null, arguments); 
    }
    return result[args]; 
  }
}

/*
BEST PRACTICE: 
1)

function cache(func) {
  var calls = {};
  return function() {
    var key = JSON.stringify(arguments);
    if (!(key in calls)) {
      calls[key] = func.apply(null, arguments);
    }
    return calls[key];
  };
}

---------------------------------

2)

function cache(func) {
  var cache = {};
  return function() {
    var args = JSON.stringify(arguments);
    if (cache.hasOwnProperty(args)) return cache[args];
    else return (cache[args] = func(...arguments));
  }
}

*/