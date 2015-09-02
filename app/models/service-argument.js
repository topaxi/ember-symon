import DS from 'ember-data'

const { Model, attr, belongsTo } = DS

export default Model.extend({
  service:     belongsTo('service'),
  option:      attr('string'),
  value:       attr('string'),
  description: attr('string'),
  type:        attr('string')
})
