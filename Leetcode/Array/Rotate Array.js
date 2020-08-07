/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let rear = nums.slice(nums.length - k)
    let front = nums.slice(0, nums.length - k)
    
    for(let i = 0; i < rear.length; i ++){
        nums[i] = rear[i]
    }
    for(let i = 0; i < front.length; i ++){
        nums[rear.length + i] = front[i]
    }
    //slice한 것을 변수에 담은 것까지는 좋으나, 그것을 원래 배열(nums)의 변형에 사용했어야 하는 듯
    //변수끼리의 공정으로 결과를 도출하지 말것. nums를 변형시키는 것이 문제의 의도.
};