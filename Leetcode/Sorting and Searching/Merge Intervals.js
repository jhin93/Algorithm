/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length === 0){
        return intervals;
    }

    intervals.sort((a, b) => a[0] - b[0]);
    let min = intervals[0][0];
    let max = intervals[0][1];
    const answer = [];
    for(let i = 0; i < intervals.length - 1; i ++){
        if(max >= intervals[i + 1][0]){
            max = Math.max(max, intervals[i + 1][1]);
        }else{
            answer.push([min, max]);
            min = intervals[i + 1][0];
            max = intervals[i + 1][1];
        }
    }
    answer.push([min, max]);
    return answer;
};

// //앞 배열의 뒷 요소가 뒷 배열의 앞 요소 보다 크거나 같으면 합침
// for(let i = 0; i < intervals.length; i ++){
//     if(intervals[i][1] >= intervals[i+1][0]){
//         //합침
//        let integrated = intervals[i].concat(intervals[i+1])
//         //두번째 요소 삭제
//         integrated.splice(1, 1)
//         //세번째 요소 삭제
//         integrated.splice(2, 1)
//         //intergrated 배열 다시 어딘가에 담는 것이 필요
//         //
//     }else{
//         return intervals
//     }//else 일 경우, if문을 만족하지 않으면 intervals 있는 그대로 리턴
// }
    