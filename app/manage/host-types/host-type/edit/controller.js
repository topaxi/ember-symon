import Ember from 'ember'

const { inject } = Ember

export default Ember.Controller.extend({
  notify: inject.service(),

  actions: {
    async save() {
      try {
        await this.model.save()

        this.get('notify').success('Host type successfully saved!')

        this.transitionToRoute('manage.host-types.host-type.edit', this.model)
      }
      catch (err) {
        this.get('notify').error(err.message || 'Error while trying to save host type!')
      }
    }
  }
})
