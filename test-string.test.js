const stringLength = require('./test-string.js');

test('check string length', () => {
  expect(stringLength('helei')).toBe(5);
});