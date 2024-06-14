const getTheTitles = function(array) {
    let book_list = []
    
    for (const dict of array) {
        book_list.push(dict["title"])
    }

    return book_list
};

// Do not edit below this line
module.exports = getTheTitles;
