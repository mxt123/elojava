function isEven(n) {
    function evenCheck(n) {
        if (n == 0) {
            return true;
        } else if (n == 1) {
            return false;
        } else {
            return evenCheck(n - 2);
        };
    };
    return evenCheck(n);
};
console.log(isEven(parseInt(process.argv[2])));
//console.log(parseInt("123"));
//console.log(process.argv[2]);
//console.log(parseInt(process.argv[2]));
