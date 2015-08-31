import DS from 'ember-data'

const { Model, attr, belongsTo, hasMany } = DS

export default Model.extend({
  customer:               belongsTo('customer'),
  services:               hasMany('host-service'),
  hostType:               belongsTo('host-type'),
  operatingSystem:        belongsTo('operating-system'),
  operatingSystemVersion: belongsTo('operating-system-version'),
  name:                   attr('string'),
  hostname:               attr('string'),
  description:            attr('string'),
  comment:                attr('string'),
  password:               attr('string'),
  ipv4:                   attr('string'),
  ipv6:                   attr('string'),
  alertScheduler:         attr('number'),
  wiki:                   attr('string'),
  isSatellite:            attr('boolean'),
  isEnabled:              attr('boolean')
})
