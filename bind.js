
var json = require('./ANCESTRY_FILE');

var ancestry = JSON.parse(json);

var theSet = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];

function isInSet(set, person) {
  return set.indexOf(person.name) > -1;
}
/*
console.log(ancestry.filter(function(person) {
  return isInSet(theSet, person);
}));

console.log("\n");

console.log(ancestry.filter(isInSet.bind(null, theSet)));
*/

console.log(ancestry.filter(function(person) {
  return person.name == "Carel Haverbeke";
}));