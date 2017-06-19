function sc(words){
  let count = [], regex = /[\!,:\.;\?\(\)\/]/g
  words = words.toLowerCase().split('').filter(v => !v.match(regex)).join('').split(' ');
  words.forEach(v => {
    if (count.indexOf(v) === -1)
      count.push(v);
    else 
      count.push('s');
  }); 
  return count.map(v => v.length).reduce((a,b) => a + b);  
}

/*
BEST PRACTICE: 

1)

const sc = words => {
  var alreadyRead = [];
  return words.toLowerCase().replace(/[^a-z\s]/g, "").split(" ").reduce((result, word) => {
    if (alreadyRead.indexOf(word) > -1){
      return result + 1;
    } else {
      alreadyRead.push(word);
      return result + word.length;
    }
  }, 0);
}

----------------------------------------

2)

function sc(words){
  var mySet = new Set(), count = 0;
  words.replace(/[.,!?:()+-='']/g, '').toLowerCase().split(' ').forEach(e => { if (mySet.has(e)) count += 1; else { count += e.length; mySet.add(e) } });
  return count;
}

*/