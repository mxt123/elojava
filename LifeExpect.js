var json = require('./ANCESTRY_FILE');

var ancestry = JSON.parse(json);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var centuries = {}

ancestry.forEach(function(person) {  
  var century = Math.ceil(person.died / 100) ;
  if (!centuries[century]) centuries[century]= []
  centuries[century].push(person.died-person.born)
});

console.dir(centuries)

for (century in centuries) {
	console.log(average(centuries[century]));
}
