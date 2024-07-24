// Given a string s, reverse the string according to the following rules:
// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

// Example 1:

// Input: s = "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

// Constraints:

// 1 <= s.length <= 100
// s consists of characters with ASCII values in the range [33, 122].
// s does not contain '\"' or '\\'.

var reverseOnlyLetters = function (s) {
  let n = s.length;
  let startIndex = 0;
  let endIndex = n;
  // start index, end index start++, end--
  // if both are characters swap

  let chars = [];
  for (var i = 0; i < n; i++) {
    chars.push(s[i]);
  }

  while (startIndex <= endIndex) {
    // swap alphabets if both are true;
    const startAsciValue = s.charCodeAt(startIndex);
    const endAsciValue = s.charCodeAt(endIndex);
    const isValidStartAsciValue =
      (startAsciValue >= 65 && startAsciValue <= 90) ||
      (startAsciValue >= 97 && startAsciValue <= 122);
    const isValidEndAsciValue =
      (endAsciValue >= 65 && endAsciValue <= 90) ||
      (endAsciValue >= 97 && endAsciValue <= 122);

    if (!isValidStartAsciValue) {
      startIndex++;
    } else if (!isValidEndAsciValue) {
      endIndex--;
    } else {
      [chars[startIndex], chars[endIndex]] = [
        chars[endIndex],
        chars[startIndex],
      ];
      startIndex++;
      endIndex--;
    }
  }
  return chars.join("");
};

// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.
// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.
// Example 1:
// Input: nums1 = [1,2,3], nums2 = [2,4]
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.
// Example 2:
// Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
// Output: 2
// Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.
// Constraints:
// 1 <= nums1.length, nums2.length <= 105
// 1 <= nums1[i], nums2[j] <= 109
// Both nums1 and nums2 are sorted in non-decreasing order.

var getCommonValue = function (nums1, nums2) {
  let firstPointer = 0;
  let secondPointer = 0;
  while (firstPointer < nums1.length && secondPointer < nums2.length) {
    if (nums1[firstPointer] < nums2[secondPointer]) {
      firstPointer++;
    } else if (nums1[firstPointer] > nums2[secondPointer]) {
      secondPointer++;
    } else {
      return nums1[firstPointer];
    }
  }
  return -1;
};

// Question
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// Follow up: Could you minimize the total number of operations done?

// Hint 1
// In-place means we should not be allocating any space for extra array. But we are allowed to modify the existing array. However, as a first step, try coming up with a solution that makes use of additional space. For this problem as well, first apply the idea discussed using an additional array and the in-place solution will pop up eventually.
// Hint 2
// A two-pointer approach could be helpful here. The idea would be to have one pointer for iterating the array and another pointer that just works on the non-zero elements of the array.

var moveZeroes = function (nums) {
  let write = 0;
  let n = nums.length;
  // [0,1,0,3,2]
  // output [1,3,2,3,2].
  for (let read = 0; read < n; read++) {
    if (nums[read] !== 0) {
      if (read !== write) {
        // Check if read and write are different
        nums[write] = nums[read];
      }
      write++;
    }
  }

  // after the loop, write is at 3
  // Fill the rest of the array with 0
  // from write 3 to 5 fill with 0x
  // output [1,3,2,0,0]
  while (write < n) {
    nums[write++] = 0;
  }
};

// Question: Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.
// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.
// Example 1:
// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
// Example 2:
// Input: word = "xyxzxe", ch = "z"
// Output: "zxyxxe"
// Explanation: The first and only occurrence of "z" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".
// Example 3:
// Input: word = "abcd", ch = "z"
// Output: "abcd"
// Explanation: "z" does not exist in word.
// You should not do any reverse operation, the resulting string is "abcd".
// Constraints:
// 1 <= word.length <= 250
// word consists of lowercase English letters.
// ch is a lowercase English letter.
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let chFound = false;
  let chIndex = -1;
  let result = "";

  // Step 2: Find `ch` position
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch && !chFound) {
      chIndex = i;
      chFound = true;
      break; // Exit loop after finding the first occurrence of `ch`
    }
  }

  // If `ch` is not found, return the original word
  if (!chFound) return word;

  // Step 3: Reverse Prefix
  for (let i = chIndex; i >= 0; i--) {
    result += word[i];
  }

  // Step 4: Append Remaining
  for (let i = chIndex + 1; i < word.length; i++) {
    result += word[i];
  }

  // Step 5: Return Result
  return result;
};

//   Given an array of positive integers nums and a positive integer target, return the minimal length of a
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

// Constraints:

// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104
var minSubArrayLen = function (target, nums) {
  // Initialize variables
  let curr = 0; // Current sum of the subarray
  let left = 0; // Left pointer for the subarray
  let ans = Infinity; // Store the result, initialized to Infinity to handle case where no subarray is found

  // Iterate through the array with the right pointer
  for (let right = 0; right < nums.length; right++) {
    curr += nums[right]; // Add the current element to the current sum

    // Try to shrink the window from the left if the current sum exceeds the target
    while (curr >= target) {
      ans = Math.min(ans, right - left + 1); // Update the answer if a smaller subarray is found
      curr -= nums[left]; // Subtract the element at the left pointer from the current sum
      left++; // Move the left pointer to the right
    }
  }

  // If ans is Infinity, no such subarray was found. Return 0 in this case.
  return ans === Infinity ? 0 : ans;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let left = 0;
  let ans = 0;
  let vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let right = 0; right < s.length; s++) {
    if (vowels.includes(s[right])) {
      vowelsCount++;
    }
    let windowSize = right - left + 1;
    if (windowSize > k) {
      if (vowels.includes(s[left])) {
        vowelsCount--;
      }
      left++;
    }
    ans = Math.max(ans, vowelsCount);
  }
  return ans;
};

/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */

// Code

// Testcase
// Testcase
// Test Result
// 1208. Get Equal Substrings Within Budget
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given two strings s and t of the same length and an integer maxCost.

// You want to change s to t. Changing the ith character of s to ith character of t costs |s[i] - t[i]| (i.e., the absolute difference between the ASCII values of the characters).

// Return the maximum length of a substring of s that can be changed to be the same as the corresponding substring of t with a cost less than or equal to maxCost. If there is no substring from s that can be changed to its corresponding substring from t, return 0.

// Example 1:

// Input: s = "abcd", t = "bcdf", maxCost = 3
// Output: 3
// Explanation: "abc" of s can change to "bcd".
// That costs 3, so the maximum length is 3.
// Example 2:

// Input: s = "abcd", t = "cdef", maxCost = 3
// Output: 1
// Explanation: Each character in s costs 2 to change to character in t,  so the maximum length is 1.
// Example 3:

// Input: s = "abcd", t = "acde", maxCost = 0
// Output: 1
// Explanation: You cannot make any change, so the maximum length is 1.

// Constraints:

// 1 <= s.length <= 105
// t.length == s.length
// 0 <= maxCost <= 106
// s and t consist of only lowercase English letters.
var equalSubstringWithBudget = function (s, t, maxCost) {
  let left = 0;
  let ans = 0;
  let currentCost = 0;

  for (let right = 0; right < s.length; right++) {
    let cost = Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
    currentCost += cost;

    while (currentCost > maxCost) {
      currentCost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let n = nums.length;
  let prefixSum = new Array(n);
  prefixSum[0] = nums[0];

  // Calculate prefix sum array
  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
  }

  for (let i = 0; i < n; i++) {
    let leftSum = i === 0 ? 0 : prefixSum[i - 1];
    let rightSum = prefixSum[n - 1] - prefixSum[i];
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
};


/**
 * @param {number[]} nums
 * Range Sum Query - Immutable
 * 303. Range Sum Query - Immutable
Solved
Easy
Topics
Companies
Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 

Example 1:

Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
 

Constraints:

1 <= nums.length <= 104
-105 <= nums[i] <= 105
0 <= left <= right < nums.length
At most 104 calls will be made to sumRange.
 */

var NumArray = function(nums) {
  var prefixSums = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    prefixSums[i + 1] = prefixSums[i] + nums[i];
  }

  return {
    sumRange: function(left, right) {
      return prefixSums[right + 1] - prefixSums[left];
    }
  };
};
// class
// // Example usage:
// const numArray = new NumArray([3, 1, 2, 10, 1]);