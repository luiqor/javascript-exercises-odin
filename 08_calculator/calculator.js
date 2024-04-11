const add = function(a, b) {
	return a + b;
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (array) {
  let finalResult = 0;
  for (let value of array){
    finalResult += value;
  }
  return finalResult;
};

const multiply = function (array) {
  if (array.length === 0) return 0;

  let finalResult = 1;
  for (let value of array){
    finalResult *= value;
  }
  return finalResult;
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
