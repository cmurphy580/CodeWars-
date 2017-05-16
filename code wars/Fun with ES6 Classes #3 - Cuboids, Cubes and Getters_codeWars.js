class Cuboid {
  constructor(length, width, height) {
    this.length = length; 
    this.width = width;
    this.height = height; 
  }
  get volume() {
    return this.length * this.height * this.width; 
  }
  get surfaceArea() {
    return ((2 * this.length * this.width) + (2 * this.length * this.height) + (2 * this.height * this.width)); 
  }
}
class Cube extends Cuboid {
  // Don't forget to make a call to super ;)
  constructor(length) {
    super(length, length, length); 
  }
}