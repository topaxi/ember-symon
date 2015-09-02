import DS from 'ember-data'

const { Model, attr, belongsTo, hasMany } = DS

export default Model.extend({
  parent:              belongsTo('customer'),
  alertScheduler:      belongsTo('alert-scheduler'),
  hosts:               hasMany('hosts'),
  name:                attr('string'),
  wiki:                attr('string'),
  email:               attr('string'),
  warnHoster:          attr('boolean'),
  informationPassword: attr('string'),
  maintenancePassword: attr('string'),
  comment:             attr('string'),
  emergencyDefault:    attr('string')  // hasOne('user')
})
