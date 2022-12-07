const findNumbers = require('./find_numbers_with_even_number_of_digits');

test('example one', () => {
  expect(findNumbers([12, 345, 2, 6, 7896])).toStrictEqual(2);
});

test('example two', () => {
  expect(findNumbers([555, 901, 482, 1771])).toStrictEqual(1);
});
