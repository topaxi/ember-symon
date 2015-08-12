import Ember from 'ember'
import ajax  from 'ic-ajax'

export default Ember.Route.extend({
  queryParams: {
    limit: { refreshModel: true },
    page:  { refreshModel: true }
  },

  setupController(controller, model) {
    controller.set('model',   model)
    controller.set('loading', false)
  },

  model(params) {
    return this.store.query('host', params)
  },

  actions: {

    loading(transition, route) {
      if (route.controller && Ember.$('.host-table').length) {
        route.controller.set('loading', true)

        return false
      }

      return true
    }
  }
})
