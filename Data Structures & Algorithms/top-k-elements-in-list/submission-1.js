class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
  const frequencyMap = new Map();

  for (let num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  const bucket = new Array(nums.length + 1).fill(null).map(() => []);
  // add in bucket
  for (const [num, freq] of frequencyMap) {
    bucket[freq].push(Number(num));
  }

  const result = [];
  for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
    console.log(bucket[i].length);
    if (bucket[i].length > 0) {
      result.push(...bucket[i]);
    }
  }

  return result;

    }
}
