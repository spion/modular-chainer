# modular chainer

Get the benefits of chaining without sacrificing modularity!

```js
var $ = require('modular-chainer'),
    parse = require('./parse'),
    walk = require('./walk'),
    stringify = require('./stringify'),
    diff = require('diff');

var transformedDiff = $(sourceCode)
    .$(parse, {semicolons: 'loose'})
    .$(walk, function(node) { ... })
    .$(stringify)
    .to(diff, sourceCode).val;
```


### `$(val).$(fn, arg, ...)` 

Call `fn` as if its attached to `val`. 

The equivalent of `fn.call(val, arg, ...)`

### `$(val).to(fn, arg, ...) 

Call `fn` with `val` as the first argument. 

The equivalent of `fn(val, arg, ...)`

### `.val`

Extracts the value.

# performance

The performance cost is negligable in many cases. However, keep in mind that 
new objects are created on every chain operation. Fast operations on primitives
will suffer a lot: if you're using it to do math, it will be slow.

# license

MIT

