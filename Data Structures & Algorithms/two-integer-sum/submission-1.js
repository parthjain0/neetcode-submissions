class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {};
        for(let i = 0; i < nums.length; i++){
            if(map[target-nums[i]] !== undefined){
                if(map[target-nums[i]] > i){
                    return [i, map[target-nums[i]]]
                }
                return [map[target-nums[i]], i]
            }
            map[nums[i]] = i;
        }
    }
}
