/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //sort가 크기 순서대로 정렬하면 앞뒤로 비교해서 아닌 다른 하나를 찾아냄.
    nums.sort()
    for (var i = 0; i < nums.length; i += 2) {
        //중복요소는 두개씩 나오기 때문에 i를 2씩 증가시켜서 가능
        if (nums[i] !== nums[i + 1]) {
        return nums[i];
        }
    }
};
//[4,1,2,1,2] 11224
//0 1
//2 3
//4 5
//6 7