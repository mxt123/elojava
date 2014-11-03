var arrays = [[1, 2, 3], [4, 5], [6]];

function plus(a,b) {return a.concat(b);}

console.log(arrays.reduce(plus));