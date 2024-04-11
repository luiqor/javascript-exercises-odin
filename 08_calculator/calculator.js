const add = function(a, b) {
	return a + b;
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  if (array.length === 0) return 0;

  return array.reduce((product, current) => product * current);
};

const power = function (a, b) {
  return a ** b
};

const factorial = function (a) {
  if (a === 0) return 1;

  let finalResult = 1;
  for (let value = a; value > 1; value--) {
    finalResult *= value;
  }
  return finalResult;
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
