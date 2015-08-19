import Mirage, { faker } from 'ember-cli-mirage'

export default Mirage.Factory.extend({
  host:      () => faker.random.number({ min: 1, max: 100 }),
  service:   () => faker.random.number({ min: 1, max:  50 }),
  state:     faker.list.random('open', 'closed'),
  type:      faker.list.random('error', 'error', 'warning', 'warning', 'warning', 'unknown'),
  datetime:  () => new Date(Date.now() - faker.random.number({ min: 1000 * 60, max: 1000 * 60 * 5 })),
  closetime: () => sometimes() ? new Date : null,
  output:    faker.hacker.phrase
})

function sometimes() {
  return Math.floor(Math.random() * 5)
}
