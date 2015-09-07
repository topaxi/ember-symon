import Ember from 'ember'

const { computed, inject } = Ember

export default Ember.Component.extend({
  store: inject.service(),

  model: computed('alert-actions', function() {
    return this.get('store')
               .findRecord('alert', this.get('alert-actions'))
  }),

  actions: {
    async acknowledge(model) {
      model.set('state', 'open')
      await model.save()
      this.sendAction('refresh')
      return false
    },
    showComments(model) {
      return false
    },
    showLog(model) {
      return false
    }
  }
})
