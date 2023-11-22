function twoSum(nums, target) {
  const numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numSet.has(complement)) {
      return [nums.indexOf(complement), i];
    } else {
      numSet.add(nums[i]);
    }
  }

  return [];
}
module.exports = twoSum;
