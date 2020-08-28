/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //sort가 크기 순서대로 정렬하면 앞뒤로 비교해서 아닌 다른 하나를 찾아냄.
    nums.sort()
    //크기 순으로 정렬했을 때, 중복되는 것들은 크기가 같기 떄문에 i를 2씩 증가시킨다
    for (var i = 0; i < nums.length; i += 2) {
        // i가 2씩 증가할 때 nums가 홀수이기에 맨 마지막 요소만 혼자 남는다.
        // 그때 그 다음 요소는 undefined기 때문에 마지막 요소와 다르기에 답이 된다.
        if (nums[i] !== nums[i + 1]) {
        return nums[i];
        }
    }
};
