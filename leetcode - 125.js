/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    s = s.replaceAll(/[^a-zA-Z0-9]/g, '') // it's just need a regex.
    s = s.toLowerCase()
    s = s.split("");
    
    let j = s.length - 1;

    for(let i = 0; i < s.length; i++){
        if(s[i] != s[j]){
            return false;
        }
        j--;
    }
    return true;
};
