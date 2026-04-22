class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const m = {};
        for (let i = 0; i < nums.length; i++) {
            if (!!m[nums[i]]) {
                return true;
            }
            m[nums[i]] = true;
        }
        return false;
    }
}
