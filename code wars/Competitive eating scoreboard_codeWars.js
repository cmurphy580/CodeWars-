function scoreboard(w){
  let score, k = 0, output = {}, result = []; 
  
  for (k in w) {
    if (w[k].name !== '') {
    score = (w[k].chickenwings * 5) + (w[k].hamburgers * 3) + (w[k].hotdogs * 2); 
    output = {name: w[k].name, score: score}
    result.push(output); 
    }
  }
   return result.sort((a,b) => a.score === b.score ? a.name > b.name : b.score - a.score);
}

/*
BEST PRACTICE: 

1) 

function scoreboard(whoAteWhat){
  return whoAteWhat.map(obj => ({
    name: obj.name,
    score: obj.chickenwings * 5 + obj.hamburgers * 3 + obj.hotdogs * 2,
  })).sort((a, b) => b.score - a.score || a.name > b.name);
}

---------------------------------------------------------------

2) 

function scoreboard(whoAteWhat){
  return whoAteWhat.map(p => ({ name: p.name, score: p.chickenwings * 5 + p.hamburgers * 3 + p.hotdogs * 2 })).sort((a, b) => b.score - a.score || (a.name > b.name ? 1: -1))
}

*/