









/*

BEST PRACTICE: 

function NamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;
}

NamedOne.prototype = {
  get fullName() {
    return this.firstName + ' ' + this.lastName; 
  },
  set fullName (full) {
    let firstAndLast = full.split(' '); 
    if (firstAndLast.length === 2) {
      this.firstName = firstAndLast[0];
      this.lastName = firstAndLast[1]; 
    }
  }
}

*/