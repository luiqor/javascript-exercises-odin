const removeFromArray = function (array, ...unwantedElements) {
  return array.filter((element) => !unwantedElements.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
