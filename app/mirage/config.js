import Mirage from 'ember-cli-mirage'

export default function() {

  this.namespace = 'api' // make this `api`, for example, if your API is namespaced
  this.timing    = 300   // delay for each request, automatically set to 0 during testing

  this.get('/hosts', list('hosts'))
  this.get('/hosts/:id', (db, req) => {
    let { id } = req.params
    let host

    if (id | 0) {
      host = db.hosts.find(id)
    }
    else {
      host = db.hosts.where({ hostname: id })[0]
    }

    if (!host) {
      return new Mirage.Response(404, {}, {
        errors: [
          {
            status: '404',
            title: 'Host not found',
            detail: `Host ${id} not found`
          }
        ]
      })
    }

    return { host }
  })

  this.post('/hosts')
  this.put('/hosts/:id')
  this.del('/hosts/:id')

  this.get('/customers', list('customers'))
  this.get('/customers/:id')
  this.post('/customers')
  this.put('/customers/:id')
  this.del('/customers/:id')

  this.get('/hostGroups', list('host-groups'))
  this.get('/hostGroups/:id', 'host-group')
  this.post('/hostGroups', 'host-group')
  this.put('/hostGroups/:id', put('hostGroup', 'host-group'))
  this.del('/hostGroups/:id', 'host-group')

  this.get('/commands', list('commands'))
  this.get('/commands/:id')
  this.post('/commands')
  this.put('/commands/:id')
  this.del('/commands/:id')

  this.get('/services', list('services'))
  this.get('/services/:id')
  this.post('/services')
  this.put('/services/:id')
  this.del('/services/:id')

  this.get('/alerts', alertList('alerts'))
  this.get('/alerts/:id')
  this.post('/alerts')
  this.put('/alerts/:id')
  this.del('/alerts/:id')

  this.get('/serviceArguments', listByField('service-arguments', 'service'))
  this.get('/serviceArguments/:id', 'service-argument')
  this.post('/serviceArguments', 'service-argument')
  this.put('/serviceArguments/:id', put('serviceArgument', 'service-argument'))
  this.del('/serviceArguments/:id', 'service-argument')

  this.get('/hostServices', listByField('host-services', 'host'))
  this.get('/hostServices/:id', 'host-service')
  this.post('/hostServices', 'host-service')
  this.put('/hostServices/:id', put('hostService', 'host-service'))
  this.del('/hostServices/:id', 'host-service')

  this.get('/architectures')
  this.get('/architectures/:id')
  this.post('/architectures')
  this.put('/architectures/:id')
  this.del('/architectures/:id')

  this.get('/operatingSystems', 'operating-system')
  this.get('/operatingSystems/:id', 'operating-system')
  this.post('/operatingSystems', 'operating-system')
  this.put('/operatingSystems/:id', put('operatingSystem', 'operating-system'))
  this.del('/operatingSystems/:id', 'operating-system')

  this.get('/operatingSystemVersions', 'operating-system-version')
  this.get('/operatingSystemVersions/:id', 'operating-system-version')
  this.post('/operatingSystemVersions', 'operating-system-version')
  this.put('/operatingSystemVersions/:id', put('operatingSystemVersion', 'operating-system-version'))
  this.del('/operatingSystemVersions/:id', 'operating-system-version')

  this.get('/hostTypes', 'host-type')
  this.get('/hostTypes/:id', 'host-type')
  this.post('/hostTypes', 'host-type')
  this.put('/hostTypes/:id', put('hostType', 'host-type'))
  this.del('/hostTypes/:id', 'host-type')
}

function listByField(key, fieldName) {
  return (db, req) => {
    let { page = 1, limit, [fieldName]: field, ids } = req.queryParams

    page  = page  | 0
    limit = limit | 0
    field = field | 0

    let entries = ids ? db[key].find(ids) : db[key]

    if (field) {
      entries = entries.filter(e => e[fieldName] === field)
    }

    let total = entries.length

    entries.sort((a, b) => b.id - a.id)

    if (limit) {
      let offset = (page - 1) * limit
      entries = entries.slice(offset, offset + limit)
    }

    return {
      [key]: entries,
      meta:  { page, limit, total }
    }
  }
}

function alertList(key) {
  return (db, req) => {
    let { page = 1, limit, state, ids } = req.queryParams

    page  = page  | 0
    limit = limit | 0

    let entries = ids ? db[key].find(ids) : db[key]

    if (state) {
      entries = entries.filter(e =>  e.state === state)
    }

    let total = entries.length

    entries.sort((a, b) => b.id - a.id)

    if (limit) {
      let offset = (page - 1) * limit
      entries = entries.slice(offset, offset + limit)
    }

    return {
      [key]: entries,
      meta:  { page, limit, total }
    }
  }
}

function list(key) {
  return (db, req) => {
    let { page = 1, limit, ids } = req.queryParams

    page  = page  | 0
    limit = limit | 0

    let entries = ids ? db[key].find(ids) : db[key]
    let total   = entries.length

    if (limit) {
      let offset = (page - 1) * limit
      entries = entries.slice(offset, offset + limit)
    }

    return {
      [key]: entries,
      meta:  { page, limit, total }
    }
  }
}

function put(route, model) {
  return (db, request) => {
    let { id } = request.params
    let attrs  = JSON.parse(request.requestBody)[route]
    let record = db[model].update(id, attrs)

    return {
      [model]: record
    }
  }
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
