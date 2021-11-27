function diffArray(arr1, arr2) {
  const diff = [];
  const allItems = [...arr1, ...arr2];

  for (let i = 0; i < allItems.length; i++) {
    if (allItems.filter((item) => item === allItems[i]).length === 1) {
      diff.push(allItems[i]);
    }
  }

  return diff;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
