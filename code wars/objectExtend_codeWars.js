const extend = function(...objs) {
  let nObj = {}; 
  objs.filter(obj => isObject(obj)).reverse().forEach(obj => Object.assign(nObj, obj)); 
  return nObj; 
}

/*
BEST PRACTICE: 
1) 

function extend(...args) {
  return Object.assign({}, ...args.filter(Object.isObject).reverse());
}

-------------------------------------------

2)

const extend = function(...args) {
    const result = args
        .reverse()
        .reduce((acc, next) => {
            return typeof next === 'object' 
                ? Object.assign(acc, next) 
                : acc;
        }, {});
    return result;

 ---------------------------------------------

 3) 

 var extend = function() {
  var result = {}
   for (var i in arguments) {
    if (!isObject(arguments[i])) {
      continue;
    }
    for (var k in arguments[i]) {
       if (k in result) {
         continue 
      }
      result[k] = arguments[i][k]
    }
  }
  return result
}

*/