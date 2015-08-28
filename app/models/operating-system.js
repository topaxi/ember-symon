import DS from 'ember-data'

const { Model, attr, hasMany } = DS

export default Model.extend({
  versions: hasMany('operating-system-version'),
  name:     attr('string'),
  logo:     attr('string')
})
