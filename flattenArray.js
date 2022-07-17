const flattenArr = (arr) => {
  if (arr.length === 0) return [];

  const first = arr[0];
  const rest = arr.slice(1);

  if (Array.isArray(first)) {
    return flattenArr([...first, ...rest]);
  }
  return [first, ...flattenArr(rest)];
};
