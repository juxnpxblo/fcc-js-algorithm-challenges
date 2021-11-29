function rot13(str) {
  for (let i = 0; i < str.length; i++) {
    if (/[?! .,]/.test(str[i])) {
      continue;
    } else {
      let char = String.fromCharCode(str[i].charCodeAt() - 13);

      if (char.charCodeAt() < 65) {
        char = String.fromCharCode(char.charCodeAt() + 26);
      }

      str = str.slice(0, i) + char + str.slice(i + 1);
    }
  }
  return str;
}

rot13('SERR PBQR PNZC');
