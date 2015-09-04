import Ember from 'ember'

const { Mixin, computed, run, $ } = Ember
const { ceil }                    = Math

export default Mixin.create({
  queryParams: [ 'limit', 'page', 'filter' ],
  page: 1,
  limit: 15,
  loading: false,

  totalPages: computed('limit', 'model.content.meta.total', function() {
    return ceil(this.get('model.meta.total') / this.get('limit'))
  }),

  setFilter(filter) {
    this.set('filter', String(filter) || void 0)
  },

  actions: {

    pageChanged(current, previous) {
      $('.sy-list thead').get(0).scrollIntoView()
    },

    updateFilter(filter) {
      run.debounce(this, this.setFilter, filter, 300)
    }
  }
})
