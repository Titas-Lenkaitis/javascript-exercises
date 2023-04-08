const convertToCelsius = function(temp1) {
  return temp1 = Math.round(((temp1 - 32) * (5/9)) * 10) / 10;
};

const convertToFahrenheit = function(temp2) {
return temp2 = Math.round(((temp2 * (9/5)) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
