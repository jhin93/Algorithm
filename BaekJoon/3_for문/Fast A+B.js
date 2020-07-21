const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answer = ''
rl.on("line", function(line) {
    let input = line.split(' ')
    if(input.length === 2){
        let first = parseInt(input[0])
        let second = parseInt(input[1])
        answer += first + second + '\n'
      }
  }).on("close", function() {
    console.log(answer)
    process.exit()
  });