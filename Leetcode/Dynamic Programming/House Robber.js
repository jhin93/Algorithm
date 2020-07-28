/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0) return 0;

    let maxSum = [];
    for(let i = 0; i < nums.length; i ++){
        let curHouse = nums[i];
        let oneStepBackMax = maxSum[i - 1] || 0;
        let twoStepBackMax = maxSum[i - 2] || 0;
        maxSum.push(Math.max((curHouse + twoStepBackMax), oneStepBackMax))
    }
    return maxSum[nums.length - 1]
};
// https://medium.com/outco/how-to-solve-the-house-robber-problem-f3535ebaef1b