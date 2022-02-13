const reverseString = function(inString) {
    let buffer = new Array();
    for (let character of inString) {
        buffer.unshift(character);
    }
    return buffer.join('');
};

// Do not edit below this line
module.exports = reverseString;
