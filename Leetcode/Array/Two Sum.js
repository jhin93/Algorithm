/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        //내가 해결하지 못했던 요소 제외를 i+1로 간단히 해결할 수 있었다.
        for(let j=i+1;j<nums.length;j++){
            //더해서 해결
            if((nums[i] + nums[j]) === target)
                return [i, j];
        }
    }
  };