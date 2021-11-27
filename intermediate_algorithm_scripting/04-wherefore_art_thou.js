function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  let sourceKeys = Object.keys(source);

  outer: for (let i = 0; i < collection.length; i++) {

    for (let j = 0; j < sourceKeys.length; j++) {
      if (collection[i][sourceKeys[j]] !== source[sourceKeys[j]]) {
        continue outer;
      }
    }
    
    arr.push(collection[i]);
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });