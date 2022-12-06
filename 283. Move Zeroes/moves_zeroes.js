// Approach #1 (Space Sub-Optimal)
// Time Complexity: O(n)
// Space Complexity: O(n)
function moveZeroesFirstApproach(nums) {
  // Count the zeroes
  let numZeroes = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      numZeroes++
    }
  }

  // Make all the non-zero elements retain their original order.
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      ans.push(nums[i]);
    }
  }

  // Move all zeroes to the end
  while (numZeroes--) {
    ans.push(0);
  }

  // Combine the result
  for (let i = 0; i < nums.length; i++) {
    nums[i] = ans[i];
  }
  return nums;
}

// Approach #2 (Space Optimal, Operation Sub-Optima)
// Time Complexity: O(n)
// Space Complexity: O(1)
function moveZeroesSecondApproach(nums) {
  let lastNonZeroFoundAt = 0;
  // If the current element is not 0, then we need to
  // append it just in front of last non 0 element we found.
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[lastNonZeroFoundAt] = nums[i];
      lastNonZeroFoundAt++
    }
  }
 // After we have finished processing new elements,
 // all the non-zero elements are already at beginning of array.
 // We just need to fill remaining array with 0's.
  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

// Approach #3 (Optimal)
// Time Complexity: O(n)
// Space Complexity: O(1)
function moveZeroesThirdApproach(nums) {
  let lastNonZeroFoundAt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[lastNonZeroFoundAt], nums[i]] = [nums[i], nums[lastNonZeroFoundAt]];
      lastNonZeroFoundAt++
    }
  }

  return nums;
}

module.exports = moveZeroesThirdApproach;
