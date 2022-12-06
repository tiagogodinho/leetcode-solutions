const moveZeroes = require('./moves_zeroes');

test('example 1', () => {
  expect(moveZeroes([0,1])).toStrictEqual([1,0])
});

test('example 2', () => {
  expect(moveZeroes([0,1,0,3,12])).toStrictEqual([1,3,12,0,0])
});

test('example 3', () => {
  expect(moveZeroes([0,1,0,3,0])).toStrictEqual([1,3,0,0,0])
});

test('example 4', () => {
  expect(moveZeroes([4,1,0,0,3,7])).toStrictEqual([4,1,3,7,0,0])
});
