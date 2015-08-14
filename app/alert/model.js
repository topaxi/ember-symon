import Ember from 'ember'
import DS from 'ember-data'

const { computed } = Ember
const { Model, attr, belongsTo/*, hasMany */} = DS

export default Model.extend({
  host:          belongsTo('host',    { async: true }),
  service:       belongsTo('service', { async: true }),
  //comments:      hasMany(...),
  //notifications: hasMany(...),
  type:          attr('string'),
  state:         attr('string'),
  datetime:      attr('moment'),
  closetime:     attr('moment'),
  output:        attr('string'),

  duration: computed('datetime', 'closetime', function() {
    return this.get('datetime').diff(this.get('closetime'))
  })
})
