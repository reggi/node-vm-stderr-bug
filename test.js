var assert = require('assert')
var childProcess = require('child_process')
var spawn = childProcess.spawn

var cmd = spawn('node', ['./bug.js'])

var err = false

cmd.stderr.on('data', function (data) {
  err = true
})

cmd.on('close', function (code) {
  assert.equal(err, false)
})
