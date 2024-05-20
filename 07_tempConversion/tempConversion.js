const convertToCelsius = function(fahrStart, celsEnd) {
  celsEnd = (fahrStart - 32) * 5/9;
  celsEndNum = Number(celsEnd.toFixed(1));
  return celsEndNum;
};

const convertToFahrenheit = function(celsStart, fahrEnd) {
  fahrEnd = celsStart * 9/5 + 32;
  fahrEndNum = Number(fahrEnd.toFixed(1));
  return fahrEndNum;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
