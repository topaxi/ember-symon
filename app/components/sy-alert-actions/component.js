import Ember from 'ember'

const { computed, inject } = Ember

export default Ember.Component.extend({
  store: inject.service(),

  model: computed('alert-actions', function() {
    return this.get('store')
               .peekRecord('alert', this.get('alert-actions'))
  }),

  actions: {
    acknowledge(model) {
      model.set('state', 'open')
      model.save()
      this.sendAction('refresh')
      this.sendAction('dismiss')
    },
    showComments(model) {

    },
    showLog(model) {

    }
  }
})
