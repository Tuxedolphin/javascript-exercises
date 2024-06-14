const sumAll = function(numb_1, numb_2) {
    if (typeof(numb_1) !== "number" || typeof(numb_2) !== "number") {
        return "ERROR";
    }

    if (numb_1 < 0 || numb_2 < 0) {
        return "ERROR";
    }

    if (numb_1 < numb_2) {
        smaller_number = numb_1;
        larger_number = numb_2;
    } else {
        smaller_number = numb_2;
        larger_number = numb_1;
    }

    result = 0;

    for (let i = smaller_number; i <= larger_number; i++) {
        result += i
    }

    return result

};

// Do not edit below this line
module.exports = sumAll;
