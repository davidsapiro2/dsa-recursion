/** isPalindrome: checks whether a string is a palindrome or not. */
// cat
// daaad
function isPalindrome(str: string): boolean {
  if (str.length <= 1) return true;

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  } else {
    return false;
  }

}

export { isPalindrome };