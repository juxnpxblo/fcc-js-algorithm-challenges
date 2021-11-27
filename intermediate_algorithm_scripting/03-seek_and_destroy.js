function destroyer(arr) {
  const seekFor = [];

  for (let i = 1; i < arguments.length; i++) {
    seekFor.push(arguments[i]);
  }

  return arr.filter((item) => !seekFor.includes(item));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
