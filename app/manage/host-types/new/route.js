import Ember    from 'ember'
import RouteNew from 'ember-symon/mixins/route-new'

export default Ember.Route.extend(RouteNew, {
  editRoute: 'manage.host-types.host-type.edit',
  modelName: 'host-type',
})
