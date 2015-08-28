import Mirage, { faker } from 'ember-cli-mirage'

export default Mirage.Factory.extend({
  customer:        0,
  name:            i => `Host ${i+1}`,
  hostname:        faker.internet.domainName,
  description:     i => `Description for Host ${i+1}`,
  comment:         faker.lorem.sentence,
  password:        faker.internet.password,
  ipv4:            faker.internet.ip,
  ipv6:            '::1',
  alert_scheduler: faker.list.random(1, 2, 3),
  wiki:            null
})
