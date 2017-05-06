function greetDevelopers(list) {
  let i; 
  for (i = 0; i < list.length; i++) {
    list[i].greeting = 'Hi ' + list[i].firstName + ', what do you like the most about ' + list[i].language + '?'; 
   } 
   return list; 
}

/*
BEST PRACTICE: 

1)

function greetDevelopers(list) {
  // thank you for checking out my kata :)
  return list.map( function( a ) {
                   a.greeting = "Hi " + a.firstName + ", what do you like the most about " + a.language + "?";
                   return a;
                  });
}

-----------------------

2)

function greetDevelopers(list) {
  return list.map(x => Object.assign({}, x, {
    greeting: `Hi ${x.firstName}, what do you like the most about ${x.language}?`
  }))
}

------------------------

3)

function greetDevelopers(list) {
  list.forEach(function(developer) {
    developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
  });
  
  return list;
}



*/