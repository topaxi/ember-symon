import Ember from 'ember'
import RouteNew from 'ember-symon/mixins/route-new'

export default Ember.Route.extend(RouteNew, {
  editRoute: 'manage.operating-systems.operating-system.edit',
  modelName: 'operating-system'
})
