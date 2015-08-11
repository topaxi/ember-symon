import Ember from 'ember'

const { on } = Ember

export default Ember.Route.extend({
  setupController(controller, model) {
    this.controllerFor('manage.hosts.host.edit')
        .setProperties({ isNew: true, model })
  },

  model() {
    return this.store.createRecord('host')
  },

  renderTemplate() {
    this.render('manage.hosts.host.edit')
  },

  rollback: on('deactivate', function() {
    this.controllerFor('manage.hosts.host.edit').get('model').rollback()
  })
})
