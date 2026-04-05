class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res= {}
        for (let str of strs) {
            let sortedStr= str.split('').sort().join('')

            if(!res[sortedStr]){
                res[sortedStr]=[]
            }

            res[sortedStr].push(str);
        }

        console.log(Object.values(res))
        return Object.values(res);
    }
}
