import Ember from 'ember'

export default Ember.Route.extend({
  breadCrumb: null,

  setupController(controller, model) {
    controller.set('model', model)
    controller.set('alertSchedulers', this.store.peekAll('alert-scheduler'))
  },

  beforeModel() {
    return this.store.findAll('alert-scheduler')
  }
})
