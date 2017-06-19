function sc(watermelon){
  let one = [], two = [], three = [], four = [], i = 0, j = 4;
  for (i; i < 4; i++) {
    one.push(watermelon[i].slice(0, 4)); 
    two.push(watermelon[i].slice(4, 8)); 
   } 

  for (j; j < 8; j++) {
    three.push(watermelon[j].slice(0, 4)); 
    four.push(watermelon[j].slice(4, 8));
  }
  one = one.reduce((a,b) => a.concat(b)).reduce((a,b) => a + b); 
  two = two.reduce((a,b) => a.concat(b)).reduce((a,b) => a + b); 
  three = three.reduce((a,b) => a.concat(b)).reduce((a,b) => a + b); 
  four = four.reduce((a,b) => a.concat(b)).reduce((a,b) => a + b); 
  
  let result = [one, two, three, four], k = 0; 
  
  for (k; k < result.length; k++) {
    if  (result[k] <= 5) 
      result[k] = 0; 
  }
  
  return result.reduce((a,b) => a + b);  
}


/*
BEST PRACTICE: 

1)

function sc(watermelon){
  return [watermelon.filter((_,i) => i <= 3).reduce((sum, cur) => sum + cur.filter((x,i) => x == 1 && i <= 3).length, 0),
          watermelon.filter((_,i) => i <= 3).reduce((sum, cur) => sum + cur.filter((x,i) => x == 1 && i > 3).length, 0),
          watermelon.filter((_,i) => i > 3).reduce((sum, cur) => sum + cur.filter((x,i) => x == 1 && i <= 3).length, 0),
          watermelon.filter((_,i) => i > 3).reduce((sum, cur) => sum + cur.filter((x,i) => x == 1 && i > 3).length, 0)]
          .reduce((sum, seeds) => sum + (seeds > 5 ? seeds : 0), 0);
}

---------------------------------------------------

2)

function sc(watermelon){
  var result = [0,0,0,0];
  (watermelon + "").replace(/[ ,]/g, "").split("").forEach((item, index) => {
    result[(2 * (~~(index / 4) % 2)) + ((~~(index / 8) < 4) ? 1 : 0)] += parseInt(item);
  });
  return result.reduce((a, b) => a + (b > 5 ? b : 0), 0);
}

---------------------------------------------------

3)

sc = (w, c, r = 0) => {
  for (let i = 0; i < 5; i += 4) for (let j = 0; j < 5; j += 4) r += (c = w.slice(i, i + 4).reduce((r,e) => r += e.slice(j,j + 4).filter(e => e == 1).length, 0)) > 5 ? c : 0;
  return r;
}
---------------------------------------------------
*/