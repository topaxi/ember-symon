import Ember from 'ember';
import WithSidebarMixin from '../../../mixins/with-sidebar';
import { module, test } from 'qunit';

module('Unit | Mixin | with sidebar');

// Replace this with your real tests.
test('it works', function(assert) {
  var WithSidebarObject = Ember.Object.extend(WithSidebarMixin);
  var subject = WithSidebarObject.create();
  assert.ok(subject);
});
