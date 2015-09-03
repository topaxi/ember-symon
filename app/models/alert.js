import Ember from 'ember'
import DS from 'ember-data'

const { computed } = Ember
const { Model, attr, belongsTo/*, hasMany */} = DS

const cssTypeMap = {
  'error':   'danger',
  'warning': 'warning',
  'unknown': 'danger'
}

export default Model.extend({
  host:          belongsTo('host'),
  service:       belongsTo('service'),
  //comments:      hasMany(...),
  //notifications: hasMany(...),
  type:          attr('string'),
  state:         attr('string'),
  datetime:      attr('moment'),
  closetime:     attr('moment'),
  output:        attr('string'),

  duration: computed('datetime', 'closetime', function() {
    return this.get('datetime').diff(this.get('closetime'))
  }),

  cssType: computed('state', function() {
    return cssTypeMap[this.get('type')]
  })
})
