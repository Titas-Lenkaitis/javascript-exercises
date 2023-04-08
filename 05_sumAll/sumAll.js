const sumAll = function(num1, num2) {
  num = 0;
  if (num1 < 0 || num2 < 0 || !(typeof num1 == "number") || !(typeof num2 == "number")) {
    return num = "ERROR";
  } else if (num2 < num1) {
      while (num2 <= num1) {
        num += num2;
        num2++;
    }
  } else {
      while (num1 <= num2) {
        num += num1;
        num1++;
  }}
  return num;
};

// Do not edit below this line
module.exports = sumAll;
