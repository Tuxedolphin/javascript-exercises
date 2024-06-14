const palindromes = function (string) {
    string = string.split("").filter((element) => {
        return element && !["!", ",", "."].includes(element) && element !== " ";
    });

    

    for (let i = 0; i < (string.length / 2); i++) {
        if (string[i].toLowerCase() != string[string.length -1 - i].toLowerCase()) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
