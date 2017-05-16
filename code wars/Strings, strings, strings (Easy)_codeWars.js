// Recover toString() here :

Number.prototype.toString = function() { return '' + this }
Array.prototype.toString = function() { return '[' + this.join(',') + ']' }
Boolean.prototype.toString = function() { return '' + this }


/*
BEST PRACTICE: 

Boolean.prototype.toString = Number.prototype.toString = Array.prototype.toString =
function() { return JSON.stringify(this); }

*/