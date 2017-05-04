function createGrid(m, n, p) {
	
  let i, j, grid = [], inside = (p.y < m && p.x < n); 

  for (i = 0; i < m; i++) {
  	grid.push(''); 
  	for (j = 0; j < n; j++) {
  		grid[i] += '01*'[inside ? (+(p.y === i) + +(p.x === j)) : 0]; 
  	}
  }
  return grid.join('\n'); 
}


/*
BEST PRACTICE: 

function createGrid(m, n, p) {
  var res = [], inBound = m>p.y&&n>p.x;
  for (var i=0; i<m; i++){
    var row = '';
    for (var j=0; j<n; j++) row += inBound ? ['0','1','*'][+(i==p.y) + +(j==p.x)] : '0';
    res.push(row);
  }
  return res.join('\n');
}

*/