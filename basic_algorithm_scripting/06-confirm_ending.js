function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target ? true : false;
}

confirmEnding('Bastian', 'n');