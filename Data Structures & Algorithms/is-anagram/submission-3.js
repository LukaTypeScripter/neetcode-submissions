class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const firstStringMap = new Map();
        const secondStringMap = new Map();

        for (let i = 0; i < s.length; i++) {
            if (!firstStringMap.has(s[i])) {
                firstStringMap.set(s[i], 0);
                continue;
            }

            firstStringMap.set(s[i], firstStringMap.get(s[i]) + 1);
        }

        for (let i = 0; i < t.length; i++) {
            if (!secondStringMap.has(t[i])) {
                secondStringMap.set(t[i], 0);
                continue;
            }

            secondStringMap.set(t[i], secondStringMap.get(t[i]) + 1);
        }

        const secondStringMapKeys = [...secondStringMap.keys()];

        console.log(secondStringMap,firstStringMap)


        for(let str of secondStringMapKeys) {

            if(!firstStringMap.has(str) || secondStringMap.get(str) !== firstStringMap.get(str)) {
                return false;
            }

        }

        return true;
    }
}
