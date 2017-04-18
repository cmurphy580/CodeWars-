function Cylon(model){
  this.model = model;
  this.attack = () => "Destroy all humans!";
}

function HumanSkin(model){
  this.model = model; 
  this.infiltrate = () => "Infiltrate the colonies"; 
}

HumanSkin.prototype = new Cylon(); 


/*
BEST PRACTICE: 

1)

var Cylon = function (model){
  this.model = model;
}

Cylon.prototype.attack = function() {
  return "Destroy all humans!";
};

var HumanSkin = function (model) {
  Cylon.apply(this, arguments);
}

HumanSkin.prototype = Object.create(Cylon.prototype);
HumanSkin.prototype.constructor = HumanSkin;
HumanSkin.prototype.infiltrate = function() {
  return "Infiltrate the colonies";
}

-----------------------------------------------

2)

function Cylon(model) { this.model = model; }
Cylon.prototype.attack = function() { return "Destroy all humans!"; }

function HumanSkin(model){ return new Cylon(model); }
HumanSkin.prototype = Cylon.prototype;
HumanSkin.prototype.infiltrate = function() { return "Infiltrate the colonies"; }

-----------------------------------------------

3)

function Cylon(model){
  this.model=model;
  this.attack = function() { return "Destroy all humans!";}
}

function HumanSkin(model){
  this.__proto__= new Cylon(model);
  this.infiltrate = function() { return "Infiltrate the colonies";}
}




*/