function palindrome(str) {
  str = str.split('');

  for (let i = 0; i < str.length; i++) {
    if (/[ -/:-@[-`{-~]/.test(str[i])) {
      str.splice(i, 1);
      i--;
    }
  }

  str = str.join('').toLowerCase();

  for (let i = 0, j = str.length - 1; i < Math.ceil(str.length / 2); i++, j--) {
    if (str[i] === str[j]) {
      continue;
    }
    return false;
  }

  return true;
}

palindrome('eye');
