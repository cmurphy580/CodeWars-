function domainName(url){
  //REGEX
  var before = /((http(s)?:\/\/)|(www\.))/ig; 
  var after = /(.com)|(.co)|(.uk)|(.net)|(.org)|(.gov)||(.ru)|\//ig; 
  
  if(before.test(url) === true){
      url = url.split(before); 
      url = url[url.length-1]; 
  }
  if(after.test(url) === true){
     url = url.split("."); 
     url = url[0]; 
  }
  
  
  return url; 
   
}


/*
  BEST PRACTICE: 

function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
//-----------------------------------------------------------

function domainName(url){
  return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
}

//--------------------------------------------------------------
*/