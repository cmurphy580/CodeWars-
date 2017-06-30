function sc(apple,n){
  var dup = JSON.parse(JSON.stringify(apple));
  for (var x = 0; x < n; x++) {
    apple = JSON.parse(JSON.stringify(dup));
    for(var i = 0; i < apple.length; i++) {
      for (var j = 0; j < apple[0].length; j++) {
        if (apple[i][j] === 'V' ) {
          if (j + 1 < apple[0].length)
            dup[i][j + 1] = 'V';
          if (i + 1 < apple.length)
            dup[i + 1][j] = 'V';
          if (j - 1 >= 0)
            dup[i][j - 1] = 'V';
          if (i - 1 >= 0)
            dup[i - 1][j] = 'V';
        }
      }
    }
  }
  return dup; 
}

/*
BEST PRACTICE: 

1)
***
function sc(apple, n) {
  let viruses = []
  for (let y in apple)
    for (let x in apple[y])
      if (apple[y][x] == 'V')
        viruses.push([x, y])

  for (let y in apple)
    for (let x in apple[y])
      if (viruses.some(([ vx, vy ]) => Math.abs(x - vx) + Math.abs(y - vy) <= n))
        apple[y][x] = 'V'

  return apple
}

-----------------------------------------

2)

function sc(apple,n){
  let h = apple.length-1, w = apple[0].length, copy;
  while(n--){
    copy = apple.map( (row,y) => row.map( (c,x) => {
        let infected = y&&apple[y-1][x]=="V" 
          || y<h&&apple[y+1][x]=="V" 
          || x&&row[x-1]=="V"
          || x<w&&row[x+1]=="V";
      return  infected ? "V" : c
      })
    )
    apple = copy;
  }
  return apple
}
*/