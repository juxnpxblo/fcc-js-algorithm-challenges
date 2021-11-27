function addTogether(a, b) {
  if (arguments.length >= 2) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
      return a + b;
    }
  } else if (Number.isInteger(a)) {
    return function (b) {
      if (Number.isInteger(b)) {
        return a + b;
      }
    };
  }
}

addTogether(2, 3);
