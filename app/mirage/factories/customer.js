import Mirage, { faker } from 'ember-cli-mirage'

export default Mirage.Factory.extend({
  parent:              1,
  name:                () => faker.company.companyName(),
  wiki:                faker.internet.url,
  alertScheduler:      faker.list.random(1, 2, 3),
  email:               faker.internet.email,
  warnHoster:          faker.random.boolean,
  informationPassword: () => faker.internet.password(),
  maintenancePassword: () => faker.internet.password(),
  comment:             faker.lorem.sentence
})
