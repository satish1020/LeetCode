// https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
function reverseWordsInAStringSimplify(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

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

// O(N/2) time complexity.
const reverseWordsInAStringBest = (s) => {
  // Split the sentence into words
  let words = s.split(" ");

  // Reverse each word
  for (let i = 0; i < words.length; i++) {
    words[i] = reverseString(words[i]);
  }

  // Join the reversed words back into a sentence
  return words.join(" ");
}

function reverseString(word) {
  let chars = word.split("");
  let start = 0;
  let end = word.length - 1;

  while (start < end) {
    // Swap characters
    [chars[start], chars[end]] = [chars[end], chars[start]];

    start++;
    end--;
  }

  return chars.join("");
}
