const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const A = input[0]
const B = input[1]

let first = A.split(' ')
let second = B.split(' ')
// Y중에서 X[1]보다 확실히 작은 수만 출력한다
// for문 안에서 빈 배열 생성시 돌때마다 초기화가 된 것이 문제. 그래서 i 마다 빈배열이 생김.
// let을 for문 안에서 선언할 시 어떤 문제? 블록 스코프라서 나올 수 없음. 
// 이 문제 같은 경우는 let은 재선언이 가능해서 반복할 때마다 변수가 초기화될 상황이 생길 수 있다.

let answer = []
for(let i = 0; i < second.length; i ++){
  //for문 안에서 parseInt를 하는 것 역시 방법.
  const X = parseInt(first[1])
  const numbers = parseInt(second[i])
  if(numbers < X){
    answer.push(numbers)
  }
}
console.log(answer.join(' '))

