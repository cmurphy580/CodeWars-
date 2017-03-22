function sumStrings(a,b) {
   var x = [];
    
   if (a.length < 10 && b.length < 10) {
      a = Number(a); 
      b = Number(b); 
      x = (a + b).toString(); 
     
   } else if (a.length > 10 && b.length > 10) { 
       
       a = a.split("").reverse().join(""); 
       b = b.split("").reverse().join("");
       
       var c = a.length - b.length; 
       for (var d=0; d<c; d++) {
          b += '0'; 
       }
       
       for (var i=0; i <= a.length-1; i++) {
         var y = (+a[i] + +b[i]);
          x.push(y); 
          for (var j=0; j<=x.length; j++) {
            for (var k=j+1; k<=x.length-2; k++) {
            if (x[j] >= 10) {
              x[j] = x[j] % 10; 
              x[k] = +x[k] + 1; 
              }
            }
          } 
        }
      x = x.toString().split(",").reverse().join(""); 
     }

  return x;       
}

/*TESTS:
Test.assertEquals(sumStrings('123','456'),'579'); 

USE TESTS WHERE a AND b ARE LONGER THAN 10 DIGITS. 

*/
/*BEST PRACTICE (TOP 3): 
1)
String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

function sumStrings(a,b) {
  a = a.reverse(); b = b.reverse();
  var carry = 0;
  var index = 0;
  var sumDigits = [];
  while (index < a.length || index < b.length || carry != 0) {
    var aDigit = index < a.length ? parseInt(a[index]) : 0;
    var bDigit = index < b.length ? parseInt(b[index]) : 0;
    var digitSum = aDigit + bDigit + carry;
    sumDigits.push((digitSum % 10).toString());
    carry = Math.floor(digitSum / 10);
    index++;
  }
  sumDigits.reverse();
  while (sumDigits[0] == '0') sumDigits.shift();
  return sumDigits.join('');
}

2)
function sumStrings(a, b) {
  var res = '', c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9;
  }
  return res.replace(/^0+/, '');
}

3)

function sum(n1, n2) {
  return (parseInt(n1) || 0) + (parseInt(n2) || 0);
}

function sumStrings(a,b) { 
  a = a.split("").reverse();
  b = b.split("").reverse();
  total = [];
  var length = (a.length > b.length) ? a.length : b.length;
  
  //make the sum digit by digit
  for (var i = 0; i < length; i++) {
    s = sum(a[i], b[i]);
    total[i] = sum(total[i], s);
    if (total[i]>9) {
      total[i] -= 10;
      total[i+1] = 1;
    }
  }
  
  //remove fruitless zero
  if (total[total.length-1] == 0) 
    total[total.length-1] = "";
    
  //reverse the array and return the string
  return total.reverse().join("");


*/