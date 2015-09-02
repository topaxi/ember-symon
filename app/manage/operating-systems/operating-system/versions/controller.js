import Ember from 'ember'

const { inject } = Ember

export default Ember.Controller.extend({
  notify: inject.service(),

  actions: {
    setSelectedArchitecture(id) {
      this.set('selectedArchitectureId', id)
    },

    addVersion() {
      this.store.createRecord('operating-system-version', {
        operatingSystem: this.get('model'),
        architecture:    this.store.peekRecord('architecture', this.get('selectedArchitectureId'))
      })
    },

    rollbackVersion(version) {
      version.rollbackAttributes()
    },

    deleteVersion(version) {
      version.deleteRecord()
    },

    async saveVersions() {
      try {
        await* this.get('model.versions').map(v => v.save())

        this.get('notify').success('Operating system versions successfully saved!')
      }
      catch (err) {
        this.get('notify').error(err.message || 'Error while trying to operating system versions!')
      }
    }
  }
})
