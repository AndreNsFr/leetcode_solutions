/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {

    let jewelsSet = new Set([...jewels]);
    let stonesArray = stones.split("");
    let result = 0;

    stonesArray.forEach((stone) => {
        if (jewelsSet.has(stone)) {
            result++;
        }
    })

    return result;

};