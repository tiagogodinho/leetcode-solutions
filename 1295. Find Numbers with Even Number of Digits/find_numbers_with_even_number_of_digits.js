function findNumbers(nums) {
  let evenNumberCounter = 0;

  nums.forEach((number) => {
    let count = 0;

    while (number !== 0) {
      number = Math.floor(number / 10);
      count++;
    }

    if (count % 2 === 0) {
      evenNumberCounter++;
    }
  });

  return evenNumberCounter;
};

module.exports = findNumbers;
