# demo-broken-block-slots

Repo to demonstrate an incompatibility between `ember-block-slots@1.1.6` and `ember@2.10.0`, when

- the `block-params` helper is used
- one of those params is a object provided through the `hash` helper
- the browser does not have a native `WeakMap` implementation

The issue is being track here: [ember-block-slots#43](https://github.com/ciena-blueplanet/ember-block-slots/issues/43)

## Seeing the error

Run the tests in Phantomjs, or some other browser that does not support WeakMap.

If you just do `ember test` then you'll see an unrelated error.  However, if you do `ember test --serve` and look at the errors in the Phantomjs tab, you'll see that error plus the following (which is actually the error):

> TypeError: Attempting to define property on object that is not extensible.

This comes from changes made in Ember `2.10.0`, where the format of attributes passed into a component have changed slightly.
