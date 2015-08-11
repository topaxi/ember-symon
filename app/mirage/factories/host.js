import Mirage, { faker } from 'ember-cli-mirage'

export default Mirage.Factory.extend({
  customer: function() {
    return faker.company.companyName()
  },
  name: i => `Host ${i+1}`,
  hostname: i => `host${i+1}`,
  description: i => `Description for Host ${i+1}`,
  ipv4: '127.0.0.1',
  ipv6: '::1',
  alertScheduler: 'Premium',
  wiki: null
})
