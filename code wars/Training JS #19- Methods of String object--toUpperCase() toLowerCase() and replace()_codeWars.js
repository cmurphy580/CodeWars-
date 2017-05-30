function alienLanguage(str){
  return str.toUpperCase().replace(/\w\b/g, x => x.toLowerCase()); 
}