try {

  var vm = require('vm')

  global.require = require

  vm.createScript("require('missing')")
  .runInNewContext(global)

} catch (e) {

}
