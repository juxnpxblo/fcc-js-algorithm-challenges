function translatePigLatin(str) {
  let vowelRegex = /[aeiou]/;

  let consPos = 0;

  while (true) {
    if (!vowelRegex.test(str[consPos])) {
      consPos++;
    } else {
      break;
    }
  }

  if (consPos === 0) {
    return str + 'way';
  } else {
    return str.slice(consPos) + str.slice(0, consPos) + 'ay';
  }
}

translatePigLatin('consonant');
