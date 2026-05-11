/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let j = 0; 
    for(let e = 0; e < nums.length; e++){
        if(nums[e] != nums[j]){
            j++; 
            nums[j] = nums[e];
        }    
    }

    return j + 1;
};
