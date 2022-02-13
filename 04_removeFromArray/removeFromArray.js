const removeFromArray = function(inArray) {
    let args = Array.from(arguments).slice(1);
    return inArray.filter(element => !args.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
