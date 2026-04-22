class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let m = {};
        const array = Array(nums.length).fill(0);
        for (const num of nums) m[num] = (m[num] || 0) + 1;
        for (const [k, v] of Object.entries(m)) {
            if (array[v - 1]) {
                array[v - 1].push(k);
            } else {
                array[v - 1] = [k];
            };
        }
        m = [];
        for (let i = array.length - 1; i >= 0; --i) {
            if (!array[i]) continue;
            for (const val of array[i]) {
                if (k <= 0) return m;
                m.push(val);
                k--;
            }
        }
        return m;
    }
}
