// check if a string is palindrome using recursion

const isPalindrome = (i, n, str) => {
  if (i >= n / 2) {
    return true;
  }

  if (str[i] !== str[n-i]) {
    return false;
  } else {
    return isPalindrome(i + 1,n, str);
  }
};

function main(string) {
  return isPalindrome(0, string.length - 1, string);
}

console.log(main("abbaa"));
