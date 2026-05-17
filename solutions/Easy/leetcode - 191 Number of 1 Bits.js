/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    let byte = n.toString(2).split("");
    let count = 0;

    byte.forEach((bit) => {
        if (bit == "1") {
            count++;
        }
    })

    return count;


};