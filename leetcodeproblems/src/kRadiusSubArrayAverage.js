// K Radius Subarray Averages

// Question
// You are given a 0-indexed array nums of n integers, and an integer k.
// The k-radius average for a subarray of nums centered at some index i with the radius k is the average of all elements in nums between the indices i - k and i + k (inclusive). If there are less than k elements before or after the index i, then the k-radius average is -1.
// Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i.
// The average of x elements is the sum of the x elements divided by x, using integer division. The integer division truncates toward zero, which means losing its fractional part.
// For example, the average of four elements 2, 3, 1, and 5 is (2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75, which truncates to 2.
// Input: nums = [7,4,3,9,1,8,5,2,6], k = 3
// Output: [-1,-1,-1,5,4,4,-1,-1,-1]
// Explanation:
// - avg[0], avg[1], and avg[2] are -1 because there are less than k elements before each index.
// - The sum of the subarray centered at index 3 with radius 3 is: 7 + 4 + 3 + 9 + 1 + 8 + 5 = 37.
//   Using integer division, avg[3] = 37 / 7 = 5.
// - For the subarray centered at index 4, avg[4] = (4 + 3 + 9 + 1 + 8 + 5 + 2) / 7 = 4.
// - For the subarray centered at index 5, avg[5] = (3 + 9 + 1 + 8 + 5 + 2 + 6) / 7 = 4.
// - avg[6], avg[7], and avg[8] are -1 because there are less than k elements after each index.
/**Example 2:

Input: nums = [100000], k = 0
Output: [100000]
Explanation:
- The sum of the subarray centered at index 0 with radius 0 is: 100000.
  avg[0] = 100000 / 1 = 100000.
Example 3:

Input: nums = [8], k = 100000
Output: [-1]
Explanation: 
- avg[0] is -1 because there are less than k elements before and after index 0.
 

Constraints:

n == nums.length
1 <= n <= 105
0 <= nums[i], k <= 105
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Solution
// Overview
// In this problem, we have to return the k-radius average for each given element of the nums array.
// If any element doesn't have k-elements in its left and right, then its average is considered to be -1, otherwise, the average will be the sum of all these (2 * k + 1) elements divided by the number of elements.
let k = 2;
const array = [2, 1, 3, 4, 5, 8, 1];
const subArrayAtIndex1 = [2, 1, 3, 4];
const subArrayAtIndex2 = [2, 1, 3, 4, 5];

// We can iterate on each element of the nums array and based on its index i we can check if it has k elements in its left and right, if it doesn't have then we know the average for the current element is -1, but if it has then we need to sum all the elements from index i - k to index i + k and divide this sum by windowSize, calculated by 2 * k + 1.

// index 0,1 doesn't have 2 elements in its left  so the average will be -1.
// index 5,6 doesn't have 2 elements in its right so the average will be -1.
// So for these 4 indexes average will be -1.

// Now an easy way will be to iterate over all elements from index i - k to i + k, sum all the elements, and divide this sum by windowSize. But repeating this step (i.e., iterating over the sub-array) for each index will result in Time Limit Exceeded.

// Instead, we can use the help of a prefix sum array to get the sum of elements of any sub-array in constant time instead of linear time.

// If you are wondering how does prefix sum array work?

// Given an array nums of n elements, the prefix sum array prefix is another array of n + 1 elements such that prefix[i + 1] is the sum of the first i elements of the array nums. In other words, prefix[i + 1] = nums[0] + nums[1] + ... + nums[i - 1] + nums[i].

// The prefix sum array can be used to answer range sum queries (i.e., queries that ask for the sum of a contiguous sub-array) in constant time, as the sum of the elements from indices x to y can be calculated as prefix[y + 1] - prefix[x].

const nums = [2, 1, 3, 4, 5, 8, 1];
prefix = [0, 2, 3, 6, 10, 15, 23, 24];
// the k-radius average for element at index 2 is sum of subarray = prefix[rightBound+1] - prefix[leftBound]
// right bound = 2+2 = 4, left bound = 2-2 = 0
// sum of subarray = prefix[5] - prefix[0] = 21 - 6 = 15
// average = 15 /5 = 3;

// Algorithm
// Initialize variables:
// n, to store the number of elements in the nums array.
// averages, an array of size n initially initialized with -1 to store the k-radius average of each index of the nums array.
// prefix, an array of size n + 1 to store the prefix sum of the nums array.
// If k is 0, which means we have to find the average of only one number at each index, so we return the nums array, or if windowSize, 2 * k + 1, is greater than n, which means we have to find the average of more than n numbers which is not possible, thus we return the averages array.
// We iterate on the nums array and generate its prefix array, where prefix[i + 1] is prefix[i] + nums[i].
// We iterate on those indices which will have at least k elements on their left and right sides, calculate the sum of the required sub-array using prefix array prefix[rightBound + 1] - prefix[leftBound], and store the average by dividing the sum by windowSize in averages array.
// In the end we return averages array.

var getAveragesByPrefixSum = function (nums, k) {
  if (k === 0) {
    return nums;
  }

  const windowSize = 2 * k + 1;
  const n = nums.length;
  const averages = new Array(n).fill(-1);

  if (windowSize > n) {
    return averages;
  }

  let prefix = new Array(n);
  prefix[0] = nums[0];
  for (let i = 1; i < n; ++i) {
    prefix[i] = nums[i] + prefix[i - 1];
  }

  for (let i = k; i < n - k; ++i) {
    const leftBound = i - k,
      rightBound = i + k;
    let subArraySum;
    if (leftBound === 0) {
      subArraySum = prefix[rightBound];
    } else {
      subArraySum = prefix[rightBound] - prefix[leftBound - 1];
    }
    const average = Math.floor(subArraySum / windowSize);
    averages[i] = average;
  }

  return averages;
};

var getAveragesByPrefixSumApproach1 = function (nums, k) {
  if (k === 0) {
    return nums;
  }

  const windowSize = 2 * k + 1;
  const n = nums.length;
  const averages = new Array(n).fill(-1);

  if (windowSize > n) {
    return averages;
  }

  let prefix = [nums[0]];
  for (let i = 1; i < n; ++i) {
    prefix[i] = nums[i] + prefix[i - 1];
  }

  for (let i = k; i < n - k; ++i) {
    const leftBound = i - k,
      rightBound = i + k;
    let subArraySum;
    if (leftBound === 0) {
      subArraySum = prefix[rightBound];
    } else {
      subArraySum = prefix[rightBound] - prefix[leftBound - 1];
    }
    const average = Math.floor(subArraySum / windowSize);
    averages[i] = average;
  }

  return averages;
};

var getAveragesByPrefixSumAlternative = function (nums, k) {
  // When a single element is considered then its average will be the number itself only.
  if (k === 0) {
    return nums;
  }

  const windowSize = 2 * k + 1;
  const n = nums.length;
  const averages = new Array(n).fill(-1);

  // Any index will not have 'k' elements in its left and right.
  if (windowSize > n) {
    return averages;
  }

  // Generate 'prefix' array for 'nums'.
  // 'prefix[i + 1]' will be sum of all elements of 'nums' from index '0' to 'i'.
  // let prefix = [nums[0]];
  // prefix sum to start with 0;
  // technique when to do prefix[rightBound] - prefix[leftBound - 1] to find the sum of subarray from leftBound to rightBound.
  // By adding a 0 at the beginning of the prefix sum array, we can always subtract prefix[leftBound - 1], even when leftBound is 0. This simplifies the code and avoids the need for a conditional statement.
  let prefix = [0].concat(nums);
  for (let i = 1; i <= n; ++i) {
    prefix[i] = nums[i - 1] + prefix[i - 1];
  }

  // We iterate only on those indices which have at least 'k' elements in their left and right.
  // i.e. indices from 'k' to 'n - k'
  for (let i = k; i < n - k; ++i) {
    const leftBound = i - k,
      rightBound = i + k;
    const subArraySum = prefix[rightBound + 1] - prefix[leftBound];
    const average = Math.floor(subArraySum / windowSize);
    averages[i] = average;
  }

  return averages;
};

// Here, n is the number of elements in the nums array.
// Time complexity: O(n)
// We generate the prefix array by iterating on the nums array once, thus it will take O(n) time.
// Then, we fill the averages array by again iterating on the nums array, where finding the average of each index is a constant time operation, thus, it will take us O(n)O(n)O(n) time.
// So, overall we take O(n) time.
// Space complexity: O(n)
// The output array averages is not considered as additional space usage.
// But, we have used another additional array prefix of size n + 1, thus, we use O(n) additional space in this approach.

// Input: nums = [7,4,3,9,1,8,5,2,6], k = 3
// Output: [-1,-1,-1,5,4,4,-1,-1,-1]
// window size = 2 * 3 + 1 = 7
// window sum = 7 + 4 + 3 + 9 + 1 + 8 + 5 = 37
// average = 37 / 7 = 5
// next window sum starting from index 7 to length 9 is 37 - nums[7 - 7] + nums[7] = 37 - 7 + 2 = 32
// average = 32 / 7 = 4

// Approach 2
// Intuition
// We know that we always have to keep a window of size 2 * k + 1 (centered around index x) to find its k-radius average.
// Let's assume we already know the sum of the 2 * k + 1 elements centered at index x, let this sum be S x
// When we move to the next index x + 1 we shift our window to the right by one element, thus from the sum of elements of the previous window range (Sx).
// we subtract the left-most element of the previous window and add the next element on the right to get the new window sum in constant time.
// Sx+1 = Sx +(next element on the right)−(left most window element)
// Thus we can eliminate the use of the prefix array to generate the sum of all elements of all windows of size 2 * k + 1.
// [2,1,3,4,5,8,1] When we move to index 3, we discard element at index 0 and add element at index 5 in old window.
// we know the sum of index at 2 is 15.The sum of elements of new window at index 2 is 15.
// The sum of elements of new window: old window sum - discarded element that is nums[0]i.e 2 + inserted element which is nums[5]i.e 8 = 15 - 2 + 1 = 14
// Note: If you aren't familiar with the sliding window concept we recommend you first solve this problem 1456. Maximum Number of Vowels in a Substring of Given Length.

// Algorithm
// Initialize variables:
// n, to store the number of elements in the nums array.
// averages, an array of size n initially initialized with -1 to store the k-radius average of each index of the nums array.
// windowSum, to store the sum of the current window.
// If k is 0, which means we have to find the average of only one number at each index, so we return the nums array, or if windowSize, 2 * k + 1, is greater than n, which means we have to find the average of more than n numbers which is not possible, thus we return the averages array.
// We iterate on the first windowSize elements to get the sum of the first window, calculate the first windowSum, and store the average in the averages array.
// Now we will shift the window by one element at each iteration to find the averages of all remaining windows.
// For each window, variable i will point to the rightmost, i - windowSize + 1 will point to the leftmost, and i - k will point to the center element.
// We calculate the sum of the current window using the previous window's sum as discussed, windowSum - nums[i - windowSize] + num[i], and store the average in the averages array.
// In the end we return the averages array.

// Complexity Analysis
// Here, n is the number of elements in the nums array.

// Time complexity: O(n)

// Initializing the averages array with -1 will take O(n) time.
// Then we iterate over the nums array linearly to find the k-radius average of each index, which will also take O(n) time.
// Thus, overall we use O(n) time.
// Space complexity: O(1)

// The output array averages is not considered as additional space usage.

var getAverages = function (nums, k) {
  // When a single element is considered then its average will be the number itself only.
  if (k === 0) {
    return nums;
  }

  const windowSize = 2 * k + 1;
  const n = nums.length;
  const averages = new Array(n).fill(-1);

  // Any index will not have 'k' elements in its left and right.
  if (windowSize > n) {
    return averages;
  }

  // First get the sum of first window of the 'nums' array.
  let windowSum = 0;
  for (let i = 0; i < windowSize; ++i) {
    windowSum += nums[i];
  }
  averages[k] = Math.floor(windowSum / windowSize);

  // Iterate on rest indices which have at least 'k' elements
  // on its left and right sides.
  for (let i = windowSize; i < n; ++i) {
    // We remove the discarded element and add the new element to get current window sum.
    // 'i' is the index of new inserted element, and
    // 'i - (window size)' is the index of the last removed element.
    windowSum = windowSum - nums[i - windowSize] + nums[i];
    averages[i - k] = Math.floor(windowSum / windowSize);
  }

  return averages;
};
