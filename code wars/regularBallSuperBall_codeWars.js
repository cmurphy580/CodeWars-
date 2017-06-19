var Ball = function(ballType) {
  this.ballType = ballType || 'regular';
};

/*
ANOTHER SOLUTION: 

class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType; //this.ballType = ballType || 'regular'; 
  }
}

*/