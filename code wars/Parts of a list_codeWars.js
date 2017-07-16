function partlist(arr) {
    let i = 1, result = [], x, y, z; 
    for (i; i < arr.length; i++) {
      x = [arr.slice(0, i).join(' ')]; 
      y = [arr.slice(i, arr.length).join(' ')]; 
      z = x.concat(y)
      result.push(z); 
    }
    return result; 
}
/*
BEST PRACTICE: 

1)

var partlist=a=>a.map((v,i)=>[a.slice(0,i).join(' '),a.slice(i).join(' ')]).slice(1)

-------------------------------------------------------------------------------

2)

const partlist = arr => arr.map((word, i) => [arr.slice(0,i+1).join(' '), arr.slice(i+1).join(' ')]).slice(0, arr.length-1)

*/