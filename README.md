# modular chainer

Get the benefits of chaining without sacrificing modularity!

```js
var $ = require('modular-chainer'),
    parse = require('./parse'),
    walk = require('./walk'),
    stringify = require('./stringify');

var transformedCode = $(sourceCode)
    .$(parse, {semicolons: 'loose'})
    .$(walk, function(node) { ... })
    .$(stringify)
    .to(diff, sourceCode)
    .$();
```


### `$(obj).$(fn, arg, ...)` 

The equivalent of `fn.call(obj, arg, ...)`

$$$ `$(obj).to(fn, arg, ...) 

The equivalent of fn(obj, arg, ...)

and $() extracts the value.

The performance cost is negligable in most cases.

# license

MIT

