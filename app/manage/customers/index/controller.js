import Ember from 'ember'

const { computed } = Ember
const { ceil }     = Math

export default Ember.Controller.extend({
  queryParams: [ 'limit', 'page' ],
  page: 1,
  limit: 10,
  loading: false,

  totalPages: computed('limit', 'model.content.meta.total', function() {
    return ceil(this.get('model.meta.total') / this.get('limit'))
  })
})
