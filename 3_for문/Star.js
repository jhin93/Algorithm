const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
    let input = parseInt(line)
    let result = ''
    for(let i = 0; i < input; i ++){
        let stars = ''
        for(let j = 0; j <= i; j ++){
            stars += '*'
        }
        result += stars + '\n'
    }
    console.log(result)
  }).on("close", function() {
    process.exit();
  });