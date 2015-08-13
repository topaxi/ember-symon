import DS from 'ember-data'

export default DS.RESTAdapter.extend({
  namespace: 'api',
  coalesceFindRequests: true,
  shouldBackgroundReloadRecord: ()=>true
})
