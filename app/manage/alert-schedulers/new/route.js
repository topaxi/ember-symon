import Ember    from 'ember'
import RouteNew from 'ember-symon/mixins/route-new'

export default Ember.Route.extend(RouteNew, {
  editRoute: 'manage.alert-schedulers.alert-scheduler.edit',
  modelName: 'alert-scheduler',
})
