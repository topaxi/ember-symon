import Ember from 'ember'

const { get } = Ember

export default Ember.Route.extend({
  afterModel(model) {
    this.set('breadCrumb', {
      title: get(model, 'name')
    })
  }
})
