const sumOfMult = (num, init = 10) => {
  if (init === 0) return 0;
  return init * num + sumOfMult(num, --init);
};
