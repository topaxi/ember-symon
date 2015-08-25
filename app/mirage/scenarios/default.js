const { floor, random } = Math

function pushAll(on, elements) {
  Array.prototype.push.apply(on, elements)
}

export default function(server) {
  let allServices = []

  function createCommands() {
    server.createList('command', 50).forEach(command => {
      let services = server.createList('service', rrange(1, 5), { command: command.id })

      pushAll(allServices, services)
    })

    createServiceArguments(allServices)
  }

  function createServiceArguments(services) {
    for (let service of services) {
      server.createList('service-argument', rrange(0, 3), { service: service.id })
    }
  }

  function createCustomers() {
    server.createList('customer', rrange(60, 80)).forEach(customer => {

      server.createList('host', rrange(1, 8), { customer: customer.id }).forEach(host => {
        server.createList('host-service', rrange(0, 8), {
          host:    host.id,
          service: rrange(1, allServices.length)
        })
      })

      server.createList('host-group', rrange(0, 2), { customer: customer.id })
    })
  }

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

  createCommands()
  createTopaxi(server)
  createCustomers()

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

  server.create('host-service', {
    host:    topaxich.id,
    service: 1
  })

  server.create('host-service', {
    host:    topaxich.id,
    service: 2
  })
}

function rrange(start, end) {
  return floor(random() * end) + start
}
