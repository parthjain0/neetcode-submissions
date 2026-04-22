class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let m = {};
        for (let i = 0; i < nums.length; i++) {
            if (m.hasOwnProperty(target - nums[i])) {
                return [m[target - nums[i]], i];
            }
            m[nums[i]] = i;
        }
    }
}
