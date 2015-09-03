import Mirage, { faker } from 'ember-cli-mirage'

export default Mirage.Factory.extend({
  host:            () => faker.random.number({ min: 1, max: 20 }),
  hostServices:    () => [],
  start:           () => faker.date.between(
                           new Date(Date.now() - 1000 * 60 * 60 * 24),
                           new Date(Date.now() + 1000 * 60 * 60 * 24)
                         ),
  end:             () => faker.date.between(
                           new Date(Date.now() + 1000 * 60 * 60 * 24),
                           new Date(Date.now() + 1000 * 60 * 60 * 48)
                         ),
  intervalStep:    'day',
  interval:        0,
  intervalEnd:     '',
  intervalEndType: 'date'
})
