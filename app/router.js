import Ember from 'ember'
import config from './config/environment'

let Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function() {
  this.route('manage', function() {
    this.route('hosts', function() {
      this.modal('sy-alert-schedule', {
        withParams: 'alert-schedule'
      })
      this.route('new')
      this.route('list', { path: '/' }, ()=>{})
      this.route('host', { path: '/:hostname' }, function() {
        this.route('edit',     { path: '/' })
        this.route('services', { path: '/services' })
      })
    })

    this.route('host-groups', function() {
      this.route('new')
      this.route('list', { path: '/' }, ()=>{})
      this.route('host-group', { path: '/:host-group_id' }, function() {
        this.route('edit',  { path: '/' })
        this.route('hosts', { path: '/hosts' })
      })
    })

    this.route('customers', function() {
      this.route('new')
      this.route('list', { path: '/' }, ()=>{})
      this.route('customer', { path: '/:customer_id' }, function() {
        this.route('edit',        { path: '/' })
        this.route('info',        { path: '/info' })
        this.route('permissions', { path: '/permissions' })
      })
    })

    this.route('commands', function() {
      this.route('new')
      this.route('list', { path: '/' }, ()=>{})
      this.route('command', { path: '/:command_id' }, function() {
        this.route('edit',       { path: '/' })
        this.route('guidelines', { path: '/guidelines' })
      })
    })

    this.route('services', function() {
      this.route('new')
      this.route('list', { path: '/' }, ()=>{})
      this.route('service', { path: '/:service_id' }, function() {
        this.route('edit', { path: '/' })
      })
    })

    this.route('global-settings')
  })

  this.route('monitoring', function() {
    this.route('alerts', function() {
      this.modal('sy-alert-actions', {
        withParams: 'alert-actions',
        actions: { 'refresh': 'refresh' }
      })
    })
  })

  this.route('maintenance', function() {
  })

  this.route('analysis', function() {
    this.route('reports')
    this.route('hosts-hierarchy')
    this.route('audit-log')
  })
})

export default Router
