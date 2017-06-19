function sc(apple){
  for (var i = 0; i < apple.length; i++) {
    for (var j = 0; j < apple[0].length; j++) {
      if (apple[i][j] === 'B')
        return [i, j]
    }
  } 
}

/*
OTHER SOLUTIONS: 

1) 

function sc(apple){
  for (let x = 0; x < apple.length; x++) {
      let y = apple[x].indexOf('B')
      if (y > -1) return [x, y]
  }
}

------------------------------------------

2)

function sc(apple){
    return apple.map((e,i) => [i,e.findIndex(x => x=='B')]).filter(x => !x.includes(-1))[0]
}


*/