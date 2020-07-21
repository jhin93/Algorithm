/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
    //끝자리인 n이 불량품일 때 그 앞의 불량품 중 가장 작은 값을 찾아야 한다.
       let start = 1;
       let last = n;
       let middle = 0;
       let answer = Infinity;
       while(start <= last) {
          middle = Math.floor((start + last) * 0.5)
          if(isBadVersion(middle)){
              //어떤 값이 와도 middle 이 최소가 될 수 있게 answer 값을 infinity로 설정.
              answer = Math.min(middle, answer)
              last = middle - 1
          }else{
              start = middle + 1
          }
       }
       return answer
    };
};