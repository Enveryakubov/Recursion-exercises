function isFactorial(number, step = 1, result = 1) {
  if (result > number) return false;
  if (result === number) return true;
  result *= step;
  ++step;
  return isFactorial(number, step, result);
}
