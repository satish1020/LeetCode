// <!-- Prefix Sum -->
// Prefix sum is a technique that can be used on arrays (of numbers). The idea is to create an array prefix where prefix[i] is the sum of all elements up to the index i (inclusive). For example, given nums = [5, 2, 1, 6, 3, 8], we would have prefix = [5, 7, 8, 14, 17, 25].
// When a subarray starts at index 0, it is considered a "prefix" of the array. A prefix sum represents the sum of all prefixes.
// Prefix sums allow us to find the sum of any subarray in
// 𝑂(1). If we want the sum of the subarray from i to j (inclusive), then the answer is prefix[j] - prefix[i - 1], or prefix[j] - prefix[i] + nums[i] if you don't want to deal with the out of bounds case when i = 0.
// This works because prefix[i - 1] is the sum of all elements before index i. When you subtract this from the sum of all elements up to index j, you are left with the sum of all elements starting at index i and ending at index j, which is exactly what we are looking for.
// 3,6,2,,8,1,4,1,5
// prefix sum of above array:
// 3,9,11,19,20,24,25,30
// In the above image, we want to find the sum of the subarray from index 3 to 6..
// If you take all the elements up until the end of the subarray (of index 6) and subtract all the elements before index 3 (which is index 2), you have the subarray.
// With a prefix sum, we can find the sum of index 6 i.e 25 and upto index 2 i.e 11 in constant time and take their difference to find the sum of the subarray as 14.
// Building a prefix sum is very simple. Here's some pseudocode:
// Given an array nums,
// note in the below pseudo code prefix.length is 1 and it keeps increasing as we keep appending.
// Pseudo code:
// prefix = [nums[0]]
// for (int i = 1; i < nums.length; i++)
//     prefix.append(nums[i] + prefix[prefix.length - 1])
// Initially, we start with just the first element. Then we iterate with i starting from index 1. At any given point, the last element of prefix will represent the sum of all the elements in the input up to but not including index i. So we can add that value plus the current value to the end of prefix and continue to the next element.
// A prefix sum is a great tool whenever a problem involves sums of a subarray. It only costs
// O(n) to build but allows all future subarray queries to be 𝑂(1), so it can usually improve an algorithm's time complexity by a factor of O(n), where
// n is the length of the array. Let's look at some examples.

// Building a prefix sum is a form of pre-processing. Pre-processing is a useful strategy in a variety of problems where we store pre-computed data in a data structure before running the main logic of our algorithm. While it takes some time to pre-process, it's an investment that will save us a huge amount of time during the main parts of the algorithm.
// Question:

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
 

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6
// time complexity is O(n), where n is the length of the input array and we need to iterate through the array at least once.
// space compLexity is O(1), because we modify the original array instead of creating a new one.


const prefixSum = (nums) =>{
 let n = nums.length;
 let prefix = [0].concat(nums);

 for(var i =1;i<n;i++){
  prefix[i] = prefix[i-1]+ nums[i-1];
 }
}

// to find sum of k elements starting from index k;
const sumofKElements = (prefix, k) =>{
 let left =k;
 let right = prefix.length-k;
 let ans = 0;
  for(var i= left;i< right;i++){
   ans = prefix[rightBound + 1] - prefix[leftBound];
  }
  return ans;
}

const prefixSumApproach1= (nums)=>{
    let n = nums.length;
    //  creates a new array with n elements, all of which are undefined by default, and then sets the first element to the first element of nums.
     let prefixSum = new Array(n);   
        prefixSum[0] = nums[0];
     for(let i=1;i<n;i++){  
      prefixSum[i] = nums[i]+ prefixSum[i-1];
     }
     return prefixSum;
}

// Approach2
const prefixSumApproach2 = (nums) => {
  let n = nums.length;
  let prefix = [nums[0]];
   for(var i=1;i< n;i++){
     prefix[i] = nums[i]+ prefix[prefix.length -1];
   }
   return prefix;
};

// Approach 3
   // 'prefix[i + 1]' will be sum of all elements of 'nums' from index '0' to 'i'.
const prefixSumApproach3 = (nums) =>{
  let n = nums.length;
  const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; ++i) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
}
// Example 2: Given an integer array nums, an array queries where queries[i] = [x, y] and an integer limit, return a boolean array that represents the answer to each query. A query is true if the sum of the subarray from x to y is less than limit, or false otherwise.
// For example, given nums = [1, 6, 3, 2, 7, 2], queries = [[0, 3], [2, 5], [2, 4]], and limit = 13, the answer is [true, false, true]. For each query, the subarray sums are [12, 14, 12].
const ansQueries = (nums, queries, limit) => {
  const n = nums.length;
  let prefixSum = new Array(n);
  prefixSum[0] = nums[0];
  let ans = [];

  for (let i = 1; i < n; i++) {
    prefixSum[i] = nums[i] + prefixSum[i - 1];
  }

  for (const [x, y] of queries) {
    let curr = x > 0 ? prefixSum[y] - prefixSum[x - 1] : prefixSum[y];
    ans.push(curr < limit);
  }
  return ans;
};

// Example3 Given an integer array nums, find the number of ways to split the array into two parts so that the first section has a sum greater than or equal to the sum of the second section. The second section should have at least one number.
var waysToSplitArray = function (numbers) {
  let arraySize = numbers.length;
  let prefixSum = new Array(arraySize).fill(0);

  for (let i = arraySize - 1; i >= 0; i--) {
    prefixSum[i] = (prefixSum[i + 1] || 0) + numbers[i];
  }
  let currentSum = 0;
  let splitCount = 0;
  for (let i = 0; i < arraySize - 1; i++) {
    currentSum += numbers[i];
    if (currentSum >= prefixSum[i + 1]) splitCount++;
  }
  return splitCount;
};

var waysToSplitArray = function (nums) {
  let n = nums.length;
  let prefix = new Array(n).fill(0);
  let ans = 0;
  for (let i = 1; i < n; i++) {
    prefix.push(nums[i] + prefix[prefix.length - 1]);
  }
  for (let i = 0; i < n - 1; i++) {
    let leftSection = prefix[i];
    let rightSection = prefix[n - 1] - prefix[i];
    if (leftSection >= rightSection) {
      ans++;
    }
  }
  return ans;
};


// alternative without using prefix sum
// Do we need the array?
// In this problem, the order in which we need to access prefix is incremental: to find leftSection, we do prefix[i] as i increments by 1 each iteration.
// As such, to calculate leftSection we don't actually need the array. We can just initialize leftSection = 0 and then calculate it on the fly by adding the current element to it at each iteration.
// What about rightSection? By definition, the right section contains all the numbers in the array that aren't in the left section. Therefore, we can pre-compute the sum of the entire input as total, then calculate rightSection as total - leftSection.
// We are still using the concept of a prefix sum as each value of leftSection represents the sum of a prefix. We have simply replicated the functionality using an integer instead of an array.
// We have improved the space complexity to O(1), which is a great improvement.
// Closing notes
// This is the last major pattern we will be looking at for arrays and strings. In the next article, we'll look at a few more common tricks and patterns, then close the chapter with a quiz before moving on. Before that, try applying the concepts learned here in the next problem.
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
  let ans,
    total,
    leftSection = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    leftSection = num[i];
    rightSection = total - nums[i];

    if (leftSection > rightSection) {
      ans++;
    }
  }
  return ans;
};
