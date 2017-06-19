function findSimilarity(str,word){
  let x = word[0] + Array(word.length-1).join('.') + word.slice(-1), regex = new RegExp('^' + x + '$'); 
  return str.split(' ').filter(s => regex.test(s)).join(' ');  
}

/*
BEST PRACTICE: 

1)

findSimilarity=(str,w)=>str.split(' ').filter(a=>a.length==w.length&&a[0]==w[0]&&a.slice(-1)==w.slice(-1)).join(' ')

----------------------------------

2)

function findSimilarity(str,word){
  var reg=new RegExp("^"+word.replace(/\B.\B/g,".")+"$");  // \B match non character boundary
  return str.split(/ /).filter(x=>reg.test(x)).join(" ");
}

*/