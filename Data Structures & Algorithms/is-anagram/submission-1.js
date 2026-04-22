class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        const x = {}
        s.split('').forEach(l => x[l] = ((x[l]??0) + 1));
        t.split('').forEach(l => x[l] = ((x[l]??0) - 1));
        return Object.values(x).every(v => v === 0)
    }
}
