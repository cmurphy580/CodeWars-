class Block{

  constructor(data) {
    this.width = data[0];
    this.length = data[1]; 
    this.height = data[2]; 
  }
  
  getWidth() {
    return this.width; 
  }
  
  getLength() {
    return this.length; 
  }
  
  getHeight() {
    return this.height; 
  }
  
  getVolume() {
    return this.length * this.width * this.height; 
  }
  
  getSurfaceArea() {
    //SA=2lw+2lh+2hw
    return ((2 * this.length * this.width) + (2 * this.length * this.height) + (2 * this.height * this.width)); 
  }
  
}



/*
BEST PRACTICE: 

class Block {
  constructor(data){
    [this.w, this.l, this.h] = data;
  }
  getWidth(){ return this.w }
  getLength(){ return this.l }
  getHeight(){ return this.h }
  getVolume(){
    let {l, w, h} = this;
    return w*l*h;
  }
  getSurfaceArea(){
    let {l, w, h} = this;
    return 2 * (l*w + l*h + w*h);
  }
}

*/