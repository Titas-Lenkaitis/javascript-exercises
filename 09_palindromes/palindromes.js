const palindromes = function (word) {
  word = word.toLowerCase().replace(/[!"£$%^&*()_+-=,;'#/:@~ ]/g, "");
  reverseWord = word.split("").reverse().toString().replace(/,/g, "");
  return (reverseWord == word)
  }
palindromes("A car, a man, a maraca.")
// Do not edit below this line
module.exports = palindromes;
