var Ghost = function() {
   let colors = ['white', 'yellow', 'purple', 'red']; 
   this.color = colors[Math.floor(Math.random()*4)]; 
};

/*
BEST PRACTICE: 

1)

var Ghost = function() {
  this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)];
};

--------------------------------------

2)

const colors = ["white", "yellow", "purple", "red"]
class Ghost {
  constructor() {
    this.color = colors[Math.floor(Math.random()*colors.length)];
  }
}

*/