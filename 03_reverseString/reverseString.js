const reverseString = function(string) {
    stringArray = string.split("");
    stringArray = stringArray.reverse();
    string = stringArray.join("");
    return string;
};

// Do not edit below this line
module.exports = reverseString;
