class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max=0;
        for (let l=0,r=l+1;  r<prices.length; r++) {
            if(prices[l]<prices[r]){
                let profit= prices[r]- prices[l];
                max=Math.max(max, profit)
            }
            
            else {
                l=r
            }
        }
        return max
    }
}
