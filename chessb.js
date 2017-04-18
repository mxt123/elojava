var s = process.argv[2];
var r = "";

for (var y=1; y <=s; y++) {
    for (var x = 1; x <= s; x++) 
        r += (y % 2 != 0) ? (x % 2 == 0 ? "#" : " ") : (x % 2 != 0 ? "#" : " ");                
    r += "\n";
}

console.log(r);
