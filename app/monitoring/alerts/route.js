import Ember from 'ember'
import RouteList from 'ember-symon/mixins/route-list'

export default Ember.Route.extend(RouteList, {
  modelName: 'alert',
  queryParams: {
    state: { refreshModel: true }
  },
  actions: {
    refresh() {
      this.refresh()
    }
  }
})
