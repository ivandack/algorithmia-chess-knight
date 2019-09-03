/*
 * 1. Create 2 matrices A1 and A2
 * 2. Initialize A1 [r][c] = 1. The rest in both matrices with 0
 * 3. Perform k times:
 *   3.1. Update (according the recursive function) the entries in A2, which can be reached with a knight move from the modified entries in A1.
 *   3.2. Reset A1 to 0's, and switch between A1 and A2
 * 4. Summarize the entries in A1 and return the result.
*/

const BOARD_SIZE = 3;
const AVAILABLE_MOVES = [[2,1], [2,-1], [-2,1], [-2, -1], [1,2], [1,-2], [-1,2], [-1,-2]];

function initializeMatrix(matrix, n) {
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }
}

function isInBoard(x, y) {
  return (x >= 0 && x < BOARD_SIZE) && (y >= 0 && y < BOARD_SIZE);
}

function addCoord(coord1, coord2) {
  return [(coord1[0] + coord2[0]), (coord1[1] + coord2[1])];
}

function recursiveFunc(r, c) {
  let validMoves = AVAILABLE_MOVES.map(m => addCoord([r, c], m)).filter(isInBoard);
  validMoves.forEach(m => {
    let probValue = a1[r, c] / 8;
    a2[m[0], m[1]] += probValue;
  })
}

function main(r, c, k) {
  // Step 1 and 2
  let a1 = [];
  let a2 = [];
  initializeMatrix(a1);
  initializeMatrix(a2);
  a1[r][c] = 1;

  // Step 3
  for (let i = 0; i < k; i++) {
    
  }

}