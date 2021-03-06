/*
 * 1. Create 2 matrices A1 and A2
 * 2. Initialize A1 [r][c] = 1. The rest in both matrices with 0
 * 3. Perform k times:
 *   3.1. Update (according the recursive function) the entries in A2, which can be reached with a knight move from the modified entries in A1.
 *   3.2. Reset A1 to 0's, and switch between A1 and A2
 * 4. Summarize the entries in A1 and return the result.
 */

const BOARD_SIZE = 3;
const AVAILABLE_MOVES = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2]
];

/**
 * Initialices the matrix array in 0 with size BOARD_SIZE x BOARD_SIZE.
 *
 * @param {array} matrix
 */
function initializeMatrix(matrix) {
  for (let i = 0; i < BOARD_SIZE; i++) {
    matrix[i] = [];
    for (let j = 0; j < BOARD_SIZE; j++) {
      matrix[i][j] = 0;
    }
  }
}

/**
 * Returns "true" if the coordinates fall inside the board. "false" otherwise.
 *
 * @param {array} coord array with [x, y].
 */
function isInBoard(coord) {
  const x = coord[0];
  const y = coord[1];
  return x >= 0 && x < BOARD_SIZE && (y >= 0 && y < BOARD_SIZE);
}

/**
 * Adds the pseudo-tuple (array of 2) "coord1 + coord2".
 *
 * @param {array} coord1 array representing the coordinates (coord1[0], coord1[1]).
 * @param {array} coord2 array representing the coordinates (coord2[0], coord2[1])
 */
function addCoord(coord1, coord2) {
  return [coord1[0] + coord2[0], coord1[1] + coord2[1]];
}

/**
 * Returns the probability (float) of a chess knight in the square (r, c) of
 * the BOARD_SIZE sized board will remain on said board after k movements.
 *
 * @param {int} r x of the knight's initial coordinates (x, y).
 * @param {int} c y of the knight's initial coordinates (x, y).
 * @param {int} k number of movements to simulate. Should be 0 or posirive.
 */
function main(r, c, k) {
  // Validations
  if (!isInBoard([r, c])) {
    return 0;
  }
  if (k < 0) {
    throw new Error(`Value of k can't be negative. Was k=${k}`);
  }

  // Step 1 and 2
  let a1 = [];
  let a2 = [];
  initializeMatrix(a1);
  initializeMatrix(a2);
  a1[r][c] = 1;

  // Step 3
  for (let i = 0; i < k; i++) {
    for (let x = 0; x < BOARD_SIZE; x++) {
      for (let y = 0; y < BOARD_SIZE; y++) {
        if (a1[x][y] > 0) {
          // console.log(`k=${i} - Calculate from ${x}, ${y}`);
          let validMoves = AVAILABLE_MOVES.map(m => addCoord([x, y], m)).filter(
            c => isInBoard(c)
          );
          // console.log(`r=${x} c=${y} k=${i} - Valid moves: ${validMoves.length}`);
          validMoves.forEach(m => {
            let probValue = a1[x][y] / 8;
            a2[m[0]][m[1]] += probValue;
          });
        }
      }
    }
    a1 = a2;
    a2 = [];
    initializeMatrix(a2);
    // console.log(a1);
    // console.log(a2);
  }

  // Step 4
  let sum = 0;
  for (let x = 0; x < BOARD_SIZE; x++) {
    for (let y = 0; y < BOARD_SIZE; y++) {
      sum += a1[x][y];
    }
  }
  return sum;
}

module.exports = {
  algorithm: main,
  BOARD_SIZE
};
