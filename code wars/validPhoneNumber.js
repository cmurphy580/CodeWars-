function validPhoneNumber(phoneNumber){

  var regex = /^(\([1-9]{3}\))[\s](\d{3})[\s\-]?(\d{4})$/gm; 
  
  return Boolean(phoneNumber.match(regex)); 
  
}

/*
Test.assertEquals(validPhoneNumber("(123) 456-7890"), true);
Test.assertEquals(validPhoneNumber("(1111)555 2345"), false);
Test.assertEquals(validPhoneNumber("(098) 123 4567"), false);
/*

//BEST SOLUTION -- 
/*
function validPhoneNumber(phoneNumber){
  return /^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber);
/*