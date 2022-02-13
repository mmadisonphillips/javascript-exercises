const repeatString = function(inString, num) {
    if (typeof num != 'number' || num < 0) { 
        return 'ERROR';
    }
    return Array(num).fill(inString).join('');
};

// Do not edit below this line
module.exports = repeatString;
