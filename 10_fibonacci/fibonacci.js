const fibonacci = function(number) {
  number = parseInt(number);
  if (number < 0) {
    return "OOPS";
  }
  num1 = 1;
  num2 = 0;
  num3 = 1;
  for (i = 1; i < number; i++) {
    num3 = num1 + num2;
    num2 = num1;
    num1 = num3;
  }
  return num3;
};
fibonacci("1");
// Do not edit below this line
module.exports = fibonacci;
