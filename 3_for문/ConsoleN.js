const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answer = ''
rl.on("line", function(line) {
    let input = parseInt(line)
    for(let i = 1; i <= input; i ++){
      answer += i + '\n'
    }
  }).on("close", function() {
    console.log(answer)
    process.exit()
  });