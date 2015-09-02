import Ember from 'ember'

export default Ember.Controller.extend({
  actions: {
    setAlertScheduler(id) {
      this.set('model.alertScheduler',
        this.store.peekRecord('alert-scheduler', id)
      )
    }
  }
})
