const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) // If the values provided are not numbers, return ERROR
        return "ERROR";

    if (min < 0 || max < 0) // If the values provided are negative, return ERROR
        return "ERROR";

    if (min > max) { // If the bigger number is first, switch the values around
        const rvrs = min;
        min = max;
        max = rvrs;
    }

    let finalSum = 0;

    for (let i = min; i < max + 1; i++) { 
        finalSum += i;        
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
