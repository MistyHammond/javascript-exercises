const repeatString = function (str, x) {
    if (x < 0) {
        return "ERROR";
    }

    let out = "";
    for (let i = 0; i < x; i++) {
        out += str;
    }
    
    return out;
};

// Do not edit below this line
module.exports = repeatString;
