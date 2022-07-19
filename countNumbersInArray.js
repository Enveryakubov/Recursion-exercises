const countNumbers = (arr, count = 0) => {
  if (arr.length === 0) return count;
  let last = arr.pop();
  if (typeof last === 'number') {
    ++count;
    return countNumbers(arr, count);
  } else if (Array.isArray(last)) {
    return countNumbers([...arr, ...last], count);
  } else {
    return countNumbers(arr, count);
  }
};

// console.log(
//   countNumbers([1, 2, [4], [[[[[45, 5656]]]]], 'sdsd', [[[['4', 7]]]]])
// );
