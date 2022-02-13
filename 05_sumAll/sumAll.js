const sumAll = function(inputA, inputB) {
    if (typeof inputA != 'number' || typeof inputB != 'number' ||
        inputA < 0 || inputB < 0) {
        return 'ERROR';
    }
    let max = Math.max(inputA, inputB);
    let min = Math.min(inputA, inputB);
    return (max - min + 1) * (max + min) / 2;
};

// Do not edit below this line
module.exports = sumAll;
