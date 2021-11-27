function convertHTML(str) {
  const htmlEntities = {
    '&': 'amp',
    '<': 'lt',
    '>': 'gt',
    '"': 'quot',
    "'": 'apos',
  };

  for (let char = 0; char < str.length; char++) {
    if (/[&<>"']/.test(str[char])) {
      str =
        str.slice(0, char) +
        '&' +
        htmlEntities[str[char]] +
        ';' +
        str.slice(char + 1);
    }
  }

  return str;
}

convertHTML('Dolce & Gabbana');
