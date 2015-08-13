import Ember from 'ember'

const { get } = Ember

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('host', params.hostname)
  },

  afterModel(model) {
    this.set('breadCrumb', {
      title: get(model, 'hostname')
    })
  }
})
