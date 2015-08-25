import Ember from 'ember'

export default Ember.Route.extend({

  setupController(controller, { host, services }) {
    controller.set('model',    host)
    controller.set('services', services)
  },

  model() {
    return Ember.RSVP.hash({
      host:     this._super(...arguments),
      services: this.store.findAll('service')
    })
  },

  afterModel({ host: { id } }) {
    return this.store.query('host-service', { host: id })
  }
})
