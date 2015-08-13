import Ember from 'ember'
import config from './config/environment'

let Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function() {
  this.route('manage', function() {
    this.route('index')

    this.route('hosts', function() {
      this.modal('sy-alert-schedule', {
        withParams: 'alert-schedule'
      })
      this.route('new')
      this.route('host', { path: '/:hostname' }, function() {
        this.route('edit',     { path: '/' })
        this.route('services', { path: '/services' })
      })
    })

    this.route('host-groups', function() {
      this.route('new')
      this.route('host-group', { path: '/:host-group_id' }, function() {
        this.route('edit',  { path: '/' })
        this.route('hosts', { path: '/hosts' })
      })
    })

    this.route('customers', function() {
      this.route('new')
      this.route('customer', { path: '/:customer_id' }, function() {
        this.route('edit',        { path: '/' })
        this.route('info',        { path: '/info' })
        this.route('permissions', { path: '/permissions' })
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
