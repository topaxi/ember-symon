import Ember from 'ember'

export default Ember.Component.extend({
  actions: {
    dismiss() {
      this.sendAction('dismiss')
    }
  }
})
