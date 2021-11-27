function smallestCommons(arr) {
  let smaller, larger;

  if (arr[0] > arr[1]) {
    smaller = arr[1];
    larger = arr[0];
  } else {
    smaller = arr[0];
    larger = arr[1];
  }

  let multiple = larger;

  infiniteLoop: while (true) {
    multiple += larger;

    for (let num = larger - 1; num >= smaller; num--) {
      if (multiple % num !== 0) continue infiniteLoop;
    }

    break;
  }

  return multiple;
}

smallestCommons([1, 5]);
