if(numRows === 0) return [];
    
let arr = [[1]];

for(let i = 1; i < numRows; i++) {
    arr[i] = [];
    for(let j = 0; j < i + 1; j++) {
        const left = arr[i - 1][j - 1] || 0;
        const right = arr[i - 1][j] || 0;
        arr[i].push(left + right);
    }
}

return arr;