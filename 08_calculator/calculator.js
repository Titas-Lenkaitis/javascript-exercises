const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  total = 0;
	for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const multiply = function(array) {
  num = 1;
  for (i = 0; i < array.length; i++) {
    num *= array[i];
  }
  return num;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	num = 1;
  for (i = 1; i <= a; i++) {
    num *= i;
  }
  return num;
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
