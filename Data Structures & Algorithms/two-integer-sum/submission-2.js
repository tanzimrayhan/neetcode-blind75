class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i =0; i<nums.length; i++){
            if( nums.includes(target-nums[i]) && nums.indexOf(target-nums[i])!==i)
                return [i, nums.indexOf(target-nums[i])]
        

        }
    }
}
