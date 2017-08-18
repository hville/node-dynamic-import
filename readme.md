# node-dynamic-import

*lighter `rollup`-based import function for es modules in node*

```javascript
var esImport = require('./es-import')

Promise.all([
  esImport('./test-default'),
  esImport('./test-named')
]).then(function(arr) {
  var plus2 = arr[0],
      times3 = arr[1].times3,
      result = times3(plus2(1))
  if (result === 9) console.log('TEST PASSED')
  else throw Error('import failed')
})
```

The more complete and tested `node-es-module-loader` uses babel (over 3000 files and 1000 folders). This modules provides a lighter alternative for unit testing of individual modules in projects that use `rollup` instead.

[MIT](http://www.opensource.org/licenses/MIT) © [Hugo Villeneuve](https://github.com/hville)
