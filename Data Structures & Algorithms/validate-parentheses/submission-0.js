class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false;
        const f = [];
        for (const i of s) {
            if (i === '(' || i === '{' || i === '[') {
                f.push(i);
            } else if (i === ')' && f.at(-1) === '(') {
                f.pop();
            } else if (i === '}' && f.at(-1) === '{') {
                f.pop();
            } else if (i === ']' && f.at(-1) === '[') {
                f.pop();
            } else {
                return false;
            };
        };
        return f.length === 0;
    }
}
