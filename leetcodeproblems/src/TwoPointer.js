// Two pointer.js
//palindromeva
// pseudo code
// function fn(arr):
//     left = 0
//     right = arr.length - 1

//     while left < right:
//         Do some logic here depending on the problem
//         Do some more logic here to decide on one of the following:
//             1. left++
//             2. right--
//             3. Both left++ and right--
const checkPalindrome = (str) => {
    let left = 0;
    let right = str.length - 1;
  
    while (right > left) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };
  
  console.log("***checkPalindrome", checkPalindrome("abcdcba"));
  // Given a sorted array of unique integers and a target integer, return true if there exists a pair of numbers that sum to target, false otherwise. This problem is similar to Two Sum. (In Two Sum, the input is not sorted).
  
  const sumToTarget = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
  
    while (right < left) {
      if (arr[right] + arr[left] === target) {
        return true;
      }
      left--;
      right++;
    }
    return false;
  };
  
  console.log("***sum to target", sumToTarget([1, 2, 4, 6, 8, 9, 14, 15], 13));
  // function fn(arr1, arr2):
  // i = j = 0
  // while i < arr1.length AND j < arr2.length:
  //     Do some logic here depending on the problem
  //     Do some more logic here to decide on one of the following:
  //         1. i++
  //         2. j++
  //         3. Both i++ and j++
  
  // // Step 4: make sure both iterables are exhausted
  // // Note that only one of these loops would run
  // while i < arr1.length:
  //     Do some logic here depending on the problem
  //     i++
  
  // while j < arr2.length:
  //     Do some logic here depending on the problem
  //     j++
  
  // Given two sorted integer arrays arr1 and arr2, return a new array that combines both of them and is also sorted
  const mergedSortedArray = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
      } else {
        result.push(arr2[j]);
      }
    }
  
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
    return result;
  };
  
  // Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
  // A subsequence of a string is a sequence of characters that can be obtained by deleting some (or none) of the characters from the original string, while maintaining the relative order of the remaining characters. For example, "ace" is a subsequence of "abcde" while "aec" is not.
  // ace, abcde
  const getSubsequence = (s, t) => {
    let i = 0;
    let j = 0;
    // 3, 5
    while (i < s.length && j < t.length) {
      let result = "";
      if (s[i] === t[j]) {
        result.push(s[i]);
        i++;
      } else {
        j++;
      }
    }
    return i === s.length;
  };
  
  const reverseString = (s) => {
    let left = 0;
    let right = s.length - 1;
  
    while (left < right) {
      const temp = s[left];
      s[left] = s[right];
      left++;
      s[right] = temp;
      right--;
    }
  };
  
  // Questions: You are given a sorted array of integers nums (potentially with duplicates) and an integer target. Your task is to write a function that implements binary search to find the index of the target in the array. If target is not in the array, return -1.

  // Example 1: Input: nums = [-10, -3, 0, 5, 9, 12], target = 9 Output: 4
  
  // Example 2: Input: nums = [-10, -3, 0, 5, 9, 12], target = 2 Output: -1
  
  // Example 3: Input: nums = [-10, -3, 0, 0, 0, 5, 9, 12], target = 0 Output: 4
  
  // Input: nums = [-10, -3, 0, 5, 9, 12], target = 9 Output: 4 Check if the below answer is correct: function binarySearch(nums, target){ let left = 0; let right = nums.length -1; let result = -1;

  function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2) 
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  }

// Assume that an incremental bridge in an integer array nums is a pair (i, j) for which i < j and nums[i] < nums[j]. The length of such a bridge is j - i.
// Given an integer array, return the maximum length of an incremental bridge in the array. If there is no incremental bridge, return 0.
//  
// Example 1:
// Input: nums = [6,0,8,2,1,5]
// Output: 4
// Explanation: The longest incremental bridge is achieved at (i, j) = (1, 5): nums[1] = 0 and nums[5] = 5.

// Example 2:
// Input: nums = [9,8,1,0,1,9,4,0,4,2]
// Output: 7
// Explanation: The longest incremental bridge is achieved at (i, j) = (2, 9): nums[2] = 1 and nums[9] = 2.

function maximumIncrementalBridge(nums) {
  let n = nums.length;
  let maxBridgeLength = 0;
  let left = 0;
  let right = n - 1;

  while (left < right) {
      if (nums[left] < nums[right]) {
          maxBridgeLength = Math.max(maxBridgeLength, right - left);
          left++;
      } else {
          right--;
      }
  }

  return maxBridgeLength;
}