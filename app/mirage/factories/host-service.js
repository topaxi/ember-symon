import Mirage, { faker } from 'ember-cli-mirage'

export default Mirage.Factory.extend({
  host:           0,
  name:           '',
  arguments:      () => [],
  available:      faker.random.boolean(),
  alertScheduler: faker.list.random(1, 2, 3),
  passive:        faker.random.boolean(),
  enabled:        faker.random.boolean()
})
