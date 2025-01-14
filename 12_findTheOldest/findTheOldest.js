const findTheOldest = function(arr) {
  const orderedArr = arr.sort(function(a,b) {
    if (typeof a.yearOfDeath == "undefined") {
      a.yearOfDeath = new Date().getFullYear()
    } else if (typeof b.yearOfDeath == "undefined") {
      b.yearOfDeath = new Date().getFullYear()
    }
    if((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
      return -1;
    } else {
      return 1;
    };
  });
  return orderedArr[0];
};
// Do not edit below this line
module.exports = findTheOldest;