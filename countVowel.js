function countVowels(str) {
  const vowels = ['a', 'e', 'o', 'i', 'u'];
  let count = 0;

  const helper = (str) => {
    if (str === '') return count;
    let first = str[0];
    if (vowels.includes(first.toLowerCase())) {
      ++count;
    }
    return helper(str.substring(1));
  };
  return helper(str);
}
