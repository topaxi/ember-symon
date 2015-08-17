import Ember from 'ember'

const { computed } = Ember

export default Ember.Component.extend({
  tagName: null,
  limit: 10,
  model: computed('limit', function() {
    return Array.apply(null, Array(this.get('limit')))
  }),
  didInsertElement() {
    this.$('input').prop('disabled', true)
  }
})
