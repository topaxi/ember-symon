import Ember from 'ember'

const { computed } = Ember

export default Ember.Controller.extend({
  serviceSorting:      [ 'name' ],
  sortedModelServices: computed.sort('model.services', 'serviceSorting'),
  sortedServices:      computed.sort('services', 'serviceSorting'),

  hostServices: computed('sortedModelServices.[]', function() {
    let services = {}

    this.get('sortedModelServices').forEach(hostService => {
      let key = hostService.get('service.id')

      if (!(key in services)) {
        services[key] = []
      }

      services[key].push(hostService)
    })

    return services
  }),

  actions: {
    setSelectedService(serviceId) {
      this.set('selectedServiceId', serviceId)
    },

    addService() {
      this.send('addServiceInstance', this.get('selectedServiceId'))
    },

    addServiceInstance(serviceId) {
      if (serviceId) {
        this.store.createRecord('host-service', {
          service: this.store.peekRecord('service', serviceId),
          host:    this.get('model')
        })
      }
    },

    changeHostServiceAlertScheduler(hostService, e) {
      hostService.set('alertScheduler', e.target.value)
    },

    saveServices() {
      return this.get('model.services').map(s => s.save())
    }
  }
})
