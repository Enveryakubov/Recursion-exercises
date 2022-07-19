const countNumbers = (arr, count = 0) => {
  if (arr.length === 0) return count;
  const last = arr.pop();
  if (Array.isArray(last)) {
    return countNumbers([...arr, ...last], count);
  } else {
    typeof last === 'number' && ++count;
    return countNumbers(arr, count);
  }
};

// console.log(
//   countNumbers([1, 2, 3, [4], [[[[[45, 5656]]]]], 'sdsd', [[[['4', 7]]]]])
// );
