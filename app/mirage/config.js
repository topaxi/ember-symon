export default function() {

  this.namespace = 'api' // make this `api`, for example, if your API is namespaced
  this.timing    = 300   // delay for each request, automatically set to 0 during testing

  this.get('/hosts', list('hosts'))
  this.get('/hosts/:id', (db, req) => {
    let id = req.params.id
    let host

    if (id | 0) {
      host = db.hosts.find(id)
    }
    else {
      host = db.hosts.where({ hostname: id })[0]
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
  this.put('/hostGroups/:id', 'host-group')
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

  this.get('/serviceArguments', serviceList('service-arguments'))
  this.get('/serviceArguments/:id', 'service-argument')
  this.post('/serviceArguments', 'service-argument')
  this.put('/serviceArguments/:id', 'service-argument')
  this.del('/serviceArguments/:id', 'service-argument')
}

function serviceList(key) {
  return (db, req) => {
    let { page = 1, limit = 10, service, ids } = req.queryParams

    page    = page    | 0
    limit   = limit   | 0
    service = service | 0

    let entries = ids ? db[key].find(ids) : db[key]

    if (service) {
      entries = entries.filter(e =>  e.service === service)
    }

    entries.sort((a, b) => b.id - a.id)

    return {
      [key]: entries.slice((page - 1) * limit, (page - 1) * limit + limit),
      meta:  {
        page:  page,
        limit: limit,
        total: entries.length
      }
    }
  }
}

function alertList(key) {
  return (db, req) => {
    let { page = 1, limit = 10, state, ids } = req.queryParams

    page  = page  | 0
    limit = limit | 0

    let entries = ids ? db[key].find(ids) : db[key]

    if (state) {
      entries = entries.filter(e =>  e.state === state)
    }

    entries.sort((a, b) => b.id - a.id)

    return {
      [key]: entries.slice((page - 1) * limit, (page - 1) * limit + limit),
      meta:  {
        page:  page,
        limit: limit,
        total: entries.length
      }
    }
  }
}

function list(key) {
  return (db, req) => {
    let { page = 1, limit = 10, ids } = req.queryParams

    page  = page  | 0
    limit = limit | 0

    let entries = ids ? db[key].find(ids) : db[key]

    return {
      [key]: entries.slice((page - 1) * limit, (page - 1) * limit + limit),
      meta:  {
        page:  page,
        limit: limit,
        total: entries.length
      }
    }
  }
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
