import Ember from 'ember'

const { Mixin, on } = Ember

export default Mixin.create({
  setupController(controller, model) {
    this.controllerFor(this.get('editRoute'))
        .setProperties({ isNew: true, model })
  },

  model() {
    return this.store.createRecord(this.get('modelName'))
  },

  renderTemplate() {
    this.render(this.get('editRoute'))
  },

  rollback: on('deactivate', function() {
    this.controllerFor(this.get('editRoute'))
        .get('model').rollbackAttributes()
  })
})
