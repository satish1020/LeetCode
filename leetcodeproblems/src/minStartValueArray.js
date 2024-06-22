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


var minStartValue = function(nums) {
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
  
  // Brute Force.
  var minStartValue = function(nums) {
      // Start with startValue = 1. 
      let startValue = 1;
      let isValid = true;
      while(true){
          let total = sum;
          let n = nums.length;
  
          for(var i=0;i<n;i++){
             total += nums[i];
              if(total <1){
                  isValid = false;
                  break;
              }
          }
  
          if(isValid ){
              return startValue;
          }
          else{
              startValue++;
          }
      }
  };
  
//   Complexity Analysis

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
  var minStartValue = function(nums) {
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
  
  
  