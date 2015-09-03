import DS from 'ember-data'

const { Model, attr, belongsTo, hasMany } = DS

export default Model.extend({
  host:            belongsTo('host'),
  hostServices:    hasMany('host-service'),
  start:           attr('moment'),
  end:             attr('moment'),
  intervalStep:    attr('string'),
  interval:        attr('number'),
  intervalEnd:     attr('string'),
  intervalEndType: attr('string')
})
