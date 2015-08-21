import Mirage, { faker } from 'ember-cli-mirage'

export default Mirage.Factory.extend({
  option:      faker.list.random(null, '', '-a', '-b', '-c', '--foo', '--bar', '--baz'),
  value:       faker.list.random(null, 1, 2, 3, 'foo', 'bar', 'baz'),
  description: faker.hacker.phrase,
  type:        faker.list.random('Fixed', 'Variable')
})
