const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
  input = parseInt(line);
}).on("close", function() {
  const multiply = (number) => {
    for(let i = 1; i <= 9; i ++){
      console.log(number, '*', i, '=', number*i);
    }
  }
  multiply(input);
  process.exit();
});