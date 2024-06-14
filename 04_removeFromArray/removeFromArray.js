const removeFromArray = function(array, ...elements) {
    return array.filter((value) => !elements.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
