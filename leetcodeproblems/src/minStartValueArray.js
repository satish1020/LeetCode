// // Minimum Value to Get Positive Step by Step Sum
// Given an array of integers nums, you start with an initial positive value startValue.

// In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

// Return the minimum positive value of startValue such that the step by step sum is never less than 1.

// Example 1:

// Input: nums = [-3,2,-3,4,2]
// Output: 5
// Explanation: If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
// step by step sum
// startValue = 4 | startValue = 5 | nums
//   (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
//   (1 +2 ) = 3  | (2 +2 ) = 4    |   2
//   (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
//   (0 +4 ) = 4  | (1 +4 ) = 5    |   4
//   (4 +2 ) = 6  | (5 +2 ) = 7    |   2
// Example 2:

// Input: nums = [1,2]
// Output: 1
// Explanation: Minimum start value should be positive.
// Example 3:

// Input: nums = [1,-2,-3]
// Output: 5

// Constraints:

// 1 <= nums.length <= 100
// -100 <= nums[i] <= 100

// Solution
// Overview
// In this problem, we are given an integer array nums. Then we pick a positive value (let's call it startValue) and iterate over nums. In the iteration, we calculate the step-by-step total of this startValue plus the value of each elements in nums.

// Since there the array might contain negative values, it is possible for the total to become less than 1. However, if we select a sufficiently large startValue, we can ensure the step-by-step total will never be less than 1. For this problem, a startValue is valid if it makes the step-by-step total always remain positive. Otherwise, the startValue is invalid.

// Here, our task is to find the minimum valid startValue.

// Approach 1: Brute Force
// Intuition

// Firstly, let's walk through two examples using the array nums, which equals [−3,2,−3,4,2][-3,2,-3,4,2][−3,2,−3,4,2], to demonstrate a valid and an invalid startValue.

// In the first example, we will iterate over nums starting with a startValue equal to 10.

// array[-3,2,-3,4,2]  -->> sum =  [10 ,7, 9, 6 ,10 ,12]

// We can tell that 10 is a valid startValue, nice!
// Then let's try startValue = 4.
// sum [4,1,3,0] 0 is less than 1 so its invalid
// Unfortunately, 4 is not a valid startValue.

// Since the start value must be positive and we are looking for the minimum valid startValue, an intuitive method is to start from the smallest possible start value, that is, startValue = 1. Then we can test whether startValue is valid by setting total equal to the start value and iterative over each number in nums, adding each number to total along the way, as shown above.

// If total is smaller than 1 during the iteration, this implies that the startValue is too small to ensure total remains positive. Therefore, we can stop this iteration and try a larger value. Since we don't want to miss any startValue, we will increase startValue by 1 each time, that is startValue = startValue + 1. We use this new start value to iterate over the array again. We keep iterating over the array with the new startValue until the step-by-step total remains positive for the entire iteration, indicating that we have found the minimum valid startValue.

// Algorithm

// Start with startValue = 1.
// Set total = startValue and iterate over the array nums. At each step of the iteration, add the current element in nums to total.
// If the total ever drops below 1 during the iteration, stop the iteration, and repeat step 2 with startValue = startValue + 1. Otherwise, the current startValue must be the minimum valid start value, so return startValue.

// Brute Force.
var minStartValue = function (nums) {
  // Start with startValue = 1.
  var startValue = 1;

  // While we haven't found the first valid startValue
  while (true) {
    // The step-by-step total equals startValue at the beginning.
    // Use boolean parameter "isValid" to record whether the total
    // is larger than or equal to 1.
    var total = startValue;
    isValid = true;

    // Iterate over the array "nums".
    for (const num of nums) {
      // In each iteration, calculate "total"
      // plus the element "num" in the array.
      total += num;

      // If "total" is less than 1, we shall try a larger startValue,
      // we mark "isValid" as "false" and break the current iteration.
      if (total < 1) {
        isValid = false;
        break;
      }
    }

    // If "isVaild" is true, meaning "total" is never less than 1 in the
    // iteration, therefore we return this "startValue". Otherwise, we
    // go ahead and try "startValue" + 1 as the new "startValue".
    if (isValid) {
      return startValue;
    } else {
      startValue += 1;
    }
  }
};

// Complexity Analysis

// Let nnn be the length of the array nums and mmm be the absolute value of the lower bound of elements in nums.

// Time complexity: O(n2⋅m)O(n^2 \cdot m)O(n
// 2
//  ⋅m)

// Imagine the case when every element in the first half of nums is 1 and every element in the second half of nums is −m-m−m, that is nums=[1,1,1,1,...,−m,−m,−m]nums = [1,1,1,1,...,-m,-m,-m]nums=[1,1,1,1,...,−m,−m,−m].

// In this case, the minimum valid startValue is (n/2)⋅(m−1)+1(n/2)\cdot(m-1) + 1(n/2)⋅(m−1)+1, the same number of times we will do the iteration.

// Every iteration, we will start with startValue, and we must update the step-by-step total at least (n/2)+1(n/2) + 1(n/2)+1 times.
// Therefore, for large enough values of mmm and nnn, we will have time complexity equals: O(n2⋅m)O(n^2 \cdot m)O(n
// 2
//  ⋅m)

// Space complexity: O(1)O(1)O(1)

// For each loop, we only need the current total and a flag to determine if it was ever smaller than 1, which only costs constant space.

// Approach 2: Binary Search
// Intuition
// Two key observations we can make from the previous walkthrough examples are that:
// If startValue is valid, then startValue + 1 must be valid as well. In the iteration that starts with startValue, every step-by-step total is larger than or equal to 1. Therefore, using a larger startValue makes every total larger.
// If startValue is invalid, then startValue - 1 is invalid as well. An invalid startValue, indicates that there is at least one step-by-step total less than 1, thus using a smaller start value startValue - 1 will make this total even smaller.
// Therefore, the start values will be distributed like the figure below, and we are supposed to find the minimum valid startValue.

// Diagram showing the distribution of invalid, valid values.
// 0,......invalid, invalid,.....,valid,..,valid,....,startValue

// From the above illustration, we can observe that the optimal value separates all valid start values from all invalid start values. Therefore if we guess a start value that is invalid, the actual start value must be higher. Likewise, if we guess a start value that is valid, then the optimal start value must be equal or lower. Any time we see this higher-lower guessing game, it means that we can use binary search to find the optimal value.

// First, let's set the left (lower) and the right (upper) bounds for the binary search.
// Since the start value is always greater than or equal to 1, we can set left equal to 1. For the right boundary, we shall find a "safe value", a relatively large value that is guaranteed to be valid. Let's say that there are n elements in the array nums, and the range of the element is [-m, m] (In this question we have m = 100, that is -100 <= nums[i] <= 100 ). Therefore, m⋅n+1m\cdot n + 1m⋅n+1 is large enough to guarantee each step-by-step total will remain greater than or equal to 1. Hence, we will set right = m * n + 1.

// Now that we have set the boundaries of the search space as left = 1 and right = m * n + 1, we can get the middle index of these boundaries middle = (left + right) / 2. Then we will set startValue equal to middle and iterate over the array.
// If middle is a valid start value, that means we can eliminate the search space (middle, right] because any number larger than middle will also be valid. Thus we will continue searching the remaining half of the search space [left, middle] by setting right equal to middle. On the other hand, if middle is an invalid start value, we will set left = middle + 1 to eliminate the search space [left, middle] and continue searching the remaining half of the search space [middle + 1, right].

// Algorithm

// Set left = 1 and right = m * n + 1, where n is the number of elements in nums and m is the absolute value that an element could be. If the minimum possible value of an element is unknown, the minimum value in the array nums can be used instead.
// Get middle value from left and right, which is middle = (left + right) / 2.
// Iterate over the array nums with total = middle as the initial total. Each step, increment total by the current number in nums.
// If we complete the iteration and at every step-by-step total was greater than or equal to 1, then total is valid, so let right = middle. Otherwise, let left = middle + 1.
// Repeat the steps 2, 3, and 4 until the two boundaries overlap, i.e., left == right, which means that we have found the minimum valid startValue that ensures every step-by-step total is greater than or equal to 1. We can return either left or right as the answer.

var minStartValue = function(nums) {
    // Let n be the length of the array "nums", m be the absolute value 
    // of the lower boundary of the element. In this question we have m = 100.
    var n = nums.length;
    var m = 100;

    // Set left and right boundaries according to left = 1, right = m * n + 1.
    var left = 1;
    var right = m * n + 1;

    while (left < right) {
        // Get the middle index "middle" of the two boundaries, let the start value 
        // be "middle". The initial step-by-step total "total" equals to middle as well.
        // Use boolean parameter "isValid" to record whether the total 
        // is greater than or equal to 1.
        var middle = Math.floor((left + right) / 2);
        var total = middle;
        var isValid = true;

        // Iterate over the array "nums".
        for (const num of nums) {

            // In each iteration, calculate "total" plus the element "num" in the array.
            total += num;

            // If "total" is less than 1, we shall try a larger start value,
            // we mark "isValid" as "false" and break the current iteration.
            if (total < 1) {
                isValid = false;
                break;
            }
        }

        // Check if middle is valid, and reduce the search space by half.
        if (isValid) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }

    // When the left and right boundaries coincide, we have found
    // the target value, that is, the minimum valid startValue.
    return left;
}

// Approach 3: Prefix total
// Intuition

// In both of the previous approaches, we needed to iterate over the array multiple times before finding the minimum valid startValue, is there perhaps a more efficient method? Whenever we want to improve the efficiency of an existing approach, a good place to start is by considering the inefficiencies of the current approach. In both of the previous approaches, we must iterate over all of the numbers in nums to see if a startValue is valid. However, after testing each startValue, we would guess the next start value. We improved on the naive solution by using binary search to strategically select our next guess for the minimum valid startValue, but could we further improve our solution by making a more informed decision when selecting startValue? To find out, let's consider the following example.

// Suppose the array nums is:
// [a,b,c,d][a, b, c, d][a,b,c,d]
// If we iterate the array with startValue = 0 (There are other values we can use, but 0 is the most convenient), the first step-by-step total will be 0, and we can have a list of all step-by-step sums (we call it List):

// List=[0,a,a+b,a+b+c,a+b+c+d]List = [0, a, a + b, a + b + c, a + b + c + d]List=[0,a,a+b,a+b+c,a+b+c+d]

// This is very similar to the prefix total of nums. Notice that 0 will be invalid, because the first element in List is less than 1, plus there might also be some other elements that are less than 1. Therefore, we should use a larger start value instead of 0, say startValue, then all the elements in List will be increased by startValue.

// Here comes the key step: the minimum startValue is the value that makes the minimum element in the step-by-step sums equal to exactly 1.

// Why exactly 1?

// If the minimum element is smaller than 1, this means that the current startValue is invalid since a valid startValue is supposed to make every step-by-step total greater than or equal to 1.
// If the minimum element is strictly larger than 1, this means that the current startValue is too large since the startValue - 1 is valid as well.
// Proof complete!

// Therefore, we just need to iterate over the array using startValue = 0, find the minimum step-by-step total in this iteration (say minVal), according to the previous proof, we should have minVal + startValue = 1, which is exactly startValue = 1 - minVal.

//   Take the figure below as an example
//   [-3,2,-3,4,2]

//   if we iterate the array with startValue = 0, the minimum step by step sum is -4.
// [0, -3, -1, -4, 0, -2][
//   // If we start with start value = x, we shall pick the X that makes -4 +X = 1, that is X =5.
//   (0 + X, -3 + X, 2 + X, -3 + X, 4 + X, 2 + X)
// ];

// First, let's iterate over the array using 0 as the initial value and we will have a list that consists of all step-by-step sums, where the minimum total is -4. Therefore, we shall choose the startValue that changes this minimum total from -4 to exactly 1, that is, -4 + startValue = 1. Hence, startValue = 5 is the minimum valid startValue for this array.

// Algorithm

// Traverse the array nums and calculate every step-by-step total, use total to record the current step-by-step total, and minVal to record the minimum step-by-step total.
// Return -minVal + 1, that is the minimum valid startValue.

var minStartValue = function (nums) {
  // We use "total" for current step-by-step total, "minVal" for minimum
  // step-by-step total among all sums. Since we always start with
  // startValue = 0, therefore the initial current step-by-step total is 0,
  // thus we set "total" and "minVal" be 0.
  var minVal = 0;
  var total = 0;

  // Iterate over the array and get the minimum step-by-step total.
  for (var i = 0; i < nums.length; ++i) {
    total += nums[i];
    minVal = Math.min(minVal, total);
  }

  // We have to let the minimum step-by-step total equals to 1,
  // by increasing the startValue from 0 to -minVal + 1,
  // which is just the minimum startValue we want.
  return -minVal + 1;
};

// Complexity Analysis

// Let nnn be the length of the array nums.

// Time complexity: O(n)O(n)O(n)

// In this method, we just need to traverse the array once.

// Space complexity: O(1)O(1)O(1)

// We just need to calculate the step-by-step total of the array and record the minimum step-by-step total, both only require constant space.



