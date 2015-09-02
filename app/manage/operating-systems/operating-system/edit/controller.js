import Ember from 'ember'

const { inject } = Ember

export default Ember.Controller.extend({
  notify: inject.service(),

  actions: {
    async save() {
      try {
        await this.model.save()

        this.get('notify').success('Operating system successfully saved!')

        this.transitionToRoute('manage.operating-systems.operating-system.edit', this.model)
      }
      catch (err) {
        this.get('notify').error(err.message || 'Error while trying to save operating system!')
      }
    }
  }
})
