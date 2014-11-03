var json = require('./ANCESTRY_FILE');

var ancestry = JSON.parse(json);

function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function ageDif(p) { 
	var ageDif = null;
	var m = byName[p.mother];
	if (m != null) {
		ageDif = p.born - m.born
	}
	return ageDif;
}

var ageDifs = ancestry.map(ageDif);
console.dir(ageDifs)
console.log (average(ageDifs.filter(function(ageDif){return ageDif !=null})));

// Your code here.

// → 31.2
