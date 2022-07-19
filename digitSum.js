function sumDigit(positiveInteger, sum = 0) {
  if (positiveInteger === 0) return sum;
  const remainder = positiveInteger % 10;
  sum += remainder;
  positiveInteger = Math.floor(positiveInteger / 10);
  return sumDigit(positiveInteger, sum);
}
