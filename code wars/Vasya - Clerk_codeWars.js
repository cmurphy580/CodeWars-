function tickets(line){
  let i = 0, [$25, $50, $100] = [0, 0, 0]; 
  for (i; i < line.length; i++) {
    switch(line[i]) {
      case 25: 
        $25++;
        break;
      case 50: 
        $50++; 
        $25--;
        break; 
      case 100: 
        $100++; 
        $25--; 
        ($50 ? $50-- : $25 -= 2); 
        break;    
    }
    if ([$25, $50, $100].some(v => v < 0))
      return 'NO'; 
  }
  return 'YES'; 
}

/*
BEST PRACTICE: 
function Clerk(name) {
  this.name = name;
  
  this.money = {
    25 : 0,
    50 : 0,
    100: 0 
  };
  
  this.sell = function(element, index, array) {
    this.money[element]++;

    switch (element) {
      case 25:
        return true;
      case 50:
        this.money[25]--;
        break;
      case 100:
        this.money[50] ? this.money[50]-- : this.money[25] -= 2;
        this.money[25]--;
        break;
    }
    return this.money[25] >= 0;
  };
}

function tickets(peopleInLine){
  var vasya = new Clerk("Vasya");
  return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
}

--------------------------------------------------------------------

2) 

function tickets(peopleInLine){
  var bills = [100, 50, 25], canSell = "YES", bank = {"100": 0, "50": 0, "25": 0}, change;
  peopleInLine.forEach(function(person){
    bank[person]++;
    change = person - 25;
    bills.forEach(function(bill){
      while (bank[bill] && change > 0 && change >= bill) {
        change = change - bill;
        bank[bill]--;
      }
    });
    if (change > 0) canSell = "NO";
  });
  return canSell;
}
*/