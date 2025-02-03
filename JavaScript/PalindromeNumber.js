/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let lowerbound = -Math.pow(2, 31)
    let upperbound = Math.pow(2, 31)
    if (x < lowerbound || x > upperbound) {
        return false
    }
    let temp = String(x)
    let reverse = temp.split("").reverse().join("")
    if (temp == reverse) {
        return true
    } else {
        return false
    }
};
