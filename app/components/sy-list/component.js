import Ember from 'ember'

const { computed } = Ember

export default Ember.Component.extend({
  classNames:        [ 'sy-list' ],
  classNameBindings: [ 'syListName' ],

  modelName:  computed.oneWay('model.type.modelName'),
  syListName: computed('modelName', function() {
    return `sy-list--${this.get('modelName')}`
  })
})
