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
        const isValidStartAsciValue = (startAsciValue >= 65 && startAsciValue <= 90) || (startAsciValue >= 97 && startAsciValue <= 122);
        const isValidEndAsciValue = (endAsciValue >= 65 && endAsciValue <= 90) || (endAsciValue >= 97 && endAsciValue <= 122);

        if (!isValidStartAsciValue) {
            startIndex++
        } else if (!isValidEndAsciValue) {
            endIndex--;
        } else {
            [chars[startIndex], chars[endIndex]] = [chars[endIndex], chars[startIndex]];
            startIndex++;
            endIndex--;
        }

    }
    console.log('***chars', chars)
    return chars.join("")

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

var getCommonValue = function(nums1, nums2) {
    let firstPointer = 0;
    let secondPointer = 0;
    while(firstPointer < nums1.length && secondPointer < nums2.length){
        if(nums1[firstPointer] < nums2[secondPointer]){
            firstPointer++
        }else if(nums1[firstPointer] > nums2[secondPointer]){
            secondPointer++
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
            if (read !== write) { // Check if read and write are different
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
  