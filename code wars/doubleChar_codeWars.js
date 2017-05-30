const doubleChar = (str) => str.split("").map(c => c + c).join("");


/*
other solution: 

function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}

*/