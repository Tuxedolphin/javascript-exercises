const findTheOldest = function(array) {
    
    const currentYear = 2024;

    array.sort((first, second) => {
        const firstAge = ("yearOfDeath" in first) 
            ? first.yearOfDeath - first.yearOfBirth 
            : currentYear - first.yearOfBirth;

        const secondAge = ("yearOfDeath" in second) 
            ? second.yearOfDeath - second.yearOfBirth 
            : currentYear - second.yearOfBirth;

        return secondAge - firstAge;
    });

    return array[0];

};

// Do not edit below this line
module.exports = findTheOldest;
