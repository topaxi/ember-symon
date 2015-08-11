export default function() {

  this.namespace = 'api' // make this `api`, for example, if your API is namespaced
  this.timing    = 0   // delay for each request, automatically set to 0 during testing

  this.get('/hosts', function(db, req) {
    let { offset = 0, limit = 10 } = req.queryParams

    offset = Number(offset)
    limit  = Number(limit)

    return { hosts: db.hosts.slice(offset, offset + limit) }
  })

  this.get('/hosts/:id')
  this.post('/hosts')
  this.put('/hosts/:id')
  this.del('/hosts/:id')
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
