/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    //끝에서 시작으로 반복문을 돌린다. 그리고 0에 해당하는 부분을 잘라내고 끝에 붙인다.
    //i ++로 하면 아마 끝에가서 붙고 다시 0으로 인식당해서 잘리고 다시 push하고 이걸 반복해서 타임리밋이 뜬 것 같다.
    for(let i = nums.length; i --;){
        if(nums[i] === 0){
            nums.splice(i,1)
            nums.push(0);
        }
    }
};