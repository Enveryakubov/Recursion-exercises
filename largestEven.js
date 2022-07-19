function largestEven(nums, max = -1) {
  if (nums.length === 0) return max;
  const last = nums.pop();
  (last & 1) !== 1 && (max = Math.max(max, last));
  return largestEven(nums, max);
}
