import Ember from 'ember'

const { inject } = Ember

export default Ember.Controller.extend({
  notify: inject.service(),

  actions: {
    async save() {
      try {
        await this.model.save()

        this.get('notify').success('Host group successfully saved!')

        this.transitionToRoute('manage.host-groups.host-group.edit', this.model)
      }
      catch (err) {
        this.get('notify').error(err || 'Error while trying to save host-group!')
      }
    }
  }
})
