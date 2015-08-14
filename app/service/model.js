import DS from 'ember-data'

const { Model, attr, belongsTo/*, hasMany*/ } = DS

export default Model.extend({
  customer:         belongsTo('customer', { async: true }),
  command:          belongsTo('command',  { async: true }),
  name:             attr('string'),
  description:      attr('string'),
  maxCheckAttempts: attr('number'),
  checkInterval:    attr('number'),
  retryInterval:    attr('number'),
  freshness:        attr('number'),
  isNrpe:           attr('boolean'),
  alertScheduler:   attr('number')
})
