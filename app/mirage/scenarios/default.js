const { floor, random } = Math

export default function(server) {
  server.create('customer', {
    parent: null,
    name: 'All customers',
    wiki: '',
    alertScheduler: null,
    email: null,
    warnHoster: null,
    informationPassword: null,
    maintenancePassword: null,
    comment: 'Root customer: All customers are subcustomers of this one'
  })

  for (let command of server.createList('command', 50)) {
    let services = server.createList('service', rrange(1, 5), { command: command.id })

    for (let service of services) {
      server.createList('service-argument', rrange(0, 3), { service: service.id })
    }
  }

  createTopaxi(server)

  for (let customer of server.createList('customer', rrange(60, 80))) {
    server.createList('host', rrange(1, 8), { customer: customer.id })
    server.createList('host-group', rrange(0, 2), { customer: customer.id })
  }

  server.createList('alert', rrange(5, 15), { state: 'new' })
  server.createList('alert', rrange(50, 100))
}

// Somewhat reliable test data
function createTopaxi(server) {
  let topaxi = server.create('customer', {
    parent:  1,
    name:    'topaxi',
    comment: 'The god is also known as Topaxi the god of certain mushrooms, and of "great ideas that you forgot to write down and will never remember again", and some other things.',
    wiki:    'http://wiki.lspace.org/mediawiki/Topaxci'
  })

  let topaxich = server.create('host', {
    customer:    topaxi.id,
    hostname:    'topaxi.ch',
    description: 'The awesome VPS of topaxi',
    ipv4:        '95.128.34.190',
    wiki:        'http://wiki.lspace.org/mediawiki/Topaxci'
  })
}

function rrange(start, end) {
  return floor(random() * end) + start
}
