const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
    const input = parseInt(line)
    let Allsum = (n) => {
        return n*(n+1)/2
    }
    console.log(Allsum(input))
  }).on("close", function() {
    process.exit()
  });