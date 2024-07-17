const convertToCelsius = function(farTemp) {
  // (32 °F − 32) × 5/9 = 0 °C
  let celTemp = (farTemp - 32) * (5 / 9);
  let result = celTemp.toFixed(1);
  return parseFloat(result);
};

const convertToFahrenheit = function(celTemp) {
// formule (0 °C × 9/5) + 32 = 32 °F
  let farTemp = (celTemp * (9 / 5)) + 32;
  let result = farTemp.toFixed(1);
  return parseFloat(result);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
