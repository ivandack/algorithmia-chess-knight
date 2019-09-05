Algorithm Challenge: Chess Knight problem
=====================================

Design an algorithm to calculate the probability that, on a 3x3 board, a chess knight piece will be able to move k times and still remain on the board.


index.js API
------------

index.js exports two elements:
* *algorithm(r, c, k)*: the function to return the probability of a knight piece starting from the square (r, c) will remain on the board for *k* movements.
* *BOARD_SIZE*: The size of the board where the calculations are made. Value = 3.


Tests
-----

To run the unit tests:

```bash
npm install
npm test
```
