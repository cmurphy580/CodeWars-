function isIsogram(str){
  var i=0, str = str.toLowerCase().split(""), output =[]; 
  if (str.length < 1) {
    return true; 
    }
  for (i; i<str.length; i++) {
    for (var j=i+1; j<str.length; j++) {
      if(str[i] === str[j]){
        output.push(str[j]); 
      }
    }
  }
   return output.length < 1 ? true : false; 
}


/*
BEST PRACTICE: 
1)

function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}

//------------------------------
2)

function isIsogram(str){
  return !str.match(/([a-z]).*\1/i);
}

//-----------------------------
3)

function isIsogram(str){
  var i, j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i)
    for(j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
}
*/
