/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length < 1 || strs.length > 200) {
        return ""
    }
    for (i = 0; i < strs.length; i++) {
        if (strs[i] < 1 || strs[i] > 200) {
            return ""
        }
    }
    strs.sort()
    let output = strs[0].split("");

    for (i = 1; i < strs.length; i++) {
        let temp = strs[i].split("")

        for (j = 0; j < Math.min(temp.length, output.length); j++) {
            if (temp[j] !== output[j]) {
                output = temp.slice(0, j)
            } else {
                continue
            }

        }
    }

    return output.join("")
}
