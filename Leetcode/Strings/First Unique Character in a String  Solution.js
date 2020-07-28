/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for(i=0;i<s.length;i++){
        //중복되는 첫번째 인덱스(indexOf)와 중복되는 마지막 인덱스(lastIndexOf)가 같은 i 반환
        if (s.indexOf(s[i])===s.lastIndexOf(s[i])){
           return i;
       } 
    }
    return -1;
 };