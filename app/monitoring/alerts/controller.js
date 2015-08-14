import Ember from 'ember'
import ControllerList from 'ember-symon/mixins/controller-list'

export default Ember.Controller.extend(ControllerList, {
  queryParams: [ 'state' ],
  actions: {
    toggleAll(checked) {
      Ember.$('.sy-list').find(':checkbox').prop('checked', checked)
    }
  }
})
