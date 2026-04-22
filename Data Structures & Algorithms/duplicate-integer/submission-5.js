class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {};
        return !nums.every(num => map[num] !== undefined ? false : map[num] = true)
    }
}
