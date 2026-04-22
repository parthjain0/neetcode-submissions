class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const a = {};
        for(const num of nums){
            if(a[num]){
                return true;
            }
            a[num] = true;
        }
        return false;
    }
}
