class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        let left = 0, right = s.length - 1;
        while (left < right) {
            if (!this.checkAN(s[left])) {
                left++;
                continue;
            }
            if (!this.checkAN(s[right])) {
                right--;
                continue;
            }
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    };

    checkAN(c) {
        const cc = c.charCodeAt(0);
        if ((cc > 47 && cc < 58) || (cc > 64 && cc < 91) || (cc > 96 && cc < 123)) {
            return true;
        }
        return false;
    }
}
