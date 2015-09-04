import Ember from 'ember'

export default Ember.Component.extend({
  tagName: 'tr',
  expand:  false,

  actions: {
    toggle() {
      this.set('expand', !this.get('expand'))
    },

    refresh() {
      this.sendAction('refresh')
    }
  }
})
