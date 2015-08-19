import Ember from 'ember'

export default Ember.Route.extend({
  model() {
    return this.store.query('alert',
      { state: 'new', limit: 1000 }
    )
  }
})
