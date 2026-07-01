class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const removedDuplicates = [...new Set(nums)]
        return removedDuplicates.length !== nums.length
    }
}
