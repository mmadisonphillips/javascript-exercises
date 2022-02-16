const add = function(x, y) {
  if (typeof x != 'number' || typeof y != 'number') {
    return 'error';
  }
  return x+y;
};

const subtract = function(x, y) {
  if (typeof x != 'number' || typeof y != 'number') {
    return 'error';
  }
  return x-y;
};

const sum = function() {
  let total = 0;
  for (let i of arguments[0]) {
    if (typeof i != 'number') return 'error';
    total += i;
  }
  return total;
};

const multiply = function() {
  let total = 1;
  for (let i of arguments[0]) {
    if (typeof i != 'number') return 'error';
    total *= i;
  }
  return total;
};

const power = function(x, y) {
  if (typeof x != 'number' || typeof y != 'number') {
    return 'error';
  }
  return x**y;
};

const factorial = function(x) {
  if (typeof x != 'number' || x < 0) {
    return 'error';
  }
  let total = 1;
  for (;x>0;x--) {
    total *= x;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
