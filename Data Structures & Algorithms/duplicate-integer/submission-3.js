class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const x = {};
        for(let num of nums){
            if(x[num] !== undefined){
                return true
            }
            x[num] = true
        }
        return false
    }
}
