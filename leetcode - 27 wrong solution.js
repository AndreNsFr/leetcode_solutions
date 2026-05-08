/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = nums.lengeth;
    let j = count - 1;
    for(let e = 0; e < nums.length/2 ; e++){
        
        if(nums[e] == val){
            nums[e] = undefined
            count--;
        }
        if(nums[j] == val){
            nums[j] = undefined
            count--;
        }
        j--;
    }

    nums.sort()
    
    return count;
};
