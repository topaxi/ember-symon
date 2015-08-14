import Ember from 'ember'

const { get } = Ember

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('command', params.hostname)
  },

  afterModel(model) {
    this.set('breadCrumb', {
      title: get(model, 'name')
    })
  }
})
