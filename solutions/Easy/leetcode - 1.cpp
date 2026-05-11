class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        
        unordered_map<int,int> memory;

        for(int i = 0; i < nums.size(); i++){
            int temp_sum = target - nums[i] ;

            if(memory.contains(nums[i])){
                return {memory[nums[i]], i };
            }else{
                memory.emplace(temp_sum, i);
            }
        }
        
        return {0,0};
    }
};
