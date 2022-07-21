//      1
//     2 3
//    4 5 6
//   7 8 9 10
// 11 12 13 14 15
// ...

function rowSum(n, result = 1, inc = 1) {
  if (n === 1) return result * inc + ((inc - 1) * inc) / 2;
  --n;
  result += inc;
  ++inc;
  return rowSum(n, result, inc);
}

console.log(rowSum(3));
