const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  
  return array.reduce((total, currentItem) => {
    return total += currentItem
  }, 0);
};

const multiply = function(array) {
  return array.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(numb) {
	if (numb === 0 || numb === 1) {
    return 1
  }

  result = 1

  for (let i = numb; i > 0; i--) {
    result = result * i
  }

  return result

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
