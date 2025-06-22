/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbolMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let inputArr = s.split("");

  let outputArr = [];
  inputArr.forEach((item) => {
    outputArr.push(symbolMap.get(item));
  });

  let output = 0;

  for (let i = 0; i < outputArr.length; i++) {
    if (i < outputArr.length - 1 && outputArr[i + 1] > outputArr[i]) {
      output += outputArr[i + 1] - outputArr[i];
      i++;
    } else {
      output += outputArr[i];
    }
  }
  return output;
};
