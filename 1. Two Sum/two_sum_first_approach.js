// Approach 1: Brute Force
// Time complexity: O(n²)
// Space complexity: O(1)
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return undefined;
}

module.exports = twoSum;
