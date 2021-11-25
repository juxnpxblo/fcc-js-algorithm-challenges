function titleCase(str) {
  str = str.split(' ');

  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].slice(0, 1).toUpperCase() + str[i].slice(1).toLowerCase();
  }

  return str.join(' ');
}

titleCase("I'm a little tea pot");
