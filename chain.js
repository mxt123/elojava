function arrayToList(a) {
        var list = null;
        for (var i = a.length -1; i >=0; i--) {
                list = {value: a[i], rest: list};
        }

        return list;
}

function listToArray(a) {
    var array = [];
    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(a, val) {
        return {value: val, rest: a}
}

function nth(a, n) {
        if (!a)
                return undefined;
        else if (n == 0)
                return a.value;
        else
                return nth(a.rest, n - 1);
}

var list = arrayToList(process.argv[2].split(","));
console.log(JSON.stringify(list,null,'\t'));
//console.log(JSON.stringify(prepend(list,0),null,'\t'));
//console.log(nth(list,0));
console.log(nth(arrayToList(['a','b','c']),2));

console.log(listToArray(list));





