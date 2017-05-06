function Animal(name, type) {
  this.name = name;
  this.type = type; 
  this.toString = () => this.name + ' is a ' + this.type; 

  Object.defineProperty(Animal, 'name', {
    get: function() {
      return this.name; 
    },
    set: function(name) {
      this.name = name; 
    }
  });

  /*
BEST PRACTICE: 
1) 

  var Animal = function(name, type) {
    this.name = name;
    this.type = type;
  }

  Animal.prototype.toString = function() {
    return this.name + ' is a ' + this.type;
  }

----------------------------------------------

2) 

class Animal {
    
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    
    toString() {
        return this.name + ' is a ' + this.type;
    }
  }

  */