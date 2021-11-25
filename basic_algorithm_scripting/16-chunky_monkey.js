function chunkArrayInGroups(arr, size) {
  let chunk;
  let arrayOfChunks = [];

  let pos = 0;

  while (pos < arr.length) {
    chunk = [];

    for (let i = 0; i < size; i++) {
      if (pos >= arr.length) break;

      chunk.push(arr[pos]);

      pos++;
    }

    arrayOfChunks.push(chunk);
  }

  return arrayOfChunks;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
