const maxSubArray = require('./max_sub_array_second_approach');

test('example 1', () => {
  expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toStrictEqual(6);
});

test('example 2', () => {
  expect(maxSubArray([1])).toStrictEqual(1);
});

test('example 3', () => {
  expect(maxSubArray([0])).toStrictEqual(0);
});

test('example 4', () => {
  expect(maxSubArray([-1])).toStrictEqual(-1);
});

test('example 5', () => {
  expect(maxSubArray([-2147483647])).toStrictEqual(-2147483647);
});

test('example 6', () => {
  expect(maxSubArray([-2,1])).toStrictEqual(1);
});

test('example 7', () => {
  expect(maxSubArray([-2,-1])).toStrictEqual(-1);
});

test('example 8', () => {
  expect(maxSubArray([1,2])).toStrictEqual(3);
});

test('example 9', () => {
  expect(maxSubArray([-2,-3,4,-1,-2,1,5,-3])).toStrictEqual(7);
});
