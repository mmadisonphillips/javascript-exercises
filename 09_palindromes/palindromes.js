const palindromes = function (inString) {
  let letterArray = inString.toLowerCase().match(/[a-z]/g);
  for (let i = 0; i < letterArray.length/2; i++) {
    if (letterArray[i] !== letterArray[letterArray.length-1-i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
