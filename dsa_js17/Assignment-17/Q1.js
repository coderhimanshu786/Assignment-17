//COMPLEXITY
// TIME COMPLEXITY O(N)
// SPACE COMPLEXITY O(1)

const firstUniqChar = function (s) {
    for (i = 0; i < s.length; i++) {
        // This is the very simple solution
        // the indexOf method return the first index value and the lastIndexOf return the last index to the particular index value
        // If the duplicate value exists in the string the indexOf and lastIndexOf value does not equal
        // Our task is to find indexOf and lastIndexOf are diffrent.
        if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
            // console.log(`${s[i]} ${s.indexOf(s[i])} ${s.lastIndexOf(s[i])}`);
            return i;
        }
    }
    return -1;
};
//Print
//Example-1
 console.log(firstUniqChar("leetcode"));
//Example-2
console.log(firstUniqChar("loveleetcode"));
//Example-3
console.log(firstUniqChar("aabb"));
