/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //nums1부터 m까지만 잘라내기
    nums1.splice(m);
    //nums1에 nums2 요소들 넣기
    for(let i = 0; i < n; i ++){
        nums1.push(nums2[i])
    }
    //작은 수 -> 큰 수 정렬하는 sort 식.
    nums1.sort((a,b) => a - b)
};