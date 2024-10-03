const stackInterface = () => {
  let stack = [];

  stack.push(1);
  stack.push(2);
  stack.push(3);

  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());

  stack.push(5);

  if (!stack.length) {
    console.log("Stack is empty!");
  } else {
    console.log(`Stack is not empty, top is: ${stack[stack.length - 1]}`);
  }
};

(function stackInterface() {
  let stack = [];

  stack.push(1);
  stack.push(2);
  stack.push(3);

  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());

  stack.push(5);

  if (!stack.length) {
    console.log("Stack is empty!");
  } else {
    console.log(`Stack is not empty, top is: ${stack[stack.length - 1]}`);
  }
})();

//Example 1: 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. The string is valid if all open brackets are closed by the same type of closing bracket in the correct order, and each closing bracket closes exactly one open bracket.

// For example, s = "({})" and s = "(){}[]" are valid, but s = "(]" and s = "({)}" are not valid.

const isValid = (str) => {
  let stack = [];
  let matching = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (const char of str) {
    if (matching[char]) {
      stack.push(char);
    } else if (matching[stack.pop] !== char) {
      return false;
    }
  }

  return stack.length === 0;
};

// Example 2: 1047. Remove All Adjacent Duplicates In String
// You are given a string s. Continuously remove duplicates (two of the same character beside each other) until you can't anymore. Return the final string after this.
// For example, given s = "abbaca", you can first remove the "bb" to get "aaca". Next, you can remove the "aa" to get "ca". This is the final answer.
const removeDuplicates = function (s) {
  let stack = [];
  if (s.length === 1) {
    return s;
  }

  for (var char of s) {
    if (!stack.length || stack[stack.length - 1] !== char) {
      stack.push(char);
    } else {
      stack.pop();
    }
  }
  return stack;
};

//Example 3: 844. Backspace String Compare

// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// For example, given s = "ab#c" and t = "ad#c", return true. Because of the backspace, the strings are both equal to "ac".
// Just like in the previous approaches, this approach has a time and space complexity linear with the input sizes, because our stack implementations are efficient.
// Try solving these upcoming practice problems on your own using a stack.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let build = (s) => {
    let stack = [];
    for (const c of s) {
      if (c !== "#") {
        stack.push(c);
      } else if (stack.length) {
        stack.pop();
      }
    }

    return stack.join("");
  };

  return build(s) === build(t);
};

//You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform this absolute path into its simplified canonical path.

// The rules of a Unix-style file system are as follows:

// A single period '.' represents the current directory.
// A double period '..' represents the previous/parent directory.
// Multiple consecutive slashes such as '//' and '///' are treated as a single slash '/'.
// Any sequence of periods that does not match the rules above should be treated as a valid directory or file name. For example, '...' and '....' are valid directory or file names.
// The simplified canonical path should follow these rules:

// The path must start with a single slash '/'.
// Directories within the path must be separated by exactly one slash '/'.
// The path must not end with a slash '/', unless it is the root directory.
// The path must not have any single or double periods ('.' and '..') used to denote current or parent directories.
// Return the simplified canonical path.

// Example 1:

// Input: path = "/home/"

// Output: "/home"

// Explanation:

// The trailing slash should be removed.

// Example 2:

// Input: path = "/home//foo/"

// Output: "/home/foo"

// Explanation:

// Multiple consecutive slashes are replaced by a single one.

// Example 3:

// Input: path = "/home/user/Documents/../Pictures"

// Output: "/home/user/Pictures"

// Explanation:

// A double period ".." refers to the directory up a level (the parent directory).

// Example 4:

// Input: path = "/../"

// Output: "/"

// Explanation:

// Going one level up from the root directory is not possible.

// Example 5:

// Input: path = "/.../a/../b/c/../d/./"

// Output: "/.../b/d"

// Explanation:

// "..." is a valid name for a directory in this problem.

// Constraints:

// 1 <= path.length <= 3000
// path consists of English letters, digits, period '.', slash '/' or '_'.
// path is a valid absolute Unix path.

function simplifyPath(path) {
  const parts = path.split("/");
  const stack = [];

  for (const part of parts) {
    if (part === "..") {
      stack.pop();
    } else if (part !== "" && part !== ".") {
      stack.push(part);
    }
  }

  return "/" + stack.join("/");
}

// Given a string s of lower and upper case English letters.

// A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:

// 0 <= i <= s.length - 2
// s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
// To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.

// Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

// Notice that an empty string is also good.

 

// Example 1:

// Input: s = "leEeetcode"
// Output: "leetcode"
// Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".
// Example 2:

// Input: s = "abBAcC"
// Output: ""
// Explanation: We have many possible scenarios, and all lead to the same answer. For example:
// "abBAcC" --> "aAcC" --> "cC" --> ""
// "abBAcC" --> "abBA" --> "aA" --> ""
// Example 3:

// Input: s = "s"
// Output: "s"
 

// Constraints:

// 1 <= s.length <= 100
// s contains only lower and upper case English letters.

var makeGood = function (s) {
  let stack = [];

  for (var char of s) {
    console.log(
      "***",
      stack[stack.length - 1],
      char.toUpperCase(),
      stack.join("")
    );

    if (
      stack.length > 0 &&
      stack[stack.length - 1] != char &&
      stack[stack.length - 1].toLowerCase() === char.toLowerCase()
    ) {
      console.log("**pop", stack[stack.length - 1]);
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
};
