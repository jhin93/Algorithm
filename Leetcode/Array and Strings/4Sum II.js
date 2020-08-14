/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    //둘씩 나눠서 0이되는 조합
    //경우의 수
    //0이 되는 경우의 수를 출력
    //A,B,C,D 전부 반복문 돌리면 런타임 에러남. 그래서 A+B+C+D = 0으로 접근하기보다, A+B = -(C+D)로 나눠서 접근하는게 나음.
    var mp = {};
    for(var i=0; i<C.length; i++) {
        for(var j=0; j<D.length; j++) {
            var sum = C[i] + D[j];
            mp[sum] = mp[sum] + 1 || 1;
        }
    }
    
    var res=0;
    for(var i=0; i<A.length; i++) {
        for(var j=0; j<B.length; j++) {
            res += mp[-1 * (A[i]+B[j])] || 0;
        }
    }
    
    return res;
};

// 16~17번째 줄은 다음 코드를 압축시킨 것이다.
// if(mp[C[i] + D[j]] === undefined){
//     mp[C[i] + D[j]] = 1;
// }else{
//     mp[C[i] + D[j]]
// }