function frankenSplice(arr1, arr2, n) {
  let resultingArray = [];

  resultingArray.splice(0, 0, ...arr2.slice(0, n), ...arr1, ...arr2.slice(n));

  return resultingArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
