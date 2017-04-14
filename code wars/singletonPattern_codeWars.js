var Singleton = (function(){
    //new object created and assigned to this. Singleton is a constructor function.
    //Singleton value has to be stored somewhere to be return later. 
    let instance; 
    
    return function() { 
      if (!instance) {
        instance = this; 
      }
      //return instance or this
      return instance; 
    }
    
}());


/*
BEST PRACTICE: 

1)
var Singleton = function() {
	if (Singleton.instance) return Singleton.instance; 
	Singleton.instance = this; 
	return this; 
}; 

--------------------------------------

2)
var Singleton = function(){
  if(Singleton.__instance) {
    return Singleton.__instance;
  }
  
  Singleton.__instance = this;
};

--------------------------------------

3)
var Singleton = (function () {
  var instance = null;

  return function(){
    return instance || (instance = this);
  };
})();


--------------------------------------

4)

var Singleton = function(){
  return Singleton.ins = Singleton.ins ? Singleton.ins : this;
};


*/