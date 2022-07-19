function isPalindrome(str) {
  if (str.length <= 1) return true;
  return str[0] === str[str.length - 1]
    ? isPalindrome(str.substring(1, str.length - 1))
    : false;
}
