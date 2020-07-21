const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on("line", function(line) {
  input.push(line);
}).on("close", function() {
  console.log('강한친구 대한육군')
  console.log('강한친구 대한육군')
  process.exit();
});