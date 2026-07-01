class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    let groupAnagramsList = new Map();


    for(let str of strs) {
        const sortedStr = str.split('').sort().join('')
        if(!groupAnagramsList.has(sortedStr)) {
            groupAnagramsList.set(sortedStr,[])
        }
        groupAnagramsList.get(sortedStr).push(str)
    }

    return Array.from(groupAnagramsList.values())
    }
}
