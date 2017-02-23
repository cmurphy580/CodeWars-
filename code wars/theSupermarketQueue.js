function queueTime(customers, n) {
  if (customers.length === 0){
  return 0; 
  }
  
  
  var tills = []; 
  //pushes a 0 into an array for the number of tills there are --
  for (var i=0; i < n; i++){
    tills.push(0); 
    }
    
    
    //loop will continue as long as there is a customer in line --
   while (customers.length > 0) {
     //ind creates the range in terms of index positions of customers that will be processed through the tills -
    var ind = tills.indexOf(Math.min.apply(0, tills));
    //add the numbers of those index positions to the tills arrays & shift them out of the customer array -
    tills[ind] += customers.shift();
  }
  
  
  //the maximum number in the array 
  return Math.max.apply(0, tills); 
  
}




/*
Test.describe("example tests", function() {
Test.assertEquals(queueTime([], 1), 0);
Test.assertEquals(queueTime([1,2,3,4], 1), 10);
Test.assertEquals(queueTime([2,2,3,3,4,4], 2), 9);
Test.assertEquals(queueTime([1,2,3,4,5], 100), 5);

//add some more example tests here, if you like

})

*/


/*
//BEST SOLUTION (es6)-- 
function queueTime(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}
*/