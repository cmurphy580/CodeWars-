//The Set object lets you store unique values of any type, 
//whether primitive values or object references.

function solution() {

let args = Array.prototype.slice.call(arguments);

  return new Set(arguments).size !== args.length;
    
}


/*
BEST PRACTICE: 

1)
function solution(){
	return new Set(arguments).size !== arguments.length;
}

--------------------------------------------

2)
function solution(...args){
 return (args.length !== args.filter((val,ind) => args.indexOf(val) === ind).length)? true : false
}




--------------------------------------------
3)
function solution(){
   var output = false;

   for ( var i=0; i<arguments.length; i++ ) {
     for ( var j=0; j<arguments.length; j++ ) {
       if ( j !== i && arguments[i] === arguments[j] ) output = true;
     }
   }

   return output;
}





*/