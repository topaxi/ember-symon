import Ember from 'ember'

const { inject } = Ember

export default Ember.Controller.extend({
  notify: inject.service(),

  actions: {
    setAlertScheduler(id) {
      this.set('model.alertScheduler',
        this.store.peekRecord('alert-scheduler', id)
      )
    },

    async save() {
      try {
        await this.model.save()

        this.get('notify').success('Customer successfully saved!')

        this.transitionToRoute('manage.customers.customer.edit', this.model)
      }
      catch (err) {
        this.get('notify').error(err.message || 'Error while trying to save customer!')
      }
    }
  }
})
