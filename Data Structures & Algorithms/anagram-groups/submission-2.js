class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groupAnagramsMap = new Map();
        

        for(let i = 0 ; i < strs.length;i++) {
           const count = new Array(26).fill(0);
            for(let j = 0;j < strs[i].length;j++) {
                   count[strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0)] += 1 
            }

            const key = count.join(',')

                if(!groupAnagramsMap.has(key)) {
                groupAnagramsMap.set(key,[])
                }


         groupAnagramsMap.get(key).push(strs[i])
        }


        return [...groupAnagramsMap.values()]
    }
}
