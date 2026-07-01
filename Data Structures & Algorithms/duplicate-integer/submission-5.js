class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const duplicates = new Set();

        for(let num of nums) {

            if(duplicates.has(num)) {
                return true
            }

            duplicates.add(num)

        }

        return false

    }
}
