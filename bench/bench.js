
var $ = require('../index');

var map = [].map, reduce = [].reduce, filter = [].filter;

var arr = [1,2,3,4,5];


function mapfn(x) { return x*x; }

function filterfn(x) { return x < 10; }

function reducefn(acc, el) { 
    return acc + el; 
}
function push(k) {
    this.push(k);
    return this;
}

var res = 0, t1 = Date.now();
for (var k = 0; k < 500000; ++k) {

    res += $(arr).$(map, mapfn)
        .$(filter, filterfn)
        .$(push, k)
        .$(reduce, reducefn).$();
}

var res2 = 0, t2 = Date.now();
for (var k = 0; k < 500000; ++k) {
    res2 += arr.map(mapfn)
        .filter(filterfn)
        .reduce(reducefn) + k;
}

var t3 = Date.now()
console.log(res,t2-t1, '---', res2,t3-t2);
