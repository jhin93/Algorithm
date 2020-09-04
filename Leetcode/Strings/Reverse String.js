/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    return s.reverse()
};


// 아래 식은 콘솔에서 답과 동일하게 출력되는데 페이지에서만 답 제출이 안된다. 이유는 불명.
// var reverseString = function(s) {
//     let result = [];
//     for(let i = 0; i < s.length; i ++){
//         result.unshift(s[i])
//     }
//     return result
// };