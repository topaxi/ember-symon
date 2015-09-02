import Mirage, { faker } from 'ember-cli-mirage'

export default Mirage.Factory.extend({
  name:            '',
  description:     faker.hacker.phrase,
  cycleDelay:      5,
  restartDelay:    5,
  timeout:         20,
  minAvailability: 99.9
})
