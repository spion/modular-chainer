var t = require('tape');

var $ = require('../index');

var map = [].map, reduce = [].reduce, filter = [].filter;

var arr = [1,2,3,4,5];



t.test('chain', function(t) {

    t.equals($(arr).$()[3], 4);

    var res = $(arr).$(map, function(x) { 
        return x * x
    }).$(filter, function(y) { 
        return y < 10; 
    }).$(reduce, function(acc, el) { 
        return acc + el 
    }).to(Math.pow, 2).val;

    t.equals(res, 14*14);
        
    t.end();

});
