import Ember from 'ember'

export default Ember.Route.extend({
  breadCrumb: null,

  setupController(controller, model) {
    controller.set('model',            model)
    controller.set('hostTypes',        this.store.peekAll('host-type'))
    controller.set('alertSchedulers',  this.store.peekAll('alert-scheduler'))
    controller.set('operatingSystems', this.store.peekAll('operating-system'))
  },

  beforeModel() {
    return [
      this.store.findAll('host-type'),
      this.store.findAll('alert-scheduler'),
      this.store.findAll('operating-system'),
      this.store.findAll('operating-system-version')
    ]
  }
})
