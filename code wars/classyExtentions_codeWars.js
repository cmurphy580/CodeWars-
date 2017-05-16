class Cat extends Animal {
  speak() {
    return this.name + ' meows.'; 
  }
}

/*
BEST PRACTICE: 

1)

class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}

------------------------------------

2)

class Cat extends Animal {
  constructor (value) {
    super(value)
  }
  speak(){
    return `${this.name} meows.`
  }
}

-------------------------------------

3)

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.speak = () => this.name + ' meows.';
  }
}

*/