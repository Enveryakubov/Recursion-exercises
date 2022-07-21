function rootDigit(num) {
  if (String(num).length === 1) return num;
  num = String(num)
    .split('')
    .reduce((a, b) => +a + +b, 0);
  return rootDigit(num);
}
// console.log(rootDigit(123));
//console.log(rootDigit(999888777));
//console.log(rootDigit(12387636365555555));
