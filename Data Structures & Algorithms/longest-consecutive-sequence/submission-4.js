class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length) return 0
        const sortedNums = [...new Set(nums)].sort((a, b) => a - b);

       let currentStreak = 1;
        let longStreak = 1;

        
        for(let i = 1; i < nums.length;i++) {
            if(sortedNums[i] === sortedNums[i - 1] + 1) {
                currentStreak++;
            } else {
                longStreak = Math.max(longStreak,currentStreak)  
                currentStreak = 1;
            }
            longStreak = Math.max(longStreak,currentStreak)  
        }
         longStreak = Math.max(longStreak,currentStreak) 

         return longStreak;
    }   
}
