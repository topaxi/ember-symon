import Ember from 'ember'

const { $ } = Ember

export function initialize(instance) {
  $('body').removeClass('loading-mask')
}

export default {
  name: 'load',
  initialize
}
