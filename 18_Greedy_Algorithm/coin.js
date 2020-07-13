const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on("line", function(line) {
  input.push(line);
}).on("close", function() {
  //동전의 종류가  N개이고, K원을 만들어야 한다.
  //K원을 만들기 위해 필요한 동전 개수의 최솟값을 구해라.
  // ex) 4790원 -> 1000원 4개 + 500원 1개 + 100원 2개 + 50원 1개 + 10원 4개 = 12개
  // 각각의 자릿수의 단위에 해당하는 수 중에서 가장 큰 단위의 동전의 개수를 구한다.
  function GetSmallestSum(N, Arr){
    // N은 주어진 배열의 length - 1 값.
    // K는 목표값.
    K === Arr[0][1]
    N === Arr.length - 1
    // Arr의 두번째 요소부터 for문을 사용해서 
  }
    
  process.exit();
});