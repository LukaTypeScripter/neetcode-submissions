class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countOccuriencies = new Map();
         for (let i = 0; i < nums.length;i++) {
            countOccuriencies.set(nums[i],(countOccuriencies.get(nums[i]) || 0) + 1)
         }

         const sortByOccuriencies = Array.from(countOccuriencies).sort((a,b) => b[1] - a[1]).slice(0,k)
        console.log(sortByOccuriencies)
        return sortByOccuriencies.map((d) => d[0])
    }
}