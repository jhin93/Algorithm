/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    //3의 배수는 Fizz로 대체, 5의 배수는 Buzz로 대체
    //3과 5의 공배수는 FizzBuzz로 대체
    let arr = []
    for(let i = 1; i <= n; i ++){
        if( i % 3 === 0){
           i = "Fizz"
        }else if( i % 5 === 0){
           i = "Buzz"
        }else if( i % 3 === 0 && i % 5 === 0){
           i = "FizzBuzz"
        }
        arr.push(i)
    }
    let answer = arr.map(String)
    console.log(answer)
};