import Ember from 'ember'

const { computed } = Ember

function localStorageProperty(storageKey, defaultValue) {
  let { stringify, parse } = JSON

  return computed({
    get() {
      let val = localStorage[storageKey]
      return val == null ? defaultValue : parse(val)
    },
    set(key, val) {
      localStorage[storageKey] = stringify(val)
      return val
    }
  })
}

export default Ember.Component.extend({
  classNames: [ 'flex-grow' ],
  expand:   false,
  autohide: localStorageProperty('sidenav-autohide', false),
  slide:    true,

  didInsertElement() {
    this.$('nav').one('animationend mozAnimationEnd webkitAnimationEnd oanimationend MSAnimationEnd', () => {
      this.set('slide', false)
    })
  },

  actions: {
    toggle() {
      this.set('expand', !this.get('expand'))
    },

    close() {
      this.set('expand', false)
    },

    autohide() {
      this.set('autohide', !this.get('autohide'))
    }
  }
})
