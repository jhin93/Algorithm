/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    //뒤에서 앞으로 가는 숫자들을 원본 배열에서 복사해낸다.
    let rear = nums.slice(nums.length - k) // ex [5,6,7]
    //앞에서부터 뒤로 움직이는 숫자들을 원본 배열에서 복사해낸다.
    let front = nums.slice(0, nums.length - k) // ex [1,2,3,4]
    //nums의 맨앞부터 차례대로 rear의 요소들을 차례대로 입력한다.
    for(let i = 0; i < rear.length; i ++){
        nums[i] = rear[i]
    }
    for(let i = 0; i < front.length; i ++){
        //rear의 다음 요소부터 front의 요소로 대체.
        nums[rear.length + i] = front[i]
    }
    //slice한 것을 변수에 담은 것까지는 좋으나, 그것을 원래 배열(nums)의 변형에 사용했어야 하는 듯
    //변수끼리의 공정으로 결과를 도출하지 말것. nums를 변형시키는 것이 문제의 의도.
};