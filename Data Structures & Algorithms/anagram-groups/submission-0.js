class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const m = {};
        strs.forEach(str => {
            const array = Array(26).fill(0);
            for (const c of str) {
                array[c.charCodeAt(0) - 97]++;
            };
            const key = array.join();
            if (m[key]) {
                m[key].push(str);
            } else {
                m[key] = [str];
            };
        });
        return Object.values(m);
    }
}
