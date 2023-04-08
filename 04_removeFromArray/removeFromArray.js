const removeFromArray = function(array, ...args) {
  result = array.filter(x => !args.includes(x));
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
