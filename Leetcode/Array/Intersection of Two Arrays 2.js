/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    //해쉬를 이용해서 풀 수 있음. 먼저 해쉬객체와 배열을 생성.
    const hash = {}, ar = []
    //예시 파라미터 nums1 = [1,2,2,1] nums2 = [2,2]
    //nums2의 요소가 hash라는 객체에 존재하면 그 프로퍼티를 1씩 증가시키고, 없으면 1 대입.
    nums2.forEach(num => {
        hash[num] ? hash[num]++ : hash[num] = 1
    })
    // hash === { '2' : 2 }
    for (let i = 0; i < nums1.length; i++){
        //만약 hash에 nums1의 요소가 존재한다면 최소 1일 것이기에 조건으로 담.
        if (hash[nums1[i]] > 0){
            //그 요소를 ar에 삽입,
            ar.push(nums1[i])
            //그리고 해당 요소의 밸류를 삽입한 만큼 감소(교집합만큼만 들어가도록 하는 조치임)
            //예를 들어 [1,2,2,1]과 [2]인 경우 답은 [2]가 나와야 함.[2,2]가 아니라.
            hash[nums1[i]]--
        }
    }
    return ar
};