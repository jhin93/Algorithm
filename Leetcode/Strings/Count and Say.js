/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = '1'
    for (let i = 1; i < n; i ++){
        result = countNum(result)
    }
    return result;
};

function countNum(num){
    let result =''
    let count = 0
    for(let i = 0; i < num.length; i ++){
        count += 1
        if(num[i] !== num[i+1]){
            result += '' + count + num[i]
            count = 0;
        }
    }
    return result
}