import DS from 'ember-data'

const { Model, attr, hasMany, belongsTo } = DS

export default Model.extend({
  name:        attr('string'),
  description: attr('string'),
  customer:    belongsTo('customer', { async: true }),
  hosts:       hasMany('host', { async: true })
})
