import Ember from 'ember'
import config from '../config/environment'

export default Ember.Route.extend({
  setupController(controller) {
    this._super(...arguments)
    controller.set('appVersionClass', `app-version app-version--${config.environment}`)
  },

  actions: {
    willTransition() {
      this.controller.set('expandSidenav', false)
    },

    error(error, transition) {
      if (is404(error) || has404(error)) {
        this.transitionTo('notfound')
        return false
      }

      return true
    }
  }
})

function is404(error) {
  return error && (error.status | 0) === 404
}

function has404(error) {
  return error.errors && error.errors.some(is404)
}
