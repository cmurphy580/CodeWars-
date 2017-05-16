Math.roundTo = (number, precision) => Number(number.toFixed(precision));

/*
BEST PRACTICE: 

Math.roundTo = function (number, precision) {
  return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
}


*/