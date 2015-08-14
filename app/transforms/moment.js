import DS from 'ember-data'
import moment from 'moment'

export default DS.Transform.extend({
  deserialize(serialized) {
    return serialized ? moment(serialized) : null
  },

  serialize(deserialized) {
    return deserialized && deserialized.isValid() ? deserialized.toJSON() : null
  }
})
