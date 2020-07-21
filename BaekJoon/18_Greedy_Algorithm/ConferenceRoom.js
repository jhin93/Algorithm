const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on("line", function(line) {
  input.push(line);
}).on("close", function() {
  function MaximumConference (N, Arr){
    N === Arr.length
    //반복문으로 겹치지 않는 요소를 추출하고 그 개수를 출력한다.
    for(let i = 1; i < N; i ++){
    let result = 0
      if(Arr[i][1] < Arr[i+1][0]){
        let MaximumArr = []
        let answer = MaximumArr.push(Arr[i][1])
        result = answer.length;
        return result
      }
    }
  }
  console.log(MaximumConference());
  process.exit();
});