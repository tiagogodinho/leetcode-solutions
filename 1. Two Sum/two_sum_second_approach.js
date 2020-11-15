// Approach 2: Two-pass Hash Table
// Time complexity: O(n)
// Space complexity: O(n)
function twoSum(nums, target) {
  const complements = {};

  for (let i = 0; i < nums.length; i += 1) {
    const element = nums[i];
    complements[element] = i;
  }

  for (let i = 0; i < nums.length; i += 1) {
    const element = nums[i];
    const complement = target - element;

    if (complements[complement] && i !== complements[complement]) {
      return [i, complements[complement]];
    }
  }

  return undefined;
}


module.exports = twoSum;
