const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on("line", function(line) {
  input.push(line);
}).on("close", function() {
  const Cat = 
  `   \\    /\\\n\
    )  ( \')\n\
   (  /  )\n\
    \\(__)|\n`;
  console.log(Cat)
  process.exit();
});