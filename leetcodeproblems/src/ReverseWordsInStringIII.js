// https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
// https://lucid.app/lucidchart/75d44fef-c1e3-4af6-8cc3-4b8fc147dee3/edit?beaconFlowId=5BB6B70C0261A3D0&invitationId=inv_b97ecb4f-b5b4-48e3-aaa2-236da01f677e&page=0_0#

// Question
// 557. Reverse Words in a String III
// Solved
// Easy
// Topics
// Companies
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.
//   To reverse the order of characters in each word within a sentence while preserving whitespace and initial word order, we can follow these steps:
// 1. Split the sentence into words based on spaces.
// 2. For each word, reverse the characters using the two-pointer approach as described previously. This ensures that each word is reversed in \(O(N/2)\) time complexity, where \(N\) is the length of the word.
// 3. Join the reversed words back together with spaces to form the final sentence.

// This code first splits the sentence into words,
//then reverses each word individually using the `reverseString` function,
// which employs the two-pointer technique for in-place character swapping.
// Finally, it joins the reversed words back together.
// This approach ensures that the reversal of characters in each word is done in (O(N/2)) time complexity,
// where \(N\) is the length of the word, and since we process each word
// separately, the overall complexity remains efficient for the task.

// O(N) time complexity.
/**
 * @param {string} s
 * @return {string}
 */
// Approach1
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // let words = s.split(" ");
  // remove any trailing spaces.
  // split s to words at space. 
  let words = trimAndSplitWords(s)
  for (let i = 0; i < words.length; i++) {
      words[i] = reverseWord(words[i])
  }
  return words.join(" ");
};

// trim trailing spaces and spaces in between and return the string
function trimAndSplitWords(s) {
const words = [];
let word = "";
let start = 0;
let end = s.length - 1;

// Manually trim leading spaces
while (start <= end && s[start] === " ") {
  start++;
}

// Manually trim trailing spaces
while (end >= start && s[end] === " ") {
  end--;
}

// Process the string within the trimmed boundaries
for (let i = start; i <= end; i++) {
  if (s[i] === " ") {
    if (word.length > 0) {
      words.push(word);
      word = "";
    }
  } else {
    word += s[i];
  }
}
// this removes any duplicate spaces in the words.
if (word.length > 0) words.push(word);
return words;
}

// reverses words characters
const reverseWord = (word) => {
  // let chars = word.split("");
  // split word into characters
  let chars = [];
  for(let i=0;i< word.length;i++){
      chars.push(word[i]);
  }
  // reverse the characters
  let startIndex = 0;
  let endIndex = word.length - 1;

  while (startIndex < endIndex) {
      [chars[startIndex], chars[endIndex]] = [chars[endIndex], chars[startIndex]];
      startIndex++;
      endIndex--;
  }
  return chars.join("");
}

// Approach 2, prepending and appending string.
// O(N) time complexity
function reverseWordsInAString(s) {
  let result = "";
  let word = "";
  for (let char of s) {
    if (char === " ") {
      result += word + char;
      word = "";
    } else {
      // this is prepending char to word, so that it prints in reverse.
      word = char + word;
    }
  }
  result += word; // Add the last word
  return result;
}

function reverseWordsInAStringUsingJavascriptInBuiltFunctions(str) {
    return str
      .split(" ")
      .map((word) => word.split("").reverse().join(""))
      .join(" ");
  }