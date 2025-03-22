const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // Check the last remaining element
  if (nums[left] === target) {
    return left;
  }

  return -1; // Target not found
};
