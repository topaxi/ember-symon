import DS from 'ember-data'

const { Model, attr, belongsTo/*, hasMany*/ } = DS

export default Model.extend({
  customer:        belongsTo('customer'),
  //timeframes:      hasMany(''),
  name:            attr('string'),
  description:     attr('string'),
  cycleDelay:      attr('number'),
  restartDelay:    attr('number'),
  timeout:         attr('number'),
  minAvailability: attr('number')
})
