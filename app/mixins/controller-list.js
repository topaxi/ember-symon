import Ember from 'ember'

const { Mixin, computed, $ } = Ember
const { ceil }               = Math

export default Mixin.create({
  queryParams: [ 'limit', 'page' ],
  page: 1,
  limit: 10,
  loading: false,

  totalPages: computed('limit', 'model.content.meta.total', function() {
    return ceil(this.get('model.meta.total') / this.get('limit'))
  }),

  actions: {

    pageChanged(current, previous) {
      $('.sy-list thead').get(0).scrollIntoView()
    }
  }
})
