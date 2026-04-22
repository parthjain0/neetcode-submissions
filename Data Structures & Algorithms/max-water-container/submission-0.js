class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let left = 0, right = heights.length - 1;
        while (left < right) {
            const area = (right - left) * Math.min(heights[left], heights[right]);
            if (maxArea < area) {
                maxArea = area;
            }
            if (heights[left] >= heights[right]) {
                right--;
            } else {
                left++;
            }
        }
        return maxArea;
    }
}
