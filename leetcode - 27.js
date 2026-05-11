/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

 // based in Rahul Varma algorithm
var removeElement = function(nums, val) {
    count = 0;
    
    for(let e = 0; e < nums.length ; e++){
        
        if(nums[e] != val){
            nums[count] = nums[e]
            count++;
        }
    }

    
    return count;
};
