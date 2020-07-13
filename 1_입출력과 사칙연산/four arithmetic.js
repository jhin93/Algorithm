const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

console.log(Number(input[0]) + Number(input[1]));
console.log(Number(input[0]) - Number(input[1]));
console.log(Number(input[0]) * Number(input[1]));
console.log(parseInt(Number(input[0]) / Number(input[1])));
console.log(Number(input[0]) % Number(input[1]));