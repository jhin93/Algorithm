/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //문자별 값 정해놓기
    //반복문과 조건문으로 값 비교
    let RomToInt = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    let answer = 0
    for(let i = 0; i < s.length; i ++){
        if(RomToInt[s[i]] < RomToInt[s[i+1]]){
           answer -= RomToInt[s[i]]
        }else {
           answer += RomToInt[s[i]]  
        }
    }
    return answer
};