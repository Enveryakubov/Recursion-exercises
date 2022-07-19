const stringLength = (str) => {
  if (str === '') return 0;
  return stringLength(str.slice(1)) + 1;
};
