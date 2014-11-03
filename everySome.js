function every(array, action) {
  var i = 0
  while (i< array.length ) {
   	if (!action(array[i])) return false;
	i++;
  }
  return true;
}

function some(array, action) {
  var i = 0
  while (i< array.length ) {
   	if (action(array[i])) return true;
	i++;
  }
  return false;
}

// Your code here.

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false

console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
