import Route     from 'ember-route'
import RouteList from 'ember-symon/mixins/route-list'

export default Route.extend(RouteList, {
  modelName: 'host',
  breadCrumb: null
})
