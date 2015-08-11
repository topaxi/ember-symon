import Ember from 'ember'

export default Ember.Route.extend({
  renderTemplate() {
    this.render('manage.subnav', {
      into: 'manage'
    })
  }
})
