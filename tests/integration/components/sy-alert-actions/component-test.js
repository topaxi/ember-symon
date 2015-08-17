import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sy-alert-actions', 'Integration | Component | sy alert actions', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sy-alert-actions}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sy-alert-actions}}
      template block text
    {{/sy-alert-actions}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
