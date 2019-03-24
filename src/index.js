module.exports = function solveSudoku(matrix) {
  let n = 10;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][j] = n;
        n++;
      }
    }
  }
  return matrix;
}
