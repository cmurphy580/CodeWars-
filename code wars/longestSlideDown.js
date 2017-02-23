function longestSlideDown (pyramid) { 
 var empty = [];
 
 
 empty.push(pyramid[0][0]); 
 empty.push(Math.max(pyramid[1][0], pyramid[1][1])); 

 for (var i=2; i<pyramid.length; i++){
    
    for(var j=0; j<pyramid[i].length; j++){
      
    pyramid[i][j] = Math.max(pyramid[i][j], pyramid[i][j+1]); 
    
    empty.push(pyramid[i][j]);
    
    break;
     
    }
  }

  return pyramid[2][0]; 
   
 }
 /*
 .reduce(function(a,b){
   return a+b; 
  });
*/
  
------------------------------------
function longestSlideDown (pyramid) {
  var empty = []; 
  var counter = 1;
  for (var i=0; i<pyramid.length; i++){
    //for (var j=0; j<pyramid.length; j++){
     //if (typeof pyramid[i][j] === "number"){
     	//helps return only one character from the nth string 
        if(pyramid[i].length === counter){
          empty.push(Math.max.apply(null, pyramid[i]));
          counter = counter + 1; 
       }
      }  
    }
  }
  return empty; 
}