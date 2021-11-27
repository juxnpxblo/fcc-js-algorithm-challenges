function spinalCase(str) {
  const words = [];

  const delimetersRegex = /[-_" "]/;
  const upperAlphaRegex = /[A-Z]/;

  let startOfWord = 0,
    char = 1;

  while (char <= str.length) {
    let isUpperAlpha = upperAlphaRegex.test(str[char]);

    if (
      delimetersRegex.test(str[char]) ||
      isUpperAlpha ||
      char === str.length
    ) {
      words.push(str.slice(startOfWord, char).toLowerCase());
      startOfWord = char + 1 - isUpperAlpha;
      char++;
    }

    char++;
  }

  return words.join('-');
}

spinalCase('This Is Spinal Tap');
