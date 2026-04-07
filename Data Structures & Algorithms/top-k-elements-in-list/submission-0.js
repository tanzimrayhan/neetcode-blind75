class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let bucketArr = Array.from({ length: nums.length + 1 }, () => []);
        let freqMap = {}

        for (let num of nums) {
            freqMap[num] = (freqMap[num] || 0) + 1;
        }

        for (const num in freqMap) {
            bucketArr[freqMap[num]].push(num)
        }
        let res = []
        for (let i = bucketArr.length - 1; i > 0; i--) {
            for (let n of bucketArr[i]) {
                res.push(n)
                if (res.length === k) {
                    return res
                }
            }
                
        }
    }
}
