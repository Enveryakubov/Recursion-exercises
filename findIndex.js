const findIndex = (arr, target, ind = 0) => {
  if (ind > arr.length - 1) return -1;
  if (arr[ind] === target) return ind;
  return findIndex(arr, target, ++ind);
};
