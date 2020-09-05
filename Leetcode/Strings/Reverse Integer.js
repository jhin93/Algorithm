/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //처음에 시작할 때 양수와 음수를 조건문으로 나누지 않고, 둘다 적용될 동일한 식을 먼저 작성한 후에 음수일 경우만 따로 처리한다
    //x가 음수일 경우 reverse 함수를 내부에서 다시 호출하므로 재귀라고 볼 수도 있을 듯.
    //이런 방식을 실제로 쓸 수 있게 반복학습해야 함.
    if (x < 0) return -1 * reverse(-x)
    //아래 식까지는 스스로 만들었다. 
    const r = Number(String(x).split('').reverse().join(''), 10);
    // 제곱을 **라고 표현하는 건 이번에 처음 알았다.
    if (r > 2 ** 31 - 1) return 0;
    return r;      
  };
};