//Given an array of integers nums and an integer target,
//return indices of the two numbers such that they add up to target.

function twoSum(nums, target) {
  var n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i != j) {
        if (nums[i] + nums[j] == target) {
          return [i, j];
        }
      }
    }
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
