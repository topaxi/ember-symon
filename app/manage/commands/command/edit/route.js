import Ember from 'ember'

export default Ember.Route.extend({
  breadCrumb: null,

  actions: {
    toggleExample() {
      this.set('controller.showExample', !this.get('controller.showExample'))
    }
  }
})
