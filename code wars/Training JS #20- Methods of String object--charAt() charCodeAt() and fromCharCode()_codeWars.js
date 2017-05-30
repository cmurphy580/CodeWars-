function topSecret(str){

  str = str.split('');
  
  str.forEach((e, i) => {
    str[i] = e.charCodeAt();
    
    if (str[i] >= 32 && str[i] <= 64 || str[i] === 10) {
      str[i] = String.fromCharCode(e.charCodeAt());
    } else if (str[i] >= 65 && str[i] <= 67) {
      str[i] = String.fromCharCode(e.charCodeAt() + 23);
    } else if (str[i] >= 97 && str[i] <= 99) {
      str[i] = String.fromCharCode(e.charCodeAt() + 23);
    } else {
      str[i] = String.fromCharCode(e.charCodeAt() - 3); 
    }
    
  });
  
  return str.join(''); 
}

//question1: The top secret file number is...
answer1="2723";
//question2: Super agent's name is...
answer2="qgw";
//question3: He stole the treasure is...
answer3="bird's nest";


/*
TOP SOLUTION: 

const topSecret = str => str.replace(/[a-z]/gi, c => String.fromCharCode(c.charCodeAt(0) + (/[abc]/i.test(c) ? 23 : -3)))

*/