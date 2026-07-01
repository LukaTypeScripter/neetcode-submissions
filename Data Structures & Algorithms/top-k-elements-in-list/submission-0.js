class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    let fStoreM = new Map();

  for (let item of nums) {
    fStoreM.set(item, (fStoreM.get(item) || 0) + 1);
  }
    const sortedChunk = Array.from(fStoreM).sort((a, b) => b[1] - a[1]).slice(0,k)
    const chunkValues = sortedChunk.map((item) => item[0])

    return  chunkValues
    }
}