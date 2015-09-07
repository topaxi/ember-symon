import Ember from 'ember'

const { inject } = Ember

export default Ember.Controller.extend({
  notify: inject.service(),

  actions: {
    setHostType(id) {
      this.set('model.hostType',
        this.store.peekRecord('host-type', id)
      )
    },

    changeOperatingSystem(id) {
      this.set('model.operatingSystem',
        this.store.peekRecord('operating-system', id)
      )
      this.set('model.operatingSystemVersion', null)
    },

    setOperatingSystemVersion(id) {
      this.set('model.operatingSystemVersion',
        this.store.peekRecord('operating-system-version', id)
      )
    },

    setAlertScheduler(id) {
      this.set('model.alertScheduler',
        this.store.peekRecord('alert-scheduler', id)
      )
    },

    async save() {
      try {
        await this.model.save()

        this.get('notify').success('Host successfully saved!')

        this.transitionToRoute('manage.hosts.host.edit', this.model)
      }
      catch (err) {
        this.get('notify').error(err.message || 'Error while trying to save host!')
      }
    }
  }
})
