
Dog.prototype.checkDog = function() {
  if (this.wormed === true && this.vaccinated === true) {
    return this.name + ' can be accepted'; 
  } else if (this.wormed === true || this.vaccinated === true) {
    return this.name + ' can only be accepted by itself';
  } else if (this.wormed === false && this.vaccinated === false) {
    return this.name + ' can not be accepted'; 
  }
}

/*

BEST PRACTICE: 

1)
Dog.prototype.checkDog = function() {
  if (this.vaccinated && this.wormed) return `${ this.name } can be accepted`;
  if (this.vaccinated || this.wormed) return `${ this.name } can only be accepted by itself`;
  return `${ this.name } can not be accepted`;
};

--------------------------------------------------------------

2)

Dog.prototype.checkDog = function(){
  return (this.wormed && this.vaccinated) ? `${this.name} can be accepted` : ((!this.wormed && !this.vaccinated) ? `${this.name} can not be accepted` : `${this.name} can only be accepted by itself`);
}

*/