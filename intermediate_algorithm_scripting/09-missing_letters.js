function fearNotLetter(str) {
  for (let char = 1; char < str.length; char++) {
    let currentCharCode = str[char].codePointAt();
    let previousCharCode = str[char - 1].codePointAt();

    if (currentCharCode - previousCharCode !== 1) {
      let missingCharCode = str[char].codePointAt() - 1;
      return String.fromCharCode(missingCharCode);
    }
  }
}

fearNotLetter('abce');
