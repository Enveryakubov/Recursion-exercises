const dblFactorial = (num) => {
  if (num <= 0) return 1;

  return num * dblFactorial(num - 2);
};
