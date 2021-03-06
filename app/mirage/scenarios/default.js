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
    server.createList('customer', rrange(40, 60)).forEach(customer => {

      server.createList('host', rrange(1, 5), { customer: customer.id }).forEach(host => {
        server.createList('host-service', rrange(0, 8), {
          host:    host.id,
          service: () => rrange(1, allServices.length)
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

  createDeterministicData(server)
  createCommands()
  createCustomers()

  server.createList('alert', rrange(5, 15), { state: 'new' })
  server.createList('alert', rrange(70, 80))
}

function createDeterministicData(server) {
  server.createList('downtime', rrange(100, 1000))

  server.create('customer', {
    parent:         1,
    name:           'Adfinis SyGroup AG',
    comment:        '',
    wiki:           '',
    alertScheduler: 2
  })

  server.create('alert-scheduler', {
    name:        'No Alarm',
    description: 'No alarm.'
  })

  server.create('alert-scheduler', {
    name:        'Mail only',
    description: 'Mail alert'
  })

  server.create('alert-scheduler', {
    name:        'Standard',
    description: 'Standard Template',
    customer:    2
  })

  server.create('alert-scheduler', {
    name:        'Premium',
    description: 'Premium Template',
    customer:    2
  })

  let x86 = server.create('architecture', { name: 'x86'    })
  let x64 = server.create('architecture', { name: 'x86_64' })

  let ubuntu = server.create('operating-system', {
    name: 'Ubuntu',
    logo: 'http://design.ubuntu.com/wp-content/uploads/ubuntu-logo32.png'
  })
  let debian = server.create('operating-system', {
    name: 'Debian',
    logo: 'https://www.debian.org/logos/openlogo-nd.svg'
  })
  let gentoo = server.create('operating-system', {
    name: 'Gentoo',
    logo: 'https://www.gentoo.org/assets/img/logo/gentoo-3d-small.png'
  })
  let windows = server.create('operating-system', {
    name: 'Windows',
    logo: 'http://img2.wikia.nocookie.net/__cb20150608074653/logopedia/images/3/30/7497b4a2.png'
  })

  server.create('operating-system-version', {
    name:            'Ubuntu 14.10 x86',
    shortname:       'ubuntu_14.10_x86',
    operatingSystem: ubuntu.id,
    architecture:    x86.id
  })

  server.create('operating-system-version', {
    name:            'Ubuntu 14.10 x86_64',
    shortname:       'ubuntu_14.10_x64',
    operatingSystem: ubuntu.id,
    architecture:    x64.id
  })

  server.create('operating-system-version', {
    name:            'Ubuntu 15.04 x86',
    shortname:       'ubuntu_15.04_x86',
    operatingSystem: ubuntu.id,
    architecture:    x86.id
  })

  server.create('operating-system-version', {
    name:            'Ubuntu 15.04 x86_64',
    shortname:       'ubuntu_15.04_x64',
    operatingSystem: ubuntu.id,
    architecture:    x64.id
  })

  server.create('operating-system-version', {
    name:            'Debian Jessie x86',
    shortname:       'debian_jessie_x86',
    operatingSystem: debian.id,
    architecture:    x86.id
  })

  server.create('operating-system-version', {
    name:            'Debian Jessie x86_64',
    shortname:       'debian_jessie_x64',
    operatingSystem: debian.id,
    architecture:    x64.id
  })

  server.create('operating-system-version', {
    name:            'Windows 7 x86',
    shortname:       'win7_x86',
    operatingSystem: windows.id,
    architecture:    x86.id
  })

  server.create('operating-system-version', {
    name:            'Windows 7 x86_64',
    shortname:       'win7_x64',
    operatingSystem: windows.id,
    architecture:    x64.id
  })

  server.create('operating-system-version', {
    name:            'Windows 8',
    shortname:       'win8_x64',
    operatingSystem: windows.id,
    architecture:    x86.id
  })

  let tcp = server.create('command', {
    name:        'tcp',
    description: 'Check whether a tcp connection to a certain port is possible',
    ipv6:        false,
    command:     '$USER1$/check_tcp -H $HOSTADDRESS$ -p $ARG1$'
  })

  let ssh = server.create('service', {
    name:             'ssh',
    description:      'Check whether a TCP connection to port 22 is possible',
    command:          tcp.id,
    maxCheckAttempts: 5,
    checkInterval:    5,
    retryInterval:    1,
    freshness:        0,
    isNrpe:           false,
    alertScheduler:   null
  })

  server.create('service-argument', {
    service:     ssh.id,
    option:      '',
    value:       22,
    description: '',
    type:        'Fixed'
  })

  let http = server.create('service', {
    name:             'http',
    description:      'Check whether a HTTP connection to port 80 is possible',
    command:          tcp.id,
    maxCheckAttempts: 5,
    checkInterval:    5,
    retryInterval:    1,
    freshness:        0,
    isNrpe:           false,
    alertScheduler:   null
  })

  server.create('service-argument', {
    service:     http.id,
    option:      '',
    value:       80,
    description: '',
    type:        'Fixed'
  })

  server.create('host-type', { name: 'Accesspoint', shortname: 'ap' })
  server.create('host-type', { name: 'Printer', shortname: 'pr' })
  server.create('host-type', { name: 'Dynamic Client', shortname: 'dc' })
  server.create('host-type', { name: 'Firewall', shortname: 'fw' })
  server.create('host-type', { name: 'Workstation', shortname: 'ws' })
  server.create('host-type', { name: 'Hostsystem', shortname: 'hs' })
  server.create('host-type', { name: 'IP-Phone', shortname: 'ph' })
  server.create('host-type', { name: 'Management Interface', shortname: 'mg' })
  server.create('host-type', { name: 'Monitoringhardware', shortname: 'mn' })
  server.create('host-type', { name: 'Notebook', shortname: 'nb' })
  server.create('host-type', { name: 'Router', shortname: 'rt' })
  server.create('host-type', { name: 'Server', shortname: 'sr' })
  server.create('host-type', { name: 'Storage Device', shortname: 'st' })
  server.create('host-type', { name: 'Switch', shortname: 'sw' })
  server.create('host-type', { name: 'Thinclient', shortname: 'tc' })
  server.create('host-type', { name: 'Virtual Server', shortname: 'vm' })

  let topaxiServices = { ssh, http }

  createTopaxi(server, topaxiServices)
}

// Somewhat reliable test data
function createTopaxi(server, services) {
  let topaxi = server.create('customer', {
    parent:  1,
    name:    'topaxi',
    comment: 'The god is also known as Topaxi the god of certain mushrooms, and of "great ideas that you forgot to write down and will never remember again", and some other things.',
    wiki:    'http://wiki.lspace.org/mediawiki/Topaxci'
  })

  let topaxich = server.create('host', {
    customer:               topaxi.id,
    hostType:               16, // Virtual server
    operatingSystem:        1, // Ubuntu
    operatingSystemVersion: 2, // Ubuntu 14.10 x64
    hostname:               'topaxi.ch',
    description:            'The awesome VPS of topaxi',
    ipv4:                   '95.128.34.190',
    wiki:                   'http://wiki.lspace.org/mediawiki/Topaxci',
    isSatellite:            false,
    isEnabled:              true
  })

  server.create('host-service', {
    host:           topaxich.id,
    service:        services.ssh.id,
    name:           'SSH',
    available:      true,
    alertScheduler: 0,
    passive:        false,
    enabled:        true
  })

  server.create('host-service', {
    host:           topaxich.id,
    service:        services.http.id,
    name:           'HTTP',
    available:      true,
    alertScheduler: 0,
    passive:        false,
    enabled:        true
  })
}

function rrange(start, end) {
  return floor(random() * end) + start
}
