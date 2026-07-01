class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isValidAlphaNumeric(char) {
        return  (char >= '0' && char <= '9') || 
                (char >= 'a' && char <= 'z') || 
                (char >= 'A' && char <= 'Z')
    }

    isPalindrome(s) {
        
        let newStr = '';

        for(const char of s) {
            if(this.isValidAlphaNumeric(char)) {
                newStr += char.toLowerCase()
            }
        }

     return newStr  === newStr.split('').reverse().join('')
    }
}
