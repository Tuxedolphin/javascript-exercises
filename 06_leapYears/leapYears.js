const leapYears = function(year) {
    if (!(year % 4)) {
        if (!(year % 100)) {
            return !(year % 400) ? true : false
        }

        return true
    }

    return false
};

// Do not edit below this line
module.exports = leapYears;
