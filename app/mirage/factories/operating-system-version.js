import Mirage from 'ember-cli-mirage'

export default Mirage.Factory.extend({
  operatingSystem: 0,
  architecture:    0,
  name:            '',
  shortname:       ''
})
