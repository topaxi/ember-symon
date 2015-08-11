/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app')
var funnel   = require('broccoli-funnel')

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    hinting: false
  })

  var adcssyAssets = funnel('bower_components/adcssy/assets', {
    srcDir: '/',
    include: [ 'fonts/*', 'pictures/**/*' ],
    destDir: '/'
  })

  var fontAwesome = funnel('node_modules/font-awesome/fonts', {
    destDir: '/fonts'
  })

  app.import('bower_components/adcssy/build/css/adcssy.css')

  return app.toTree([ adcssyAssets, fontAwesome ])
}
