import DS from 'ember-data'

const { Model, attr, belongsTo, hasMany } = DS

export default Model.extend({
  customer:         belongsTo('customer'),
  command:          belongsTo('command'),
  alertScheduler:   belongsTo('alert-scheduler'),
  arguments:        hasMany('service-argument'),
  name:             attr('string'),
  description:      attr('string'),
  maxCheckAttempts: attr('number'),
  checkInterval:    attr('number'),
  retryInterval:    attr('number'),
  freshness:        attr('number'),
  isNrpe:           attr('boolean')
})
