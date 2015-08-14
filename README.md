# Node.js vm stderr bug

The following code is writing to stderr and it shouldn't because it's wrapped in a try / catch.

```javascript
try {

  var vm = require('vm')

  global.require = require

  vm.createScript("require('missing')")
  .runInNewContext(global)

} catch (e) {

}
```
