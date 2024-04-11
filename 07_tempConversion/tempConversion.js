const convertToCelsius = function(fahrenheitTemp) {
  return Math.round(((5 / 9) * (fahrenheitTemp - 32)) * 10) / 10;
};

const convertToFahrenheit = function(celsiusTemp) {
  return Math.round((9 / 5 * celsiusTemp  + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
