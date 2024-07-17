const reverseString = function(original) {
    let reverseString = "";
    for (let i = original.length -1; i >= 0; i--) {
        reverseString += original[i]
    }
    return reverseString;
}

// Do not edit below this line
module.exports = reverseString;