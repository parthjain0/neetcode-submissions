class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = {};
        s.split('').forEach(l => map[l] = (map[l] ?? 0) + 1);
        t.split('').forEach(l => map[l] = (map[l] ?? 0) - 1);
        return Object.values(map).every(l => l === 0);
    }
}
