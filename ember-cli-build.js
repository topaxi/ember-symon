/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app')

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'hinting': false,
    'ember-cli-selectize': {
      theme: 'bootstrap3'
    }
  })

  app.import('vendor/browser-polyfill.js', { prepend: true })

  return app.toTree()
}
