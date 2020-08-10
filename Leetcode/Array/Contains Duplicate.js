/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //new Set로 중복을 없앤 후의 크기(size)가 원본과 다른지 확인.
    return new Set(nums).size !== nums.length;
};