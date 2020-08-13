/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    //다 곱한다음 그 수를 i번째의 수로 나눠서 빈배열에 담기.reduce메서드 + /(나누기).실패 
    //해당 원소만 제외한 배열에서 전부 곱하기. splice 메서드 사용.
    //왜 13,17번째 줄이 서로 다른가
    var output = [];
    var leftMult = 1;
    var rightMult = 1;
    for (var i=nums.length - 1; i >= 0; i--) {
        output[i] = rightMult;
        rightMult *= nums[i];
    }
    for (var j=0; j < nums.length; j++) {
        output[j] *= leftMult;
        leftMult *= nums[j];
    }
    return output;
};