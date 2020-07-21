const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on("line", function(line) {
    input.push(line.split(' '))
  }).on("close", function() {
    const num = parseInt(input[0])
    let result = ''
    for(let i = 1; i <= num; i ++){
      let first = parseInt(input[i][0])
      let second = parseInt(input[i][1])
      result += `Case #${i}: ${first} + ${second} = ${first+second}\n`;
    }
    console.log(result)
    process.exit()
  });