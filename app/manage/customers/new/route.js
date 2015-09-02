import Ember from 'ember'
import RouteNew from 'ember-symon/mixins/route-new'

export default Ember.Route.extend(RouteNew, {
  editRoute: 'manage.customers.customer.edit',
  modelName: 'customer',

  setupController(controller, model) {
    this.controllerFor(this.get('editRoute'))
        .setProperties({
          model,
          isNew:           true,
          alertSchedulers: this.store.peekAll('alert-scheduler')
        })
  },

  beforeModel() {
    return this.store.findAll('alert-scheduler')
  }
})
