// Hashing
// Report Issue
// Before we start this chapter, let's quickly talk about data structures.

// In the most basic terms, a data structure is a format for organizing data in an efficient way. In practical terms, we can split data structures into two things: the interface and the implementation.

// The interface is like a contract that specifies how we can interact with the data structure - what operations we can perform on it, what inputs it expects, and what outputs we can expect.

// For example, consider a dynamic array. The interface would include operations like appending, insertion, removal, updating, and more. These operations are well-defined and have specific rules that we must follow when we use them. If we want to append an element, we use the built-in method like .append() or .push() while passing in the element we want to add as an argument. Typically this operation doesn't return anything.

// Now, the implementation is the code that actually makes the data structure work. This is where the details of how the data is stored and how the operations are performed come into play. For example, the implementation of a dynamic array might involve allocating memory for the list, tracking the size, and rearranging the elements when an operation like remove is called.

// For many data structures, the implementation can be quite complex, involving intricate algorithms and data manipulation. However we don't need to worry about those details - we only need to understand the interface and how to use it properly.

// In this article and a few others in the course, we will talk about the underlying implementation details behind a data structure. While it does help to have a basic understanding, don't worry too much about memorizing these details. We have included them for completeness.

// The more important thing is to understand the interface. All major data structures have built-in implementations in all major programming languages. In an interview, it is expected that you know how to use the built-in data structures, but you wouldn't be asked to implement them yourself.

// In this chapter, we are going to talk about hash maps and sets, which are implemented using hashing(https://en.wikipedia.org/wiki/Hash_function).

// A hash function is a function that takes an input and deterministically converts it to an integer that is less than a fixed size set by the programmer. Inputs are called keys and the same input will always be converted to the same integer. Here's an example hash algorithm for a string containing letters of the English alphabet:

// Declare an integer total.
// Iterate over the string. For each character, convert it to its position in the alphabet. For example, a -> 1, c -> 3, z -> 26.
// Take that value, and multiply it by the current position in the string (index + 1). Add this to total. For example, given the string "abc", the b is at position 2 in the alphabet and position 2 in the string, so it would contribute 2 * 2 = 4 towards total.
// After going through every character, total is the converted value.
// This algorithm isn't actually a good hash function but is just an example of how one could convert strings into integers. You may be wondering: don't we need to limit total to a fixed size? Correct! Right now, this algorithm is wrong. Let's say the limit we set was x. Then change step 4 to:

// After going through every character, total % x is the converted value.
// % is the modulo operation(https://en.wikipedia.org/wiki/Modulo_operation), and makes sure the final converted value will be in the range [0, x - 1].

// What is the point of a hash function?
// We know that arrays have
// 𝑂
// (
// 1
// )
// O(1) random access. Given an arbitrary index, we can access and update its value in the array in constant time. The main constraint with arrays is that they are a fixed size, and the indices have to be integers. Because hash functions can convert any input into an integer, we can effectively remove the constraint of indices needing to be integers. When a hash function is combined with an array, it creates a hash map, also known as a hash table or dictionary.

// With arrays, we map indices to values. With hash maps, we map keys to values, and a key can be almost anything. Typically, the only constraint on a hash map's key is that it has to be immutable (this is language dependent but generally a good rule of thumb). Values can be anything.

// A hash map is probably the most important concept in all of algorithm interviewing. It is extremely powerful and allows you to reduce the time complexity of an algorithm by a factor of
// 𝑂
// (
// 𝑛
// )
// O(n) for a huge amount of problems. Every major language has a built-in implementation of a hash map(https://en.wikipedia.org/wiki/Hash_table#Implementations). For example, in Python they're called dictionaries and declaring one is as simple as dic = {}. If you could only take one thing from this course, it should be to master the hash map interface for the programming language you use.

// To summarize, a hash map is an unordered data structure that stores key-value pairs. A hash map can add and remove elements in
// 𝑂
// (
// 1
// )
// O(1), as well as update values associated with a key and check if a key exists, also in
// 𝑂
// (
// 1
// )
// O(1). You can iterate over both the keys and values of a hash map, but the iteration won't necessarily follow any order (there are many implementations and this is language dependent for the built-in types).

// An ordered data structure is one where the insertion order is "remembered". An unordered data structure is one where the insertion order is not relevant.

// Comparison with arrays
// In terms of time complexity, hash maps blow arrays out of the water. The following operations are all
// 𝑂
// (
// 1
// )
// O(1) for a hash map:

// Add an element and associate it with a value
// Delete an element if it exists
// Check if an element exists
// A hash map also has many of the same useful properties as an array with the same time complexity:

// Find length/number of elements
// Updating values
// Iterate over elements
// Hash maps are also just easier/cleaner to work with. Even if your keys are integers and you could get away with using an array, if you don't know what the max size of your key is, then you don't know how large you should size your array. With hash maps, you don't need to worry about that, since the key will be converted to a new integer within the size limit anyways.

// However, from a practical perspective, there are some disadvantages to using hash maps, and it's important to know them as it is common in interviews to talk about tradeoffs.

// The biggest disadvantage of hash maps is that for smaller input sizes, they can be slower due to overhead. Because big O ignores constants, the
// 𝑂
// (
// 1
// )
// O(1) time complexity can sometimes be deceiving - it's usually something more like
// 𝑂
// (
// 10
// )
// O(10) because every key needs to go through the hash function, and there can also be collisions, which we will talk about in the next section.

// Hash tables can also take up more space. Dynamic arrays are actually fixed-size arrays that resize themselves when they go beyond their capacity. Hash tables are also implemented using a fixed size array - remember that the size is a limit set by the programmer. The problem is, resizing a hash table is much more expensive because every existing key needs to be re-hashed, and also a hash table may use an array that is significantly larger than the number of elements stored, resulting in a huge waste of space. Let's say you chose your limit as 10,000 items, but you only end up storing 10. Okay, you could argue that 10,000 is too large, but then what if your next test case ends up needing to store 100,000 elements? The point is, when you don't know how many elements you need to store, arrays are more flexible with resizing and not wasting space.

// Note: remember that time complexity functions only involve the variables you define. When we say that hash map operations are
// 𝑂
// (
// 1
// )
// O(1), the variable we are concerned with is usually
// 𝑛
// n, which is the size of the hash map. However, this may be misleading. For example, hashing a string requires
// 𝑂
// (
// 𝑚
// )
// O(m) time, where
// 𝑚
// m is the length of the string. The constant time operations are only constant relative to the size of the map.

// Collisions
// When different keys convert to the same integer, it is called a collision. Without handling collisions, older keys will get overridden and data will be lost. There are multiple ways(https://en.wikipedia.org/wiki/Hash_table#Collision_resolution) to handle collisions, but here we'll talk about a common one called chaining.

// If you don't know what a linked list is, don't worry, they are the focus of the next chapter. For now, you can imagine them as a data structure similar to an array.

// When using chaining, we store linked lists inside the hash map's array instead of the elements themselves. The linked list nodes store both the key and the value. If there are collisions, the collided key-value pairs are linked together in a linked list. Then, when trying to access one of these key-value pairs, we traverse through the linked list until the key matches.

// If this part is confusing to you, don't worry. Every major programming language's hash map implementation will handle collisions automatically. The only reason to understand the inner workings of a hash map is that an interviewer may ask you trivia or want to discuss tradeoffs of using a hash map, but this is rare.

// Collisions are problematic because handling them is necessary, and handling them takes time, slowing down the overall speed and efficiency of the hash map. How can we design our hash map to minimize collisions? The most important thing is that the size of your hash table's array and modulus is a prime number(https://stackoverflow.com/questions/1145217/why-should-hash-functions-use-a-prime-number-modulus). Prime numbers near significant magnitudes that are common to use are:

// 10,007
// 1,000,003
// 1,000,000,007
// Sets
// A set is another data structure that is very similar to a hash table. It uses the same mechanism for hashing keys into integers. The difference between a set and hash table is that sets do not map their keys to anything. Sets are more convenient to use when you only care about checking if elements exist. You can add, remove, and check if an element exists in a set all in
// o(1)
// An important thing to note about sets is that they don't track frequency. If you have a set and add the same element 100 times, the first operation adds it and the next 99 do nothing.

// Arrays as keys?
// We said that being immutable is usually a requirement for being a hash map key. Arrays are mutable, so how do we store an ordered collection of elements as a key? Depending on the language you're using, there are several ways to convert an array into a unique immutable key. In Python, tuples are immutable, so it's as easy as doing tuple(arr). Another trick is to convert the array into a string, delimited by some character that is guaranteed to not show up in any element. For example, use a comma to separate integers. [1, 51, 163] --> "1,51,163".

// In some languages, there may be data structures that allow you to associate mutable data structures to values. For example, in C++ there is std::map. Note that these are not hash maps, but they can be used to solve similar problems.

// Interface guide
// Here's a quick runthrough of the interface for a hash map in major languages:

// Try playing around with hash map operations in the interactive playground (you can edit the code and run it to see the console output).

// Interface guide
// Here's a quick runthrough of the interface for a hash map in major languages
// javascript
// Declaration: use the Map object
let hashMap = new Map();

// If you want to initialize it with some key value pairs, use the following syntax:
let hashMap = new Map([
  [1, 2],
  [5, 3],
  [7, 2],
]);

// Checking if a key exists: use .has()
hashMap.has(1); // true
hashMap.has(9); // false

// Accessing a value given a key: use .get()
hashMap.get(5); // 3

// Adding or updating a key: use .set()
// If the key already exists, the value will be updated
hashMap.set(5, 6);

// If the key doesn't exist yet, the key value pair will be inserted
hashMap.set(9, 15);

// Deleting a key: use .delete()
hashMap.delete(9);

// Get size
hashMap.size; // 3

// Iterate over the key value pairs: use the following code
for (const [key, value] of hashMap) {
  console.log(key + " " + value);
}

// Try playing around with hash map operations in the interactive playground (you can edit the code and run it to see the console output).
(function main() {
  let myHashMap = new Map();

  myHashMap.set(4, 83);
  console.log(myHashMap.get(4)); // Prints 83

  console.log(myHashMap.has(4)); // Prints true
  console.log(myHashMap.has(854)); // Prints false

  myHashMap.set(8, 327);
  myHashMap.set(45, 82523);

  for (const [key, val] of myHashMap) {
    console.log(`${key}: ${val}`);
  }
})();

// To declare a set in JavaScript, you can use the Set constructor like this:

let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);
// You can also initialize a set with values by passing an iterable object (like an array) to the Set constructor:
let mySetWithValues = new Set([1, 2, 3, 4, 5]);
mySet.delete(3);
// Sets in JavaScript provide several out-of-the-box features that make them useful for storing unique values of any type, whether primitive values or object references. Here are the key features:

// Uniqueness: Automatically ensures all elements in the set are unique.
// Addition: .add(value) method to add a new element to the set.
// Deletion: .delete(value) method to remove an element from the set.
// Existence Check: .has(value) method to check if an element exists in the set.
// Size Property: .size property to get the number of elements in the set.
// Clearing: .clear() method to remove all elements from the set.
// Iteration: Sets are iterable, allowing the use of the for...of loop, .forEach() method, and spread operator ... to iterate over elements.
// These features make sets a powerful data structure for scenarios where the uniqueness of elements is a key requirement.

// Checking for existence
// Example 1: 1. Two Sum
// One of the most common applications of a hash table or set is determining if an element exists in
// O(1). Since an array needs
// O(n) to do this, using a hash map or set can improve the time complexity of an algorithm greatly, usually from
// O(n2)
// O(n 2) to
// O(n)
// O(n). Let's look at some example problems.

// Example 1: 1. Two Sum
// Given an array of integers nums and an integer target, return indices of two numbers such that they add up to target. You cannot use the same index twice.

// The brute force solution would be to use a nested for loop to iterate over every pair of indices and check if the sum is equal to target. This will result in a time complexity of
// O(n2). In the brute force solution, the first for loop focuses on a number num and does a second for loop which looks for target - num in the array. With an array, looking for target - num is
// O(n), but with a hash map, it is O(1).

// We can build a hash map as we iterate along the array, mapping each value to it's index. At each index i, where num = nums[i], we can check our hash map for target - num. Adding key-value pairs and checking for target - num are all
// O(1), so our time complexity will improve to
// O(n).

let twoSum = (nums, target) => {
  let hashMap = new Map();

  for (var i = 0; i < nums; i++) {
    const complement = target - nums[i];
    if (hashMap.has(complement)) {
      return [i, hashMap.get(complement)];
    }
    hashMap.set(nums[i], i);
  }

  return [-1, -1];
};

//If the question wanted us to return a boolean indicating if a pair exists or to return the numbers themselves, then we could just use a set. However, since it wants the indices of the numbers, we need to use a hash map to "remember" what indices the numbers are at.

// Example 2: 2351. First Letter to Appear Twice

// Given a string s, return the first character to appear twice. It is guaranteed that the input will have a duplicate character.

// The brute force solution would be to iterate along the string, and for each character c, iterate again up to c to see if there is any match.
/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    for (let j = 0; j < i; j++) {
      if (s[j] == c) {
        return c;
      }
    }
  }

  return "";
};

// This is O(n2)due to the nested loop. The second loop is checking for the existence of c, which can be done in O(1) using a set.

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let seen = new Set();
    for (const c of s) {
        if (seen.has(c)) {
            return c;
        }
        
        seen.add(c);
    }
    
    return " ";
};
// This improves our time complexity to O(n) as each for loop iteration now runs in constant time.

// The space complexity is a more interesting topic of discussion. Many people will argue that the space complexity is 
// O(1) because the input can only have characters from the English alphabet, which is bounded by a constant (26). This is very common with string problems and technically correct. In an interview setting, this is probably a safe answer, but you should also note that the space complexity could be 
// O(m), where m is the number of allowable characters in the input. This is a more general answer and also technically correct.

// Example 3: Given an integer array nums, find all the unique numbers x in nums that satisfy the following: x + 1 is not in nums, and x - 1 is not in nums.

// We can solve this in a straightforward manner - just iterate through nums and check if x + 1 or x - 1 is in nums. By converting nums into a set beforehand, these checks will cost 
// O(1).
// Converting the input into a set beforehand is another example of pre-processing.

let findNumbers = nums => {
    let ans = [];
    let numsSet = new Set(nums);

    for (const num of numsSet) {
        if (!numsSet.has(num + 1) && !numsSet.has(num - 1)) {
            ans.push(num);
        }
    }
    return ans;
}

// Because the checks are O(1), the time complexity is O(n) since each for loop iteration runs in constant time. The set will occupy 
// O(n) space.

// Anytime you find your algorithm running if ... in ..., then consider using a hash map or set to store elements to have these operations run in 
// O(1). Try these upcoming practice problems with what was learned here.