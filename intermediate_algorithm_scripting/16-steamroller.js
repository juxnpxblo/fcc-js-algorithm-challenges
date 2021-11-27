function steamrollArray(arr) {
  const flattenedArray = [];

  while (arr.length) {
    if (Array.isArray(arr[0])) {
      arr = [...arr[0], ...arr.slice(1)];
    } else {
      flattenedArray.push(arr.shift());
    }
  }

  return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
