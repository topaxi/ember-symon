import DS from 'ember-data'

const { attr } = DS

export default DS.Model.extend({
  customer:       attr('string'),
  name:           attr('string'),
  hostname:       attr('string'),
  description:    attr('string'),
  ipv4:           attr('string'),
  ipv6:           attr('string'),
  alertScheduler: attr('string'),
  wiki:           attr('string')
})
