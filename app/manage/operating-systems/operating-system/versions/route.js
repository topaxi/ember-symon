import Ember from 'ember'

export default Ember.Route.extend({
  setupController(controller, model) {
    controller.set('model',         model)
    controller.set('architectures', this.store.peekAll('architecture'))
  },

  beforeModel() {
    return this.store.findAll('architecture')
  },

  afterModel() {
    return this.store.query('operating-system-version', {
      'operating-system': this.get('model.id')
    })
  }
})
