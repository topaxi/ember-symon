import DS from 'ember-data'

const { attr, belongsTo, hasMany } = DS

export default DS.Model.extend({
  host:           belongsTo('host'),
  arguments:      hasMany('host-service-argument', { async: false }),
  name:           attr('string'),
  available:      attr('boolean'),
  alertScheduler: attr('number'),
  passive:        attr('boolean'),
  enabled:        attr('boolean')
})
