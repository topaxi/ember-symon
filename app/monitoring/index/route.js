import Ember from 'ember'

export default Ember.Route.extend({

  beforeModel() {
    if (this.get('media.isMd')) {
      this.transitionTo('monitoring.alerts', { queryParams: { state: 'new' } })
      return
    }
  },

  renderTemplate() {
    this.render('monitoring.subnav', {
      into: 'monitoring'
    })
  }
})
