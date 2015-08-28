import Ember from 'ember'

export default Ember.Route.extend({
  breadCrumb: null,

  setupController(controller, model) {
    controller.set('model', model)
    controller.set('operatingSystems', this.store.peekAll('operating-system'))
  },

  beforeModel() {
    return [
      this.store.findAll('operating-system'),
      this.store.findAll('operating-system-version')
    ]
  }
})
