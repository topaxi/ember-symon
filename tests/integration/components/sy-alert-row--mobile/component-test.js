import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sy-alert-row--mobile', 'Integration | Component | sy alert row  mobile', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sy-alert-row--mobile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sy-alert-row--mobile}}
      template block text
    {{/sy-alert-row--mobile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
