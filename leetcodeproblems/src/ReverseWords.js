// problem 151 https://leetcode.com/problems/reverse-words-in-a-string/description/

// Overview
// Different interviewers would probably expect different approaches to this problem. The holy war question is whether to use or not use built-in methods. As you may notice, most of the design problems on Leetcode are voted down because of two main reasons:

// There was no approach with built-in methods/data structures in the article.

// One of the approaches in the article did contain built-in methods/data structures.

// Seems like the community has no common opinion yet, and in practice that means an unpredictable interview experience for some sort of problem.

// Here we consider three different solutions for linear time and space complexity:

// Use built-in split and reverse. Benefits: in-place in Python (in-place, but linear space complexity!) and the simplest one to write.

// The most straightforward one. Trim the whitespaces, reverse the whole string, and then reverse each word. Benefits: This could be done in place for the languages with mutable strings.

// Two passes approach with a deque. Move along the string, word by word, and push each new word in front of the deque. Convert the deque back into a string. Benefits: two passes.

// Approach 1: Built-in Split + Reverse
// Time complexity: O(N), where N is the number of characters in the input string.
// Space complexity: O(N), to store the result of split by spaces.

const reverseWordsSimple = function (s) {
  s = s.trim();
  // let words = s.split(/\s+/).reverse();
  // This code splits str at every space character and then uses filter to remove any empty strings ('') that result from consecutive spaces in the original string
  let words = s
    .split(" ")
    .filter((word) => word.length > 0)
    .reverse();

  return words.join(" ");
};

const reverseWords = function (s) {
  let left = 0;
  let right = s.length - 1;
  // indices move left and right so that they are no traling spaces
  while (left <= right && s[left] === ' ') left++;
  while (left <= right && s[right] === ' ') right--;

  // now break the string to array of words using the above new pointers
  let words = [];
  let word = "";

  while (left <= right) {
      if (s[left] !== " ") {
          word += s[left];
      }
      // check word.length greater than 0 to trim double spaces
      if (word.length > 0 && s[left] === " ") {
          words.push(word);
          word = "";
      }
      left++;
  }
  // catch push after while loop so that the last world be pushed.
  words.push(word);
  console.log("***Words", words);
  let reverseString = "";
  // this is the trick we loop back the words array. So that we don't need to reverse again.
  for (var i = words.length - 1; i >= 0; i--) {
      reverseString += words[i];
      // this is the catch, 
      if (i > 0) {
          reverseString += " ";
      }
  }
  return reverseString;
}


// Approach 2: Reverse the Whole String and Then Reverse Each Word
// The implementation of this approach will be different for Java/Python (= immutable strings) and C++ (= mutable strings).

// In the case of immutable strings, one has first to convert the string into a mutable data structure, and hence it makes sense to trim all spaces during that conversion.
// In the case of mutable strings, there is no need to allocate an additional data structure, one could get all jobs done in-place. In such a case it makes sense to reverse words and trim spaces at the same time.

// Translated JavaScript solution

// The trimSpaces function in the provided JavaScript code is designed to remove extra spaces from a string, including leading, trailing, and multiple consecutive spaces within the string, except it keeps a single space between words. Here's a step-by-step explanation:

// Initialize an empty array output: This array will be used to store characters from the input string s after removing unnecessary spaces.

// Loop through each character in the input string s:

// The loop iterates over each character in the string using a for loop, which starts from the first character (i = 0) and continues until the last character (i < s.length).
// Conditionally add characters to output:

// Inside the loop, there's an if condition that checks each character:
// If the current character s[i] is not a space (' '), it is immediately added to the output array. This ensures that all non-space characters are preserved.
// If the current character is a space, it is added to the output array only if it is not the first character (i > 0) and the previous character is not a space (s[i-1] !== ' '). This logic effectively collapses multiple consecutive spaces into a single space and ensures that spaces at the beginning of the string are not added.
// Remove leading and trailing spaces from output:

// After the loop, the function checks if the first (output[0]) and last (output[output.length - 1]) elements of the output array are spaces.
// If the first element is a space, it is removed using output.shift(), which removes the first element from an array.
// If the last element is a space, it is removed using output.pop(), which removes the last element from an array.
// Return the output array:

// Finally, the function returns the output array, which now contains the original string's characters with extra spaces removed.
// This function effectively trims leading and trailing spaces and reduces any internal sequences of multiple spaces to a single space, but it returns an array of characters instead of a string.

// Step1 trim spaces at the beginning and the end and reduce multiple spaces to single one.
// Step2 reverse the whole string.
// Step3 reverse each word.
const reverseWordsWithoutUsingInbuiltFunction = function (s) {
  let arr = trimSpaces(s);

  // reverse the whole string
  reverse(arr, 0, s.length);

  // reverse each word
  reverseEachWord(arr);

  return arr.join("");
};

const reverseWordsTwo = function (s) {
  let words = [];
  let word = "";
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === " " || i === s.length) {
      if (word) {
        words.push(word);
        word = "";
      }
    } else {
      word += s[i];
    }
  }

  console.log("**", s, words, words.join());

  let result = "";
  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];
    if (i > 0) {
      result += " ";
    }
  }

  return result;
};

function trimSpaces(s) {
  let output = [];

  for (let i = 0; i < s.length; i++) {
    // remove multiple spaces to a single space
    if (s[i] !== " " || (i > 0 && s[i - 1] !== " ")) {
      output.push(s[i]);
    }
  }

  //since we now has only one space in the string
  //check if string has any space at the begining and trim them
  if (output[0] === " ") {
    output.splice();
  }
  //check if string has any space at the end and trim them
  if (output[output.length - 1] === " ") {
    output.pop();
  }

  return output;
}

const reverse = (arr, left, right) => {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
};

var reverseEachWord = function (arr) {
  let left = 0;
  let n = arr.length;

  //right <= n is the catch
  for (let right = 0; right <= n; right++) {
    if (right === n || arr[right] === " ") {
      // right-1 is the catch.
      reverse(arr, left, right - 1);
      left = right + 1;
    }
  }
};

var reverseEachWordWithoutCallingReverse = function (arr) {
  let left = 0;
  let n = arr.length;

  //catch is right <= n
  for (let right = 0; right <= n; right++) {
    if (right === n || arr[right] === " ") {
      // catch is left < right -1
      while (left < right - 1) {
        [arr[left], arr[right - 1]] = [arr[right - 1], arr[left]];
        left++;
        right--;
      }
      // catch is this increment happens inside if block;
      left = right + 1;
    }
  }
};

var reverseEachWordDequeue = function (s) {
  let left = 0,
    right = s.length - 1;
  while (left <= right && s.charAt(left) === " ") left++;
  while (left <= right && s.charAt(right) === " ") right--;

  let d = ["world", "hello"];
  let word = "";

  // "   hello world  "

  while (left <= right) {
    if (word.length !== 0 && s.charAt(left) === " ") {
      d.push(word);
      word = "";
    } else if (s.charAt(left) !== " ") {
      word += s.charAt(left);
    }
    left++;
  }

  return d.reverse().join(" ");
};
