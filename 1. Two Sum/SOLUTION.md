# Solution

## Approach 1: Brute Force

The brute force approach is simple. Loop through each element _x_ and find if there is another value that equals to _target−x_.

``` java
public int[] twoSum(int[] nums, int target) {
    for (int i = 0; i < nums.length; i++) {
        for (int j = i + 1; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                return new int[] { i, j };
            }
        }
    }
    throw new IllegalArgumentException("No two sum solution");
}
```

**Complexity Analysis**

* Time complexity : _O(n^2)_. For each element, we try to find its complement by looping through the rest of array which takes _O(n)_ time. Therefore, the time complexity is _O(n^2)_.

* Space complexity : _O(1)_.

## Approach 2: Two-pass Hash Table

To improve our run time complexity, we need a more efficient way to check if the complement exists in the array. If the complement exists, we need to look up its index. What is the best way to maintain a mapping of each element in the array to its index? A hash table.

We reduce the look up time from _O(n)_ to _O(1)_ by trading space for speed. A hash table is built exactly for this purpose, it supports fast look up in near constant time. I say "near" because if a collision occurred, a look up could degenerate to _O(n)_ time. But look up in hash table should be amortized _O(1)_ time as long as the hash function was chosen carefully.

A simple implementation uses two iterations. In the first iteration, we add each element's value and its index to the table. Then, in the second iteration we check if each element's complement (_target−nums[i]_) exists in the table. Beware that the complement must not be _nums[i]_ itself!

``` java
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        map.put(nums[i], i);
    }
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement) && map.get(complement) != i) {
            return new int[] { i, map.get(complement) };
        }
    }
    throw new IllegalArgumentException("No two sum solution");
}
```

**Complexity Analysis**

* Time complexity : _O(n)_. We traverse the list containing _n_ elements exactly twice. Since the hash table reduces the look up time to _O(1)_, the time complexity is _O(n)_.

* Space complexity : _O(n)_. The extra space required depends on the number of items stored in the hash table, which stores exactly _n_ elements.

## Approach 3: One-pass Hash Table

It turns out we can do it in one-pass. While we iterate and inserting elements into the table, we also look back to check if current element's complement already exists in the table. If it exists, we have found a solution and return immediately.

``` java
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[] { map.get(complement), i };
        }
        map.put(nums[i], i);
    }
    throw new IllegalArgumentException("No two sum solution");
}
```

**Complexity Analysis**

* Time complexity : _O(n)_. We traverse the list containing
_n_ elements only once. Each look up in the table costs only _O(1)_ time.

* Space complexity : _O(n)_. The extra space required depends on the number of items stored in the hash table, which stores at most _n_ elements.

---

Source: https://leetcode.com/problems/two-sum/solution/
