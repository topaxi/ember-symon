import DS from 'ember-data'

const { Model, attr, hasMany } = DS

export default Model.extend({
  name:                attr('string'),
  wiki:                attr('string'),
  alertScheduler:      attr('number'),
  email:               attr('string'),
  warnHoster:          attr('boolean'),
  informationPassword: attr('string'),
  maintenancePassword: attr('string'),
  comment:             attr('string'),
  emergenceDefault:    attr('string'), // hasOne('user')
  hosts:               hasMany('hosts')
})
