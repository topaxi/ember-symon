import Mirage, { faker } from 'ember-cli-mirage'

export default Mirage.Factory.extend({
  name:                 () => faker.company.companyName(),
  wiki:                '',
  alert_scheduler:      faker.list.random(1, 2, 3),
  email:                faker.internet.email(),
  warnHoster:           faker.random.boolean(),
  information_password: faker.internet.password,
  maintenance_password: faker.internet.password,
  comment:              faker.lorem.sentence
})
