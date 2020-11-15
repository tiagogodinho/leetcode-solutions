// Approach 1
// Time complexity: O(n²)
// Space complexity: O(1)
function maxSubArray(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let highest = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];

    if (sum > highest) {
      highest = sum;
    }

    for (let j = i+1; j < nums.length; j++) {
      sum += nums[j];

      if (sum > highest) {
        highest = sum;
      }
    }
  }

  return highest;
}

module.exports = maxSubArray;
