
var $ = require('../index');

var map = [].map, reduce = [].reduce, filter = [].filter;

var arr = [1,2,3,4,5];


var sum = function(x, y) { return x + y }
var diff = function(x, y) { return x - y; }

var res = 0, t1 = Date.now();
for (var k = 0; k < 10000000; ++k) {
    res += $(k).to(Math.pow, 0.33).val;
}

var res2 = 0, t2 = Date.now();
for (var k = 0; k < 10000000; ++k) {
    res2 += Math.pow(k, 1.5);
}

var t3 = Date.now()
console.log(res,t2-t1, '---', res2,t3-t2);
