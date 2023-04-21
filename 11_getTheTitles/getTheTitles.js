const getTheTitles = function(arr) {
  let sum = "";
  let titles = arr.map(book => sum + book.title);
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
