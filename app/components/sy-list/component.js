import Component from 'ember-component'

import computed, {
  oneWay
} from 'ember-computed'

export default Component.extend({
  classNames:        [ 'sy-list' ],
  classNameBindings: [ 'syListName' ],

  modelName:  oneWay('model.type.modelName'),
  syListName: computed('modelName', function() {
    return `sy-list--${this.get('modelName')}`
  }),

  actions: {
    updateSearch(search) {
      this.sendAction('search', search)
    }
  }
})
