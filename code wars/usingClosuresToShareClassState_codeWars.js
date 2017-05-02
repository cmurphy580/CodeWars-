var Cat = (function () {

    let weights = 0, count = 0;

     function Cat(name, weight) {

       this.name = name; 
       this.weight = weight;  
       if(!name || !weight) throw TypeError(undefined); 
       weights += weight; 
       count++;//* 

       Object.defineProperty(this, 'weight', {
         get: function() {
           count--;//*
           return weight; 
         },
         set: function(value) {
            weights -= weight; 
            weights -= value;//*
            weight = value;
            count--; //*
         }
        });
     }
    Cat.averageWeight = function() {
       return weights/count; //*
    };

    return Cat; //returns function declared in iife

}());


/*
BEST PRACTICE: 

1)

// Let's make a Cat constructor!
var Cat = (function () {
  var cats = {
    count: 0,
    totalWeight: 0,
    avgWeight: 0
  }
  
  function Cat (name, weight) {
    if (!name || !weight) {
      throw new Error('Both `name` and `weight` should be provided');
    }
    cats.count++;
    this.name = name;

    Object.defineProperty(this, 'weight', {
      get: function () {
        return this._weight || 0;
      },
      set: function (val) {
        cats.totalWeight = cats.totalWeight - this.weight + val;
        cats.avgWeight =  cats.totalWeight / cats.count;
        return this._weight = val;
      }
    });

    this.weight = weight;
  }
  
  Cat.averageWeight = function () {
    return cats.avgWeight;
  }
  
  return Cat;
  
}());



-------------------------------------------------

2)

var Cat = (function () {
  var catCount = 0, catAggWeight = 0;
  var constr = function(name, weight) {
    if(!name || !weight) {throw 'Must provide a name and a weight!';}
    catCount++;
    catAggWeight += weight;
    Object.defineProperty(this, 'weight', {set: function(v) {
      catAggWeight += v - weight;
      weight = v;
    }, get: function() {return weight;}});
  }
  constr.averageWeight = function() {
    return catAggWeight / catCount;
  }
  return constr;
}());

-------------------------------------------------

3)

var Cat = (function() {

  var totalWeight = 0;
  var countInstances = 0;

  function Cat(name, weight) {
    if (arguments.length < 2) {
      throw new Error('Both name and weight sould be specified.');
    }
    this.name = name;
    Object.defineProperty(this, 'weight', {
      get: function() {
        return weight;
      },
      set: function(w) {
        totalWeight -= weight - w;
        weight = w;
      }
    });
    totalWeight += weight;
    countInstances += 1;
  }
  
  Cat.averageWeight = function() {
    return totalWeight / countInstances;
  };

  return Cat;

}());



*/



