class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const r = [];
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let start = i + 1, end = nums.length - 1;
            while (start < end) {
                const total = nums[i] + nums[start] + nums[end];
                if (total === 0) {
                    r.push([nums[i], nums[start], nums[end]]);
                    start++;
                    end--;
                    while (start < end && nums[start] === nums[start - 1]) start++;
                    while (start < end && nums[end] === nums[end + 1]) end--;
                } else if (total < 0) {
                    start++;
                } else if (total > 0) {
                    end--;
                }
            };
        }
        return r;
    }
}
