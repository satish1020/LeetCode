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