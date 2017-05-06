
//function greet(myName, yourName){
  //return "Hello " + yourName + ", my name is " + myName;
//}

function Person(name) {
  this.name = name; 
  this.greet = (yourName) => "Hello " + yourName + ", my name is " + name;  
}




/*
BEST PRACTICE: 

1)

function Person(name){
  this.name = name
}

Person.prototype.greet = function(yourName){
  return "Hello " + yourName + ", my name is " + this.name
}

-----------------------------------

2) 'Class-based Answer'

class Person {

  constructor(name) {
      this.name = name;
  }

  greet(yourName) {
    return "Hello " + yourName + ", my name is " + this.name;
  }
  
}


*/