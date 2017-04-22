
import { urlEncode } from 'open-event-frontend/helpers/url-encode';
import { module, test } from 'qunit';

module('Unit | Helper | url encode');

test('it works', function(assert) {
  let result = urlEncode(['hello world']);
  assert.equal(result, 'hello%20world');
});

