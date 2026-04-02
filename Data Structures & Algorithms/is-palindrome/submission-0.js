class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s=s.toLowerCase().replace(/[^a-z0-9]/g, '')
        for(let i=0, j=s.length-1; i<j; i++){
            if(s[i]!==s[j]) {
                return false
            }
            j--
        }
        return true
    }
}
