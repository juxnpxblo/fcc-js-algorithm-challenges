function pairElement(str) {
  const basePairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };

  let listOfPairs = [];

  for (let char = 0; char < str.length; char++) {
    listOfPairs.push([str[char], basePairs[str[char]]]);
  }

  return listOfPairs;
}

pairElement('GCG');
