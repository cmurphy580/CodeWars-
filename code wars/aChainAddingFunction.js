function add(n){
  // Let the CURRYING begin!
    //storing a function in a variable that will continue to add numbers that will be returned when the function is ran ;
  var sum = function(x){
  	//adds numbers in succession 
    return add(x+n); 
  };
  //can use ".toString" instead of ".valueOf" 
  //Take the value of the variable and pass it through an anonymous function to set it equal to the parameter of the original function ;
  sum.valueOf = function () {
    return n; 
  }
  return sum; 
};

/*
Test.expect(add(1) == 1);
Test.expect(add(1)(2) == 3);
Test.expect(add(1)(2)(3) == 6);

*/