import Ember from 'ember'

const { get } = Ember

export default Ember.Route.extend({
  async model(...args) {
    let service = await this._super(...args)

    await this.store.query('service-argument', { service: service.id })

    return service
  },
  afterModel(model) {
    this.set('breadCrumb', {
      title: get(model, 'name')
    })
  }
})
