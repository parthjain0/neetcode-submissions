class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0,
            cmp = 0;
        prices.forEach((price, index) => {
            if (index === 0) return;
            if (cmp < price - prices[i]) {
                cmp = price - prices[i];
            }
            if(price < prices[i]){
                i = index
            }
        });
        return cmp;
    }
}
