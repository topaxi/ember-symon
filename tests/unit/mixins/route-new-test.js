import Ember from 'ember';
import RouteNewMixin from '../../../mixins/route-new';
import { module, test } from 'qunit';

module('Unit | Mixin | route new');

// Replace this with your real tests.
test('it works', function(assert) {
  var RouteNewObject = Ember.Object.extend(RouteNewMixin);
  var subject = RouteNewObject.create();
  assert.ok(subject);
});
