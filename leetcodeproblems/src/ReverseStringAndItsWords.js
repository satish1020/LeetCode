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
  if (word.length > 0) words.push(word);
  return words;
}

function reverseWordInPlace(word) {
  let reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
}

function reverseArrayInPlace(words) {
  let start = 0;
  let end = words.length - 1;
  while (start < end) {
    [words[start], words[end]] = [words[end], words[start]];
    start++;
    end--;
  }
}

function joinWordsWithSpace(words) {
  return words.join(" ");
}

// actual function
function reverseWordsAndCharacters(s) {
  let words = trimAndSplitWords(s);

  for (let i = 0; i < words.length; i++) {
    words[i] = reverseWordInPlace(words[i]);
  }

  reverseArrayInPlace(words);

  return joinWordsWithSpace(words);
}

// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.
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
