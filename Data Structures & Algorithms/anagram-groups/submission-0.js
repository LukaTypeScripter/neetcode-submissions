class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groupAnagrams = new Map()

        for(const str of strs) {
            const sortedStr = str.split('').sort((a, b) => b.localeCompare(a)).join('');
            if(!groupAnagrams.has(sortedStr)) {
                groupAnagrams.set(sortedStr,[])
            }
            groupAnagrams.get(sortedStr).push(str)
        }
        return Array.from(groupAnagrams.values())
    }
}
