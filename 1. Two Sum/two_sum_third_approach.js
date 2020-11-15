// Approach 3: One-pass Hash Table
// Time complexity: O(n)
// Space complexity: O(n)
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return undefined;
}

module.exports = twoSum;
