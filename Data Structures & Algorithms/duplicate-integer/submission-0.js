class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const duplicats = new Set()
        for(const num of nums) {
            if(duplicats.has(num)) {
               return true 
            }
            duplicats.add(num)
        }
        return false
    }
}
