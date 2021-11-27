const Person = function (firstAndLast) {
  // Only change code below this line
  this.setFirstName = function (first) {
    firstAndLast = `${first} ${firstAndLast.split(' ')[1]}`;
    return first;
  };
  this.getFirstName = function () {
    return firstAndLast.split(' ')[0];
  };

  this.setLastName = function (last) {
    firstAndLast = `${firstAndLast.split(' ')[0]} ${last}`;
    return last;
  };
  this.getLastName = function () {
    return firstAndLast.split(' ')[1];
  };

  this.setFullName = function (full) {
    firstAndLast = full;
    return full;
  };
  this.getFullName = function () {
    return firstAndLast;
  };
};

const bob = new Person('Bob Ross');
bob.getFullName();
