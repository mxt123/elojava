function sum (a) {
        var total = 0;

        a.forEach(function(val) {
                        total += parseInt(val);
                        });

        return total;
}

function range(a, b, step) {
        var numbers = [];
        var i = 0;   
        var target = 0;

        if (parseInt(step) > 0) {
                i = parseInt(a);
                target = b;    
        } else {
                i = parseInt(b);    
                target = a;
        }
        while (i <= target) {
                numbers.push(i);
                console.log(i);
                i += Math.abs(parseInt(step));
        }

        return numbers;
}

console.log(sum(range(process.argv[2], process.argv[3], process.argv[4] || 1)));
