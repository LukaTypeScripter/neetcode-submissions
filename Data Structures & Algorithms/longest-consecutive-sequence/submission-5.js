class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    if(!nums.length) return 0;

    const sortedNumbers = [...new Set(nums)].sort((a,b) => a - b);

    let currentStreak = 1;
    let longestStreak = 1;

    for(let i = 1; i < sortedNumbers.length;i++) {
        if(sortedNumbers[i] === sortedNumbers[i - 1] + 1) {
            currentStreak++
        } else {
            longestStreak = Math.max(longestStreak,currentStreak)
            currentStreak = 1;
        }
        longestStreak = Math.max(longestStreak,currentStreak)
    }

    return longestStreak
    }
}
