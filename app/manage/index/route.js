import Ember from 'ember'

export default Ember.Route.extend({

  beforeModel() {
    if (this.get('media.isMd')) {
      this.transitionTo('manage.hosts')
      return
    }
  },

  renderTemplate() {
    this.render('manage.subnav', {
      into: 'application'
    })
  }
})
