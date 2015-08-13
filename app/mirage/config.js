export default function() {

  this.namespace = 'api' // make this `api`, for example, if your API is namespaced
  this.timing    = 400   // delay for each request, automatically set to 0 during testing

  this.get('/hosts', list('hosts'))
  this.get('/hosts/:id')
  this.post('/hosts')
  this.put('/hosts/:id')
  this.del('/hosts/:id')

  this.get('/customers', list('customers'))
  this.get('/customers/:id')
  this.post('/customers')
  this.put('/customers/:id')
  this.del('/customers/:id')

  this.get('/hostGroups', list('host-groups'))
  this.get('/hostGroups/:id')
  this.post('/hostGroups')
  this.put('/hostGroups/:id')
  this.del('/hostGroups/:id')
}

function list(key) {
  return (db, req) => {
    let { page = 1, limit = 10, ids } = req.queryParams

    page  = page  | 0
    limit = limit | 0

    let entries = ids ? db[key].find(ids) : db[key]

    console.log(db)
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
