import Ember from 'ember'
import RouteNew from 'ember-symon/mixins/route-new'

export default Ember.Route.extend(RouteNew, {
  editRoute: 'manage.hosts.host.edit',
  modelName: 'host',

  setupController(controller, model) {
    this.controllerFor(this.get('editRoute'))
        .setProperties({
          model,
          isNew:            true,
          hostTypes:        this.store.peekAll('host-type'),
          operatingSystems: this.store.peekAll('operating-system')
        })
  },

  beforeModel() {
    return [
      this.store.findAll('host-type'),
      this.store.findAll('operating-system'),
      this.store.findAll('operating-system-version')
    ]
  }
})
