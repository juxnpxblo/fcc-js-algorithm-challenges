function binaryAgent(str) {
  const totalBinChunks = str.length / 9;

  for (let i = 0; i < totalBinChunks; i++) {
    let binToDec = 0;
    let binChunk = str.slice(i + 0, i + 8);

    for (let unit = 0, powerOf2 = 7; unit < 8; unit++, powerOf2--) {
      binToDec += binChunk[unit] * 2 ** powerOf2;
    }

    let strConverted = str.slice(0, i);
    let charJustConverted = String.fromCharCode(binToDec);
    let strNotConverted = str.slice(i + 9);

    str = strConverted + charJustConverted + strNotConverted;
  }
  return str;
}

binaryAgent(
  '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
);
