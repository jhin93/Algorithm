/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let mask = x ^ y;
    let count = 0;
  
    while (mask > 0) {
      count += mask & 1;
      mask >>= 1;
    }
  
    return count;
  };