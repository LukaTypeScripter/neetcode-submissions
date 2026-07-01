class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const storeIndexies = new Map();
        for(let i = 0; i < nums.length;i++) {
            const complement = target - nums[i]
            
            if(storeIndexies.has(nums[i])) {
                return [i,storeIndexies.get(nums[i])]
            }
            storeIndexies.set(complement,i)
        } 
        return []
    }
}
