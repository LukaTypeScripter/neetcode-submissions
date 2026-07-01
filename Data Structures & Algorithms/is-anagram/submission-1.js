class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const collect = {};

        for(let char of s) {
        collect[char] = (collect[char] || 0) + 1;
        }
   
        for(let char of t) {
            if(!collect[char]) return false;
             collect[char]--;
        }

        return true

    }
}
