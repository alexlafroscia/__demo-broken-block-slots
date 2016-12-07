import { test } from 'qunit';
import moduleForAcceptance from 'demo-broken-block-slots/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('demonstrate issue with `block-slots', function(assert) {
  visit('/');

  andThen(function() {
    const el = find('#content');
    assert.equal(el.text().trim(), 'bar');
  });
});
