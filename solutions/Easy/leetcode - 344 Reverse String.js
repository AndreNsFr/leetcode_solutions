/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let j = s.length; 
    for(let i = 0; i < s.length / 2; i++){
        j--;
        temp_char = s[i];
        s[i] = s[j];
        s[j] = temp_char;
    }
};
