function max_consecutive_ones(nums) {
  let maxSoFar = 0;
  let maxEndingHere = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      maxEndingHere++;

      if (maxEndingHere > maxSoFar) {
        maxSoFar = maxEndingHere;
      }
    } else {
      maxEndingHere = 0;
    }
  }

  return maxSoFar;
}

module.exports = max_consecutive_ones;
