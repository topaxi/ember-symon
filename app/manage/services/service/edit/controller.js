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

    setCommand(id) {
      this.set('model.command',
        this.store.peekRecord('command', id)
      )
    },

    addServiceArgument() {
      this.store.createRecord('service-argument', {
        service: this.model
      })
    },

    rollbackServiceArgument(arg) {
      arg.rollbackAttributes()
    },

    deleteServiceArgument(arg) {
      arg.deleteRecord()
    },

    async save() {
      try {
        await this.model.save()
        await this.model.get('arguments').map(a => a.save())

        this.get('notify').success('Service successfully saved!')

        this.transitionToRoute('manage.services.service.edit', this.model)
      }
      catch (err) {
        this.get('notify').error(err.message || 'Error while trying to save service!')
      }
    }
  }
})
