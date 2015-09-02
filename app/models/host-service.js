import DS from 'ember-data'

const { attr, belongsTo, hasMany } = DS

export default DS.Model.extend({
  host:           belongsTo('host'),
  service:        belongsTo('service'),
  alertScheduler: belongsTo('alert-scheduler'),
  //arguments:      hasMany('host-service-argument', { async: false }),
  name:           attr('string'),
  available:      attr('boolean'),
  passive:        attr('boolean'),
  enabled:        attr('boolean')
})
