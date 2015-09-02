import DS from 'ember-data'

const { Model, attr, belongsTo } = DS

export default Model.extend({
  operatingSystem: belongsTo('operating-system'),
  architecture:    belongsTo('architecture'),
  name:            attr('string'),
  shortname:       attr('string')
})
