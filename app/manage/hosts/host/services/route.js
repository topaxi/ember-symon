import Ember from 'ember'

export default Ember.Route.extend({

  setupController(controller) {
    controller.set('model',    this.modelFor('manage.hosts.host'))
    controller.set('services', this.store.peekAll('service'))
  },

  beforeModel() {
    return this.store.findAll('service')
  },

  afterModel() {
    let host = this.modelFor('manage.hosts.host')
    return this.store.query('host-service', { host: host.id })
  }
})
