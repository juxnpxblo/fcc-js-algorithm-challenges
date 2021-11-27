function sumFibs(num) {
  let x = 0,
    y = 1,
    current = x + y,
    sum = 1;

  while (current <= num) {
    if (current % 2 !== 0) {
      sum += current;
    }

    x = y;
    y = current;
    current = x + y;
  }

  return sum;
}

sumFibs(4);
