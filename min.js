var min = function(a, b) {
    return a < b ? a : b
}

a = process.argv[2];
b = process.argv[3];

console.log(min(a, b));
