import Ember from 'ember'

export default Ember.Component.extend({
  tagName: 'tr',
  actions: {
    refresh() {
      this.sendAction('refresh')
    }
  }
})
