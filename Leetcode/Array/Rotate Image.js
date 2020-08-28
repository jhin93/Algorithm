/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    //반복문을 두번 중첩해서 작성한다.
    for(let i = 0; i < matrix.length; i ++){
        //j를 i보다 1만큼 큰 초기값을 설정한다.
        for(let j = i+1; j < matrix[i].length; j ++){
            //현재 요소의 값을 변수에 담는다.
            let temp = matrix[i][j] // ex matrix[0][1] = 2
            //가로좌표와 세로좌표의 위치를 바꾼다.
            matrix[i][j] = matrix[j][i] // matrix[0][1] = matrix [1][0]
            // 바뀐 위치에 값을 삽입한다.
            matrix[j][i] = temp // matrix[1][0] = 2
        }
    }
    // 값들을 대입하고 나면 정답과 반대의 순서기 때문에 reverse 메소드로 뒤바꾼다.
    for(let i = 0; i < matrix.length; i ++){
        matrix[i].reverse()
    }  
};