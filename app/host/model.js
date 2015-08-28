import Ember from 'ember'
import DS    from 'ember-data'

const { Model, attr, belongsTo, hasMany } = DS
const { computed } = Ember

export default Model.extend({
  customer:               belongsTo('customer'),
  services:               hasMany('host-service'),
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

  operatingSystem: computed.oneWay('operatingSystemVersion.operatingSystem')
})
