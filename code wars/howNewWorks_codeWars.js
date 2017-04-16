// Implement the functionality of the 'new' operator as if you had the code:
// var myObj = new MyObject();
// but do not use the 'new' operator.
//
// Start with a simple empty Object literal.

var myObj = {};
myObj.__proto__ = MyObject.prototype; 
MyObject.call(myObj); 

/*
BEST PRACTICE: 

1)
var myObj = {};
myObj.__proto__ = MyObject.prototype;
myObj.constructor = MyObject;
MyObject.call(myObj);

-----------------------------

2)
var myObj = {};
myObj.__proto__ = MyObject.prototype;
myObj.contructor = MyObject.constructor;
myObj.constructor();

-----------------------------

3)

var myObj = Object.create(MyObject.prototype);
MyObject.bind(myObj)();



*/