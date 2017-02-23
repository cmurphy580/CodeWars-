//Math Issues
Math.round = function(number) {
  if (!(number%1)){
  return number; 
  } else {
  var numString = number.toString(); 
  return Number(numString.charAt(numString.indexOf(".")+1)) >= 5 ? Math.ceil(number) : Math.floor(number); // TODO: fix this
  }
};

Math.ceil = function(number) {
  if (!(number%1)){
  return number; 
  } else {
  return number > 0 ? Math.floor(number)+1 : Math.floor(number)-1; 
 
  }
};

Math.floor = function(number) {
  if (!(number%1)){
  return number; 
  } else {
  var numString = number.toString(); 
  return Number(numString.substr(0, numString.indexOf(".")));
  
  }
};

/*TOP SOLUTION - 
Math.round = function(number) {
  return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
};

Math.ceil = function(number) {
  return (parseInt(number) === number) ? number : parseInt(number) + 1;
};

Math.floor = function(number) {
  return parseInt(number);
};
*/
//-------------------------------------------------------------------------------
//TESTS --
/*
Test.assertEquals(Math.round(0.4), 0, 'Math.round(0.4)');
Test.assertEquals(Math.round(0.5), 1, 'Math.round(0.5)');

Test.assertEquals(Math.ceil(0.4), 1, 'Math.ceil(0.4)');
Test.assertEquals(Math.ceil(0.5), 1, 'Math.ceil(0.5)');

Test.assertEquals(Math.floor(0.4), 0, 'Math.floor(0.4)');
Test.assertEquals(Math.floor(0.5), 0, 'Math.floor(0.5)');
*/