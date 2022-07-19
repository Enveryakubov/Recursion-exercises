function repetition(txt, n) {
  if (n === 0) return '';
  return txt + repetition(txt, --n);
}
