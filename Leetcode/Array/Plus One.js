/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    //digits의 끝자리부터 시작하는 반복문을 작성한다.
    for(let i = digits.length - 1; i >= 0; i--){
        //해당 자릿수가 9보다 작을땐, 수를 하나 증가시키고 끝낸다.
        if (digits[i] < 9){ //998->999  989->990
            digits[i]++;
            return digits;
        }
        //만약 해당 자릿수가 9보다 작지 않을 때, 자릿수를 0으로 만들고 다시 반복문을 돈다.
        else{
            digits[i] = 0;
        }
    }
    //전체 자릿수가 증가하는 케이스만 따로 작성한다.
    //기존 digits의 length와 동일한 배열을 만들고(new Array) 그 안을 전부 0으로 채운다(fill(0))
    let digitIncrease = new Array(digits.length).fill(0);
    //새로 만든 배열의 맨 앞에 1을 추가한다.
    digitIncrease.unshift(1);
    return digitIncrease;
  };