import DS from 'ember-data'

const { Model, attr/*, hasMany */} = DS

export default Model.extend({
  //guidelines: hasMany('guideline', { async: true }),
  name:        attr('string'),
  description: attr('string'),
  ipv6:        attr('boolean'),
  command:     attr('string')
})
