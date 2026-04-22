class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxDif = 0;
        let lmin = 0;
        let lmax = 0;
        prices.forEach((price, index) => {
            if (index === 0) {
                lmin = lmax = price;
            } else {
                if (price < lmin) {
                    lmin = lmax = price;
                } else if (price > lmax) {
                    lmax = price;
                }
                if (maxDif < lmax - lmin) {
                    maxDif = lmax - lmin;
                }
            }
        })
        return maxDif;
    }
}
