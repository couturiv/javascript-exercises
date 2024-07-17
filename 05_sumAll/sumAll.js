const sumAll = function(firstNumber, lastNumber) {
    let sum = 0;
    let listNumbers = [];
    for (let i = firstNumber; i <= lastNumber; i++) {
        listNumbers.push(i);
    }

    for (let index = 0; index < listNumbers.length; index++) {
        sum += listNumbers[index];
    }

    return sum;
}

// Do not edit below this line
module.exports = sumAll;
