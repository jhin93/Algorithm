/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //new Set로 중복을 없앤 후의 크기(size)가 원본과 다른지 확인한다.
    //만약 다르다면 true이므로 문제가 의도한 정답이 된다.
    return new Set(nums).size !== nums.length;
};