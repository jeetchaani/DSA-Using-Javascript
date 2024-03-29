/*  Given a non-empty array of integers nums, 
every element appears twice except for one. Find 
that single one.
*/

function singleNumber(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
}

let numsArray = [4, 1, 2, 1, 2];
console.log(singleNumber(numsArray)); //4

//Code by - @jeetchaani
