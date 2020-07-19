const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
    let input = parseInt(line)
    let result = ''
    for(let row = 0; row < input; row ++){
        let stars = ''
        let =blanks = ''
        for(let col = 0; col < input - row - 1; col ++){
          blanks += ' '
        }
        for(let col = 0; col <= row; col ++){
          stars += '*'
        }
        result += blanks + stars + '\n'
    }
    console.log(result)
  }).on("close", function() {
    process.exit();
  });