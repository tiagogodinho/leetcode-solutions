const max_consecutive_ones = require('./max_consecutive_ones');

test('first example', () => {
  expect(max_consecutive_ones([1, 1, 0, 1, 1, 1])).toBe(3);
});

test('second example', () => {
  expect(max_consecutive_ones([1, 0, 1, 1, 0, 1])).toBe(2);
});
