import Ember from 'ember'

export default Ember.Controller.extend({
  actions: {
    toggleExample() {
      this.set('showExample', !this.get('showExample'))
    }
  }
})
