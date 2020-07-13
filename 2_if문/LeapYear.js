const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const LeapYear = parseInt(input)
//4의 배수이거나 400의 배수면 됨.
if (LeapYear % 4 === 0 && LeapYear % 100 !== 0){
  console.log(1)
}else if(LeapYear % 400 === 0){
  console.log(1);
}else {
  console.log(0);
}