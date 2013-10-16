var slice = [].slice;

function $$(val) {
    this.val = val;
}

function $(f, a1, a2, a3) {
    "use strict";
    switch(arguments.length) {
        case 1: return new $$(f.call(this.val));
        case 2: return new $$(f.call(this.val, a1));
        case 3: return new $$(f.call(this.val, a1, a2));
        case 0: return this.val;
        case 4: return new $$(f.call(this.val, a1, a2, a3))
        default: return new $$(f.apply(this.val, slice.call(arguments, 1)));
    }        
}

function to(f, a1, a2, a3, a4) {
    "use strict";
    switch(arguments.length) {
        case 1: return new $$(f(this.val));
        case 2: return new $$(f(this.val, a1));
        case 3: return new $$(f(this.val, a1, a2));
        case 0: return this.val;
        case 4: return new $$(f(this.val, a1, a2, a3))
        case 5: return new $$(f(this.val, a1, a2, a3, a4))
        default: return new $$(
            f.apply(null, [this.val].concat(
                slice.call(arguments, 1))));
    }        
}

$$.prototype.$ = $;
$$.prototype.to = to;


module.exports = function $(o) {
    return new $$(o);
}

