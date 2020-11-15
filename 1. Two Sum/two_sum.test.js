const twoSum = require('./two_sum_third_approach');

test('example 1', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});

test('example 2', () => {
  expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
});

test('example 3', () => {
  expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
});
