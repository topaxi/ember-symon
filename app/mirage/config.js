export default function() {

  this.namespace = 'api' // make this `api`, for example, if your API is namespaced
  this.timing    = 400   // delay for each request, automatically set to 0 during testing

  this.get('/hosts', function(db, req) {
    let { page = 1, limit = 10 } = req.queryParams

    page  = page  | 0
    limit = limit | 0

    return {
      hosts: db.hosts.slice((page - 1) * limit, (page - 1) * limit + limit),
      meta:  {
        page:  page,
        limit: limit,
        total: db.hosts.length
      }
    }
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
