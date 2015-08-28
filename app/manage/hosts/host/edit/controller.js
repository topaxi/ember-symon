import Ember from 'ember'

export default Ember.Controller.extend({
  actions: {
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
    }
  }
})
