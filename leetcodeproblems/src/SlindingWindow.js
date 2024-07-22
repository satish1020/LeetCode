//Pseudo code
// function(arr){
//   let left =0;
//   let ans = 0;

//   for(int i=0;i< arr.length;i++){
//     // add some logic to add element at arr[right] to window.

//     while(invalid){
//       // add some logic to remove element from a arr[left] to window.
//     }

//   }
// }

// Example 1: Given an array of positive integers nums and an integer k, find the length of the longest subarray whose sum is less than or equal to k. This is the problem we have been talking about above. We will now formally solve it.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findSubArrayLengthWhoseSumLessThank = function (nums, k) {
  // curr is the current sum of the window
  let left = 0,
    curr = 0,
    ans = 0;
  for (let right = 0; right < nums.length; right++) {
    curr += nums[right];
    while (curr > k) {
      curr -= nums[left];
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};

// Largest substring with at most 1 zero.
//You are given a binary string s (a string containing only "0" and "1"). You may choose up to one "0" and flip it to a "1". What is the length of the longest substring achievable that contains only "1"?
// s = "1101100111"  right increments till 11011, once an another zero is detected,curr becomes2.
// we increase the left pointer by 1 which is 1;
// from beginning until an another zero is detected and we remove the zero.
// For example 110, left pointer when it reached 2 it will decrement curr from 2 to 1.
// now we have left pointer at 3 and right pointer at 6 which is 0. now if we increase again

/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var findLengthOfBinaryStringWithJustOneZeroAllowed = function (s) {
  // curr is the current number of zeros in the window
  let left = 0,
    curr = 0,
    ans = 0;
  for (let right = 0; right < s.length; right++) {
    if (s[right] === "0") {
      curr++;
    }

    while (curr > 1) {
      if (s[left] === "0") {
        curr -= 1;
      }
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};

// Subarray Product Less Than K.
// nums = [10, 5, 2, 6], k = 100
//   Consider nums = [10, 5, 2, 6] and k = 100.

// Start with ans = 0, left = 0, curr = 1.
// For right = 0 (nums[0] = 10), curr = 10. Subarrays: [10]. ans = 1.
// For right = 1 (nums[1] = 5), curr = 50. Subarrays: [10, 5], [5]. ans = 1 + 2 = 3.
// For right = 2 (nums[2] = 2), curr = 100. Since curr >= k, adjust left. After adjustment, curr = 10. Subarrays: [5, 2], [2]. ans = 3 + 2 = 5.
// For right = 3 (nums[3] = 6), curr = 60. Subarrays: [5, 2, 6], [2, 6], [6]. ans = 5 + 3 = 8.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) {
    return 0;
  }

  let ans = 0,
    left = 0,
    curr = 1;

  for (let right = 0; right < nums.length; right++) {
    curr *= nums[right];
    while (curr >= k) {
      curr /= nums[left];
      left++;
    }

    ans += right - left + 1;
  }

  return ans;
};
//Example 4: Given an integer array nums and an integer k, find the sum of the subarray with the largest sum whose length is k.

const findBestSubArray = (arr, k) => {
  let curr = 0;
  let ans = 0;
  //  [0, 1, 2, 4,5, 6] k =4
  // 0 to 3 index, 0,1,2,4 sum is 7.
  for (let i = 0; i < k; i++) {
    curr += arr[i];
  }
  ans = curr;
  // k to length of array loop 4 to 5 index [0, 1, 2, 4,5, 6] k =4  next 1,2,4,5  7 + 5 - 0 = 12,
  // next 2, 4,5, 6 then 12 + 6 - 1 = 17
  for (let i = k; i < arr.length; i++) {
    curr = curr + arr[i] - arr[i - k];
    ans = Math.max(ans, curr);
  }
};

const findBestArrayNew = (arr, k) => {
  let curr = 0;
  let ans = 0;
  //  [0, 1, 2, 4,5, 6] k =4
  for (let i = 0; i < k; i++) {
    curr += arr[k];
    ans = curr;
  }

  for (let i = k; i < arr.length; i++) {
    curr += arr[i] - arr[i - k];
    ans = Math.max(ans, curr);
  }
  return ans;
};
