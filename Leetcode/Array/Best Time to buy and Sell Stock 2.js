/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //답으로 제출할 초기값을 설정한다.
    let result = 0
    //가격의 변화를 알아야 하기 때문에 입력값(배열) 내부에서 전체 반복문을 돌린다.
    for(let i = 0; i < prices.length; i ++){
        //전날보다 다음날의 가격이 비싸야 한다는 것을 조건문으로 작성한다.
        if(prices[i] < prices[i+1]){
            //조건문 하에서 두 가격의 차이(비싼날 가격 - 싼날 가격)을 초기값에 더해나간다.
           result += prices[i+1] - prices[i]
           }
    }
    return result
};