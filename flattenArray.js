const flattenArr = (arr) => {
  if (arr.length === 0) return [];

  const first = arr[0];
  const rest = arr.slice(1);

  return Array.isArray(first)
    ? flattenArr([...first, ...rest])
    : [first, ...flattenArr(rest)];
};

console.log(flattenArr([1, 2, [3, 4], [[[[[5, 6]]]]]]));
