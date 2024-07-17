const removeFromArray = function(originalArray, ...itemToRemove) { 
    const updatedArray = [];
    originalArray.forEach((item) => {
        if (!itemToRemove.includes(item)) {
            updatedArray.push(item);
        }
    });
    return updatedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
