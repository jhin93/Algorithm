const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const score = parseInt(input)
// 100 >= 이라는 조건이 있으면 A만 출력이 안된다.
// <= 100 이라는 조건이 있으면 A만 출력된다.
// 숫자 <= 변수 <= 숫자 - 이런 부등호 식은 크거나 작거나 둘 중 하나만 적용되는 모양이다. &&으로 한번 끊어야 하는 듯.
if (90 <= score && score <= 100){
  console.log('A')
}else if (80 <= score){
  console.log('B');
}else if (70 <= score){
  console.log('C');
}else if (60 <= score){
  console.log('D');
}else{
  console.log('F');
}