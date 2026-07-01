class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let decodedStr = '';
        let sizes = [];

        for(let str of strs) {
            sizes.push(str.length)
        }
   
        for(let sz of sizes) {
            decodedStr += sz + ','
        }

        decodedStr += '#'
         for(let s of strs) {
            decodedStr += s
        }

        return decodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) return [];

        let st = [],sizes = [],i = 0
        while(str[i] !== '#') {
            let cur = '';
            while(str[i] !== ',') {
                cur += str[i]
                i++
            }
                sizes.push(parseInt(cur));
            i++
        }
        i++
        for(let stringSize of sizes) {
            st.push(str.substr(i,stringSize))
            i += stringSize;
        }
       return st
    }
}
