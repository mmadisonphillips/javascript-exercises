const fibonacci = function(n) {
  n = parseInt(n);
  if (typeof n != 'number' || n < 1 ) return 'OOPS';
  let fibArray = [1,1];
  for (let i = 2; i < n; i++) {
    fibArray.push(fibArray[i-1] + fibArray[i-2]);
  }
  console.log(fibArray);
  return fibArray[n-1];
};

// Do not edit below this line
module.exports = fibonacci;
