function sumAll(arr) {
  let smaller, larger;
  let sum = 0;

  if (arr[0] < arr[1]) {
    smaller = arr[0];
    larger = arr[1];
  } else {
    smaller = arr[1];
    larger = arr[0];
  }

  for (let num = smaller; num <= larger; num++) {
    sum += num;
  }

  return sum;
}

sumAll([1, 4]);
