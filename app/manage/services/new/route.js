import Ember from 'ember'
import RouteNew from 'ember-symon/mixins/route-new'

export default Ember.Route.extend(RouteNew, {
  editRoute: 'manage.services.service.edit',
  modelName: 'service',

  setupController(controller, model) {
    this.controllerFor(this.get('editRoute'))
        .setProperties({
          model,
          isNew:    true,
          commands: this.store.peekAll('command')
        })
  },

  beforeModel() {
    return this.store.findAll('command')
  }
})
