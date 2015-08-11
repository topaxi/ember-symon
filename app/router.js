import Ember from 'ember'
import config from './config/environment'

let Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function() {
  this.route('manage', function() {
    this.route('hosts', function() {
      this.route('new')
      this.route('host', { path: '/:host_id' }, function() {
        this.route('edit',     { path: '/' })
        this.route('services', { path: '/services' })
      })
    })
  })

  this.route('monitoring')
  this.route('maintenance')
  this.route('analysis', function() {
    this.route('reports')
    this.route('hosts-hierarchy')
    this.route('audit-log')
  })
})

export default Router
