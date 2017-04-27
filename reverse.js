function reverse(a) {
    var result = [];
    a.forEach(function(val) {
        result.unshift(val);
    });
    return result;
}

function reverseInPlace(a) {
    for (var i = 0; i <= Math.floor(a.length/2); i++) {
        var temp = a[i];
        var target = a.length - (1 + i);
        a[i] = a[target];
        a[target] = temp;
    }
    return a;
}

console.log(reverse(process.argv[2].split(",")));
console.log(reverseInPlace(process.argv[2].split(",")));
