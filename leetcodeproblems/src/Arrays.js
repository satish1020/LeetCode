// Create an array of the squares of each element, and sort them.

var sortedSquares = function (nums) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;
  let result = [];

  for (var i = n - 1; i >= 0; i--) {
    let square = 0;

    if (Math.abs(nums[right]) > Math.abs(nums[left])) {
      square = nums[right] * nums[right];
      right--;
    } else {
      square = nums[left] * nums[left];
      left++;
    }
    result[i] = square;
  }
  return result;
};


// Maximum Average Subarray I Question.
// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000
 

// Constraints:

// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104
var findMaxAverage = function (nums, k) {
  let sum = 0;
  const n = nums.length;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let res = sum;
  for (let i = k; i < n; i++) {
    sum += nums[i] - nums[i - k];
    res = Math.max(res, sum);
  }
  return res/k;
};

