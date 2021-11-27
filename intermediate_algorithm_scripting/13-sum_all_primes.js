function sumPrimes(num) {
  let sum = 0;

  outer: for (let i = 2; i <= num; i++) {
    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        continue outer;
      }
    }
    sum += i;
  }

  return sum;
}

sumPrimes(10);
