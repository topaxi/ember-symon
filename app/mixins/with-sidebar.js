import Ember from 'ember'

export default Ember.Mixin.create({
  renderTemplate() {
    this._super(...arguments)
    this.render(`${this.routeName}.subnav`, {
      into: 'application',
      outlet: 'subnav'
    })
  }
})
