// Create an array of the squares of each element, and sort them.

var sortedSquares = function(nums) {
    let n = nums.length;
    let left = 0;
    let right = n - 1;
    let result = [];
  
    for (var i = n - 1; i >= 0; i--) {
      let square = 0;
  
      if (Math.abs(nums[right]) > Math.abs(nums[left])) {
        square = nums[right] * nums[right];
        right--;
      } else {
        square = nums[left] * nums[left];
        left++;
      }
      result[i] = square;
    }
    return result;
};
