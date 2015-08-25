import Ember from 'ember'

export default Ember.Route.extend({

  setupController(controller, { host, services }) {
    controller.set('model',    host)
    controller.set('services', services)
  },

  model() {
    let host = this.modelFor('manage.hosts.host')

    return Ember.RSVP.hash({
      host,
      services:     this.store.findAll('service'),
      hostServices: this.store.query('host-service', { host: host.id })
    })
  }
})
