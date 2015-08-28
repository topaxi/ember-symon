import Ember from 'ember'

const { computed } = Ember

export default Ember.Controller.extend({
  serviceSorting:      [ 'name' ],
  sortedModelServices: computed.sort('model.services', 'serviceSorting'),
  sortedServices:      computed.sort('services', 'serviceSorting'),

  hostServices: computed('sortedModelServices.[]', function() {
    let services = {}

    this.get('sortedModelServices').forEach(hostService => {
      let key = hostService.get('service.name')

      if (!(key in services)) {
        services[key] = []
      }

      services[key].push(hostService)
    })

    return services
  })
})
