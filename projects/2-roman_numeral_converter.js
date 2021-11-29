function convertToRoman(num) {
  const romanNumerals = [
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ];

  let numToRoman = '';
  let currentRomanNumeral = romanNumerals[6];

  while (num > 0) {
    if (num >= currentRomanNumeral[1]) {
      num -= currentRomanNumeral[1];
      numToRoman = numToRoman + currentRomanNumeral[0];
    } else {
      let frontNumber = num.toString()[0];
      let shift;

      if (
        (frontNumber == 4 && (() => (shift = 1))()) ||
        (frontNumber == 9 && (() => (shift = 2))())
      ) {
        for (let i = 0; i < romanNumerals.length; i++) {
          if (romanNumerals[i][1] > num) {
            num -= romanNumerals[i][1] - romanNumerals[i - shift][1];
            numToRoman =
              numToRoman + romanNumerals[i - shift][0] + romanNumerals[i][0];
            break;
          }
        }
      } else {
        for (let i = 0; i < romanNumerals.length; i++) {
          if (romanNumerals[i][1] > num) {
            currentRomanNumeral = romanNumerals[i - 1];
            break;
          }
        }
      }
    }
  }

  return numToRoman;
}

convertToRoman(36);
