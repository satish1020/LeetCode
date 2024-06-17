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
  