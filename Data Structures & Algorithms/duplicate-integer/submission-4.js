class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const x = {};
        for(const num of nums){
            if(x[num]){
                return true
            }
            x[num] = true
        }
        return false
    }
}
