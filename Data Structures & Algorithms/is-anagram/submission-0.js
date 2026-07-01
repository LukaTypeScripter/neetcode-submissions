class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        const charCount = new Map()

        for(const char of s) {
            charCount.set(char, (charCount.get(char) || 0) + 1);
             console.log(charCount)
        }
  
        for(const char of t) {
            if(!charCount.get(char)) return false
            charCount.set(char,charCount.get(char) - 1)
            if(charCount.get(char) < 0) return false
        }
        for(const count of charCount.values()) {
            if(count !== 0) return false
        }


        return true
    }
}
