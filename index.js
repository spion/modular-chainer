var slice = [].slice;

function $$(o) {
    this.o = o;
}

function $(f, a1, a2, a3) {
    "use strict";
    switch(arguments.length) {
        case 1: return new $$(f.call(this.o));
        case 2: return new $$(f.call(this.o, a1));
        case 0: return this.o;
        case 3: return new $$(f.call(this.o, a1, a2));
        case 4: return new $$(f.call(this.o, a1, a2, a3))
        default: return new $$(f.apply(this.o, slice.call(arguments, 1)));
    }        
}

function to(f, a1, a2, a3, a4) {
    "use strict";
    switch(arguments.length) {
        case 1: return new $$(f(this.o));
        case 2: return new $$(f(this.o, a1));
        case 0: return this.o;
        case 3: return new $$(f(this.o, a1, a2));
        case 4: return new $$(f(this.o, a1, a2, a3))
        case 5: return new $$(f(this.o, a1, a2, a3, a4))
        default: return new $$(
            f.apply(this.o, [this.o].concat(
                slice.call(arguments, 1))));
    }        
}


$$.prototype.$ = $;
$$.prototype.to = to;

module.exports = function $(o) {
    return new $$(o);
}

