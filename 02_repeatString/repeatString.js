const repeatString = function(string, num) {
    if (num == 0) {
        return string = "";
    } else if (num < 0) {
        return string = "ERROR";
    }
    string2 = string;
    for (i = 1; i < num; i++) {
        string += string2;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
