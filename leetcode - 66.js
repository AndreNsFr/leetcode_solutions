/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    num = BigInt(digits.join(''));
    num++;
    digits = Array.from(String(num), Number);
    
    return digits;
};
