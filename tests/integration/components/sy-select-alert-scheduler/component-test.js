import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sy-select-alert-scheduler', 'Integration | Component | sy select alert scheduler', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sy-select-alert-scheduler}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sy-select-alert-scheduler}}
      template block text
    {{/sy-select-alert-scheduler}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
