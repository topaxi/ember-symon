import Mirage/*, { faker }*/ from 'ember-cli-mirage'

export default Mirage.Factory.extend({
  name:        i => `Host Group ${i + 1}`,
  description: i => `Description for Host Group ${i + 1}`
})
