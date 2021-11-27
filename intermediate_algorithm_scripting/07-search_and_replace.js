function myReplace(str, before, after) {
  let beforePos = str.indexOf(before);

  if (/[A-Z]/.test(before[0])) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }

  return str.slice(0, beforePos) + after + str.slice(beforePos + before.length);
}

myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');
