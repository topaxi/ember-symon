import Ember from 'ember'
import DS    from 'ember-data'

const { Component, inject, computed, run } = Ember

export default Component.extend({
  store: inject.service(),

  placeholder: 'Select customer',
  disabled:    false,
  multiple:    false,
  required:    false,
  limit:       10,
  filter:      null,
  populated:   false,

  customers: computed('filter', 'customer', function() {
    return DS.PromiseArray.create({
      promise: this.get('store').query('customer', {
        filter: this.get('filter'),
        limit:  this.get('limit')
      })
    })
  }),

  actions: {
    updateFilter(filter) {
      run.debounce(this, this.set, 'filter', filter, 300)
    },
    selectCustomer(...args) {
      this.sendAction('select', ...args)
    }
  }
})
