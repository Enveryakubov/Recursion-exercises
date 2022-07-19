function collatz(num, step = 0) {
  if (num === 1) return step;
  return num & 1 ? collatz(num * 3 + 1, ++step) : collatz(num / 2, ++step);
}
