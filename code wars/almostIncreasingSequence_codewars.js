function almostIncreasingSequence(sequence) {
    var count = 0;
    var x = sequence.length-1, 
        y = Math.min(...sequence); 
    
    if(sequence[x] === y){
      count++;
      sequence.splice(x, 1); 
    }
    
    for (var i=0; i<sequence.length; i++){
        
        if ((sequence[i] > sequence[i+1]) || (sequence[i] === sequence[i+1])){
             count++;
             sequence.splice(i, 1)
            }
        }  

    for (var j=0; j<sequence.length; j++){
        if ((sequence[j] > sequence[j+1]) || (sequence[j] === sequence[j+1])){
         count++;

        }
    }
    
    return count > 1 ? false : true; 
} 
















/*BEST PRACTICE: 

function almostIncreasingSequence(sequence) {
  //coding and coding..
i=0;
k=0;
j=i+1;
a=undefined;
b=undefined;

while(k<=1 && sequence[j]!==undefined)
{
  b=sequence[j+1];
  if(sequence[i]<sequence[j])
    {
      a=sequence[i];
      i++;
    }
  else
    {
      k++;
      if((a===undefined || sequence[i]>a) && (b===undefined || sequence[i]<b))
        {
          a=sequence[i];i=j+1;
        }
      else if((a===undefined || sequence[j]>a) && (b===undefined || sequence[j]<b))
        {
          a=sequence[j];i=j+1;
        }
      else{
        k++;
        break;
      }
    }
  
    j=i+1;

}

return k<2 ? true : false;

}

----------------------------------------------

function almostIncreasingSequence(seq) {
  seq=seq.slice()
  for(var i=0;i<seq.length-1;i++) {
    if(seq[i]>=seq[i+1]&&i<seq.length-2){
      seq.splice(i,1)
      return seq.every((x,j)=>j===seq.length-1||x<seq[j+1])
    }
  }
  return true
}


*/


  
  
