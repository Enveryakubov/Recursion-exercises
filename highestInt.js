function findHighest(arr, highest = arr[0]) {
  if (arr.length === 1) return highest;
  const el = arr.pop();
  highest = Math.max(highest, el);
  return findHighest(arr, highest);
}
