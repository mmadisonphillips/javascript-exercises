const ftoc = function(f) {
    return Math.round(10 * (f - 32) * 5 / 9) / 10;
};

const ctof = function(c) {
    return Math.round(10 * (32 + c * 9 / 5)) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
