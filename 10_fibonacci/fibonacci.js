function calculate(current, depth) {
    
    if (depth < 0) {
        return current
    }

    if (depth == 1) {
        answer = current + 1;
        return answer;
    }

    if (depth == 2) {
        answer = current + 1;
        return calculate(answer, depth - 1);
    } else {
        return calculate(current, depth - 1) + calculate(current, depth - 2);
    }
}

const fibonacci = function(depth) {

    if (depth < 0) {
        return "OOPS"
    }

    if (depth == 1) {
        return 1
    }

    return calculate(0, depth - 1);

};

// Do not edit below this line
module.exports = fibonacci;
