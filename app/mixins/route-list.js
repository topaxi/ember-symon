import Ember from 'ember'

export default Ember.Mixin.create({
  queryParams: {
    limit: { refreshModel: true },
    page:  { refreshModel: true }
  },

  setupController(controller, model) {
    controller.set('model',   model)
    controller.set('loading', false)
  },

  model(params) {
    return this.store.query(this.get('modelName'), params)
  },

  actions: {

    loading(transition, route) {
      if (route.controller &&
          Ember.$(`.sy-list--${this.get('modelName')}`).length) {
        route.controller.set('loading', true)

        return false
      }

      return true
    }
  }
})
