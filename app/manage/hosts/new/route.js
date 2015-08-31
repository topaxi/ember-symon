import Ember from 'ember'
import RouteNew from 'ember-symon/mixins/route-new'

export default Ember.Route.extend(RouteNew, {
  editRoute: 'manage.hosts.host.edit',
  modelName: 'host',

  setupController(controller) {
    controller.set('model', this.store.createRecord('host'))
  }
})
