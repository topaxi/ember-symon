import Ember from 'ember'

export default Ember.Route.extend({
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
