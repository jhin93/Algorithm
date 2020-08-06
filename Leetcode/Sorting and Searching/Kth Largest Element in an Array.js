/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    //내림차순으로 정렬
    let descending = nums.sort((a,b) => b-a)
    //k번째 추출
    return descending[k-1]
};