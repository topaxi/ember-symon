import Ember from 'ember'

const { inject } = Ember

export default Ember.Controller.extend({
  notify: inject.service(),

  actions: {
    toggleExample() {
      this.set('showExample', !this.get('showExample'))
    },

    async save() {
      try {
        await this.model.save()

        this.get('notify').success('Command successfully saved!')

        this.transitionToRoute('manage.commands.command.edit', this.model)
      }
      catch (err) {
        this.get('notify').error(err || 'Error while trying to save command!')
      }
    }
  }
})
