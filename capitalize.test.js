const capitalize = require('./capitalize.js');

test('it is capitalized', () => {
  expect(capitalize('hello')).toBe('Hello');
});